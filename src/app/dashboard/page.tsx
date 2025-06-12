'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from "./styles.module.scss";

const Dashboard = () => {
  const router = useRouter();

  const [userObj, setUserObj] = useState<any>(null);
  console.log(userObj);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/auth');
    } else {
      const parsedUser = JSON.parse(user);
      setUserObj(parsedUser);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Dashboard</h1>
      <h1 className={styles.title}>{`${userObj?.name.title} ${userObj?.name.first} ${userObj?.name.last}`}</h1>
    </div>
  );
}

export default Dashboard;