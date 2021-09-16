import React, {  useState } from 'react';
import {  useDispatch,useSelector } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {
  const cart = useSelector((state) => state.cart);
const { shipping } = cart;
  const [address, setAddress] = useState(shipping.address);
  const [city, setCity] = useState(shipping.city);
  const [country, setCountry] = useState(shipping.country);
  const [estate, setEstate] = useState(shipping.estate);
  const [postalCode, setPostalCode] = useState(shipping.postalcode);
  const [phonenumber, setPhonenumber] = useState(shipping.phonenumber);
 const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const [lat, setLat] = useState(shipping.lat);
  const [lng, setLng] = useState(shipping.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;
  if (!userInfo) {
    props.history.push('/signin');
  }
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
     const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLat(addressMap.lat);
      setLng(addressMap.lng);
    }
    let moveOn = true;
    if (!newLat || !newLng) {
      moveOn = window.confirm(
        'You did not set your location on map. Continue?'
      );
    }
    if (moveOn) {
      dispatch(saveShipping({ address, estate, city,
          postalCode,
          country, phonenumber, lat: newLat,
          lng: newLng,}));
     
      props.history.push('/payment');
    }
  };
    
   const chooseOnMap = () => {
    dispatch(
      saveShipping({
        city,
          postalCode,
          country,
        address,
        
      })
    );
    props.history.push('/map');
  };
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
            <label htmlFor="city">
              City
          </label>
            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
            </input>
          </li>
           <li>
            <label htmlFor="Country">
              Country
          </label>
            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="phonenumber">
              Phone number
          </label>
            <input type="text" name="phonenumber" id="phonenumber" onChange={(e) => setPhonenumber(e.target.value)}>
            </input>
          </li>
<div>
          <label htmlFor="chooseOnMap">Location</label>
          <button type="button" onClick={chooseOnMap}>
            Choose On Map
          </button>
        </div>
          <label />

          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>

        </ul>
      </form>
    </div>
  </div>

}
export default ShippingScreen;