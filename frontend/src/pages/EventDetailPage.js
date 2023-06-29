import React from 'react';
import { useParams } from 'react-router-dom';


export default function EventDetailPage() {

  const params = useParams();

  return (
    <>
    <h1>event detail page</h1>
      <h1>{params.eventId}</h1>
    </>

  )
}
