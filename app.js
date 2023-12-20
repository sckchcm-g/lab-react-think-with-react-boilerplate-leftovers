class ReactContainer extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         name: `Kalvians`
    //     }
    // }
      render(){
          return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning!`,
          React.createElement(`div`,null,`Let's rock and roll`)
          );
      }
    
  }
  const container = document.getElementById('react-container');
  ReactDOM.render(React.createElement(ReactContainer),container);