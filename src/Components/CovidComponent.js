import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <h2>Hello Covid Component</h2>
    </>
  );
};

export default CovidComponent;
