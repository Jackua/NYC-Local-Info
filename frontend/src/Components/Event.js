function Event({ eventInfo, key }) {
  console.log(eventInfo);
  return (
    <div key={key} className="Event">
      <p>Name: {eventInfo["shortName"]}</p>
      <p>Address: {eventInfo["address"]}</p>
      <p>Time: {eventInfo["time"]}</p>
    </div>
  );
}

export default Event;
