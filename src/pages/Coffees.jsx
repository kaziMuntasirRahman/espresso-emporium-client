import { useLoaderData } from "react-router-dom";

const Coffees = () => {
  const coffees = useLoaderData();
  return (
    <div>
      <h1>Total coffees: {coffees.length}</h1>
    </div>
  );
};

export default Coffees;