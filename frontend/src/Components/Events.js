import Event from "./Event";

function Events(events) {
  let eventList = events[Object.keys(events)];

  return (
    <div className="Events">
      {eventList.map((eventInfo, key) => {
        return <Event eventInfo={eventInfo} key={key} />;
      })}
    </div>
  );
}

export default Events;
