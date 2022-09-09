import Masonry from "react-masonry-css";
import AlbumCover from "../components/AlbumCover";
import data from "../data/albums.json";

import "./Albums.css";

export default function Albums(props) {
  return (
    <Masonry
      breakpointCols={{
        default: 4,
        1400: 3,
        850: 2,
        500: 1,
      }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {data.map((album) => (
        <AlbumCover key={album.id} album={album} />
      ))}
    </Masonry>
  );
}
