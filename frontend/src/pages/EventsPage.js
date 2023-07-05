import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {

  const data = useLoaderData();

  const events = data.events

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;



export async function loader() {

  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: 'could not fetch'};
  } else {
    return response;
  }

}