import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  color: ${({ theme }) => theme.textSoft};

  & * {
    text-decoration: none;
    padding-bottom: 2px;
  }

  background-image: linear-gradient(
    ${({ theme }) => theme.text},
    ${({ theme }) => theme.text}
  );
  background-size: 0% 0.1em;
  background-position-y: 100%;
  background-position-x: 0%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active,
  & .active {
    background-size: 100% 0.1em;
    color: ${({ theme }) => theme.text};
  }
`;

export default function HeaderLink(props) {
  const { to, text } = props;

  return (
    <Container>
      <NavLink to={to}>{text}</NavLink>
    </Container>
  );
}
