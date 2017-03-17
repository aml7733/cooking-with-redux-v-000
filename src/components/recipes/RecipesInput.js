import React, { Component } from 'react';


export class RecipesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  }

  handleSubmit(event) {
    event.preventDefault();

  }
  render(){
    return(
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <input

        />
      </form>
    )
  }
}

export const ConnectedRecipesInput = connect(mapDispatchToProps)(RecipesInput)
