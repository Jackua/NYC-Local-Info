import Events from "./Events";

function DailyInfo(result) {
  let date = result[Object.keys(result)[0]];
  let info = date[Object.keys(date)[0]];

  return (
    <div className="DailyInfo">
      <h3>{Object.keys(date)[0]}</h3>
      <p>
        {Object.keys(info)[0]} : {info[Object.keys(info)[0]]["details"]}
      </p>
      <p>
        {Object.keys(info)[1]} : {info[Object.keys(info)[1]]["details"]}
      </p>
      <p>
        {Object.keys(info)[2]} : {info[Object.keys(info)[2]]["details"]}
      </p>
      <hr></hr>
      <p>Events Near You:</p>
      {info["event"] !== undefined && <Events events={info["event"]} />}
    </div>
  );
}

export default DailyInfo;
