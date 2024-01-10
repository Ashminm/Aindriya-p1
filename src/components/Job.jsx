import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Job() {
    return (
        <div>
             <h4 className='mt-5 ms-4'><b>Job</b></h4>


            <div style={{ backgroundColor: '#edf2ef', margin: '20px', padding: '20px' }}>
                <Row>
                    <Col sm={12} md={6} lg={9}>
                        <p> <span style={{ color: '#bfc9c2' }}> Job Name &nbsp; </span> Test project 1 </p>
                        <p> <span style={{ color: '#bfc9c2' }}> Job Number &nbsp; </span> #ABV3265413 </p>
                        <p> <span style={{ color: '#bfc9c2' }}> Unit &nbsp; </span>  <Button variant="primary" size="sm">
                            Metric
                        </Button>{' '}</p>

                        <p> <span style={{ color: '#bfc9c2' }}> Difficulty level</span>  <DropdownButton id="dropdown-basic-button " size='sm' title="Difficulty level">
                            <Dropdown.Item href="#/action-1">High</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Low</Dropdown.Item>
                        </DropdownButton> </p>
                    </Col>

                    <Col sm={12} md={6} lg={3}>
                       <p><Button variant="primary" size="sm">
                            Job details
                        </Button>{' '}</p>

                        <p><Button variant="primary" size="sm">
                             button 2
                        </Button>{' '} </p>

                        <Button variant="secondary" size="sm">
                             button 3
                        </Button>{' '}
                    </Col>



                </Row>

            </div>
           

        


        </div>
    )
}

export default Job