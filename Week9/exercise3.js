const fetchCat = () => {
  fetch("https://cataas.com/cat")
    .then((response) => console.log(response))
    .then((data) => console.log(data))
    .catch((error) => console.error("Error", error));
};

fetchCat();

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
}
