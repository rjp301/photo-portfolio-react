import styled from "styled-components";
import data from "./../data/contact.json";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.textSoft};
  font-size: small;
  font-weight: 200;
`;

function Link(props) {
  const { link } = props;

  return (
    <a
      href={link}
      style={{ textDecoration: "inherit", color: "inherit" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text children={props.children} />
    </a>
  );
}

export default function Footer(props) {
  return (
    <Container id="contact">
      <Wrapper>
        {data.map((i, index) => (
          <Link key={index} link={i.link} children={i.name} />
        ))}
        <Link>&copy; {new Date().getFullYear()} Riley Paul</Link>
      </Wrapper>
    </Container>
  );
}
