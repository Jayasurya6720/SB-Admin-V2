import React, { useEffect,useState  } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate , useParams} from 'react-router-dom';


function AddUser({user,setUser}) {
  let [name,setName] = useState("")
  let [mobileNo,setMobile] = useState("")
  let [email,setEmail] = useState("")
  let [dob,setDob] = useState("")
  let Navigate = useNavigate()
  let params = useParams()
  
 
  let handleSubmit = ()=>{
    let newUser = {name,mobileNo,email,dob}
    let newArray = [...user]
    if(params.id!==undefined)
    {
      newArray.splice(params.id,1,newUser)
    }
    else{
      newArray.push(newUser)
    }
    setUser(newArray)
    Navigate('/dashboard')
  }
  
  useEffect(()=>{
   if(params.id !== undefined)
    {
      setName(user[params.id].name)
      setMobile(user[params.id].mobileNo)
      setEmail(user[params.id].email)
      setDob(user[params.id].dob)
    }
  
  },[])
  return (
    <div className='container-fluid'>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Enter a Name</Form.Label>
        <Form.Control type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Enter a mobileNo</Form.Label>
        <Form.Control type="text" placeholder="mobile" value={mobileNo} onChange={(e)=>setMobile(e.target.value)} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Dirth Of Birth</Form.Label>
        <Form.Control type="date" value={dob} onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddUser