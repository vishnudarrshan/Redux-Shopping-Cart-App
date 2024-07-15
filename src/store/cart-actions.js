import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-74d6f-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchHandler();

      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      console.log(err);
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Fetch data Request failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-74d6f-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();

      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent request to DB",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request failed",
          type: "error",
        })
      );
    }
  };
};
