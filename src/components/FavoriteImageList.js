import FavoriteImage from "./FavoriteImage";

export default function FavoriteImageList({ photoIds }) {
  const listItems = photoIds.map((photoId) => (
    <FavoriteImage key={photoId} photoId={photoId} />
  ));
  return listItems;
}
