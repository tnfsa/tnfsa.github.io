import React, {useEffect, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import {
    Box,
    ButtonBase,
    Grid,
    IconButton,
    LinearProgress,
    makeStyles,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import SearchIcon from "@material-ui/icons/Search";
import {API} from "../../helpers/API";
import {InfoOutlined} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";

const api = new API();
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    miniIcon: {
        width: 60,
        height: 60,
    }
}));

function Result(props) {
    // props.product
    /*const style = {
        height: 32,
    };*/
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Box fontSize={1} color={green} hidden={parseFloat(props.product.weight) <= 1.0}>
                                    <InfoOutlined style={{fontSize: 12}}/>
                                    &nbsp;廣告
                                </Box>
                                <Typography gutterBottom variant="h6">
                                    {props?.product?.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {props?.product?.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {props?.product?.store_name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating name="read-only" value={parseFloat(props.product.ratings_avg)} readOnly/>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">{props.product.price}元</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt={props.product.name} src={props.product.image}/>
                        </ButtonBase>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default function Query() {
    const isInitState = useRef(true);
    const [term, setTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    let location = useLocation();
    const getProductQueryResult = React.useCallback((q) => {
        setLoading(true)
        let _term;
        if (typeof q === 'string') {
            _term = q
        } else {
            _term = term
        }
        api.call('/products/query', {
            method: "POST",
            body: {
                term: _term
            }
        }, r => {
            setProducts(r)
            setLoading(false)
        })
    }, [term])
    useEffect(() => {
        if (isInitState.current) {
            isInitState.current = false
            window.scrollTo({top: 0, behavior: 'smooth'})
            let searchTerm = (new URLSearchParams(location.search)).get('q');
            setTerm(searchTerm)
            getProductQueryResult(searchTerm);
        }
    }, [location.search, getProductQueryResult])

    function handleTermChange(e) {
        setTerm(e.target.value)
    }

    let resultElems = products.map((product, index) => {
        return (
            <div key={product.id}>
                <Result product={product}/>
                <br/>
            </div>
        )
    })
    return (
        <React.Fragment>
            <LinearProgress hidden={!loading}/>
            <h1 style={{textAlign: 'center'}}>搜尋結果</h1>
            <Container>
                <TextField
                    id="filled-full-width"
                    label="搜尋食物"
                    style={{margin: 8}}
                    placeholder="想吃的東西"
                    helperText="想吃的東西"
                    fullWidth
                    value={term}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleTermChange}
                    variant="filled"
                    InputProps={{
                        endAdornment:
                            (<IconButton onClick={getProductQueryResult}>
                                <SearchIcon/>
                            </IconButton>)
                    }}
                />
                <h5 style={{textAlign: 'center'}} hidden={loading || products.length !== 0}>目前無相關資料</h5>
                {resultElems}
            </Container>
        </React.Fragment>
    )
}