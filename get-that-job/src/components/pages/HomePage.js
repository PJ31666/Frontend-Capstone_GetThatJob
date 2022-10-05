import colors from "../../styles/colors";
import styled from "@emotion/styled";
import { StyledCreateAccountButton } from "../inputs/buttons";
import group from "../img/group.svg";
import searchLogo from "../img/searchLogo.svg";

export const StyledFatherContainer = styled.div`
  width: 100%;
  height: 833px;
`;
export const StyledSonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1062px;
  height: 737px;
  margin: 0 auto;
  padding: 32px;
  align-items: center;
  gap: 32px;
`;
export const StyledH1 = styled.h1`
  width: 504px;
  height: 148px;
  font-size: 61px;
  font-weight: 300;
  line-height: 74px;
  text-align: center;
`;
export const StyledP = styled.p`
  width: 720px;
  height: 87px;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;
export const StyledButtonContainer = styled.div`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
export const StyledSecondSonContainer = styled.div`
  width: 100%;
  height: 472px;
  display: flex;
  flex-direction: row;
  padding: 72px 0px;
`;
export const StyledDarkPinkContainer = styled.div`
  width: 880px;
  height: 472px;
  background-color: ${colors.darkPink};
`;
export const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 344px;
  padding: 64px 120px;
  gap: 24px;
`;
export const StyledH1Description = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 58px;
  color: ${colors.white};
`;
const StyledPDescription = styled.p`
  width: 640px;
  height: 261px;
  color: ${colors.white};
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
`;
const StyledImageContainer = styled.div`
  display: flex;
  width: 560px;
  height: 472px;
  padding-left: 112px;
  align-items: center;
  background-color: ${colors.white};
`;
function HomePage() {
  return (
    <StyledFatherContainer>
      <StyledSonContainer>
        <StyledH1>
          The place where <br></br> you get that job
        </StyledH1>
        <StyledP>
          With our Machine Learning algorithm you will get that job<br></br> in
          no time. We promise you! Just give us the money and we <br></br> will
          take care of it.
        </StyledP>
        <StyledButtonContainer>
          <StyledCreateAccountButton>
            Create Account Now
          </StyledCreateAccountButton>
        </StyledButtonContainer>
        <img src={group} alt="grupo" />
      </StyledSonContainer>
      <StyledSecondSonContainer>
        <StyledDarkPinkContainer>
          <StyledDescriptionContainer>
            <StyledH1Description>Find your next job</StyledH1Description>
            <StyledPDescription>
              Our Machine learning algorithm is so good that it’s even illegal
              in some countries. Join us to use our barelly legal algorithm that
              is actually a group of interns that work on our basement.<br></br>
              <br></br>
              We have a job for you, no matter your background or previous
              experience. Is sending random memes through chat your only skill?
              That’s ok, we got you, our Rock Star Meme Curator role is here for
              you.
            </StyledPDescription>
          </StyledDescriptionContainer>
        </StyledDarkPinkContainer>
        <StyledImageContainer>
          {" "}
          <img src={searchLogo} alt="Search Logo" />
        </StyledImageContainer>
      </StyledSecondSonContainer>
    </StyledFatherContainer>
  );
}
export default HomePage;
