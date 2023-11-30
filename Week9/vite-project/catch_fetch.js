import axios from "axios";

const apiUrl = "https://cataas.com/cat?json=true";

export const fetchRandomCatImage = () => {
  // Function to fetch a random cat image using the Fetch API and display it

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const catData = data;
      const catImageContainer = document.getElementById("catImageContainer");

      if (catData._id) {
        const catImage = document.createElement("img");
        catImage.src = `https://cataas.com/cat/${catData._id}`;
        catImage.alt = "Random Cat";
        catImageContainer.appendChild(catImage);
      }
    });
};

export const axiosfetchRandomCatImage = () => {
  axios.get(apiUrl).then((response) => {
    const catData = response.data;
    const catImageContainer = document.getElementById("catImageContainer2");

    if (catData._id) {
      const catImage = document.createElement("img");
      catImage.src = `https://cataas.com/cat/${catData._id}`;
      catImage.alt = "Random Cat";
      catImageContainer.appendChild(catImage);
    }
  });
};
