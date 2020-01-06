mapboxgl.accessToken = "pk.eyJ1Ijoid2Vicm95aXQiLCJhIjoiY2s1MWNneDZsMDIxNjNscDhkaWx1ZmlnZiJ9.IAr6w1bZTdHJJ0oxcTYSeg";

// initializes the mapbox
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 9,
    center: [-74.2598655, 40.6971494]
});

// fetch data from the server
async function getPlaces(){
    // get data from server
    const res = await fetch("/api/v1/places");
    
    // convert the data to json
    const data = await res.json();

    const places = data.data.map(place => {
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [place.location.coordinates[0], place.location.coordinates[1]]
            },
            properties: {
                placeId: place.placeId,
                icon: "shop"
            }
        }
    });

    loadMap(places);
}

// load map with marker
function loadMap(places){
    map.on("load", function() {
        map.addLayer({
            id : "points",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: places
                }
            },
            layout: {
                "icon-image": "{icon}-15",
                "icon-size": 1.5,
                "text-field": "{placeId}",
                // prevent the icon from being on top of eachother
                "text-offset": [0, 0.9],
                "text-anchor": "top"
            }
        });
    });
}

getPlaces();