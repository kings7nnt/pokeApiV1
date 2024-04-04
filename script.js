function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
document.getElementById('fetchButton').addEventListener('click', function() {
      // Generar un número aleatorio del 1 al 250
  var pokemonID = generarNumeroAleatorio(1, 750);
  console.log(pokemonID); // Este mostrará un número aleatorio entre 1 y 150

    
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
    .then(response => response.json())
    .then(data => {
        const pokemonInfo = document.getElementById('pokemonInfo');
        pokemonInfo.innerHTML = `
            <h2>${data.name}.</h2>
            <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}"
            width="200" height="300"
            >
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
           
        `;
    });


    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}`)
    .then(response => response.json())
    .then(data2 => {
        //console.log(data2.flavor_text_entries[0].flavor_text)
        //const size_data_entries = data2.flavor_text_entries.length;
        const index = data2.flavor_text_entries.findIndex(dat => dat.language.name === "es");
        console.log(index); // Output the index of the first element that matches the condition
        const pokemonInfo = document.getElementById('pokemonInfoDesc');
        pokemonInfo.innerHTML = `
           <p>Desc: ${data2.flavor_text_entries[index].flavor_text}</p>
        `;

        console.log(data2);
    });

});