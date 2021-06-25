import React, {useEffect, useRef, useState} from 'react'
//import {useLocation} from 'react-router-dom';
import {Box, Button, CircularProgress, Grid, LinearProgress, Paper, TextField, Typography} from "@material-ui/core";
import {API} from "../../helpers/API";
import Swal from "sweetalert2";
import {Alert} from "@material-ui/lab";

const api = new API();
const LEVEL = [
    // 訂一餐 100積分
    // 填資料 500積分
    // 預估 3000積分 門檻
    {
        min: 0,
        max: 100,
        name: "一般會員",
        color: "#eddcad"
    },
    {
        min: 101,
        max: 249,
        name: "綠星會員",
        color: "#44f2a4"
    },
    {
        min: 250,
        max: 599,
        name: "綠鑽會員",
        color: "#b1f0d4"
    },
    {
        min: 600,
        max: 1000,
        name: "藍星會員",
        color: "#4a98ff"
    },
    {
        min: 1001,
        max: 1999,
        name: "藍鑽會員",
        color: "#aec4e6"
    },
    {
        min: 2000,
        max: 3449,
        name: "銀星會員",
        color: "#d9d9d9"
    },
    {
        min: 3500,
        max: 9999,
        name: "金星會員",
        color: "#ece00a"
    }
]
export default function Profile() {
    const [loading, setLoading] = useState(true)
    const [userLevel, setUserLevel] = useState(0)
    const [phoneErrorText, setPhoneErrorText] = useState('');
    const phoneInputRef = useRef(HTMLInputElement);
    const TWphoneRegex = /^09\d{2}-?\d{3}-?\d{3}$/;
    //let location = useLocation();

    const callFunction = async () => {
        setLoading(true)
        await api.call('/user/level', {}, (r) => setUserLevel(r.level))
        await api.call('/user/data', {}, (r) => {
            phoneInputRef.current.value = r.phone;
            phoneInputRef.current.value += 1;

            setLoading(false)
        })

    }

    useEffect(() => {
        callFunction().then()
    }, [])

    function CircularProgressWithLabel(props) {
        return (
            <Box position="relative" display="inline-flex"
                 border={1} className={"m-3 pt-2"} borderRadius={5}>
                <CircularProgress variant="determinate"
                                  style={{color: props.color}}
                                  value={((props.credit - props.levelMin) / (props.levelMax - props.levelMin)) * 100}
                                  size={props.size || '8rem'}/>
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                >
                    <Typography variant="caption" component="div" color="textPrimary">
                        {`${props.levelName}`}
                    </Typography>

                    <Typography variant="caption" component="div" color="textSecondary">
                        {`${Math.round(props.credit)}/${Math.round(props.levelMax)}`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    function makeLevel(level) {
        let elem;
        LEVEL.every(function (LEV, index) {
            if (LEV.min <= level && level <= LEV.max) {
                elem = (
                    <CircularProgressWithLabel credit={level} levelMin={LEV.min} levelMax={LEV.max} levelName={LEV.name}
                                               color={LEV.color}/>
                );
                return false
            } else {
                return true
            }
        })
        return elem;
    }

    function updateUserData() {
        if (!phoneInputRef.current.value.match(TWphoneRegex)) {
            return setPhoneErrorText('請輸入正確的手機號碼')
        }

        api.call('/user/data', {
            method: "POST",
            body: {
                phone: phoneInputRef.current.value
            }
        }, (r) => {
            if (r.levelUp) {
                Swal.fire({
                    title: '成功!',
                    text: '填寫完畢，已贈送會員積分',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
            if (r.status === 'success') {
                setPhoneErrorText('')
            }
            callFunction().then()
        })
    }

    return (
        <React.Fragment>
            <LinearProgress hidden={!loading}/>

            <h1 style={{textAlign: 'center'}}>個人檔案</h1>

            <Grid container>
                <Grid item xs={12}>
                    <Paper elevation={3} className={'m-3 p-3'}>
                        {makeLevel(userLevel)}
                    </Paper>
                    <Paper elevation={3} className={'m-3 p-3'}>
                        <Alert severity="info">補齊會員資料就可以獲得會員積分獎勵喔~</Alert>
                        <TextField className={'m-3'} label={'您的手機'} inputRef={phoneInputRef}
                                   error={phoneErrorText !== ''} helperText={phoneErrorText}
                                   variant={'standard'} InputLabelProps={{shrink: true}}/>
                        <br/>
                        <Button className={"m-3"} onClick={updateUserData} variant="contained"
                                color="primary">更新</Button>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}