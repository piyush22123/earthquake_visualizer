// side bar component to take user input and filter the result
export default function Controls({ filters, setFilters, onRefresh }) {
  
    //when input alues changed this function is called
    //and update the filter prpperty inside the filters state object.
    const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="controls">
      <h2>Filters</h2>

      <label>
        Time Window:
        {/* drop down to select time window */}
        <select name="timeWindow" value={filters.timeWindow} onChange={handleChange}>
          <option value="hour">Past Hour</option>
          <option value="day">Past Day</option>
          <option value="week">Past Week</option>
        </select>
      </label>

      {/* -------- Minimum Magnitude Input -------- */}
      <label>
        Min Magnitude:
        <input
          type="number"
          name="minMag"
          min="0"
          max="10"
          step="0.1"
          value={filters.minMag}
          onChange={handleChange}
        />
      </label>
       {/* reload the data when clicked this refresh button */}
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
}
