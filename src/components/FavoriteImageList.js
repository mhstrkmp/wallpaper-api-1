import FavoriteImage from "./FavoriteImage";

export default function FavoriteImageList({ photoIds }) {
  return (
    <div>
      {photoIds.map((photoId) => (
        <FavoriteImage key={photoId} photoId={photoId} />
      ))}
    </div>
  );
}
