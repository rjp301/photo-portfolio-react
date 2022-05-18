const fs = require("fs");
const path = require("path");

const cleanFiles = (files) => {
  const badFiles = [".DS_Store"];
  return files.filter((i) => badFiles.indexOf(i) === -1);
};

const createId = (string) => string.toLowerCase().replace(/\s/g, "_");

module.exports = () => {
  const albumsPath = path.join("public", "albums");
  const folders = cleanFiles(fs.readdirSync(albumsPath));

  const albums = folders.reduce((acc, album) => {
    const albumPath = path.join(albumsPath, album);
    const result = {};
    result.name = album;
    result.id = createId(album);
    result.link = `/portfolio/${result.id}`
    result.photos = cleanFiles(fs.readdirSync(albumPath)).map((i) =>
      encodeURI(path.join(albumPath, i).replace("public", ""))
    );
    result.cover =
      result.photos.find((i) => i.includes("~")) || result.photos[0];
    acc[result.id] = result;
    return acc;
  }, {});
  return albums;
};
