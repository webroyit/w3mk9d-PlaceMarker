mapboxgl.accessToken = 'pk.eyJ1Ijoid2Vicm95aXQiLCJhIjoiY2s1MWNneDZsMDIxNjNscDhkaWx1ZmlnZiJ9.IAr6w1bZTdHJJ0oxcTYSeg';

// initializes the mapbox
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 9,
    center: [-74.2598655, 40.6971494]
});