import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello </span>
        <span>world!</span>
        <div>
          {true && 'tr'}
          {this.children}
        </div>
      </div>
    );
  }
}
let a = (
  <MyComponent name="a" id="ida">
    <span>12</span>
  </MyComponent>
);

ToyReact.render(a, document.body);
