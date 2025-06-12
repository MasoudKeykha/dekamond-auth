import { useState } from "react";

import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const Input = ({ value, onChange, placeholder }: InputProps) => {
  const [error, setError] = useState("");

  const validatePhoneNumber = (phone: string) => {
    const iranPhoneRegex = /^(\+98|0)?9\d{9}$/; // Matches Iranian mobile numbers
    if (!iranPhoneRegex.test(phone)) {
      setError("Invalid Iranian phone number");
    } else {
      setError("");
    }
    onChange(phone);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type="tel"
        value={value}
        onChange={(e) => validatePhoneNumber(e.target.value)}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;