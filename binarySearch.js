const arrayContainer = document.getElementById('array-container');
const searchValueInput = document.getElementById('search-value');
const startButton = document.getElementById('start-button');
const msg= document.getElementById('msg');
// Sample sorted array
const sortedArray = [1, 3, 5, 7, 11, 13, 15, 19, 24, 25, 27, 31];

// Function to render the array
function renderArray(array, highlightIndices = []) {
    arrayContainer.innerHTML = '';
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.innerText = value;

        if (highlightIndices.includes(index)) {
            bar.classList.add('highlight');
        }

        arrayContainer.appendChild(bar);
    });
}

// Binary search animation
async function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Highlight the current search indices
        renderArray(array, [mid]);

        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second

        if (array[mid] === target) {
            renderArray(array, [mid]); // Highlight found index
            msg.innerText=`Found ${target} at index ${mid}!`;
            return;
        }

        if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    alert(`${target} not found in the array.`);
}

// Event listener for the button
startButton.addEventListener('click', () => {
    const target = parseInt(searchValueInput.value);
    if (!isNaN(target)) {
        binarySearch(sortedArray, target);
    } else {
        alert('Please enter a valid number.');
    }
});

// Initial rendering
renderArray(sortedArray);
