export async function getRandomImage() {
  const url = "https://api.unsplash.com/photos/random";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_NOT_SECRET_CODE}`,
    },
  });
  const randomImage = await response.json();
  return randomImage;
}
