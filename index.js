function pokemon() {
  console.log("funciona");
  let pokemones = [];
  let input = $("#input").val();
  console.log(input);
  let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
console.log(url)
  $.ajax({
    url,
    success: function (result) {
      console.log(result);
      let poke = {
          numero: result.id,
          nombre: result.name,
          tipo:result.types[0].type.name,
          ataque: result.stats[1].base_stat,
          vida: result.stats[0].base_stat,
          defensa: result.stats[2].base_stat,
          velocidad: result.stats[5].base_stat,
          img: result.sprites.front_default,
          img2: result.sprites.back_default
      };
      pokemones.push(poke);
      console.log(pokemones);

      $("#infoPokemon").html("");
      pokemones.forEach((p, i) => {
          $("#infoPokemon").append(`

      <div>
          <p>Nombre: ${p.nombre}</p>
          <p>Numero: ${p.numero}</p>
          <p>Tipo: ${p.tipo}</p>
          <p>Vida: ${p.vida}</p>
          <p>Ataque: ${p.ataque}</p>
          <p>Defensa: ${p.defensa}</p>
          <p>Velocidad: ${p.velocidad}</p>
      </div>

       <div>
               <img src="${p.img}"/>
               <img src="${p.img2}"/>
       </div>`);
      });

    },
  });
}


