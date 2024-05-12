import React from "react";
import styles from "@/styles/LimitedTimeOffer.module.css";
const LimitedTimeOffer = () => {
  return (
    <div className={styles.LimitedTimeOffer}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScUiroAoZOoXRTw-8u414qR8IXd2P8HZn_WpGVxJ9cwdzQ80w/viewform?embedded=true"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default LimitedTimeOffer;
