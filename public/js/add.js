//access the form
const placeForm = document.getElementById("place-form");
const placeId = document.getElementById("place-id");
const placeAddress = document.getElementById("place-address");

// send place data to the server
async function addPlace(e){
    e.preventDefault();

    // validation
    if(placeId.value === "" || placeAddress.value === ""){
        alert("Please fill in the fields");
    }

    const sendBody = {
        placeId: placeId.value,
        address: placeAddress.value
    }

    try{
        const res = await fetch("/api/v1/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendBody)
        });

        if(res.status === 400){
            // this will go to catch block
            throw Error("Place already exist");
        }

        alert("Place is added");

        // redirect to home page
        window.location.href = "/index.html";

    }catch(err){
        alert(err);
        return;
    }
}

placeForm.addEventListener("submit", addPlace);