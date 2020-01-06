//access the form
const placeForm = document.getElementById("place-form");
const placeId = document.getElementById("place-id");
const placeAddress = document.getElementById("place-address");

// send place data to the server
function addPlace(e){
    e.preventDefault();

    if(placeId.value === "" || placeAddress.value === ""){
        alert("Please fill in the fields");
    }
}

placeForm.addEventListener("submit", addPlace);