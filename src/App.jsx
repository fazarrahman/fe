import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
      }
      this.callOauth = this.callOauth.bind(this);
   };
   callOauth() {
    fetch('http://127.0.0.1:8080/auth/google/login')
    .then(res => res.json())
    .then((url) => {
      window.location.assign(url);
    })
    .catch(console.log)
   }
   render() {
      return (
         <div>
            <button onClick = {this.callOauth}>Google Login</button>
         </div>
      );
   }
}
export default App;