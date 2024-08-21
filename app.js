// !Building a TV Show Search App using Axios

const form = document.querySelector("#searchForm");
// Creating an event listener to be able to submit an input
form.addEventListener("submit", async function (q) {
  // q = input of the search box
  // The code below gets executed when the `Search` button is clicked
  q.preventDefault(); // Stops the default action of an element from happening
  console.log("Submitted!");
  const searchTerm = form.elements.query.value; //   Stores input data of the `searchForm`

  // API operation using axios
  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );

  //   Calls the `addImage` function to add images to the page
  addImage(res.data);

  //   Empties query inputs
  form.elements.query.value = "";
});

// This function adds image to the html page
const addImage = (shows) => {
  // For loop to loop thorugh all the shows
  for (let result of shows) {
    // Since not all the movies have image, it only proceeds with those that have image
    if (result.show.image.medium) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
