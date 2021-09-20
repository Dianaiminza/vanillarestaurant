import React, { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {detailsOrder, payOrder ,deliverOrder} from '../actions/orderActions';
import Axios from 'axios';
import PaypalButton from '../components/PaypalButton';
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from '../constants/orderConstants';
function OrderScreen(props) {
  const orderId = props.match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  
 
  const orderPay = useSelector(state => state.orderPay);
  // console.log(orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await Axios.get('/api/config/paypal');
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (
      !order ||
      successPay ||
      successDeliver ||
      (order && order._id !== orderId)
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, orderId, sdkReady, successPay, successDeliver, order]);
  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };
  //   if (successPay) {
  //     props.history.push("/profile");
  //   } else {
  //     dispatch(detailsOrder(props.match.params.id));
  //   }
    
  // }, [successPay]);

  // const handleSuccessPayment = (paymentResult) => {
  //   dispatch(payOrder(order, paymentResult));
  // }
  
  const orderDetails = useSelector(state => state.detailsOrder);
  
  // console.log(orderDetails);
  const {loading, order, error} = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :
    <div>
      <h1>Order {order._id}</h1>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
          
            <h3>
              Shipping
          </h3>
          
            <div>
              {order.shipping.address}, {order.shipping.estate},
          {order.shipping.postalCode}, {order.shipping.phonenumber},
          </div>
            <div>
              {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>
              Payment Method: {order.payment.paymentMethod}
            </div>
            <div>
              {order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
          </h3>
                <div>
                  Price
          </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item._id}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        Ksh{item.price}
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>


        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
              {loadingPay && <div>Finishing Payment...</div>}
              {!order.isPaid &&
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={successPaymentHandler} />
              }
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>Ksh{order.itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>Ksh{order.shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>Ksh{order.taxPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>Ksh{order.totalPrice}</div>
            </li>
            {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                 <div>Loading ...</div> : error ? <div>{error}</div>
                  
                  <button
                    type="button"
                    className="primary block"
                    onClick={deliverHandler}
                  >
                    Deliver Order
                  </button>
                </li>
              )}
          </ul>

        </div>

      </div>
    </div>
    

}

export default OrderScreen;


