import styled from "styled-components"
import {IoMenu} from "react-icons/io5"
import img1 from "../../Assets/Images/WhiteLogo.png"

const Header = ()=>{
    return(
        <div>
            <Container>
                <Main>
                    <Logo src={img1}/>
                    <Icon/>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
background-color: transparent;
position: fixed;
z-index: 10;
top: 70px;
`
const Main = styled.div`
width: 97%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center
;
`
const Logo = styled.img`
height: 49px;
width: auto;
color: white;
`
const Icon = styled(IoMenu)`
font-size: 40px;
color: white;
`