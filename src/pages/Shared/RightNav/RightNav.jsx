import React from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='my-4'>
            <h4 className='mb-4'>Login with</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub />  Login with Github</Button>
      <div>
        <h4 className='mt-4'>Finds us on</h4>
      <ListGroup className='my-4'>
         <ListGroup.Item><Link className='text-decoration-none'><FaFacebook/> Facebook</Link></ListGroup.Item>
         <ListGroup.Item><Link className='text-decoration-none'><FaTwitter/> Twitter</Link></ListGroup.Item>
         <ListGroup.Item><Link className='text-decoration-none'><FaInstagram/> Instagram</Link></ListGroup.Item>
      
         
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