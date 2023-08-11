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
  const countryData = data.filter((item) => item.Country_text === country);
  return (
    <Container>
      {countryData.length > 0
        ? (
          <div className="details">
            {countryData.map((item) => (
              <div key={item.Country_text}>
                <div className="country detail">
                  <h4>Country</h4>
                  <h3>{item.Country_text}</h3>
                </div>
                <div className="total detail">
                  <h4>Total Cases</h4>
                  <h3>{item['Total Cases_text']}</h3>
                </div>
                <div className="recover detail">
                  <h4>Total Recovered</h4>
                  <h3>{item['Total Recovered_text']}</h3>
                </div>
                <div className="deaths detail">
                  <h4>Total Deaths</h4>
                  <h3>{item['Total Deaths_text']}</h3>
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
