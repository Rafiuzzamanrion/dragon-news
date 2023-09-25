import React, {createContext, useContext, useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false);

  const handleRegister = event => {

    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;


    createUser(email,password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const handleAccepted = event =>{
    setAccepted(event.target.checked)
  }
    return (
        <Container className='mx-auto w-25'>
        <h3>Please Register</h3>
         <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' required placeholder="Enter your name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' required placeholder="Enter photo URL" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter your email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link className='text-decoration-none' to ='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>
      <Button disabled={!accepted} variant="primary" type="submit">
        Register
      </Button>
      <br />
      <Form.Text className="text-secondary">
    Already have an account?
         <Link className='text-decoration-none' to='/login'> login</Link>
        </Form.Text>
    <Form.Text className="text-success">
         
        </Form.Text>
    <Form.Text className="text-danger">
         
        </Form.Text>
    </Form>
   
       </Container>
    );
};

export default Register;