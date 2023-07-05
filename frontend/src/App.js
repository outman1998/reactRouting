import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import NewEventPage from './pages/NewEventPage';
import Root from './pages/Root';
import EventsRootPage from './pages/EventsRootPage';
import {loader as eventsLoader} from './pages/EventsPage';
import ErrorPage from './pages/Error';


const router = createBrowserRouter([

  { 
    path: "/", 
    element: <Root />, 
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      { 
        path: 'events', 
        element: <EventsRootPage />, 
        children: [
          {index: true, element: <EventsPage />, loader: eventsLoader},
          {path: ':eventId', element: <EventDetailPage />},
          {path: 'new', element: <NewEventPage />},
          {path: ':eventId/edit', element: <EditEventPage />},
        ]
      }
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
