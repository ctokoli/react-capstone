/* eslint-disable react/prop-types */
const DetailsCard = ({ item, key }) => (
  <div key={key}>
    <div className="country detail">
      <h4>Country</h4>
      <h3>{item.country}</h3>
    </div>
    <div className="total detail">
      <h4>Total Population</h4>
      <h3>{item.population}</h3>
    </div>
    <div className="total detail">
      <h4>Total Cases</h4>
      <h3>{item.cases.total}</h3>
    </div>
    <div className="recover detail">
      <h4>Total Recovered</h4>
      <h3>{item.cases.recovered}</h3>
    </div>
    <div className="deaths detail">
      <h4>Total Deaths</h4>
      <h3>{item.deaths.total}</h3>
    </div>
  </div>
);

export default DetailsCard;
