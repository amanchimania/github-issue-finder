import './App.css';
import {Button,Form,Navbar,NavDropdown,Nav,FormControl,InputGroup,Jumbotron,Container} from "react-bootstrap"
import { useEffect, useState } from 'react';

function App() {
  const [userName,setUserName]=useState("");
  const [repo,setRepoName]=useState("");
  
  const [data,setData]=useState([])
  const handleUserName=(e)=>{
    setUserName(e.target.value)
    console.log(e.target.value)
  }
  const handleRepo=(e)=>{
    setRepoName(e.target.value)
    console.log(e.target.value)
  }
  const submitHandler=()=>{
    getData()
  }
  function getData(){
    fetch(`https://api.github.com/repos/${userName}/${repo}/issues`)
    .then(res=>res.json())
    .then(data=>setData(data))
  }
  return (
    <div style={{backgroundColor:"#bbbbbb" }}>
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Github Issue Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
<h3 variant="primary">Github Issue Finder helps you get all the open/close issues of a repo of a particular userName</h3>
<br/>
<Form inline>
      <FormControl type="text" placeholder="Github Username" className="mr-sm-2" onChange={(e)=>handleUserName(e)}/>
      <FormControl type="text" placeholder="Repository Name" className="mr-sm-2" onChange={(e)=>handleRepo(e)} />
      <Button variant="outline-success" onClick={submitHandler}>Search</Button>
    </Form>
    <br/><br/><br/>
    {data.map(data=>(
      <Jumbotron fluid key={data.id}>
      <Container>
        <h1>Issue By:- {data.user.login} </h1>
        <span>id:- {data.user.id}</span>
        <h4><b>Title:- </b>{data.title}</h4>
        <h4>Description</h4>
        <p>
          {data.body}
        </p>
        <h6 style={{color:"red"}}>{data.state}</h6>
      </Container>
    </Jumbotron>
    ))}


    
</div>
  );
}

export default App;
