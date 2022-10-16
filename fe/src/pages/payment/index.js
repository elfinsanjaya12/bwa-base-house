import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <section class='hero-banner py-5 my-5'>
        <div class='container'>
          <div class='row d-flex align-items-center'>
            <div class='col-lg-6 col-6'>
              <h1>Payment</h1>
            </div>
          </div>
          <div class='row mt-4'>
            <div class='col-lg-4'>
              <img
                class='img-fluid'
                src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                alt=''
              />
            </div>
            <div class='col-lg-4'>
              <h3>Modern Apartment</h3>
              <p class='mt-4'>
                A thousand houses that ready for you not only <br /> living, but
                dreaming and building future.
              </p>
              <h5>Booking Payment</h5>
              <div class='d-flex justify-content-between'>
                <p>Apaderma 309sqft</p>
                <p>$89,000</p>
              </div>
              <div class='d-flex justify-content-between'>
                <p>Insurance</p>
                <p>$11,000</p>
              </div>
              <div class='d-flex justify-content-between'>
                <p>Tax</p>
                <p>$22</p>
              </div>
              <div class='d-flex justify-content-between'>
                <p>Total</p>
                <p>$543,000</p>
              </div>
              <h5>Payment to</h5>
              <div class='d-flex justify-content-between'>
                <p>Bank Name</p>
                <p>Angga Capital</p>
              </div>
              <div class='d-flex justify-content-between'>
                <p>Account</p>
                <p>22081996</p>
              </div>
              <p>
                <Button onClick={() => navigate(`/payment/1`)}>
                  Confirm Book Payment
                </Button>
              </p>
              <p>
                <Button onClick={() => navigate(`/chat/1`)}>
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
