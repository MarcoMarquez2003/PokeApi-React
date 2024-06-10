import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import defaultImage from "../default.png";

function PokemonCard({ name, brief, image }) {
  return (
    <Col md={3} style={{ marginBottom: "20px" }}>
      <Card style={{ width: "18rem", backgroundColor: "#7b62a3" }}>
        <Card.Img variant="top" src={image || defaultImage} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{brief}</Card.Text>
          <Button variant="primary">Ver Pokémon</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PokemonCard;





