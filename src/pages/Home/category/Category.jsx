import React from 'react';
import {useLoaderData, useParams} from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    useTitle('Home')
    // console.log(categoryNews)
    return (
        <div className='mt-4'>
        
            {
                categoryNews.map(news => <NewsCart key={news._id}
                news = {news}
                
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;