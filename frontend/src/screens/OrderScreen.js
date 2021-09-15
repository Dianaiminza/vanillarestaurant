import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {detailsOrder, payOrder } from '../actions/orderActions';

import MpesaButton from '../components/PaypalButton';
function OrderScreen(props) {

  const orderPay = useSelector(state => state.orderPay);
  // console.log(orderPay);
  const { loading: loadingPay, success: successPay, error: errorPay } = orderPay;
  
  const dispatch = useDispatch();
  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  }
  
  const orderDetails = useSelector(state => state.detailsOrder);
  
  // console.log(orderDetails);
  const {loading, order, error} = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :
    <div>
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
                <MpesaButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment} />
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
          </ul>

        </div>

      </div>
    </div>
    

}

export default OrderScreen;


