import React from 'react';
import './Home.css';
import bookpg from '../../assets/img/book.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Container'>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Book Shelf</h1>
          <p>Arrange your books the way you like...</p>
          
          <img src={bookpg} alt='profile' />
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;