/* eslint-disable max-len */
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
  //   console.log(data);
  //   console.log(country);
  console.log(countryData);
  return (
    <>
      {countryData.length > 0
        ? (
          <div>
            {countryData.map((item) => (
              <div key={item.Country_text}>
                <h3>{item.Country_text}</h3>
                <h1>{item['Total Cases_text']}</h1>
                <h1>{item['Total Recovered_text']}</h1>
                <h1>{item['Total Deaths_text']}</h1>
              </div>
            ))}
          </div>
        )
        : (<h2>No Data</h2>)}
    </>
  );
};

export default DetailComponent;
