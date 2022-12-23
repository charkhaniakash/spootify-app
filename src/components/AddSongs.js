<<<<<<< HEAD
import { useMutation } from '@apollo/client';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {CREATE_NewSong} from "../graphql/songMutation";


const AddSongs=()=>{


    const name = useRef("")
    // const author_name = useRef("")
    // const img = useRef("")
    const date_of_release = useRef("")

    const navigate = useNavigate();


    const[addSong] =  useMutation(CREATE_NewSong)



    const add=()=>{
        addSong({
            variables:{
                name: name.current.value,
                date_of_release: date_of_release.current.value,
              },
        }).then(()=>{
            navigate("/")
        });
    };




    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Song name</Form.Label>
                <Form.Control type="text" ref={name} placeholder="Enter Song name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Date Released</Form.Label>
                <Form.Control type="text" ref={date_of_release} placeholder="Date" />
            </Form.Group>


            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Art Work</Form.Label>
                <Form.Control type="file" size="sm" />
            </Form.Group>


            <Button variant="primary" onClick={add} type="submit">Save</Button>
            <Button variant="primary" type="submit">cancel</Button>
        </Form>
    );
}

export default AddSongs;


=======
import { useMutation } from '@apollo/client';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {CREATE_NewSong} from "../graphql/songMutation";


const AddSongs=()=>{


    const name = useRef("")
    // const author_name = useRef("")
    // const img = useRef("")
    const date_of_release = useRef("")

    const navigate = useNavigate();


    const[addSong] =  useMutation(CREATE_NewSong)



    const add=()=>{
        addSong({
            variables:{
                name: name.current.value,
                date_of_release: date_of_release.current.value,
              },
        }).then(()=>{
            navigate("/")
        });
    };




    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Song name</Form.Label>
                <Form.Control type="text" ref={name} placeholder="Enter Song name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Date Released</Form.Label>
                <Form.Control type="text" ref={date_of_release} placeholder="Date" />
            </Form.Group>


            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Art Work</Form.Label>
                <Form.Control type="file" size="sm" />
            </Form.Group>


            <Button variant="primary" onClick={add} type="submit">Save</Button>
            <Button variant="primary" type="submit">cancel</Button>
        </Form>
    );
}

export default AddSongs;


>>>>>>> 079aac4d9e1694a933dcda10df51f12a51094da0
