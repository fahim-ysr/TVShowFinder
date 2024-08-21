// !Building a TV Show Search App using Axios

let msgDisplayed = false;
const form = document.querySelector("#searchForm");
// Creating an event listener to be able to submit an input
form.addEventListener("submit", async function (q) {
  // q = input of the search box
  // The code below gets executed when the `Search` button is clicked
  q.preventDefault(); // Stops the default action of an element from happening
  console.log("Submitted!");

  const searchTerm = form.elements.query.value.trim(); //   Stores input data of the `searchForm`

  // Shows "No input" if the input is empty
  if (searchTerm == "") {
    displayMsg("No input");
    return; //Exits the function if search is empty
  }

  // API operation using axios
  try {
    const res = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );

    //   Calls the `addImage` function to add images to the page
    addImage(res.data);
  } catch (err) {
    console.log("Error!", err);
    displayMsg("Sorry no items found.");
  }
  //   Empties query inputs
  form.elements.query.value = "";
});

// This function adds image to the html page
const addImage = (shows) => {
  const imageContainer = document.getElementById("imageContainer");
  // Clears images from previous search
  imageContainer.innerHTML = "";
  msgDisplayed = false;

  // Checks if there are any shows (with image and link) at all
  const hasShows = shows.some(
    (res) => res.show.image.medium && res.show.officialSite
  );

  // Informs if no shows with the title are found
  if (!hasShows) {
    const msg = document.createElement("p");
    msg.textContent = "Sorry no items found.";
    msg.style.textAlign = "center";
    msg.style.fontSize = "25px";
    msg.style.marginTop = "20px";
    document.body.append(msg);
  }

  // For loop to loop thorugh all the shows
  for (let result of shows) {
    // Since not all the movies have image and links, it only proceeds with those that have
    if (result.show.image.medium && result.show.officialSite) {
      const link = document.createElement("a");
      link.href = result.show.officialSite; //Assigns URL to the images
      link.target = "_blank"; // Opens in a new tab

      const img = document.createElement("img");
      img.src = result.show.image.medium;
      // document.body.appendChild(img);
      // imageContainer.append(img);
      link.append(img);
      imageContainer.append(link);
    }
  }
};

// Function to display messages
const displayMsg = (message) => {
  // Checks if the flag is true or not
  if (!msgDisplayed) {
    imageContainer.innerHTML = ""; // Empties the Container
    const msg = document.createElement("p");
    msg.textContent = message;
    msg.style.textAlign = "center";
    msg.style.fontSize = "25px";
    msg.style.marginTop = "20px";
    imageContainer.appendChild(msg);
    msgDisplayed = true; // Sets flag to true since msg is displayed
  }
};
