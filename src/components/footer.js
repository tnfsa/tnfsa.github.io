import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import config from "../config.json";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" style={{"clear": "both"}}>
                <br/>
                <div className={"p-3 mb-2 bg-dark text-white "}>
                    <Container>
                                <center>version: {config['version']}</center>
		<br />
                        <Row>
                            <Col>
                                <Link to="/privacy">隱私權聲明</Link><br/>
                                <Link to="/COC">行為準則</Link><br/>
                                <Link to="/feedback">意見反饋</Link>
                            </Col>
                            <Col>
                                關於我們：<br />
                                <a href='https://sivir.pw' rel="noreferrer noopener" target='_blank'>Milliax</a>、
                                <a href='https://hsuan.app/' rel="noreferrer noopener" target='_blank'>Hsuan1117</a>
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Footer
