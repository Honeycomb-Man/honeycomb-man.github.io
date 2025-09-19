document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const planets = [
        { name: 'Planet Zorg', lat: 20, lng: -30, color: 'green' },
        { name: 'Planet Xylar', lat: -10, lng: 50, color: 'red' },
        { name: 'Planet Aquaria', lat: 40, lng: 100, color: 'blue' }
    ];

    planets.forEach(planet => {
        const planetIcon = L.divIcon({
            className: 'planet-marker',
            html: `<div style="background-color: ${planet.color}; width: 20px; height: 20px; border-radius: 50%;"></div>`,
            iconSize: [20, 20]
        });

        L.marker([planet.lat, planet.lng], { icon: planetIcon })
            .addTo(map)
            .bindPopup(planet.name);
    });
});
