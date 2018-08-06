const titanic = document.getElementById('Titanic')
console.log(titanic)
 
titanic.addEventListener("click", function(event) {
  console.log("I was clicked")
  document.getElementById("title").innerHTML= movies["Titanic"]["title"]
  document.getElementById("director").innerHTML=movies["Titanic"]["director"]
  document.getElementById("genre"),innerHTML=movies["Titanic"]["genre"]
  document.getElementById("filmRating")
})
  


