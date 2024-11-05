import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/userslice';


const Adduser = ({ping,setping}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newuser, setnewuser] = useState({
    name: "",
    lastname:"",
    email: "",
    password: "",


  })
  const dispatch=useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      add user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
            user name
        </Form.Label>
        <Form.Control type="text" placeholder="Enter user name" onChange={(e)=>
            setnewuser({...newuser, name: e.target.value})
        } />
        <Form.Label>
            user last name
        </Form.Label>
        <Form.Control type="text" placeholder="Enter user last name" onChange={(e)=>
            setnewuser({...newuser, lastname: e.target.value})
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
            user email
        </Form.Label>
        <Form.Control type="text" placeholder="Enter user email" onChange={(e)=>
             setnewuser({...newuser, email: e.target.value})
        } />

      </Form.Group>
      <Form.Label>
            user password
        </Form.Label>
        <Form.Control type="password" placeholder="Enter user password" onChange={(e)=>
            setnewuser({...newuser, password: e.target.value})
        } />

      
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(adduser(newuser));setping(!ping)}}     
            
          >
           add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Adduser