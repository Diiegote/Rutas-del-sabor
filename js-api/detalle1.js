const YOUR_API_KEY = "349da89437aa469fa7747b15547b184c";

async function request() {
  const resultado = (
    await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=10`
    )
    
  ).data.results;

//   const recetas = await resultado.map((a) => a[0]?.image);
  const recetas = resultado[0].image;
  console.log(resultado[0].image);
  let imagesContainer = document.getElementById("detalle0");

  let imageElement = document.createElement("img");
    imageElement.src = recetas;
    imagesContainer.appendChild(imageElement);
  
    }
    request()