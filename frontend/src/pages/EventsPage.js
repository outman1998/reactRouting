import React from 'react';
import EventsList from '../components/EventsList';


const DUMMY_EVENTS = [

  {id: '1', title: 'event 1', date: "01/01/1998", image: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"},
  {id: '2', title: 'event 2', date: "06/12/2023", image: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"},
  {id: '3', title: 'event 3', date: "11/28/2012", image: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"},
  {id: '4', title: 'event 4', date: "03/07/2021", image: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"}

];

export default function EventsPage() {
  return (
    <EventsList events={DUMMY_EVENTS} />
  )
}
