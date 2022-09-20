import styled from "styled-components";
import React from "react";


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: black;
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
border: solid 1px white;
margin: 5px;
border-radius: 15%;
min-width: 280px;
height: 350px;
min-heght:100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
&:hover ${Info}{
  opacity: 1;
}
@media (max-width: 768px) {
  flex: 1;
border: solid 1px white;
border-radius: 15%;
margin: 5px;
min-width: 180px;
height: 150px;
min-heght:100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
  
}

`;

  
  
  const Image = styled.img`
    height: 35%;
    z-index: 2;
    @media (max-width: 768px) {
      height: 35%;
      
    }
  
    `;
    const Text = styled.p`
  font-size : 30px;
    color:white;
  text-align :center;
  `

  const Skills = ({item}) => {


    return (
    
      
      <Container>
        
        <Image src={item.img} />
        
        <Info>
      
        <Text>Skill Level : {item.rate}%</Text>
      </Info>
      <Text>{item.title}</Text>
      
      </Container>
  
    );
  };
  
  export default Skills;