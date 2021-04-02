import './App.css';
import {Button,Form,Navbar,NavDropdown,Nav,FormControl,InputGroup} from "react-bootstrap"
import { useState } from 'react';
function App() {
  const [userName1,setUserName]=useState("");
  const [repo1,setRepoName]=useState("");
  const [finalData,setFinalData]=useState({
    userName:"",
    repo:""
  })
  const [data,setData]=useState({})
  const handleUserName=(e)=>{
    setUserName(e.target.value)
    console.log(e.target.value)
  }
  const handleRepo=(e)=>{
    setRepoName(e.target.value)
    console.log(e.target.value)
  }
  const submitHandler=()=>{
    setFinalData({
      useName:userName1,
      repo:repo1
    })
  }
  return (
    <>
   <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Github Issue Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
  </Navbar.Collapse>
</Navbar>
<br/><br/>
<Form inline>
      <FormControl type="text" placeholder="Github Username" className="mr-sm-2" onChange={(e)=>handleUserName(e)}/>
      <FormControl type="text" placeholder="Repository Name" className="mr-sm-2" onChange={(e)=>handleRepo(e)} />
      <Button variant="outline-success" onClick={submitHandler}>Search</Button>
    </Form>

</>
  );
}

export default App;
