import colors from "../../styles/colors";
import styled from "@emotion/styled";
import { StyledLogo } from "./navBar";
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

export const StyledSideNavBarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 556px;
  gap: 10px;
  list-style: none;
`;

export const StyledSideNavBarList = styled.li`
  height: 20px;
  padding: 12px 0px;
  font-size: 16px;
  color: ${colors.darkgray};
  display: flex;
  gap: 8px;
`;

export const StyledSideNavBarFooter = styled.div`
  padding: 288px 0px 32px 0px;
  height: 236px;
  width: 180px;
  font-size: 10px;
  background-color: ${colors.backgroundDark};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-bottom: 32px;
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
  align-items: flex-start;
  gap: 4px;
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
`;

function SideNavBarForm() {
  return (
    <StyledSideNavBar>
      <StyledLogo>
        <img src={require("../img/logo.png")} />
      </StyledLogo>
      <StyledSideNavBarMenu>
        <StyledSideNavBarList>
          <img src={find} alt="Find" />
          Find that job
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <img src={application} alt="Application" />
          Your applications
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <img src={following} alt="Following" />
          Following
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <img src={profile} alt="Profile" />
          Profile
        </StyledSideNavBarList>
        <StyledSideNavBarList>
          <img src={logout} alt="Log out" />
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
