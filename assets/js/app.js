const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //faltaba el "." para referenciar la clase correctamente
const $b = document.querySelector('.blog'); //Tenia un # cuando tenia que ser "." ya que es una clase y no un id
const $l = document.querySelector('.location');

//Falta la palabra "async" en la función para poder usar el await
async function displayUser(usersEndpoint) {
  $n.textContent = 'cargando...';
  //Se intento agregar un try catch para las exepciones
  try {
    const response = await fetch(usersEndpoint); //Se pasa directamente el link 
    const data = response.json(); //Se agrego esta linea para cambiar el formato json
    console.log(data);
    //Las comillas de las siguientes 3 lineas estan mal deben ser las invertidas (``)
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (error) {
    console.log('OH NO!');
    console.log(error);
    $n.textContent = `Algo salió mal: ${error}`
  }
}

/* function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
} */

displayUser(baseEndpoint); //se cambio el llamado de la funcion