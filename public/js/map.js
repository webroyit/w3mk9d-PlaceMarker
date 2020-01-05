mapboxgl.accessToken = "pk.eyJ1Ijoid2Vicm95aXQiLCJhIjoiY2s1MWNneDZsMDIxNjNscDhkaWx1ZmlnZiJ9.IAr6w1bZTdHJJ0oxcTYSeg";

// initializes the mapbox
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 9,
    center: [-74.2598655, 40.6971494]
});

function loadMap(){
    map.on("load", function() {
        map.addLayer({
            id : "points",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [-74.2598655, 40.6971494]
                            },
                            properties: {
                                placeId: "0001",
                                icon: "shop"
                            }
                        },
                        {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [-74.1598655, 40.6971494]
                            },
                            properties: {
                                placeId: "0002",
                                icon: "shop"
                            }
                        }
                    ]
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

loadMap();