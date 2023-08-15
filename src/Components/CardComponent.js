import PropTypes from 'prop-types';

const CardComponent = ({ item }) => (
  <>
    <div className={item.Country_text}>
      <div className="top">
        <h3>
          {item.Country_text}
        </h3>
      </div>
    </div>
    <div>
      <h6>
        Total Recovered
      </h6>
      <h6>{item['Total Recovered_text']}</h6>
    </div>
  </>
);

CardComponent.propTypes = {
  item: PropTypes.array.isRequired,
};
export default CardComponent;
