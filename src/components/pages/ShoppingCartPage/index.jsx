import { useContext, useEffect, useState } from "react";
import PetsOrderContext from "../../../context/petsOrderContext";
import "./styles.css";
import { OrderItem } from "../../OrderItem";
import { Button } from "../../Button";

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

export const ShoppingCartPage = () => {

const [order, setOrder] = useState([]);

const history = useHistory();

const globalState = useContext(PetsOrderContext);

  //check if a current user is logged into the firebase
  useEffect(
    () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          history.push('/login');
        }
      })
    }, []
  );

useEffect(
  () => {
    setOrder(globalState.order);
  }, [globalState]
)

  return (
    <div className="pets-page">
      <h1 className="pets-title">My Shopping Cart</h1>
      <div className="order">
        {
          order.map((item) => <OrderItem image={item.image} id={item.id} name={item.name} age={item.age} />)
        }
        {
          order.length === 0 && <p>Nothing in your order yet..</p>
        }
      </div>
      <Button text="Checkout" type="primary" />
    </div>
  );
};
