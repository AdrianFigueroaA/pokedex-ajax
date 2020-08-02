



const evolucion = ()=> {
  let evo = [];
  let input = $("#input").val();
  let url = `https://pokeapi.co/api/v2/evolution-chain/${input}`;

  console.log(url)

  $.ajax({
    url,
    success: function(pokes) {
      
      let infoevo = {
             
              evol:pokes.chain.evolves_to[0].species.name,
             
      }
      console.log(evolucion);
          evo.push(infoevo);
          console.log(evo)
    }
  });
  

}





////////////////////////////////////////////////////////////////

const pokemon = ()=> {
  $("#input").html("");
  $("#infoPokemon").html("");
  $("#pantalla2").html("");
  
  let pokemones = [];
  let input = $("#input").val();
  let url = `https://pokeapi.co/api/v2/pokemon/${input}`;

document.getElementById("pokedex2").style.backgroundImage="none";
document.getElementById("led").style.backgroundColor = "green";
document.getElementById("led2").style.backgroundColor = "yellow";
document.getElementById("led3").style.backgroundColor = "red";



  $.ajax({
    url,
    success: function (result) {
      console.log(result)
      let poke = {
          nombre:result.name,
          numero:result.id,
          tipo: result.types[0].type.name,
          vida: result.stats[0].base_stat,
          ataque: result.stats[1].base_stat,
          defensa: result.stats[2].base_stat,
          velocidad: result.stats[5].base_stat,
          img: result.sprites.front_default,
          img2: result.sprites.back_default,
          ataque1: result.abilities[0].ability.name,
          ataque2: result.abilities[1].ability.name
         
      };
     
      pokemones.push(poke);

      document.getElementById("led").style.backgroundColor = "yellow";
      document.getElementById("led2").style.backgroundColor = "blue";
      document.getElementById("led3").style.backgroundColor = "orange";
      
      
      graficos(pokemones)
      pokemones.forEach((p, i) => {
          $("#infoPokemon").append(`

      <div>
        <hr>
          <p>Nombre: ${p.nombre}</p>
          <p>Numero: ${p.numero}</p>
          <p>Tipo : ${p.tipo}</p>
          
        <hr>
      </div>`
      );


      $("#pantalla2").append(`

      <div>
        <hr>
          <p>Ataque 1: ${p.ataque1}</p>
          <p>Ataque 2: ${p.ataque2}</p>

          <button type="button"  onclick="evolucion()" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Quieres saber su Evolucion?
              </button>
         
        <hr>
      </div>`
      );
       img.setAttribute("src",result.sprites.front_default)
       img2.setAttribute("src",result.sprites.back_default)

      });
    },
  });
}



// funcion canvas 

function graficos(e) {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light1", 
    exportEnabled: false,
    animationEnabled: true,
    title: {
      text: "PokeEstadisticas!"
    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: e[0].vida, label: "Vida" },
        { y: e[0].ataque, label: "Ataque" },
        { y: e[0].defensa, label: "Defensa" },
        { y: e[0].velocidad, label: "Velocidad" },
        
      ]
    }]
  });
  chart.render();
  
  }

  

