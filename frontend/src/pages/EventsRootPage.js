import React from 'react'
import { Outlet } from 'react-router-dom';
import Eventsnavigation from '../components/EventsNavigation';

export default function EventsRootPage() {
  return (
    <>
    <Eventsnavigation />
    <Outlet />
    </>
  )
}
