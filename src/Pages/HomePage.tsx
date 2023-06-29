import styled from "styled-components";
import GlobalButton from "../Component/Reuse/GlobalButton";
import img1 from "../Assets/Images/header-jpeg-webp.webp";
import img2 from "../Assets/Images/github-logo.svg";
import img3 from "../Assets/Images/invision-logo.svg";
import img4 from "../Assets/Images/coursera-logo.svg";
import img5 from "../Assets/Images/Kraft-Heinz-Logo.svg";
import img6 from "../Assets/Images/seismic-logo.svg";
import img7 from "../Assets/Images/goldman-sachs-logo.svg";
import img8 from "../Assets/Images/Andela_NewLogos.png";
import img9 from "../Assets/Images/Visual-3.png";
import { BsCheckLg } from "react-icons/bs";

const HomePage = () => {
  return (
    <div>
      <Container>
        <GreenContainer />
        <Image src={img1} />
        <Main>
          <Hero>
            <HeroDetailHolder>
              <HeroTitle>
                Discover <i>brilliant</i> talent around the world
              </HeroTitle>
              <HeroMessage>
                Join Andela to build your team with developers, engineers,
                product designers, and the best remote technology experts.
              </HeroMessage>
              <GlobalHolder>
                <GlobalButton
                  wid="170px"
                  hei="70px"
                  bg="#56C870"
                  text="Hire Talent"
                  col="#173B55"
                  fns="20px"
                />
                <GlobalButton
                  wid="200px"
                  hei="70px"
                  bg="white"
                  text="Apply for Jobs"
                  col="#173B55"
                  fns="20px"
                  ML="10px"
                />
              </GlobalHolder>
            </HeroDetailHolder>
          </Hero>
          <CompsHolder>
            <Comp1>
              <Comp1LeftSide>
                <Comp1Text>
                  Andela Launches New Platform
                  <br />
                  to Power the Future of Customized Work
                </Comp1Text>
              </Comp1LeftSide>
              <Comp1RightSide>
                <GlobalButton
                  wid="200px"
                  hei="70px"
                  bg="#56C870"
                  text="Find out more"
                  col="#173B55"
                  fns="20px"
                />
              </Comp1RightSide>
            </Comp1>
            <Comp2>
              <Comp2Title>Trusted by</Comp2Title>
              <LogoHolder>
                <Logo1 src={img2} />
                <Logo2 src={img3} />
                <Logo3 src={img4} />
                <Logo4 src={img5} />
                <Logo5 src={img6} />
                <Logo6 src={img7} />
              </LogoHolder>
            </Comp2>
            <Comp3>
              <Comp3Left>
                <Comp3Img src={img8} />
              </Comp3Left>
              <Comp3Right>
                <Comp3Text>Build your team today</Comp3Text>
                <Comp3Title>
                  We’ve cracked the code on creating engineering teams
                </Comp3Title>
                <Comp3Details>
                  Skilled engineers, product managers, and designers at your
                  fingertips. An extensive list of technical services to suit
                  your business needs. Start building your world-class team
                  faster with talent from Andela.
                </Comp3Details>
                <GlobalButton
                  wid="200px"
                  hei="65px"
                  bg="#56C870"
                  text="Build your team"
                  col="#173B55"
                  fns="20px"
                />
              </Comp3Right>
            </Comp3>
            <Comp4>
              <Comp4Left>
                <Comp4Text>Empower your future</Comp4Text>
                <Comp4Title>
                  Why <i>the world’s best talent</i> prefers Andela
                </Comp4Title>
                <Comp4Check>
                  <Holder>
                    <Comp4Icon />
                    <Text1>Long-term placements</Text1>
                  </Holder>
                  <Holder>
                    <Comp4Icon />
                    <Text2>rusted career partner</Text2>
                  </Holder>
                  <Holder>
                    <Comp4Icon />
                    <Text3>Career Guidance</Text3>
                  </Holder>
                  <Holder>
                    <Comp4Icon />
                    <Text4>96% match success</Text4>
                  </Holder>
                </Comp4Check>
                <GlobalButton
                  wid="220px"
                  hei="65px"
                  bg="#56C870"
                  text="Find Tech Experts"
                  col="#173B55"
                  fns="20px"
                />
              </Comp4Left>
              <Comp4Right>
                <ImageHolder>
                  <Comp4Image src={img9} />
                </ImageHolder>
              </Comp4Right>
            </Comp4>
            <Comp5>
              <Comp5Text>
                <i>Brilliant</i> minds and companies <br/>come together to build the future
              </Comp5Text>
            </Comp5>
            <Comp6></Comp6>
          </CompsHolder>
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
const Hero = styled.div`
  width: 97%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: purple; */
`;
const Main = styled.div`
  width: 100%;
  min-height: 100%;
  /* background-color: black; */
  position: absolute;
  z-index: 1;
  top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const HeroTitle = styled.div`
  font-size: 68px;
  color: white;
`;
const HeroMessage = styled.div`
  font-size: 17px;
  margin-top: 30px;
  color: white;
`;
const GlobalHolder = styled.div`
  display: flex;
  margin-top: 40px;
`;
const HeroDetailHolder = styled.div`
  margin-bottom: 130px;
`;
const GreenContainer = styled.div`
  width: 100%;
  height: 785px;
  background-color: rgb(9, 42, 46, 0.3);
  position: fixed;
  z-index: 1;
`;
const CompsHolder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #173b3f;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Comp1 = styled.div`
  width: 97%;
  height: 150px;
  /* background-color: burlywood;     */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Comp1LeftSide = styled.div`
  width: 650px;
  /* background-color: brown; */
`;
const Comp1RightSide = styled.div`
  margin-right: 180px;
`;
const Comp1Text = styled.div`
  font-size: 32px;
  color: white;
`;
const Comp2 = styled.div`
  height: 235px;
  width: 100%;
  margin-top: 15px;
  background-color: #e0f1eb;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Comp2Title = styled.div`
  width: 100%;
  height: 40%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #132128;
  margin-top: 10px;
`;
const LogoHolder = styled.div`
  width: 88%;
  height: 60%;
  /* background-color: blueviolet; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo1 = styled.img``;
const Logo2 = styled.img``;
const Logo3 = styled.img`
  height: 15px;
`;
const Logo4 = styled.img`
  height: 20px;
`;
const Logo5 = styled.img`
  height: 25px;
`;
const Logo6 = styled.img``;

const Comp3 = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Comp3Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;
const Comp3Left = styled.div`
  width: 40%;
  height: 84%;
  /* background-color: brown; */
`;
const Comp3Right = styled.div`
  width: 50%;
  height: 84%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Comp3Text = styled.div`
  font-weight: 500;
`;
const Comp3Title = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;
const Comp3Details = styled.div`
  font-size: 17px;
  margin-bottom: 25px;
`;
const Comp4 = styled.div`
  width: 100%;
  height: 580px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: end;
`;
const Comp4Left = styled.div`
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: column;
  /* background-color: cornflowerblue; */
  margin-left: 20px;
`;
const Comp4Right = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: end;
  /* background-color: aquamarine; */
`;
const Comp4Text = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const Comp4Title = styled.div`
  font-size: 44px;
`;
const Comp4Check = styled.div`
  display: flex;
  flex-direction: column;
  margin: 23px 0;
`;
const Comp4Icon = styled(BsCheckLg)`
  margin-right: 12px;
  font-size: 25px;
  color: #02c356;
`;
const Text1 = styled.div`
  font-size: 21px;
`;
const Text2 = styled.div`
  font-size: 21px;
`;
const Text3 = styled.div`
  font-size: 21px;
`;
const Text4 = styled.div`
  font-size: 21px;
`;
const ImageHolder = styled.div`
  height: 94%;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;
const Comp4Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Holder = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;
const Comp5 = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: white;
`;
const Comp5Text = styled.div`
width: 700px;
  font-size: 38px;
  text-align: center;
`;
const Comp6 =styled.div``
// const GlobalHolder =styled.div``
