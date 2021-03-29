import {React, useEffect, useState} from "react";
import "./App.css";
import { stockData } from "./data";
import {Button, Alert, Breadcrumb, Card, Container, Row, Col, CardColumns} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';


export const Dogs = () => {
    return (

     
                <CardColumns> 
     
                <div className="dogs">
                  {stockData.map((dog) => (
                    <div className="dog-preview" key={dog.id}>
                                                          
                          <Card >
                            <Card.Img variant="top" src="../components/images/foto_1.jpg" />
                            
                            <Card.Body>
                              <Card.Title className="Naam mb-0 text-danger font-weight-bold" >{dog.name}</Card.Title>
                              <Card.Text className="Ras text-dark font-weight-bold"> {dog.animal} </Card.Text>
                              <Card.Text className="Geslacht text-dark Leeftijd"> {dog.gender} - {dog.age} jaar </Card.Text>
                                 
                            </Card.Body>
                              <Card.Footer className="Plaats" variant="danger" style={{textAlign:'center',}}> {dog.location} </Card.Footer>                    
                          </Card>
           
                    </div>  
                  ))}
                </div>
               
              </CardColumns> 
      
    );
  };

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