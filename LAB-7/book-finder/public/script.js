let page = 1;

function searchBooks(){

const q = document.getElementById("search").value;

fetch(`http://localhost:4000/books?q=${q}&page=${page}`)
.then(res => res.json())
.then(data => {

let output = "";

data.books.forEach(book => {

output += `
<p>
<b>${book.title}</b><br>
Author: ${book.author}<br>
Year: ${book.year}<br>
Rating: ${book.rating}
</p>
<hr>
`;

});

document.getElementById("results").innerHTML = output;

});

}

function nextPage(){
page++;
searchBooks();
}

function prevPage(){
if(page > 1){
page--;
searchBooks();
}
}