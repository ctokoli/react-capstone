import PropTypes from 'prop-types';

const CardComponent = ({ item }) => (
  <div className="card-item">
    <div className="active-data">
      <div className="top">
        <h3>
          {item.country}
        </h3>
      </div>
    </div>
    <div className="inactive-data">
      <h5>
        Total Population
      </h5>
      <h6>{item.population}</h6>
    </div>
  </div>
);

CardComponent.propTypes = {
  item: PropTypes.array.isRequired,
};
export default CardComponent;
