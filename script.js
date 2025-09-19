document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Planetary Playground!");

    const planetVisual = document.getElementById('planet-visual');
    const planetSizeSlider = document.getElementById('planet-size');
    const planetColorPicker = document.getElementById('planet-color');

    function updatePlanet() {
        const size = planetSizeSlider.value;
        const color = planetColorPicker.value;

        planetVisual.style.width = `${size}px`;
        planetVisual.style.height = `${size}px`;
        planetVisual.style.backgroundColor = color;
    }

    planetSizeSlider.addEventListener('input', updatePlanet);
    planetColorPicker.addEventListener('input', updatePlanet);

    // Initial planet state
    updatePlanet();

    const alienSpeciesForm = document.getElementById('alien-species-form');
    alienSpeciesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(alienSpeciesForm);
        const alienData = {
            image: formData.get('alien-image'),
            culture: formData.get('alien-culture'),
            biology: formData.get('alien-biology'),
        };
        console.log('New Alien Species:', alienData);
        alert('Alien species created! Check the console for the data.');
        alienSpeciesForm.reset();
    });

    const languageGeneratorForm = document.getElementById('language-generator-form');
    languageGeneratorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const baseSoundsInput = document.getElementById('base-sounds');
        const wordList = document.getElementById('word-list');

        const baseSounds = baseSoundsInput.value.split(',').map(s => s.trim()).filter(s => s.length > 0);

        if (baseSounds.length === 0) {
            alert('Please enter at least one base sound.');
            return;
        }

        wordList.innerHTML = ''; // Clear previous words
        const generatedWords = new Set();

        while(generatedWords.size < 10) {
            const wordLength = Math.floor(Math.random() * 3) + 2; // Words of 2 or 3 or 4 syllables
            let newWord = '';
            for (let i = 0; i < wordLength; i++) {
                const randomIndex = Math.floor(Math.random() * baseSounds.length);
                newWord += baseSounds[randomIndex];
            }
            generatedWords.add(newWord);
        }

        generatedWords.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            wordList.appendChild(li);
        });
    });
});
