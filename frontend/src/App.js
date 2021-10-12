import React from 'react';
import { useMediaQuery } from 'react-responsive'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import  FooterScreen from './screens/FooterScreen';
import MapScreen from './screens/MapScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import SupportScreen from './screens/SupportScreen';
import ChatBox from './components/ChatBox';
import DashboardScreen from './screens/DashboardScreen';
function App() {
  const cart = useSelector((state) => state.cart);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
const { cartItems } = cart;
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
  return (
    <>
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Vanilla Restaurant</Link>
          </div>
          <div className="header-links">
          <Link to="/cart">Cart {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                     <li>
                    <Link to="/support">Support</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <strong>Food Categories</strong>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/BigMeals">Big Meals</Link>
            </li>
            <li>
              <Link to="/category/Breakfast">Breakfast</Link>
            </li>
            <li>
              <Link to="/category/Desserts">Desserts</Link>
            </li>
            <li>
              <Link to="/category/Drinks">Drinks</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
        {/* <SliderScreen/> */}
          <div className="content">
            <Route path="/orders" component={OrdersScreen}/>
            <Route path="/profile" component={ProfileScreen}/>
            <Route path="/order/:id" component={OrderScreen}/>
            <Route path="/products" component={ProductsScreen}/>
            <Route path="/shipping" component={ShippingScreen}/>
            <Route path="/payment" component={PaymentScreen}/>
            <Route path="/placeorder" component={PlaceOrderScreen}/>
            <Route path="/signin" component={SigninScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/product/:id" component={ProductScreen}/>
            <Route path="/cart/:id?" component={CartScreen}/>
            <Route path="/category/:id" component={HomeScreen}/>
            <Route path="/" exact={true} component={HomeScreen}/>
             <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
             <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>
          <AdminRoute path="/support" component={SupportScreen}></AdminRoute>
          </div>
        </main>
        
        <FooterScreen/>
        <div>
          {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
        </div>
      </div>
    </BrowserRouter>
    <div>
    <Desktop>Desktop or laptop</Desktop>
    <Tablet>Tablet</Tablet>
    <Mobile>Mobile</Mobile>
    <Default>Not mobile (desktop or laptop or tablet)</Default>
  </div>
  </>
  );
}

export default App;
