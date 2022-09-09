import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.figure`
  background-color: #eee;
  position: relative;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Image = styled.img`
  width: 100%;
  display: block;
  height: auto;
`;

const Info = styled.div`
  font-weight: 200;
  text-decoration: none;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.div``;

const View = styled.div`
  padding-top: 5px;
  opacity: 0.7;
  font-style: italic;
  font-weight: 300;
`;

export default function AlbumCover(props) {
  const { album } = props;

  return (
    <Container>
      <Image src={`/images/${album.cover}`} alt={album.name} />
      <Link to={album.id}>
        <Info>
          <Title>{album.name}</Title>
          <View>— view —</View>
        </Info>
      </Link>
    </Container>
  );
}
