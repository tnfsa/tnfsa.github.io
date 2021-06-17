import React, {useEffect, useState} from 'react'
import {Button, Card,Container} from "react-bootstrap";

function NewOption(){
    // eslint-disable-next-line no-unused-vars
    const [array,setArray] = useState([])
    const [data,setData] = useState([])
    //const inputOption = document.getElementById('inputOption')

    const deleteFile = (node) => {
        window.alert(node)
    }
    /*const newOption = () =>{
        if(inputOption.value !== ''){
            if(array.length === 0){
                setArray([inputOption.value])
            }else{
                let temp = array
                temp.push(inputOption.value)
                setArray(temp)
            }
            inputOption.value = ''
        }else{
            window.alert('輸入不得為空')
        }
    }*/


    useEffect(()=>{
        const getData = ()=>{
            setData(array)
        }
        getData()
    },[array])

    return(
        <React.Fragment>
            <h1 style={{textAlign: 'center'}}>選項設定</h1>
            <Container>
                <form >
                    <div className="form-group">
                        <label>新選項</label>
                        <input id="inputOption" type="text" className="form-control" placeholder="選項名" />
                    </div>
                    <Button className="btn btn-primary btn-block">新增</Button>
                </form>

                <br />
                {
                    data.map((name,index) => {
                        return(
                            <Card key={name}>
                                <Card.Body style={{display:"flex"}}>
                                    <div>
                                        <Card.Title>{name}</Card.Title>
                                    </div>
                                    <div style={{marginLeft:"auto"}}>
                                        <Button variant="primary" onClick={() => deleteFile(index)}>刪除</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                    )})
                }
            </Container>


        </React.Fragment>
    )
}

export default NewOption