// Elements in the array for search
let array = [10, 23, 45, 33, 50, 19, 37, 42];
let arrayContainer = document.getElementById("array-container");
let message = document.getElementById("message");

// Display the array
function displayArray() {
  arrayContainer.innerHTML = "";
  array.forEach((value, index) => {
    let element = document.createElement("div");
    element.classList.add("array-element");
    element.id = "element-" + index;
    element.innerHTML = value;
    arrayContainer.appendChild(element);
  });
}

// Linear search function with animation
function linearSearch(arr, target) {
  let index = 0;

  function searchStep() {
    if (index < arr.length) {
      let currentElement = document.getElementById("element-" + index);

      // Highlight the current element being searched
      currentElement.classList.add("searching");

      // If the value is found
      if (arr[index] === target) {
        currentElement.classList.remove("searching");
        currentElement.classList.add("found");

        message.innerText = `Value ${target} found at index ${index}`;
        return; // Stop the search
      } else {
        // Move to the next element after a short delay
        setTimeout(() => {
          currentElement.classList.remove("searching");
          index++;
          requestAnimationFrame(searchStep);
        }, 500);
      }
    } else {
      alert(`Value ${target} not found in the array.`);
      message.innerText = `Value ${target} not found in the array.`;
    }
  }

  requestAnimationFrame(searchStep);
}

// Start the search when the button is clicked
function startSearch() {
  let searchValue = parseInt(document.getElementById("search-value").value);
  if (!isNaN(searchValue)) {
    displayArray();
    linearSearch(array, searchValue);
  } else {
    alert("Please enter a valid number.");
  }
}

// Initial setup
displayArray();
