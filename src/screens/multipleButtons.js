//https://stackoverflow.com/questions/51923226/react-native-what-is-the-best-way-to-make-a-list-of-button-elements-given-data

import React, { Component} from 'react';
import {
  View,
  Button,
} from 'react-native';

export default class multipleButtons extends Component {

  constructor(props: Object) {
    super(props);
    this.state = 
    {
      movies: [
        { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
        { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
        { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
        { "id": "4", "title": "Inception", "releaseYear": "2010" },
        { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
      ]
    }    
  };
 
  handleOnPress(movieDetails){
    alert(movieDetails.title);
  }

  renderMovieList(){
    return  this.state.movies.map((movie, i, movieArray) =>
      <View 
        key={movie.id} 
        style={{
          height:50,
          padding:20
      }}>
        <Button
          onPress={()=> this.handleOnPress(movie)}
          title={movie.title}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent:'center', backgroundColor: COLORS.backgroundColor}}>
        {this.state.movies.length ? this.renderMovieList(): null}
      </View>
    );
  }
}
