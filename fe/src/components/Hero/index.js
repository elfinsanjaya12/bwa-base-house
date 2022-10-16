import React from 'react';
import { Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <section className='hero-banner py-5 my-5'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-lg-6 col-6 align-middle'>
            <h1>
              Where People Get <br />
              Their New Best House
            </h1>
            <p className='mt-4'>
              A thousand houses that ready for you not only <br />
              living, but dreaming and building future.
            </p>
            <p className='mt-4'>
              <Button>Explore Houses</Button>
            </p>
          </div>
          <div className='col-lg-6 col-6'>
            <img
              src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80'
              alt='img-fluid'
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
