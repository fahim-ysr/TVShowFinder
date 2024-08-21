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
  const imageContainer = document.getElementById("imageContainer");
  // Clears images from previous search
  imageContainer.innerHTML = "";

  // For loop to loop thorugh all the shows
  for (let result of shows) {
    // Since not all the movies have image and links, it only proceeds with those that have
    if (result.show.image.medium && result.show.officialSite) {
      const link = document.createElement("A");
      link.href = result.show.officialSite; //Assigns URL to the images
      link.target = "_blank"; // Opens in a new tab

      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      // document.body.appendChild(img);
      // imageContainer.append(img);
      link.append(img);
      imageContainer.append(link);
    }
  }
};
