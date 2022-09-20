import styled from "styled-components";
import { skils } from "../data";

import Skills from "./Skills";

const Container = styled.div`
    padding: 10px;
    display: flex;
    background: #282c34;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
const Text = styled.p`
  color: whitesmoke ;
  text-align: center;
  background: #282c34;
  text-decoration: underline;
  font-family: 'Ropa Sans', sans-serif;
  padding: 10px;
  font-size: 60px;
  padding:10px;
`
const Skillscont = styled.div`
background: #282c34;
`
const P = styled.p`
font-family: 'Ropa Sans', sans-serif;
font-size : 30px;
color:white;
text-align :center;

`
const Skillslist = () => {
  
  return (
    <Skillscont> 
      <Text >My Skills</Text>
      
    <Container className="Skills"> 
      
      {skils.map((item) => (
        <Skills item={item} key={item.id} />
      ))}
     
    </Container>
    <P>Always room to learn more</P>
    </Skillscont>
  );
};

export default Skillslist;