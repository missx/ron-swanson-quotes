import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'; 

import './QuoteComponent.css';

function QuoteComponent(props) {
    return (
        <Grid className="QuoteComponent">
            <Row>
                <Col xs={12} sm={2} >
                    <Image src="../../utils/images/ron-approves.jpg" circle responsive/>
                </Col>
                <Col xs={12} sm={10} >
                    <p>{props.quote}</p>
                </Col>                
            </Row>
        </Grid>
    );
}

export default QuoteComponent;