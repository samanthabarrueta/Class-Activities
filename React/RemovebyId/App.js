import React from "react";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends
  };

  delete = (id) => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends})
  };

  render() {
    return (
          this.state.friends.map(friend => (
         <FriendCard
          delete={this.delete}
          name={friend.name}
          image={friend.image}
          id={friend.id}
          occupation={friend.occupation}
          location={friend.location}
          key={friend.id}
        />
          ))
        
      );
      
}
}
export default App;
