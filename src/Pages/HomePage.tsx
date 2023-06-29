import styled from "styled-components";
import GlobalButton from "../Component/Reuse/GlobalButton";
import img1 from "../Assets/Images/header-jpeg-webp.webp"

const HomePage = () => {
  return (
    <div>
      <Container>
        <GreenContainer/>
        <Image src={img1}/>
        <Main>
          <Hero>
            <HeroDetailHolder>
            <HeroTitle>Discover brilliant talent around the world</HeroTitle>
            <HeroMessage>
              Join Andela to build your team with developers, engineers, product
              designers, and the best remote technology experts.
            </HeroMessage>
            <GlobalHolder>
            <GlobalButton 
            wid="190px"
            hei="75px"
            bg="#56C870"
            text="Hire Talent"
            col="#173B55"
            fns="20px"
            />
            <GlobalButton 
            wid="220px"
            hei="75px"
            bg="white"
            text="Apply for Jobs"
            col="#173B55"
            fns="20px"
            ML="10px"
            />
            </GlobalHolder>
            </HeroDetailHolder>
          </Hero>
        </Main>
      </Container>
    </div>
  );
};

export default HomePage;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #3b6263;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
width: 100%;
height: 785px;
object-fit: cover;
background-attachment: fixed;
position: fixed;
top: 0;
`;
const Main = styled.div`
  width: 97%;
  height: 100%;
  /* background-color: black; */
  position: absolute;
  z-index: 10;
`;
const Hero = styled.div`
  width: 75%;
  height: 600px;
  /* background-color: chocolate; */
  display: flex;
  justify-content: end;
  flex-direction: column;
`;
const HeroTitle = styled.div`
font-size: 70px;
color: white;
`;
const HeroMessage = styled.div`
font-size: 17px;
margin-top: 30px;
color: white;
`;
const GlobalHolder =styled.div`
display: flex;
margin-top: 40px;
`
const HeroDetailHolder =styled.div`
margin-bottom: 10px;
`
const GreenContainer =styled.div`
width: 100%;
height: 785px;
background-color: rgb(9, 42, 46, 0.3);
position: fixed;
z-index: 1;
`
// const GlobalHolder =styled.div``