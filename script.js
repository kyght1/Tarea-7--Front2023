/* Tarea 7*/
/*la URL de la api*/
/*obtengo el data de la API, conn promesas anidadas*/
/*Realizo la solicitud al endpont usando fetch()*/
/*uso async y await*/
async function getData() {
  try {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(API_URL);
    const data = await response.json(); // formato json
    console.log(data.results); //los resultados de la data como objeto
    const HTMLresponse = document.querySelector("#InfoData"); /* Para mostrar en fronts*/
    const tlp = data.results.map(
      (pokemon) =>
        "<li>" +
        "---------Nombre: " +
        pokemon.name +
        "--URL:  " +
        pokemon.url +
        "</li>"
    ); //un map al array para mostar los resultados por el HTML
    HTMLresponse.innerHTML = "<ul>" + tlp.join("") + "</ul>"; // lo muestro en el front
  } catch (error) {
    console.log(error);
  }
}

getData(); //ejecuto.
