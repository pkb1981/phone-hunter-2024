// function used for loading spinners & phone brand
const loadAllPhones=async(status,searchText)=>{
    console.log(searchText);
    // spinner stops after 3 seconds
    document.getElementById("spinner").style.display="none";

    // fetch phone api using .then 

    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    // .then(res=>res.json())
    // .then(data=>console.log(data.data))

    // fetch phone api using async await
    // adding condition for searching any phone 
    const response= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`);
    const data=await response.json();
    console.log(data);
    
    // condition for all phones and 6 phones
    if(status){
        displayAllPhones(data.data);
    }
    else{
        displayAllPhones(data.data.slice(0,6));
    }
    // will show 6 phones by slice method
    

}
// displaying phones 

const displayAllPhones=(phones)=>{
   const phoneContainer=document.getElementById("phones-container");
   phones.forEach((phone) => {
    // phone object destructuring from API
    const{brand,image,slug}=phone;
        const div=document.createElement("div");

        // import card from daisyUI
        div.innerHTML=`<div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">

    <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>`;
phoneContainer.appendChild(div);
   }); 
};

// accessing show all button by onclick arrow function in HTML

const handleShowAll=()=>{
    loadAllPhones(true)
}


// search field activation
const handleSearch=()=>{
    // showing the spinner by spinner id and display block
    document.getElementById("spinner").style.display="block";
    // accessing input field of search box using id
    const searchText=document.getElementById('search-box').value;

// set loading function activated after 3 seconds
// only showing 6 phones by value false
    setTimeout(function(){
        loadAllPhones(false,searchText)
    },3000)
}
//function call to load
loadAllPhones(false,"iphone");

// loading phone details api

const phoneDetails=async(slugs)=>{
    const response=await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`);
    const data=await response.json();
    console.log(data.data);
    
    // destructuring data.data 
    const{brand,image,slug}=data.data;


    const modalContainer=document.getElementById("modal-container");

     // creating the modal details by using daisyUI modal
    modalContainer.innerHTML=`
    <dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">${brand}</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    `;
// showing the modal by pressing the show details
    my_modal_1.showModal();
}