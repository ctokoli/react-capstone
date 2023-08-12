import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <>
      <Container>
        <Button variant="danger" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          <h3>Loading...</h3>
        </Button>
      </Container>
    </>
  );
}

export default LoadingSpinner;
