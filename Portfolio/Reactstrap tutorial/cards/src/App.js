
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {useEffect, useState} from 'react';


import {Button, Alert, Card, Container, Row, Col, CardColumns} from 'react-bootstrap';

const Dogs = () => {
  const [dogs, setDogs] = useState([
    {Naam: 'Puggy', Ras: 'hond', Geslacht: 'reu', Leeftijd: '5',Plaats: 'GENK', id:1},
    {Naam: 'blacly', Ras: 'honf', Geslacht: 'reu', Leeftijd: '15',Plaats: 'BRUSSEL', id:2},
    {Naam: 'Evert', Ras: 'poes', Geslacht: 'teef', Leeftijd: '12',Plaats: 'ANTWERPEN', id:3},
  ]);

  return (
  
    <CardColumns> 
     
      <div className="dogs">
        {dogs.map((dog) => (
          <div className="dog-preview" key={dog.id}>
                                                
                <Card >
                  <Card.Img variant="top" src="\image\foto_1.jpg" />
                  <Card.Body>
                    <Card.Title className="Naam mb-0 text-danger font-weight-bold" >{dog.Naam}</Card.Title>
                    <Card.Text className="Ras text-dark font-weight-bold"> {dog.Ras} </Card.Text>
                    <Card.Text className="Geslacht text-dark Leeftijd"> {dog.Geslacht} - {dog.Leeftijd} jaar </Card.Text>
                       
                  </Card.Body>
                    <Card.Footer className="Plaats" variant="danger" style={{textAlign:'center',}}> {dog.Plaats} </Card.Footer> 
                    
                                       
                </Card>
 
          </div>  
        ))}
      </div>
     
    </CardColumns> 
  
  );


}



export default Dogs;

{/* <Card classname="mb3" style={{color: "#000"}}>
<Card.Img src="https://picsum.photos/id/1025/200/300" />
<Card.Body>
  <Card.Title> 
    Card example 

  </Card.Title>
  <Card.Text>

  </Card.Text>
  <Button variant="danger">Adopteer mij!</Button>
</Card.Body> */}
