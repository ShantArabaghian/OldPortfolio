import styled from "styled-components";
import { projects } from "../data";

import Project from "./Project";

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
margin-bottom: 40px;
`

const Projects = () => {
  
  return (
    <Skillscont> 
      <Text >My Work</Text>
    <Container className="Projects"> 
      
      {projects.map((item) => (
        <Project item={item} key={item.id} />
      ))}
     
    </Container>
    </Skillscont>
  );
};

export default Projects;