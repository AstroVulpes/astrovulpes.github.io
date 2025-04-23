import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const redirectPath = '/React-Portfolio';
    const currentPath = window.location.pathname;

    // Redirect to '/React-Portfolio' if the current path is not already it
    if (currentPath !== redirectPath) {
      window.location.replace(redirectPath);
    }
  }, []);

  return (
    <div>
      {/* This content may not be visible if redirected immediately */}
      <h1>Click <a href="/React-Portfolio">here</a> if you aren't redirected.</h1>
    </div>
  );
};

export default Home;
