<script>
        document.getElementById('fetch-button').addEventListener('click', function() {
            fetch('https://rickandmortyapi.com/api/character')
                .then(response => response.json())
                .then(data => {
                    const characterList = document.getElementById('character-list');
                    characterList.innerHTML = '';
                    data.results.forEach(character => {
                        const div = document.createElement('div');
                        div.classList.add('character');
                        div.innerHTML = `<strong>Nombre: ${character.name}</strong><br>Estado: ${character.status}<br>Especie: ${character.species}<br>Genero: ${character.gender}`;
                        characterList.appendChild(div);
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });
</script>
