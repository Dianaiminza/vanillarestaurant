import React, {  useState } from 'react';
import {  useDispatch,useSelector } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [address, setAddress] = useState('');
  const [estate, setEstate] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
 const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
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
      dispatch(saveShipping({ address, estate, postalCode, phonenumber, lat: newLat,
          lng: newLng,}));
     
      props.history.push('/payment');
    }
  };
    
   const chooseOnMap = () => {
    dispatch(
      saveShipping({
        
        address,
        
        postalCode,
        
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