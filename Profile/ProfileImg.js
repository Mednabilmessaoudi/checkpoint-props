import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProfileImg = (props) => {
    const fullname = props.fullname;
    const bio = props.bio;
    const profesion= props.profesion ;
  return (  
   
    <div>


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{fullname}</Card.Title>
        <Card.Text>
         {bio}
        </Card.Text>
        <Button variant="primary" >{profesion}</Button>
      </Card.Body>
    </Card>
    



    </div>
  )
}

export default ProfileImg;
