class App extends React.Component{
    constructor(){
      super();
      this.state = {
        name: 'Nayem'
      };
    }
    changeName = () => {
      this.setState({name: 'Ahmed'});
    }
    render(){
      return(
        <>
          <h1>Hello {this.state.name} </h1>
          <button onClick={this.changeName}>Change Name</button>
        </>
      );
    }
  }