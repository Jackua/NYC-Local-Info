function Event({ eventInfo, index }) {
  return (
    <div key={index} className="Event">
      <p>Name: {eventInfo["shortName"]}</p>
      <p>Address: {eventInfo["address"]}</p>
      <p>Time: {eventInfo["time"]}</p>
    </div>
  );
}

export default Event;
