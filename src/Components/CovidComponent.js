import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
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
        <div className="grid">
          {itemsToRender.map((item) => (
            <div key={item.Country_text} className="card-item">
              <div className="active-data">
                <div className="top">
                  <h3>
                    {item.Country_text}
                  </h3>
                  <div>
                    <h4>Total Case</h4>
                    <h5>333444</h5>
                  </div>
                </div>
                <h5>Total Recorvered</h5>
                <span>344445</span>
              </div>
              <div className="inactive-data">
                <h4>
                  Total Death
                </h4>
                <h5>{item['Total Deaths_text']}</h5>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default CovidComponent;
