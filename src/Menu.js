import React from 'react';

export class Menu extends React.Component {
  // handleClick(e) {
  //   let text = e.target.value;
  //   this.props.chooseVideo
  // }
  render() {
    return (
      <form onClick={this.props.onClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}