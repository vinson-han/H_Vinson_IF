const genre = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

const random = Math.floor(Math.random() * genre.length - 1);

const url = `https://api.api-ninjas.com/v1/quotes?category=${genre[random]}`;

let localcache = {};

async function requestQuote() {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": "prIRIryEhGl6CDIIxLRczw==968JRhCOhwKGKCKK",
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    generateQuote(json);
  } catch (error) {
    console.error(error);
  }
}

function generateQuote(json) {
  console.log(json);
  document.getElementById(
    "quote"
  ).textContent = `${json[0].quote} - ${json[0].author}`;
}

generateQuote;
