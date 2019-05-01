import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Login from '../Login';
import Register from '../Register';
import Home from '../../pages/Home';
import logic from '../../logic';
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT, CART_CHECKOUT } from '../../logic/actions';

function App(props) {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const dispatch = ({ action, ...params }) => {
    const calculateCartQuantity = cart => cart.reduce((acc, item) => (acc + item.quantity),0);

    switch (action) {
      case CART_ADD_PRODUCT:
        {
          const { product, quantity } = params;
          const newCart = [...cart];
          const index = newCart.findIndex(item => item.product.productId === product.productId);
          if (index === -1) {
            newCart.push({ product, quantity });
          } else {
            const oldQuantity = newCart[index].quantity;
            const newQuantity = oldQuantity + quantity;
            if (newQuantity !== 0) newCart[index] = { product, quantity: newQuantity };
            else newCart.splice(index, 1);
          }
          setCart(newCart);
          setCartQuantity(calculateCartQuantity(newCart));
        }
        break;
      case CART_REMOVE_PRODUCT:
        {
          const { product, quantity } = params;
          const newCart = [...cart];
          const index = newCart.findIndex(item => item.product.productId === product.productId);
          if (index !== -1) newCart.splice(index, 1);
          setCart(newCart);
          setCartQuantity(calculateCartQuantity(newCart));
        }
        break;
      case CART_CHECKOUT:
        break;
      default:
        return;
    }
  };

  const handleLogin = (email, password) => logic.loginUser(email, password);

  return (
    <Container>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            !logic.isLoggedIn ? (
              <Landing cart={cart} cartQuantity={cartQuantity} dispatch={dispatch} />
            ) : (
              <Redirect to="/home" />
            )
          }
        />
        <Route
          path="/logout"
          render={() => {
            logic.logOut();
            return <Redirect to="/" />;
          }}
        />
        <Route
          path="/register"
          render={() => (!logic.isLoggedIn ? <Register /> : <Redirect to="/home" />)}
        />
        <Route
          path="/login"
          render={() => (!logic.isLoggedIn ? <Login /> : <Redirect to="/home" />)}
        />
        <Route
          path="/home"
          render={() => {
            return logic.isLoggedIn ? <Home /> : <Redirect to="/" />;
          }}
        />
        <Redirect to="/" />
      </Switch>
    </Container>
  );
}

export default withRouter(App);
