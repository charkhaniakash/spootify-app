import { useMutation } from '@apollo/client';
import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router-dom';
import { CREATE_NewSong } from "../graphql/songsMutation";
import { Col, Container, Row } from 'react-bootstrap';





// http://localhost:4000/










const AddArtist = () => {


    const author_name = useRef("")

    const navigate = useNavigate()


    const [addSong] = useMutation(CREATE_NewSong)

    const [value, onChange] = useState(new Date())



    const addingArtist = () => {
        addSong({
            variables: {
                author_name: author_name.current.value,
            },
        }).then(() => {
            navigate("/AddSongs")
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
                                <Form.Control type="text" ref={author_name} placeholder="Enter Song name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <h6 style={{ display: "flex" }}>Date of Birth</h6>
                                <DatePicker className="w-100" onChange={onChange} value={value} />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>

akashh  
ojdfoijeiorhjfih


                            <Button variant="primary" onClick={addingArtist} type="submit">Done</Button>
                            <Button variant="primary" type="submit">cancel</Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>

    );
}

export default AddArtist;



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


