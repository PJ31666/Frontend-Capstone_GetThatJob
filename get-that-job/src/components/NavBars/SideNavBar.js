import colors from "../../styles/colors";
import styled from "@emotion/styled";
import find from "../pic/find.svg";
import application from "../pic/application.svg";
import following from "../pic/following.svg";
import profile from "../pic/profile.svg";
import logout from "../pic/logout.svg";
import git from "../pic/git.svg";
import ruby from "../pic/ruby.svg";
import react from "../pic/react.svg";

export const StyledSideNavBar = styled.div`
  height: 900px;
  width: 240px;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 32px 0px;
  background-color: ${colors.backgroundDark};
`;

export const StyledSideNavBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  list-style: none;
  align-items: flex-start;
`;

export const StyledSideNavBarList = styled.div`
  height: 20px;
  padding-top: 15px;
  padding-left: 16px;

  font-size: 16px;
  color: ${colors.darkgray};
  display: flex;
  gap: 18px;
  text-align: right;
  align-items: center;
`;
export const StyledPic = styled.img`
  height: 18px;
  width: 18px;
  color: ${colors.darkgray};
  align-items: center;
`;

export const StyledSideNavBarFooter = styled.div`
  padding-left: 16px;
  height: 236px;
  width: 180px;
  font-size: 10px;
  background-color: ${colors.backgroundDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 32px;
  padding-top: 288px;
`;
export const StyledFrame49 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 180px;
  height: 290px;
`;
export const StyledDivCohort = styled.div`
  width: 125px;
  height: 32px;
`;

export const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 180px;
  height: 135px;
`;

export const StyledDivFooterText = styled.div`
  width: fit-content;
  height: 16px;
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const StyledSourceCode = styled.div`
  width: 160px;
  height: 56px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 13px;
`;
export const StyledSideLogo = styled.div`
  display: flex;
  padding-left: 16px;
  padding-bottom: 32px;
`;

function SideNavBarForm() {
  return (
    <StyledSideNavBar>
      <StyledSideLogo>
        <img src={require("../Img/logo.png")} alt="logo" />
      </StyledSideLogo>
      <StyledSideNavBarMenu>
        <StyledSideNavBarList>
          <StyledPic src={find} alt="FindThat" />
          Find that job
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <StyledPic src={application} alt="Application" />
          Your applications
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <StyledPic src={following} alt="Following" />
          Following
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <StyledPic src={profile} alt="Profile" />
          Profile
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <StyledPic src={logout} alt="Log out" />
          Log out
        </StyledSideNavBarList>
        <StyledSideNavBarFooter>
          <StyledFrame49>
            <div>© 202X - Get That Job</div>
            <StyledDivCohort>Codeable - Cohort 7 Final Project</StyledDivCohort>
            <StyledTeam>
              Build with ❤ by:
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Dik Solis
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Jorge Solis
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Fatima Gallardo
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Cielo Farromeque
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                José Becerril
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                Felix Palacios
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={git} alt="Git" />
                José Luis Tordoya
              </StyledDivFooterText>
            </StyledTeam>
            <StyledSourceCode>
              Source code:
              <StyledDivFooterText>
                <img src={ruby} alt="Ruby" />
                Ruby on Rails REST API
              </StyledDivFooterText>
              <StyledDivFooterText>
                <img src={react} alt="React" />
                React Responsive SPA
              </StyledDivFooterText>
            </StyledSourceCode>
          </StyledFrame49>
        </StyledSideNavBarFooter>
      </StyledSideNavBarMenu>
    </StyledSideNavBar>
  );
}

export default SideNavBarForm;
