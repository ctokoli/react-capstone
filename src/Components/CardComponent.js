import PropTypes from 'prop-types';

const CardComponent = ({ item }) => (
  <>
    <div className="">
      <div className="top">
        <h3>
          {item.country}
        </h3>
      </div>
    </div>
    <div>
      <h6>
        Total Population
      </h6>
      <h6>{item.population}</h6>
    </div>
  </>
);

CardComponent.propTypes = {
  item: PropTypes.array.isRequired,
};
export default CardComponent;
