var map = L.map('map').setView([48.27696522818639, 17.558955889137273], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([48.27696522818639, 17.558955889137273]).addTo(map);