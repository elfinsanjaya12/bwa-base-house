import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Card({ data }) {
  const navigate = useNavigate();
  return (
    <section className='featured my-5'>
      <Container className='container'>
        <Row>
          {data.map((data) => (
            <Col md={3} onClick={() => navigate(`/detail/${data.id}`)}>
              <img src={data.image} alt='' className='img-fluid' />
              <h4 className='mt-3'>{data.title}</h4>
              <p>$ {data.price}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
