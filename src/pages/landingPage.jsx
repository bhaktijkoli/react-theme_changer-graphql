import React from 'react'
import { useQuery, useReactiveVar } from '@apollo/client';
import ButtonComponent from '../components/button';
import { GET_DARK_MODE } from '../graphql/reactivities/theme';
import { darkMode } from '../graphql/reactivities/theme';


const LandingPage = () => {
  const isdarkMode = useReactiveVar(darkMode)
  return (
    <div style={{ height: '100vh', backgroundColor: isdarkMode ? 'black' : 'white', color: isdarkMode ? 'white' : 'black' }}>
      <h1>Welcome to Theme Toggle Appliation!</h1>
      <ButtonComponent />
    </div>
  )
}

export default LandingPage
