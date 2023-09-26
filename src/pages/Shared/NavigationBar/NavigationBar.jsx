import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import {AuthContext} from '../../../provider/AuthProvider';
import {useContext} from 'react';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut = ()=>{
      logOut()
      .then(()=>{

      })
      .catch(error=>console.log(error))
    }

    return (
       <Container>
         <Navbar collapseOnSelect expand="lg" className="bg-body-secondary mt-4 rounded ">
      <Container className=''>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
              <Link className='text-decoration-none text-secondary mx-4 fw-semibold' to='/'>Home</Link>
            <Link className='text-decoration-none text-secondary fw-semibold mx-4' to="#pricing">About</Link>
            <Link className='text-decoration-none text-secondary fw-semibold mx-4' to="#pricing">Career</Link>
          </Nav>
          <Nav>
            {user  && <FaUserCircle className='text-dark' style={{fontSize:'2rem'}}></FaUserCircle>
           }
          
            {user?
              <Button className='ms-4 bg-dark text-white' onClick={handleLogOut} variant="secondary">Log out</Button>:
             <Link className='ms-4' to="/login"> <Button className='bg-dark text-white' variant="secondary">Login</Button></Link>}
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       </Container>
    );
};

export default NavigationBar;