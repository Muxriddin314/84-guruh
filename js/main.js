let elLogin = getElement(".admin")
let loginPage =getElement("#loginPage")


let elBody = getElement("body")
let elInput = getElement("input")
let elSubmit = getElement("#submit")
//admin login 
let loginForm = getElement("#loginForm");
let userName = getElement("#user")
let password = getElement("#password")
let loginExit = getElement("#signClosed")
//search
let search = getElement("#search")
let searchInput = getElement("#searchInput")
let searchForm =getElement("#searchForm")
//new post
let newPost = getElement("#newPost")
//add post
let addPostForm = getElement("#postForm")

let addPostImage = getElement("#postImage")
let addPostTitle = getElement("#postTitle")
let addPostExit = getElement("#postExit")


elLogin.addEventListener("click", () => {
  loginPage.classList.remove("hidden")
});
loginExit.addEventListener("click", ()=>{
  loginPage.classList.add("hidden")
})

addPostExit.addEventListener("click", ()=>{
  newPost.classList.add("hidden")
})

function getElement(element){
  return document.querySelector(element)
}


function renderCard(data)
{data.forEach(element => {

  const elUl = document.querySelector("ul")
  const newCard = document.createElement("li")
  newCard.innerHTML = `
  <p>#${element.id}</p>
  <h4 class="text-2xl">Name: ${element.name}</h4>
  <p>email:${element.email}</p>
  <p>body: ${element.body}</p>`
  elUl.appendChild(newCard)
})
};
renderCard(data)
//Login page

loginForm.addEventListener("submit", function(e){
  e.preventDefault();
  nameValue = userName.value
  passwordValue = password.value
  if (nameValue == "admin" && passwordValue == "123456") {
    newPost.classList.remove("hidden")
    loginPage.classList.add("hidden")
  } else {
    alert("Parol yoki Ismda xatolik!")
  }
})
//add post
addPostForm.addEventListener("submit", function(e){
  e.preventDefault();
  let addCard = {
    img: addPostImage.value,
    name: addPostTitle.value,
  }
     data = [];

     data.push(addCard)
     alert("Yangi post+")


   data.forEach(element => {
  const elUl = document.querySelector("ul")
  const newCard = document.createElement("li")
  newCard.innerHTML = `
  <h4 class="text-2xl">Name:</span> ${element.name}</h4>
  <p>email📧 :${element.email}</p>
  <p>body:${element.body}</p>
  <hr class ="w-full mt-16 mb-4" >
  <button class= "py-2 px-8  bg-red-500 hover:bg-red-600 rounded text-white">Delete</button>`
  elUl.appendChild(newCard)
  })
}
)
