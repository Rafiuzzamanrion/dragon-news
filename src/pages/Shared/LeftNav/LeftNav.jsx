import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories] = useState([]);

useEffect(()=>{
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error=>{
        console.error(error);
    })
},[])

    return (
        <div className='mt-4'>
          <h4>All category</h4>
         <div className='py-4'>
         {
            categories.map(category => <p key={category.id}>
               <Link to={`/category/${category.id}`} className='text-decoration-none text-dark-emphasis'> {category.name}</Link>

            </p>)
          }
         </div>
        </div>
    );
};

export default LeftNav;