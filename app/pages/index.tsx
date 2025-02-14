import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook


const Home: React.FC = () => {

  const router = useRouter();

  const handleClick = () => {
    router.push('/admin'); // later i'll apply authentication and admin/admin_id/
  }

  return (
    <div>
      <h1>Welcome to Presenting app</h1>
      <p>This is the home page!</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
