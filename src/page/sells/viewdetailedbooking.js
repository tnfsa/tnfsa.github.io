import React,{useEffect,useState} from 'react'
import {Card, Container, Spinner} from "react-bootstrap";
import Cookies from 'universal-cookie'


export default function ViewDetailedBooking(props){
    const [loading,setLoading] = useState(true)
    const [data, setData] = useState([])
    const [productName,setProductName] = useState('')
    const cookies = new Cookies()
    const allcookies = cookies.getAll()

    const transactions = async ()=>{
        const url = process.env.REACT_APP_API_ENDPOINT + '/stores/' + allcookies['storeId'] + '/transactions'
        let result =  await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                "Authorization": `Bearer ${allcookies['session']}`
            }
        })
        return await result.json()
    }
    const getName = async()=>{
        const url = process.env.REACT_APP_API_ENDPOINT + '/stores/' + allcookies['storeId'] + '/products'
        let result = await fetch(url,{
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Authorization': `Bearer ${allcookies['session']}`
            }
        })
        const json = await result.json()
        //console.log(json)
        // eslint-disable-next-line

        json.map((item)=>{
            if(item['id'] === props.match.params.itemId){
                window.alert(item['name'])
                return item['name']
            }
        })

    }
    const getInfo = async ()=>{
        try{
            const [json,name] = await Promise.all([transactions(),getName(props.match.params.itemId)])

            let toReturn = []
            // eslint-disable-next-line
            json.map(item =>{
                if(item['id'] === props.match.params.itemId){
                    toReturn.push(item)
                    console.log(item)
                }
            })
            console.log(toReturn)
            setProductName(name)
            setLoading(false)
            setData(toReturn)
        }catch{
            cookies.set('alert','讀取錯誤，正在返回首頁',{path: '/'})
            document.location.href = '/'
        }
    }

    useEffect(()=>{
        return getInfo()
        // eslint-disable-next-line
    },[])

    return(
        <React.Fragment>
            <center>
                <h1>詳細資料</h1>
                <h2>商品名稱：{productName} <Spinner animation={"border"} hidden={!loading}/></h2>
            </center>
            <Container>
                {
                    data ? data.map((item) =>
                        <Card key={item.id}>
                            <Card.Body style={{display: "flex"}}>
                                <div>
                                    <Card.Title>{item.name}</Card.Title>

                                </div>
                            </Card.Body>
                        </Card>
                    ) : <React.Fragment><br/><h2 style={{textAlign: 'center'}}>查無資料</h2></React.Fragment>
                }
            </Container>
        </React.Fragment>
    )
}