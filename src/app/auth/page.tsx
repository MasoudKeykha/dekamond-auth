"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

import Input from "@/components/Input";
import Button from "@/components/Button";

const AuthPage = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const iranPhoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!iranPhoneRegex.test(phone)) {
      alert("Please enter a valid Iranian phone number!");
      return;
    }

    try {
      const response = await fetch(
        "https://randomuser.me/api/?results=1&nat=us"
      );
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data.results[0]));

      router.push("/dashboard");
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <Input
        value={phone}
        onChange={setPhone}
        placeholder="Enter Iranian phone number"
      />
      <Button text="Login" onClick={handleLogin} />
    </div>
  );
};

export default AuthPage;