import React from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <div className='bg-body-secondary p-4 mt-5 rounded'>
            <h2>Term and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque dignissimos qui quibusdam architecto quod repudiandae ipsum voluptate maiores harum mollitia temporibus nihil, dolor placeat dicta voluptatum error perspiciatis reprehenderit cumque aperiam et praesentium aliquid. Alias tempora unde qui asperiores, ipsam modi fugiat ipsa repudiandae quos, ducimus beatae earum similique?</p>
            <p>Go back to <Link className='text-decoration-none fw-bold text-danger' to ='/register'>Register</Link></p>
        </div>
        </Container>
    );
};

export default Terms;