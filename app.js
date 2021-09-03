
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const year = document.querySelector(".year");
const btn = document.querySelector(".btn");
const tableBody = document.querySelector("#tableBody");
btn.addEventListener("click",function(){
    if (title.value == "" || author.value == "" || year.value == ""){
        alert("Please enter all input box");
    }
else{
    let newRow =  document.createElement("tr");
    let newTitle = document.createElement("td")
    newTitle.innerHTML = title.value;
    let newAuthor = document.createElement("td")
    newAuthor.innerHTML = author.value;
   let newYear = document.createElement("td")
   newYear.innerHTML = year.value;
    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newYear);
    tableBody.appendChild(newRow);
}
 
})
   
  