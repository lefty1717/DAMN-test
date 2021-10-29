import React from 'react'
import pasta from '../../images/pasta.jpg'
import Tabs from './Tabs'

function RecipeItem() {
  return (
    <div className="recipeItem__container">
        <div className="recipeItem__wrap">
            <img src={pasta} alt="" />
              <div className="recipeItem__box">
                  <h4>肉醬義大利麵</h4>
              </div>
        </div>
        <Tabs/>
    </div>
  )
}

export default RecipeItem

