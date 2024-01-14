import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cards = () => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg" />
    <Card.Body>
      <Card.Title>Dogs</Card.Title>
      <Card.Text>
        Dogs
      </Card.Text>
      <Button variant="primary">Search</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0997/4496/articles/Do_kittens_shed_f9917858-b52f-4192-bf8e-4f46ed98e9aa.jpg?v=1698540349" />
    <Card.Body>
      <Card.Title>Cats</Card.Title>
      <Card.Text>
       Cats
      </Card.Text>
      <Button variant="primary">Search</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_i6v0C6L0F2GQs3OxTiy5ASwQT2hjukEsvENATngtpQ0pgFHcS_M6Yl-UXSVftCY5dNI&usqp=CAU" />
    <Card.Body>
      <Card.Title>Rabbit</Card.Title>
      <Card.Text>
        Rabbit
      </Card.Text>
      <Button variant="primary">Search</Button>
    </Card.Body>
  </Card>
  </>
);
}
  

export default Cards
