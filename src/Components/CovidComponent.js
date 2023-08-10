import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { getCovidData } from '../Redux/covidSlice';

const CovidComponent = () => {
  const data = useSelector((state) => state.convidData.data);
  const itemsToRender = data.slice(0, 16);
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
          {itemsToRender.map((item) => (
            <Link to={`/${item.Country_text}`} key={item.Country_text}>
              <div className="card-item">
                <div className="active-data">
                  <div className="top">
                    <h3>
                      {item.Country_text}
                    </h3>
                  </div>
                </div>
                <div className="inactive-data">
                  <h5>
                    Total Cases
                  </h5>
                  <h6>{item['Total Cases_text']}</h6>
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
