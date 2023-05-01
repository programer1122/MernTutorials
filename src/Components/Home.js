/** @format */

import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Home = () => {
  return (
    <>
      <div className='add-to-cart col-12 p-5' style={{ textAlign: "right" }}>
        <img
          src='https://tse1.mm.bing.net/th?id=OIP.YijOdbshW8hYZRSJyJ_ThwHaHa&pid=Api&P=0'
          alt=''
          width={"5%"}
        />
      </div>

      <center>
        <div className='main ' style={{ marginTop: "2rem" }}>
          <div className='card' style={{ width: "20rem" }}>
            <img
              className='card-img-top '
              src='https://tse4.mm.bing.net/th?id=OIP.uxzf-bzQCnmneRemSGtg9AHaHa&pid=Api&P=0'
              alt='Card image cap'
            />
            <div className='card-body'>
              <h5 className='card-title'>Iphone 5s</h5>
              <p className='card-text'>100$</p>
              <a href='#' className='btn btn-danger'>
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Home;
