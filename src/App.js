import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CovidComponent from './Components/CovidComponent';
import NavigationLayout from './Components/CovidLayout';

function App() {
  return (
    <>
      <NavigationLayout />
      <CovidComponent />
    </>
  );
}

export default App;
