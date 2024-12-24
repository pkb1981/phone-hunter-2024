// function used for loading spinners
const loadAllPhones=async(status)=>{
    console.log("oao 3 seconds gone");
    // spinner stops after 3 seconds
    document.getElementById("spinner").style.display="none";

    // fetch phone api using .then 

    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    // .then(res=>res.json())
    // .then(data=>console.log(data.data))

    // fetch phone api using async await 
    const response= await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
    const data=await response.json();
    
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
    console.log(phones);
}

// accessing show all button by onclick arrow function in HTML

const handleShowAll=()=>{
    loadAllPhones(true)
}


// search field activation
const handleSearch=()=>{
    // showing the spinner by spinner id and display block
    document.getElementById("spinner").style.display="block";
// set loading function activated after 3 seconds
    setTimeout(function(){
        loadAllPhones()
    },3000)
}
//function call to load
loadAllPhones();