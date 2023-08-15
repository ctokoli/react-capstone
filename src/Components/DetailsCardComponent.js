import PropTypes from 'prop-types';

const DetailsCard = ({ item }) => (
  <>
    <div className={`country detail ${item.Country_text}`}>
      <h4>Country</h4>
      <h3>{item.Country_text}</h3>
    </div>
    <div className="total detail">
      <h4>Total Cases</h4>
      <h3>{item['Total Cases_text']}</h3>
    </div>
    <div className="recover detail">
      <h4>Total Recovered</h4>
      <h3>{item['Total Recovered_text']}</h3>
    </div>
    <div className="deaths detail">
      <h4>Total Deaths</h4>
      <h3>{item['Total Deaths_text']}</h3>
    </div>
  </>
);

DetailsCard.propTypes = {
  item: PropTypes.object.isRequired,
};
export default DetailsCard;
