import React from 'react'
import { InputGroup, Form, Table } from 'react-bootstrap'


function Assembly() {
  return (
    <div>
      <div className='d-flex'>
        <div className='d-flex mt-5'>
          <i class="fa-regular fa-circle-left fa-2x me-3"></i>
          <h4><b>Categories</b></h4>
        </div>
        <div className='d-flex ms-auto mt-5 '>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
            <Form.Control
              placeholder="Search Categories"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </div>
      <div >
        <Table className='bg-info' hover>
          <thead>
            <tr>
              <th>Sl No</th>
              <th> Name</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>Thornton</td>
              <td><i class="fa-solid fa-right-long fa-lg" style={{ color: ' #2d69d2' }}></i></td>
            </tr>


          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Assembly