import { useEffect, useState } from 'react';
import './App.css';
import video from './video.mp4';
import MyRecipeComponents from './MyRecipeComponents';

function App() {
  const MY_ID = 'edf9ac7d';
  const MY_KEY = 'ee881dba84bbaa43fb37c2e59766be52';

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('');


  useEffect(() => {
    const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=%20${MY_KEY}`);
      const data =  await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    }
    getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
    console.log(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return(
    <div className='App'>
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
        <h1 className='header'>Search for recipes:</h1>
        <h3>You can find more than 2 million recipes here. 
          Simply enter one or more of the ingredients you plan 
          to cook with in the search box and press "Search" or the Enter key.</h3>
      </div>

      <div>
        <form className='container' onSubmit={finalSearch}>
            <input className='search' placeholder='Enter...' onChange={myRecipeSearch} value={mySearch}/>  
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>Search</button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipeComponents key={index}
        label={element.recipe.label}
        cuisineType={element.recipe.cuisineType}
        dishType={element.recipe.dishType}
        fat={element.recipe.totalNutrients.FAT.quantity}
        protein={element.recipe.totalNutrients.PROCNT.quantity}
        carbs={element.recipe.totalNutrients.CHOCDF.quantity}
        image={element.recipe.image}
        ingredients={element.recipe.ingredientLines}
        calories={element.recipe.calories}/>
      ))}
    </div>
  )
}

export default App;


