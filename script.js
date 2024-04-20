var movieArray = []
function Movie(title, rating, year) {
  this.title = title;
  this.rating = rating;
  this.year = year;
}
var ul = document.getElementById('VisualList');
const myButton = document.getElementById("Add");
myButton.addEventListener("click", addMov);
function addMov(){
  var t = document.getElementById("EntryTitle");
  var r = document.getElementById("EntryRating");
  var y = document.getElementById("EntryYear");
  if (t.value != ""&&r.value != ""&&y.value != "") {
    let newMovie = {title:t.value, rating:r.value, year:y.value};
    movieArray.push(newMovie);
  } else {
    alert("Warning! Incomplete data provided! Movie will not be added to the list.")
  }
}
const myButton2 = document.getElementById("Show");
myButton2.addEventListener("click", showMovs);
function showMovs(){
  ul.innerHTML = "";
  for (let i = 0; i < movieArray.length; i++) {
    var li = document.createElement('li');
    li.textContent = "Movie: "+movieArray[i].title+", Rating: "+movieArray[i].rating+", Year: "+movieArray[i].year;
    ul.appendChild(li);
  }
}
