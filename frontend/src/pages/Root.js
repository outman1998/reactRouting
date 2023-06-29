import React from 'react';
import Mainnavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
    <Mainnavigation />
    <Outlet />
    </>
  )
}
