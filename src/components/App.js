import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './Login';
import SignUp from './Signup';
import Cars from './Cars';
import CarDetails from './CarDetails';
import ReservationList from './ReservationList';
import AddCar from './AddCar';
import RemoveCar from './RemoveCar';
import store from '../redux/configureStore';
import Navbar from './Navbar';
import Home from './Home';
import '../App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="bar">
        <Navbar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/car_details" element={<CarDetails />} />
          <Route path="/add_car" element={<AddCar />} />
          <Route path="/reservations" element={<ReservationList />} />
          <Route path="/remove_car" element={<RemoveCar />} />

        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
