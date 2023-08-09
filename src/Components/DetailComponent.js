import { useParams } from 'react-router-dom';

const DetailComponent = () => {
  const { country } = useParams();
  console.log(country);
  return (
    <>
      <h2>{country}</h2>
    </>
  );
};

export default DetailComponent;
