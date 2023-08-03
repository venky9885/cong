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
                        <Row style={{ alignItems: 'flex-start', display: 'flex' }}>
                            <Col md={6}>Name:</Col>
                            <Col md={6}>{name}</Col>
                        </Row>
                        <Row >
                            <Col md={6} style={{}}>PPN Number:</Col>
                            <Col md={6}>{ppnNumber}</Col>
                        </Row>
                    </Col>
                    <Col md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '0.8rem' }}>${type}</Col>
                    <Col md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.8rem' }}>{number}</Col>

                </Row>
            </Container>
        </div>
    );
};

export default Record;
