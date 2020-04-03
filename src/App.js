import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    users: [],
    pageNum: 1,
  }
}  

componentDidMount() {
  const url = `https://reqres.in/api/users?page=${pageNum}`;
  
  fetch(url)
   .then(res.json())
   .then(res => this.setState({ users: res.data, pageNum: pageNum }))
}
  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 class="display-4">User list:</h1>
        </div>
        <div className="users">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.avatar} className="card-img-top" alt={`${user.email} avatar`} />
            <div className="card-body">
              
            </div>
           </div> 
          <div className="card-body">
            <p className="card-text">{post.body}</p>
          </div>
          </div>
          ))}
        </div>
        );
      }
    }
    
export default App;
