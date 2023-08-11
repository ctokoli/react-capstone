/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { getCovidData } from '../Redux/covidSlice';

const CovidComponent = () => {
  const data = useSelector((state) => state.convidData.data);
  console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidData());
    }
  });

  return (

    <>
      <Container>
        <h2>COVID-19 Statistics Data</h2>
        <div className="grid">
          {data.map((item) => (
            <Link to={`/${item.country}`} key={item.country}>
              <div className="card-item">
                <div className="active-data">
                  <div className="top">
                    <h3>
                      {item.country}
                    </h3>
                  </div>
                </div>
                <div className="inactive-data">
                  <h5>
                    Total Population
                  </h5>
                  <h6>{item.population}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CovidComponent;
