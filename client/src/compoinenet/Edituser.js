import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateuser } from '../redux/userslice';



const Edituser = ({ping,setping,user}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name: user?.name,
    lastname:user?.lastname,
    email: user?.email,
    password: user?.password,


  })
  const dispatch=useDispatch();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
            user name
        </Form.Label>
        <Form.Control type="text" placeholder={user?.name} onChange={(e)=>
            setedited({...edited, name: e.target.value})
        } />
        <Form.Label>
            user last name
        </Form.Label>
        <Form.Control type="text" placeholder={user?.lastname} onChange={(e)=>
            setedited({...edited, lastname: e.target.value})
        } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
            user email
        </Form.Label>
        <Form.Control type="text" placeholder={user?.email} onChange={(e)=>
             setedited({...edited, email: e.target.value})
        } />

      </Form.Group>
      <Form.Label>
            user password
        </Form.Label>
        <Form.Control type="password" placeholder={user?.password} onChange={(e)=>
            setedited({...edited, password: e.target.value})
        } />

      
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(updateuser({
            id: user?._id,edited
          }));setping(!ping)}}     
            
          >
           edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edituser