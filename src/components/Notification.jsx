import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../reducers/notifyReducer";
import React from "react";

const Notification = () => {
  const notification = useSelector((state) => state.notification.message);
  // console.log("at notification.js", notification);
  const dispatch = useDispatch();
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 2,
  };

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(clearMessage());
    }, 5000);
  }, [notification, dispatch]);
  if (notification) {
    return (
      <div>
        <div style={style}>{notification}</div>
      </div>
    );
  }
};

export default Notification;
