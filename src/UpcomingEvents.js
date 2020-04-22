import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { AppContext, AppProvider } from './AppContext';
import EventCard from './components/EventCard';
import './scss/upcoming-events.scss';

function UpcomingEvents() {
  const [state] = useContext(AppContext);
  const upcomingEvents = state.events.reverse().slice(0, 3);

  return (
    <div className="event-card__wrapper">
      {upcomingEvents.length === 0 ? (
        <h3 class="no-event-message">There are no upcoming events.</h3>
      ) : (
        upcomingEvents.map(function(obj, i) {
          return (
            <a
              href={`/events/${obj.path}`}
              className="event-card__wrapper--link"
            >
              <EventCard key={i} row={obj} />
            </a>
          );
        })
      )}
    </div>
  );
}
const root = document.getElementById('upcoming-events__module');
const portalId = Number(root.dataset.portalId);

ReactDOM.render(
  <AppProvider portalId={portalId}>
    <UpcomingEvents />
  </AppProvider>,
  root,
);
