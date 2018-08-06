document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
   const titanic = document.getElementById('Titanic')
   console.log(titanic)
 
  titanic.addEventListener("click", function(event) {
    document.getElementById("title").innerHTML=movies["Titanic"]["title"]
  })
  
})


