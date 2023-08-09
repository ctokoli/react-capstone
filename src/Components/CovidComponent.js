import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { getCovidData } from '../Redux/covidSlice';

const CovidComponent = () => {
  const data = useSelector((state) => state.convidData.data);
  const itemsToRender = data.slice(0, 10);
  console.log(itemsToRender);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidData());
    }
    console.log('i fire once');
  });

  return (

    <>
      <Container>
        {itemsToRender.map((item) => (
          <div key={item.Country_text} className="card">
            <div className="active"><h2>{item.Country_text}</h2></div>
            <div className="inactive">
              <h2>
                <Link to={`/${item.Country_text}`}>{item.Country_text}</Link>
              </h2>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default CovidComponent;
