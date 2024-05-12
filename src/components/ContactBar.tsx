import React, { useEffect, useState } from "react";
import styles from "@/styles/ContactBar.module.css";

function ContactBar() {
  const [phone, setPhone] = useState("");
  useEffect(() => {
    setPhone(process.env.NEXT_PUBLIC_PHONE!);
  }, []);
  return (
    <div className={styles.contactbar}>
      <ul>
        <li>
          <a href={`tel:${phone}`}>{phone}</a>
        </li>
        <li>
          <a href="mailto:shadman.ali@live.co.uk">shadman.ali@live.co.uk</a>
        </li>
      </ul>
    </div>
  );
}

export default ContactBar;
