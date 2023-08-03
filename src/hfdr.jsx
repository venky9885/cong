import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const RecordHeader = ({ onSort }) => {
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortField(field);
            setSortDirection('asc');
        }

        if (onSort) {
            onSort(field, sortDirection === 'asc' ? 'desc' : 'asc');
        }
    };

    const isSorting = (field, direction) => {
        return sortField === field && sortDirection === direction;
    };

    const renderSortIcon = (field) => {
        const isSortingField = sortField === field;
        const isAscending = sortDirection === 'asc';
        const upColor = isSortingField && isAscending ? 'black' : 'gray';
        const downColor = isSortingField && !isAscending ? 'black' : 'gray';

        return (
            <div className="d-flex align-items-center" onClick={() => handleSort(field)}>
                <span>{field}</span>
                <div className="d-flex flex-column align-items-center ">
                    <FontAwesomeIcon icon={faSortUp} style={{ color: upColor }} />
                    <FontAwesomeIcon icon={faSortDown} style={{ color: downColor }} />
                </div>
            </div>
        );
    };

    return (
        <div className="record-header border-bottom pb-2 mb-3">
            <Container>
                <Row>
                    <Col md={3} className="font-weight-bold">
                        {renderSortIcon('Name')}
                    </Col>
                    <Col md={3} className="font-weight-bold">
                        {renderSortIcon('PPN Number')}
                    </Col>
                    <Col md={3} className="font-weight-bold">
                        {renderSortIcon('Type')}
                    </Col>
                    <Col md={3} className="font-weight-bold">
                        {renderSortIcon('Number')}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecordHeader;
