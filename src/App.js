import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CovidComponent from './Components/CovidComponent';
import NavigationLayout from './Components/CovidLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationLayout />
        <Routes>
          <Route path="/" element={<CovidComponent />} />
          <Route path="/:country" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
