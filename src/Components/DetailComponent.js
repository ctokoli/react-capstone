import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCovidData } from '../Redux/covidSlice';

const DetailComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.convidData.data);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidData());
    }
  });
  const { country } = useParams();
  const countryData = data.response.filter((item) => item.country === country);
  return (
    <Container>
      {countryData.length > 0
        ? (
          <div className="details">
            {countryData.map((item) => (
              <div key={item.country}>
                <div className="country detail">
                  <h4>Country</h4>
                  <h3>{item.country}</h3>
                </div>
                <div className="total detail">
                  <h4>Total Population</h4>
                  <h3>{item.population}</h3>
                </div>
                <div className="total detail">
                  <h4>Total Cases</h4>
                  <h3>{item.cases.total}</h3>
                </div>
                <div className="recover detail">
                  <h4>Total Recovered</h4>
                  <h3>{item.cases.recovered}</h3>
                </div>
                <div className="deaths detail">
                  <h4>Total Deaths</h4>
                  <h3>{item.deaths.total}</h3>
                </div>
              </div>
            ))}
          </div>
        )
        : (<h2>Loading Data.....</h2>)}
    </Container>
  );
};

export default DetailComponent;
