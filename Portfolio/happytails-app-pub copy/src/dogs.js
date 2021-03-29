import {React, useEffect, useState} from "react";
import "./App.css";
import { stockData } from "./data";
import {Button, Alert, Breadcrumb, Card, Container, Row, Col, CardColumns} from 'react-bootstrap';





export const Dogs = () => {
    return (

     
                <CardColumns > 
     
                <div className="dogs">
                  {stockData.map((dog) => (
                    <div className="dog-preview" key={dog.id}>
                                                          
                          <Card >
                            
                            
                            <Card.Body>
                              <Card.Img src={dog.image}  className="Foto"  style={{alignItems:'center', display:'flex'}} />
                              <Card.Title className="Naam mb-0 text-danger font-weight-bold" >{dog.name}</Card.Title>
                              <Card.Text className="Ras text-dark font-weight-bold"> {dog.ras} </Card.Text>
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

