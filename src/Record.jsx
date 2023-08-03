import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './eachcomp.css';
const Record = ({ name, ppnNumber, type, number }) => {
    return (
        <div className="record border border-grey p-1" id='eachcardintrans'>
            <Container>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>Name:</Col>
                            <Col md={6}>{name}</Col>
                        </Row>
                        <Row>
                            <Col md={6}>PPN Number:</Col>
                            <Col md={6}>{ppnNumber}</Col>
                        </Row>
                    </Col>

                    <Col md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>${type}</Col>

                    <Col md={3} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{number}</Col>

                </Row>
            </Container>
        </div>
    );
};

export default Record;
