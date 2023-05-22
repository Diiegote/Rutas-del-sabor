const YOUR_API_KEY = "ea6d6cd8ff54453a9dd74ef4f46e49be";

async function request() {
  const resultado = (
    await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10`
    )
    
  ).data.results;


  const recetas = resultado[9].image;
  let imagesContainer = document.getElementById("detalle9");

  let imageElement = document.createElement("img");
    imageElement.src = recetas;
    imagesContainer.appendChild(imageElement);
  
    }
    request()