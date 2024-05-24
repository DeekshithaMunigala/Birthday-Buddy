import { useState } from "react";
import Data from "./Data";
import Cards from "./Cards";

const Body = () => {
  const [people, setPeople] = useState(Data);

  return (
    <section className="container">
      <h3>{people.length} Birthdays Today</h3>
      {people.map((each) => (
        <Cards key={each.id} card={each} />
      ))}
      <button onClick={() => setPeople([])}>Clear All</button>
    </section>
  );
};

export default Body;
