import React, { Fragment } from 'react'
import { Button, Table, Nav, Navbar, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Songs from './Songs'

const Home = () => {
  return (
    <Fragment>
      <div className='mt-3'>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
        <div style={{ display: "flex" }}>
          <h2>Top 10 songs</h2>
          <Button variant="primary" style={{ marginLeft: 'auto' }}>+ Add Songs</Button>{' '}
        </div>
      </div>


      {/* this is list of songs section */}
      <div className='mt-4'>
        <Table bordered hover size="sm" class="col-sm">
          <thead>
            <tr>
              <th>ArtWork</th>
              <th>Songs</th>
              <th>Date of Release</th>
              <th>Artists</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {Songs.map((item) => {
              return (
                <tr>
                  <td>
                    <img src={item.img} width={171}
                      height={180}
                      alt="150x150"
                    />
                  </td>
                  <td>{item.musicName}</td>
                  <td>{item.date_of_release}</td>
                  <td>{item.author_name}</td>
                  {/* <td></td> */}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>



      {/* Top artist title */}

      <h2 className='mt-5' style={{ display: "flex" }}>Top 10 Artists</h2>




      {/* Top 10 Artists */}
      <div className='mt-6'>
        <Table bordered hover size="sm" class="col-sm">
          <thead>
            <tr>
              <th>Artists</th>
              <th>Date of Birth</th>
              <th>Songs</th>
            </tr>
          </thead>
          <tbody>
            {Songs.map((item) => {
              return (
                <tr>
                  <td>{item.author_name}</td>
                  <td>{item.date_of_birth}</td>
                  <td>{item.other_songs}</td>
                  {/* <td></td> */}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>







    </Fragment>
  )
}

export default Home
