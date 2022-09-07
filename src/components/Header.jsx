import styled from "styled-components";
import HeaderLink from "./HeaderLink";

const Container = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.navHeight};
  padding: 0 40px;

  background-color: ${({ theme }) => theme.bg};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 100;
  position: sticky;
  top: 0;
`;

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
`;

export default function Header(props) {
  return (
    <Container>
      <Group>
        <HeaderLink to="albums" text="Portfolio" />
      </Group>
      <Group></Group>
    </Container>
  );
}
