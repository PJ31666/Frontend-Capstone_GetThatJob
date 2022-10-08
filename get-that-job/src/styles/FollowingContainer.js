import styled from "@emotion/styled";

const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 60px;
`;

function FollowingContainer(props) {
  return <WrapperContainer>{props.children}</WrapperContainer>;
}

export default FollowingContainer;
