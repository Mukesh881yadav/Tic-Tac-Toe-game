import React,{useState} from 'react';
import Icons from './Component/Icons';

import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,CardBody,Container,Button,Col,Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../src/App.css'

const itemArray=new Array(9).fill("empty")
console.log(itemArray)

function App() {
  const [isCross,setIsCorss]=useState(false)

  const [winMessage,setWinMessage]=useState('')


  const reloadGame=()=>{
   setIsCorss(false)
   setWinMessage('')
   itemArray.fill("empty",0,9)
  }


  const chekWinner=()=>{
   if(itemArray[0]===itemArray[1] && itemArray[0]===itemArray[2] && itemArray[0]!=="empty"){
    setWinMessage(`${itemArray[0]} Wins`)
   }
   else if(itemArray[3]==="empty" && itemArray[3]===itemArray[4] && itemArray[4]!==itemArray[5]){
    setWinMessage(`${itemArray[3]} Wins`)
   }
   else if(itemArray[6]!=="empty" && itemArray[6]===itemArray[7] && itemArray[7]===itemArray[8]){
   setWinMessage(`${itemArray[6]} Wins`)
   }

  else if(itemArray[0]!=="empty" && itemArray[0]===itemArray[3] && itemArray[3]===itemArray[6]){
  setWinMessage(`${itemArray[0]} Wins`)
    }

  else if(itemArray[1]!=="empty" && itemArray[1]===itemArray[4] && itemArray[4]===itemArray[7]){
  setWinMessage(`${itemArray[1]} Wins`)
  }

 else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[5] && itemArray[5]===itemArray[8]){
 setWinMessage(`${itemArray[2]} Wins`)
  }


  else if(itemArray[0]!=="empty" && itemArray[0]===itemArray[4] && itemArray[4]===itemArray[8]){
  setWinMessage(`${itemArray[0]} Wins`)
   }

          else if(itemArray[2]!=="empty" && itemArray[2]===itemArray[4] && itemArray[4]===itemArray[6]){
            setWinMessage(`${itemArray[2]} Wins`)
            }
    
  }

 const changeItem=ItemNumber=>{
   if(winMessage){
    return toast(winMessage,{type:"success"})
   }
   
   if(itemArray[ItemNumber]==="empty"){
    itemArray[ItemNumber]=isCross?"cross":"circle"
    console.log( itemArray[ItemNumber] +" my-data")
      setIsCorss(!isCross)
   }
   else{
    return toast("already Filled",{type:"error"})
   }
   chekWinner();
 }
  return ( 
    <Container className='p-5'>
      <ToastContainer position='bottom-center'/>
      <Row>
         <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-white text-uppercase text-center'>{winMessage}</h1>
              <button color='success' className='btntask' onClick={reloadGame}>Reload The Game</button>
            </div>
          ) :(
            <h1 className='text-center text-danger'>{isCross ? "Cross" : "Circle" } Turns</h1>
          ) }
          <div className='grid'>
            {itemArray.map((item,index)=>{
      return <Card  color="warning" key={index} onClick={()=>changeItem(index)}>
                <CardBody className='box'>
                  <Icons name={item}/>
                </CardBody>
              </Card>
            })}
           </div>
         </Col>  
      </Row>
    </Container>
  );
}
export default App;
