import "./App.css";
import { useState } from "react";
import ImagePreview from "./components/ImagePreview";
import { getRandomImage } from "./api/getRandomImage";
import FavoriteImageList from "./components/FavoriteImageList";

function App() {
  const [randomImage, setRandomImage] = useState(null);
  // const [favorites, setFavorites] = useState(null);
  // setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <button onClick={() => handleClick()}>Get Random Image</button>
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
      {favorites && <FavoriteImageList photoIds={favorites} />}
    </main>
  );
}

export default App;
