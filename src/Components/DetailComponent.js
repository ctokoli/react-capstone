import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCovidData } from '../Redux/covidSlice';
import DetailsCard from './DetailsCardComponent';

const DetailComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.convidData.data);
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidData());
    }
  }, [dispatch, data.length]);
  const { country } = useParams();
  const countryData = data.filter((item) => item.country === country);
  return (
    <Container>
      {countryData.length > 0
        ? (
          <div className="details">
            {countryData.map((item) => (
              <DetailsCard item={item} key={item.country} />
            ))}
          </div>
        )
        : (<h2>Loading Data.....</h2>)}
    </Container>
  );
};

export default DetailComponent;
