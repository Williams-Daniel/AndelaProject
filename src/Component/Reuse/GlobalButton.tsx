import React from "react"
import styled from "styled-components"
import { iButtons } from "../../Utils/Interfaces"




const GlobalButton:React.FC<iButtons> = ({
    wid,
    hei,
    bg,
    col,
    text,
    fns,
    ML
})=>{
    return(
        <div>
            <Container 
            wid={`${wid}`}
            hei={`${hei}`}
            bg={`${bg}`}
            ML={`${ML}`}
            >
                <Text 
                col={`${col}`}
                fns={`${fns}`}
                >{text}</Text>
            </Container>
        </div>
    )
}

export default GlobalButton

const Container = styled.div<{wid:string,hei:string,bg:string,ML:string}>`
width: ${({wid})=>wid};
height: ${({hei})=>hei};
border-radius: 50px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bg})=>bg};
margin-left: ${({ML})=>ML};
`
const Text = styled.div<{fns:string,col:string}>`
font-size: ${({fns})=>fns};
color: ${({col})=>col};
`