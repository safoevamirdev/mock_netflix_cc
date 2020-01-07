import React from 'react'
import { Col } from 'react-bootstrap'

function  Titles(props) {
    let title = props.title
    return(
        <Col>
            <p>
                {title}
            </p>
        </Col>
    )
}

export default Titles