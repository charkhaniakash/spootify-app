import { useMutation } from '@apollo/client';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';
import { CREATE_NewSong } from "../graphql/songsMutation";
import { Col, Container, Row } from 'react-bootstrap';


const Addsongs = () => {

    const name = useRef("")
    // const author_name = useRef("")
    // const img = useRef("")
    const date_of_release = useRef("")

    const navigate = useNavigate()


    const [addSong] = useMutation(CREATE_NewSong)



    const add = () => {
        addSong({
            variables: {
                name: name.current.value,
                date_of_release: date_of_release.current.value,
            },
        }).then(() => {
            navigate("/")
        });
    };




    return (
        <>
            <Container className='mt-2'>
                <Row>
                    <Col className='col-md-8 offset-md-2'>
                        <legend>Adding a new songs</legend>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <h6 style={{ display: "flex" }}  >Song name</h6>
                                <Form.Control type="text" ref={name} placeholder="Enter Song name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <h6 style={{ display: "flex" }}> Date Released</h6>
                                <Form.Control type="text" ref={date_of_release} placeholder="Date" />
                            </Form.Group>

                            <div style={{ display: "flex" }}>
                                <Button variant="primary" type='button' onClick={() => { navigate("/add-Artist") }} style={{ marginLeft: 'auto' }}>+ Add Artist</Button>{' '}
                            </div>


                            <Form.Group controlId="formFileSm" className="mb-3">
                                <h6 style={{ display: "flex" }}>Artwork</h6>
                                <Form.Control type="file" size="sm" />
                            </Form.Group>

                            <Button variant="primary" onClick={add} type="submit">Save</Button>
                            <Button variant="primary" type="submit">cancel</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>

    );
}

export default Addsongs;



// import Dropdown from 'react-bootstrap/Dropdown';

// function BasicExample() {
//   return (
//     <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//         Dropdown Button
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default BasicExample;


