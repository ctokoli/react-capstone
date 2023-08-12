/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';
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
        <Navbar>
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faGear} />
        </Navbar>
      </Container>
    </Navbar>
  </>
);

export default NavigationLayout;
