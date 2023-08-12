import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinner() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center">
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
        </div>

      </Container>
    </>
  );
}

export default LoadingSpinner;
