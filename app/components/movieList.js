/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
  Text,
  View,
  PixelRatio,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
 import styles from '../style/Main';
 import Detail from './detail';
 const REQUIRE_URL = `http://api.douban.com/v2/movie/top250?start=0&count=10`

 class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
      }),
      loaded:false,
      resultMessage:"hello",

    }; 
    this.fetchData();
  }
  
  fetchData(){
    fetch(REQUIRE_URL)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);
            this.setState({
                movies:this.state.movies.cloneWithRows(responseData.subjects),
                loaded:true
            })
        })
        .done();
  };

  _pressButton(movie) {
     var _this = this;
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'Detail',
                component:Detail,
                params:{
                    message:movie,
                    getResult:function(message){
                        _this.setState({
                            resultMessage:message,
                        })
                    }
                }
            })
        }
  }


  randerMovieList(movie) {
    
    return(
      <TouchableHighlight underlayColor="rgba(34,26,38,0.2)" onPress={()=>this._pressButton(movie)}>
        <View style={styles.item}>
            <View style={styles.itemImage}>
              <Image
                style={styles.image}
                source={{uri:movie.images.large}} />
            </View>
            <View style={styles.itemContent}>
              <Text style={styles.itemHeader}>{movie.title}</Text>
              <Text style={styles.itemMeta}>{movie.original_title} ( {movie.year} ) </Text>
              <Text style={styles.redText}>
                {movie.rating.average}
              </Text>
            </View>
        </View>
        </TouchableHighlight>
    );
  }

  render() {
    if (!this.state.loaded) {
      return(
          <View style={styles.container}>
            <View style= {styles.loading}>
              <ActivityIndicator 
                size='large'
                color="#6425c9"
               />
            </View>
          </View>
      );
    }
    return (
        <View>
          <ListView 
              dataSource = {this.state.movies}
              renderRow = {this.randerMovieList.bind(this)} />
        </View>
      );
    }
  }

export {MovieList as default}