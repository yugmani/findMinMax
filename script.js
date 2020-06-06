//Given array of numbers
let list = [21, 2, -26, 98, 54, 100, 500, 63, 44, 11];

//call functions
listArray(list);
findMin(list);
findMax(list);

//Function to find minimum value in an array.
function findMin(arr){
    let minimum = arr[0];
    for (let i=0; i<arr.length; i++){
        if (minimum > arr[i]) {
            minimum = arr[i];
        }
    }
    console.log(minimum);
    let minEl = document.getElementById("min");
    minEl.innerHTML = `<h2>Minimum: ${minimum}</h2>`;
}


//Function to find maximum value in an array
function findMax(arr){
    let maximum = arr[0];
    for (let i=0; i<arr.length; i++){
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    console.log(maximum);
    let maxEl = document.getElementById("max");
    maxEl.innerHTML = `<h2>Maximum: ${maximum}</h2>`;
}

//function to display each numbers to viewers.
function listArray(arr){
    let html = `<ul>`;
    for (let i=0; i<arr.length; i++){
        html += `<li> <strong>${arr[i]} </strong></li>`;
    }
    html += `</ul>`;
    let listEl = document.getElementById("list");
    listEl.innerHTML = html;
}