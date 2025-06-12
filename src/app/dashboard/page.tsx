'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/auth');
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}

export default Dashboard;