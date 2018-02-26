import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'; 

import './QuoteComponent.css';

function QuoteComponent(props) {

    let showQuote = 
        (<Grid className="QuoteComponent">
            <Row>
                <Col xs={12} sm={2} smOffset={1}>
                    <Image src={require("../../utils/images/ron-approves.jpg")} circle responsive/>
                </Col>
                <Col xs={12} sm={8} className="QuoteComponent-quote">
                    <p>{props.quote}</p>
                </Col>
            </Row>
        </Grid>);

    return (props.quote) ? showQuote : <div></div>;
}

export default QuoteComponent;