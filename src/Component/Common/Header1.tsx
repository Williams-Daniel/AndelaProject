import styled from "styled-components";

const Header1 = () => {
  return (
    <div>
      <Container>
        <Text>
          Andela acquires Qualified.io and Codewars
        </Text>
        <Div>Learn More</Div>
      </Container>
    </div>
  );
};

export default Header1;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
`;
const Text = styled.div`
  color: black;
  font-size: 23px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
margin-left: 25px;
font-size: 17px;
font-weight: 500;
`;
