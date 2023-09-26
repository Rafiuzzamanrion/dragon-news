import React, {useContext} from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
import {AuthContext} from '../../../provider/AuthProvider';

const RightNav = () => {
  const {googleRegister} = useContext(AuthContext);

  const handleGoogleRegister = ()=>{
    googleRegister()
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser)
    })
    .catch(error =>{
      console.log(error);
    })
  }
    return (
        <div className='my-4'>
            <h4 className='mb-4'>Login with</h4>
            <Button onClick={handleGoogleRegister} className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub />  Login with Github</Button>
      <div>
        <h4 className='mt-4'>Finds us on</h4>
      <ListGroup className='my-4'>
         <ListGroup.Item><Link className='text-decoration-none text-dark-emphasis'><FaFacebook/> Facebook</Link></ListGroup.Item>
         <ListGroup.Item><Link className='text-decoration-none text-dark-emphasis'><FaTwitter/> Twitter</Link></ListGroup.Item>
         <ListGroup.Item><Link className='text-decoration-none text-dark-emphasis'><FaInstagram/> Instagram</Link></ListGroup.Item>
      
         
    </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
        </div>
    );
};

export default RightNav;