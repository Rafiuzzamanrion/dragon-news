import React, {createContext, useContext, useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false);
  useTitle('Register')
 

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
        <Container className='mx-auto w-25 mt-2 bg-body-secondary p-5 rounded'>
        <h3>Please Register</h3>
         <Form onSubmit={handleRegister}>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' required placeholder="Enter your name" />
       
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo' required placeholder="Enter photo URL" />
       
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter your email" />
       
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' required placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" name='accept' label={<>Accept <Link className='text-decoration-none text-primary fs-6 fw-semibold' to ='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>
      <Button className='w-100 bg-dark my-1' disabled={!accepted} variant="primary" type="submit">
        Register
      </Button>
      <br />
      <Form.Text className="text-black">
    Already have an account?
         <Link className='text-decoration-none text-danger fw-bold' to='/login'> login</Link>
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