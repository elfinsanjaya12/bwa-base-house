import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function DetailPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <section class='hero-banner py-5 my-5'>
        <div class='container'>
          <div class='row d-flex align-items-center'>
            <div class='col-lg-6 col-6'>
              <h1>Payment</h1>
              <p class='mt-4'>
                A thousand houses that ready for you not only <br /> living, but
                dreaming and building future.
              </p>
            </div>
          </div>
          <div class='row mt-5'>
            <div class='col-lg-8 pe-5'>
              <img
                src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                class='img-fluid'
                alt=''
              />
              <div class='row mt-4'>
                <div class='col-3'>
                  <img
                    src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    class='img-fluid'
                    alt=''
                  />
                </div>
                <div class='col-3'>
                  <img
                    src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    class='img-fluid'
                    alt=''
                  />
                </div>
                <div class='col-3'>
                  <img
                    src='https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80'
                    class='img-fluid'
                    alt=''
                  />
                </div>
                <div class='col-3'>
                  <img
                    src='https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    class='img-fluid'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div class='col-lg-4'>
              <h3>Save Your Nest</h3>
              <ul>
                <li>Swimming Pool</li>
                <li>Swimming Pool</li>
                <li>Swimming Pool</li>
                <li>Swimming Pool</li>
              </ul>
              <h5>$50,000 booking fee</h5>
              <p>
                <Button onClick={() => navigate(`/payment/1`)}>
                  Book Payment
                </Button>
              </p>
              <p>
                <Button onClick={() => navigate('/chat/1')}>
                  Talk to Customer Service
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
