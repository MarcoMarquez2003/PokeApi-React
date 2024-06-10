import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import PokemonCard from "./Components/PokemonCard.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemonList(data.results);
      });
  }, []);

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>PokeApi</h1>
            <Form className="mb-3">
              <FormControl
                type="text"
                placeholder="Busqueda de Pokémon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary">Buscar pokemon</Button>
            </Form>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={4}>
          {filteredPokemonList.map((pokemon, num) => (
            <Col key={num}>
              <PokemonCard name={pokemon.name} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${num+1}.png`} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;


