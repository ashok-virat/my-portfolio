import { PureComponent } from "react";
import { Component } from "react";


// ERROR BOUNDARY
// class Child extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'ashok',
//             count: 0
//         }
//         this.increaseCount = this.increaseCount.bind(this)  // we are binding the increase count function into this class instance
//     }

//     increaseCount() {
//         console.log(this)
//         const count = this.state.count + 1
//         this.setState({ count })
//     }

//     render() {
//         if (this.state.count === 5) {
//             throw Error('testing the error boundary')
//         }
//         return <>{this.state.count} <button onClick={this.increaseCount}>update count {this.state.name}</button></>
//     }
// }


// export default class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: ''
//         }
//     }

//     componentDidCatch(error, errorInfo) {
//         this.setState({ error: error.message })
//     }

//     render() {
//         if (this.state.error) {
//             return <>{this.state.error}</>
//         }
//         return <><h1>Parent</h1> <Child /></>
//     }
// }


// HIGHER ORDER COMPONENT BOUNDARY
// // this HOC will log the props . just logger compnent
// const hocComponent = (Component) => {
//     return (props) => {
//         // logger
//         console.log(props)
//         return <><div style={{ color: 'blue' }}><Component {...props}></Component></div></>
//     }
// }

// const MyComponent = ({ name }) => {
//     return <div>Hello, {name}!</div>;
// };

// const MySecondComponentComponent = ({ name }) => {
//     return <div>Hello, {name}!</div>;
// };

// // Enhance MyComponent with the HOC
// const EnhancedComponent = hocComponent(MyComponent);

// const Second = hocComponent(MySecondComponentComponent)


// export default class Home extends Component {
//     render() {
//         return <><EnhancedComponent name="John">
//         </EnhancedComponent> <Second name="big"></Second></>
//     }
// }


// PURE COMPONENT
// class Child extends PureComponent {
//     render() {
//         console.log('child render')
//         return <>child</>
//     }
// }


// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//     increment() {
//         let count = this.state.count + 1
//         this.setState({ count })
//     }
//     render() {
//         return <>Parent {this.state.count} <button onClick={() => {
//             this.increment()
//         }}>increment</button> <Child></Child></>
//     }
// }