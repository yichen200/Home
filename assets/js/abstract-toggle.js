// Function to toggle abstract visibility
function toggleAbstract(id) {
  var abstract = document.getElementById(id);
  if (abstract.style.display === "none") {
    abstract.style.display = "block";
  } else {
    abstract.style.display = "none";
  }
}

// Global click listener to hide abstract if clicked outside
document.addEventListener("click", function (event) {
  // Abstract elements and their corresponding buttons
  var abstract = document.getElementById("abstract-raindrop");
  var button = document.getElementById("abstract-button-raindrop");

  // Check if the click is outside both the abstract and the button
  if (
    abstract.style.display === "block" &&
    !abstract.contains(event.target) &&
    !button.contains(event.target)
  ) {
    abstract.style.display = "none";
  }
});

// Prevent click event on button from propagating to the document
document.getElementById("abstract-button-raindrop").addEventListener("click", function (event) {
  event.stopPropagation(); // Prevents event bubbling
});

// Prevent click event on abstract content from propagating to the document
document.getElementById("abstract-raindrop").addEventListener("click", function (event) {
  event.stopPropagation(); // Prevents event bubbling
});
