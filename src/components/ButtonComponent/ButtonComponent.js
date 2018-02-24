import React from 'react';
import { Button } from 'react-bootstrap';

import './ButtonComponent.css';

function ButtonComponent(props) {
    return (
        <Button bsStyle="default" bsSize="large" className="ButtonComponent">
            Get Your Quote!
        </Button>
    );
}

export default ButtonComponent;