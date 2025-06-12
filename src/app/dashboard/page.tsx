'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import styles from "./styles.module.scss";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/auth');
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Dashboard</h1>
    </div>
  );
}

export default Dashboard;