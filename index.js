console.log("funciona");

function pokemon(){

    let boton = document.getElementById("boton");
    let input = document.getElementById("input").value;
    let img = document.getElementById("img");
    let img2 = document.getElementById("img2");
    let info = document.getElementById("informacion");
   
    

       
            const xhttp = new XMLHttpRequest();
            xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${input}`,true);
            xhttp.send();
            
            xhttp.onreadystatechange = function() {

              if (this.readyState == 4 && this.status == 200) {
                
                let dato=JSON.parse( this.responseText)
                    
                img.setAttribute("src",dato.sprites.front_default)
                img2.setAttribute("src",dato.sprites.back_default)
                        
                info.textContent=dato.name

              }
            };
        }


       