import React from 'react'
import Header from '../components/layout/header'

export const Home = () => {
  return (
    <div>
        <Header>{/* Displays the Header component here */}</Header>
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px)]'>
            <h1 className='text-4xl font-bold'>Hello World!</h1>
        </div>
    </div>
  )
}

export default Home