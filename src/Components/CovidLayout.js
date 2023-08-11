import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import leftArrow from '../images/left-arrow-tick.png';

const NavigationLayout = () => (
  <>
    <Navbar bg="back">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <img src={leftArrow} alt="arrow" />
          </NavLink>
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>
);

export default NavigationLayout;
