import checkImage from "./check.png"

function MyRecipeComponents({label, cuisineType, dishType, 
    fat, protein, carbs, image, ingredients, calories}) {
    
    return(
        <div className="recipe">

            <div className="container">
                <h2>{label} <br /> <span className="spanOne">({cuisineType}, {dishType})</span></h2>   
            </div>

            <div className="top">

                <div className="subTop">
                    <img className="image" src={image} alt="products"/> 
                </div>

                <div className="subTop">
                    <div className="sub left">
                        <h3 className="headerThree">Nutrients:</h3>
                        <p>Protein: {protein.toFixed()}, fat: {fat.toFixed()}, 
                        carbs: {carbs.toFixed()}. Calories: {calories.toFixed()}</p>
                    </div>
                
                    <div className="sub">
                        <ul className="list">
                            <h3 className="headerThree">Ingredients:</h3>

                            {ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    <img className="icon" src={checkImage} alt='check' />{ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MyRecipeComponents;