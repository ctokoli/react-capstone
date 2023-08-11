import { useDispatch } from 'react-redux';
import { filterRegions } from '../Redux/covidSlice';

const continent = [
  {
    id: 1,
    region: 'Africa',
  },
  {
    id: 2,
    region: 'North-America',
  },
  {
    id: 3,
    region: 'Oceania',
  },
  {
    id: 4,
    region: 'Asia',
  },
  {
    id: 5,
    region: 'South-America',
  },
];

const FilterComponent = () => {
  const dispatch = useDispatch();

  const handleValue = (value) => {
    dispatch(filterRegions(value));
  };
  return (
    <div className="top-btns">
      <button type="button" onClick={(e) => handleValue(e.target.innerText)} className="btn btn-outline-success">All</button>
      {continent.map((region) => (
        <button type="button" key={region.id} onClick={(e) => handleValue(e.target.innerText)} className="btn btn-outline-success">
          {region.region}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
