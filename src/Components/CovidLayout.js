import { NavLink, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavigationLayout = () => {
  const country = useParams();
  console.log(country);
  return (
    <>
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><NavLink to="/">Navbar</NavLink></Navbar.Brand>
          <Form data-bs-theme="light">
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Search by Country"
                />
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationLayout;
