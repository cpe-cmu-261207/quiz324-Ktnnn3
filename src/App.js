import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [person, setPerson] = useState([]);
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    // ...
  }, []);

  function addUser() {
    setPerson([
      ...person,
      { name: person.name, gender: person.gender, age: person.age }
    ]);
  }

  function handleName(e) {
    setPerson(e.target.value);
  }
  function handleGender(e) {
    setPerson(e.target.value);
  }
  function handleAge(e) {
    setPerson(e.target.value);
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            //update related state based on event
            value={person.name}
            onChange={handleName}
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            placeholder="Please select .."
            onSelect={handleGender}
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            placeholder="e.q 5"
            onSelect={handleAge}
          ></input>
        </div>

        <button className="button is-danger is-fullwidth" onClick={addUser}>
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}
        <ItemTable name={"Coco"} gender={"Male"} age={"5"} />
        <p>
          <ItemTable person={person} />
        </p>
        <p>Kittinun Taweeboon 620610772</p>
      </div>
    </div>
  );
}

export default App;
