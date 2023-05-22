const YOUR_API_KEY = "349da89437aa469fa7747b15547b184c";

async function request() {
  const resultado = (
    await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10`
    )
    
  ).data.results;

  const recetas = resultado.map((a) => a.image);
  console.log(resultado)

  const titulos = [
    'Ensalada De Frijoles Cannellini',
    'Arroz frito con coliflor',
    'Batido de plátano y bayas',
    'Sopa De Lentejas Con Pollo',
    'Sopa de espárragos y guisantes',
    'Col rizada con ajo',
    'Estofado de ternera',
    'Jambalaya de frijol rojo',
    'Fajita De Pollo',
    'Hummus y Zaatar'
  ];

  const enlacesHTML = [
    '../detalle-api/detalle1.html',
    '../detalle-api/detalle2.html',
    '../detalle-api/detalle3.html',
    '../detalle-api/detalle4.html',
    '../detalle-api/detalle5.html',
    '../detalle-api/detalle6.html',
    '../detalle-api/detalle7.html',
    '../detalle-api/detalle8.html',
    '../detalle-api/detalle9.html',
    '../detalle-api/detalle10.html'
    
  ];

  let imagesContainer = document.getElementById("images-container");

  recetas.forEach((receta, i) => {
    let nombres = titulos[i];
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");

    let imageElement = document.createElement("img");
    imageElement.src = receta;

    let tituloElement = document.createElement("p");
    tituloElement.textContent = nombres;

    cardElement.appendChild(imageElement);
    cardElement.appendChild(tituloElement);
    imagesContainer.appendChild(cardElement);

    
    imageElement.addEventListener("click", function() {
      
      let rutaHTML = enlacesHTML[i];
      
      window.location.href = rutaHTML;
    });
  });
}

request();
