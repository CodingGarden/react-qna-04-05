import { Component, useState, useEffect } from 'react';

function Home() {
  const [message, setMessage] = useState('Hello World');
  // const messageStateStuff = useState('Hello World');
  // const message = messageStateStuff[0];
  // const setMessage = messageStateStuff[1];

  useEffect(() => {
    console.log('FN component mounted!');
    setMessage('Hello World: Mounted!');

    return () => {
      console.log('FN component unmounted!');
    };
  }, []);

  return <h1>{message}</h1>;
}

// eslint-disable-next-line react/function-component-definition
// const Home = () => {
//   return <h1>Hello World</h1>;
// };

// eslint-disable-next-line react/prefer-stateless-function
// class Home extends Component {
//   // eslint-disable-next-line react/state-in-constructor
//   state = { message: 'Hello World' };

//   componentDidMount(): void {
//     console.log('Class component MOUNTED!');
//   }

//   componentWillUnmount(): void {
//     console.log('Class component will unmount!!');
//   }

//   render() {
//     const { message } = this.state;
//     return <h1>{message}</h1>;
//   }
// }

export default Home;
