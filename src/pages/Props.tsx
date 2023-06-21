import React, {useState}from 'react'
import styled from 'styled-components'
import Button from '../components/reUse/Button'


const Props = () => {
    const [change,setChange] = useState([
        {text:"thywill",bg:"red"},
        {text:"codelab",bg:"green"},
        {text:"codelab",bg:"purple"},
        {text:"codelab",bg:"pink"},
        {text:"codelab",bg:"red"}
    ])
  return (
    <div>
        {
            change.map((props)=>(
                <Contain>
                <Container bg={props.bg}>
            {props.text}
            <Button/>
        </Container>
        </Contain>
            ))
             
        }
       
      
    </div>
  )
}

export default Props
const Contain = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div<{bg: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    font-size:50px;
    background-color:${({bg})=>bg};

`

