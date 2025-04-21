const claveApi ="3e17fcdd45d54ef78cb120855251604";
const idioma = "es";
const ciudad = "huancayo";

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const response = await fetch(claveApi)
let data = await response.json();

console.log(data);