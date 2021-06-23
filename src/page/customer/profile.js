import React, {useEffect, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom';
import {Box, CircularProgress, Grid, LinearProgress, Paper, Typography} from "@material-ui/core";
import {API} from "../../helpers/API";

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
    const initState = useRef(true)
    const [loading, setLoading] = useState(false)
    const [userLevel, setUserLevel] = useState(0)
    let location = useLocation();
    useEffect(async () => {
        if (initState.current) {
            setLoading(true)
            await api.call('/user/level', {}, (r) => setUserLevel(r.level))
            setLoading(false)

            initState.current = false
        }
    })

    function CircularProgressWithLabel(props) {
        return (
            <Box position="relative" display="inline-flex">
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
                    //<CircularProgressWithLabel credit={level} levelMax={LEV.max}/>
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

    return (
        <React.Fragment>
            <LinearProgress hidden={!loading}/>
            <h1 style={{textAlign: 'center'}}>個人檔案</h1>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <Paper elevation={3} className={['m-3', 'p-3']}>
                        {makeLevel(userLevel)}
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}