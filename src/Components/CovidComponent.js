/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
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

  useEffect(() => {
    const projectDSection = document.querySelector('.World');
    if (projectDSection) {
      projectDSection.insertAdjacentHTML('afterend', '<div class="space"><h6>STATS BY COUNTRY</h6></div>');
    }
  });

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
              <div className={`card-item ${item.Country_text}`} key={item.Country_text}>
                <Link to={`/${item.Country_text}`}>
                  <FontAwesomeIcon icon={faCircleRight} />
                  <CardComponent item={item} />
                </Link>
              </div>
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
