import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavLink from '../NavLink';
import { useNavigate } from 'react-router-dom';

export default function BNavBar() {
  const navigate = useNavigate();

  const data = [
    { id: 1, name: 'City' },
    { id: 2, name: 'Village' },
    { id: 3, name: 'Countryside' },
    { id: 4, name: 'Apartment' },
  ];
  return (
    <Navbar bg='light' variant='light'>
      <Container>
        <Navbar.Brand onClick={() => navigate('/')}>Base House</Navbar.Brand>
        <Nav className='me-auto'>
          <NavLink action={() => navigate('/feature')}>Feature</NavLink>
          <NavDropdown title='Categories' id='collasible-nav-dropdown'>
            {data.map((data) => (
              <NavDropdown.Item
                key={data.id}
                onClick={() => navigate(`/feature?categories=${data.name}`)}
              >
                {data.name}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavLink action={() => navigate('/showcase')}>Showcase</NavLink>
          <NavLink action={() => navigate('/benefits')}>Benefits</NavLink>
          <NavLink action={() => navigate('/ask-loan')}>Ask Loan</NavLink>
        </Nav>
        <Nav className='ms-auto'>
          <Button>Sign In</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
