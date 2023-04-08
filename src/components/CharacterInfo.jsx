import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CharacterInfo() {
    let { id } = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function fetchCharacter() {
            console.log("En el fetch: ", id);
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data);
            console.log("data: ", character);
        }

        fetchCharacter();
    }, []);

    return (
        <div className='bg-dark text-white'>
            <h1 className="text-center display-1 py-4">{"Information about: " + character.name}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link to={"/"}>
                    <Button variant="primary"> Go Home </Button>
                </Link>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card style={{ width: '28rem' }}>
                    <Card.Img variant="top" src={character.image}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{ font: "bold", color: "black" }}>{character.name}</Card.Title>
                        <Card.Text>
                            <ListGroup variant="flush">
                                <ListGroup.Item>{"Status: " + character.status}</ListGroup.Item>
                                <ListGroup.Item>{"Specie: " + character.species}</ListGroup.Item>
                                <ListGroup.Item>{"Gender: " + character.gender}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}