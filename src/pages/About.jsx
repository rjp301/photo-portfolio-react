import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  max-width: 1200px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  clip-path: circle();
`;

const Section = styled.section`
  & * {
    padding-bottom: 8px;
  }
`;

export default function About(props) {
  return (
    <Container>
      <Image src="/profile.jpg" />
      <Section>
        <h2>About</h2>
        <p>
          Riley Paul is a photographer and engineer, born and raised among the
          foothills of the Canadian Rockies. He has traveled all across Canada,
          from coast to coast. He spent five years on the island of Newfoundland
          pursuing his degree and now lives on the west coast in North
          Vancouver.
        </p>
        <p>
          Best known for his outdoor photography and portraiture - he prides
          himself on his ability to discover beauty in unexpected places.
        </p>
      </Section>
    </Container>
  );
}
