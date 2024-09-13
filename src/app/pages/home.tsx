import React from 'react';
import Header from '../components/layout/header';
import ColorDisplay from '../components/ui/colorDisplay';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <h1 className="text-4xl font-bold mb-8">Hello World!</h1>
        <ColorDisplay />
      </div>
    </div>
  );
};

export default Home;
