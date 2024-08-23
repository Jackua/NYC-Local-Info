import "../App.css";

function Form() {
  return (
    <div>
      <form className="Form">
        <p>Enter a Zipcode(NYC Only!)</p>
        <label>
          <input name="zipcode" type="text" placeholder="Enter Your Zipcode" />
        </label>
        <p>Select either Daily or Weekly</p>
        <label>
          <input type="radio" name="frequency" value="Daily" />
          Daily
        </label>
        <label>
          <input type="radio" name="frequency" value="Weekly" />
          Weekly
        </label>
        <br />
        <button>Get Info!</button>
      </form>
    </div>
  );
}

export default Form;
