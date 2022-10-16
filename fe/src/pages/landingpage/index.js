import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card';
import Hero from '../../components/Hero';

export default function LandingPage() {
  const data = [
    {
      id: 1,
      title: 'Apartement Moderna',
      price: 12345,
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: { id: 1, name: 'City' },
    },
    {
      id: 2,
      title: 'Apartement Moderna',
      price: 12345,
      image:
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: { id: 1, name: 'City' },
    },
    {
      id: 3,
      title: 'Apartement Moderna',
      price: 12345,
      image:
        'https://images.unsplash.com/photo-1506126279646-a697353d3166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: { id: 1, name: 'City' },
    },
    {
      id: 4,
      title: 'Apartement Moderna',
      price: 12345,
      image:
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      category: { id: 1, name: 'City' },
    },
  ];
  return (
    <Container>
      <Hero />
      <Card data={data} />
    </Container>
  );
}
