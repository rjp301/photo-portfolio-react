import { useParams } from "react-router-dom";
import styled from "styled-components";
import albums from "./../data/albums.json";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pagePadding};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  padding-bottom: 5px;
`;

const Desc = styled.p`
  font-size: 0.9rem;
  font-weight: 200;
  padding-bottom: ${({ theme }) => theme.pagePadding};
`;

const ImageContainer = styled.div`
  height: calc(
    100vh - ${({ theme }) => theme.navHeight} - 2 *
      ${({ theme }) => theme.pagePadding} + 10px
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`

  width: 100%;
  height: 100%;

  align-self: center;
  object-fit: contain;
  max-width: 100%;
  /* box-shadow: ${({ theme }) => theme.boxShadow}; */
  z-index: 1;
`;

export default function Album(props) {
  const { albumId } = useParams();
  const album = albums.find((i) => i.id === albumId);

  return (
    <Container>
      <Title>{album.name}</Title>
      <Desc>{album.description}</Desc>
      <Wrapper>
        {album.images.map((image, index) => (
          <ImageContainer key={index} >
            <Image src={`/images/${image}`} />
          </ImageContainer>
        ))}
      </Wrapper>
    </Container>
  );
}
