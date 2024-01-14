import React from "react";
import Badge from "react-bootstrap/Badge";
const Heading = () => {
  return (
    <div>
      <div>
        <h1>Animals <Badge bg="secondary">New</Badge></h1>
        <h2>Dogs</h2>
        <h3>Cats</h3>
        <h4>Rabbits</h4>
      </div>
    </div>
  );
};

export default Heading;
