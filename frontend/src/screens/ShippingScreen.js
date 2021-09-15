import React, {  useState } from 'react';
import {  useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [estate, setEstate] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ address, estate, postalCode, phonenumber}));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Shipping</h2>
          </li>

          <li>
            <label htmlFor="address">
              Address
          </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="estate">
              Estate
          </label>
            <input type="text" name="estate" id="estate" onChange={(e) => setEstate(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="postalCode">
              Postal Code
          </label>
            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="phonenumber">
              Phone number
          </label>
            <input type="text" name="phonenumber" id="phonenumber" onChange={(e) => setPhonenumber(e.target.value)}>
            </input>
          </li>


          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>

        </ul>
      </form>
    </div>
  </div>

}
export default ShippingScreen;