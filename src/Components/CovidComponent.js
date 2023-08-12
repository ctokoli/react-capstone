import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { getCovidData } from '../Redux/covidSlice';
import FilterComponent from './filterComponent';
import CardComponent from './CardComponent';
import LoadingSpinner from './LoadingSpinner';

const CovidComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    const notFiltered = state.convidData.data;
    const filtered = state.convidData.filterData;
    if (filtered.length === 0) {
      return notFiltered;
    }
    return filtered;
  });

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getCovidData());
    }
  }, [dispatch, data.length]);

  return (
    <>
      {data.length > 0 ? (
        <Container>
          <section className="top-page">
            <h2>COVID-19 Statistics: Filter by Region</h2>
            <FilterComponent />
          </section>
          <div className="grid">
            {data.map((item) => (
              <Link to={`/${item.country}`} key={item.country}>
                <CardComponent item={item} />
              </Link>
            ))}
          </div>
        </Container>
      ) : (
        <LoadingSpinner />
      )}

    </>
  );
};

export default CovidComponent;
