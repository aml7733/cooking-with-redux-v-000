import React, { Component } from 'react';

export class Recipes extends Component {
  render(){
    let recipes = this.props.recipes.map((recipe) => {
      return <li>{recipe.name}</li>
    })
    return(
        <div>
          <ul>
            {recipes}
          </ul>
        </div>
    )
  }
}


export const ConnectedRecipes = connect(mapStateToProps)(Recipes)

function mapStateToProps(state) {
  return {recipes: state.recipes}
}
