import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className={"p-3 mb-2 bg-dark text-white"}>
                    <Container>
                        <br />
                        <Row>
                            <Col>
                                <Link to="/privacy">隱私權聲明</Link>、
                                <Link to="/COC">使用者使用條款</Link>
                            </Col>
                            <Col>
                                關於我們：<br />
                                <a href='https://sivir.pw' rel="noreferrer noopener" target='_blank'>Alias722</a>、
                                <a href='https://hsuan.app/' rel="noreferrer noopener" target='_blank'>Hsuan1117</a>、
                                <a href='https://neodoggy.github.io/' rel="noreferrer noopener" target='_blank'>Neodoggy</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer