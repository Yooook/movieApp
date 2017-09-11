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
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
 import styles from '../style/Main';
 import Detail from './detail';
 import SearchList from './searchList'

 class MovieList extends React.Component {
  constructor(props) {
    super(props);
    let data = new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
      });
    this.state = {
      movies:data.cloneWithRows(this.props.message),
      // loaded:false,
      resultMessage:"hello",

    }; 
    // this.fetchData();
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
    _pressButton1() {
      var _this = this;
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'SearchList',
                component:SearchList,
               
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
    // if (!this.state.loaded) {
    //   return(
    //       <View style={styles.container}>
    //         <View style= {styles.loading}>
    //           <ActivityIndicator 
    //             size='large'
    //             color="#6425c9"
    //            />
    //         </View>
    //       </View>
    //   );
    // }
    return (
        <View>
        <TouchableOpacity onPress={this._pressButton1.bind(this)}>  
   			 <Text style={{fontSize:30}}>点击返回前一个界面</Text>  
        </TouchableOpacity>  
          <ListView 
              dataSource = {this.state.movies}
              renderRow = {this.randerMovieList.bind(this)} />
        </View>
      );
    }
  }

export {MovieList as default}