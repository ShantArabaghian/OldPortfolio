import styled from "styled-components";
import React from "react";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.5);

z-index: 3;
display: flex;
border-radius: 15%;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;
const Container = styled.div`
flex: 1;
border: solid 1px black;
margin: 15px;
border-radius: 15%;
height: 350px;
min-heght:100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: whitesmoke;
position:relative;
&:hover ${Info}{
  opacity: 1;
}
`;
  
  
const Button = styled.a`
border:none;
padding: 10px;
border-radius:20%;
text-decoration: none;
background-color: white;
color:gray;
cursor: pointer;
&:hover {
  background-color: lightgreen;
  transform: scale(1.1);
  transition :0.5s;
}

`
  
  const Image = styled.img`
    height: 100%;
    
    border-radius: 15%;    
    z-index: 2;
    @media (max-width: 820px) {
      height: 100%;
      max-width: 280px;
      
    }
  
    `;
    const Title = styled.p`
  font-size : 30px;
    color:white;
  text-align :center;
  `
  const H1= styled.h1`
    color: yellow;
    margin:10px;
  `
  const Text = styled.p`
  font-size : 20px;
    color:white;
  text-align :center;
  `
  const Div = styled.div`
  align-items: center;
justify-content: center;
  `
  const Project = ({item}) => {


    return (
      <Div>
      
      <Container>
        
        <Image src={item.img} />
        <Info>
          <H1>{item.name}</H1>
          <Text>Done with: {item.used}</Text>
        </Info>
       
      </Container>
      <Title>{item.title}</Title>
      <Button href={item.to} target="blank">Demo Project </Button>
      </Div>
    );
  };
  
  export default Project;