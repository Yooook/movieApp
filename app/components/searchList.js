
 import React from 'react';
 import {
  Text,
  View,
  PixelRatio,
  ListView,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableHighlight
} from 'react-native';
 import styles from '../style/Main'; 
 import Detail from './detail';
  import SerarchResult from './searchResult';
 import TabNavigator from 'react-native-tab-navigator';
 class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      resultMessage:'',
      query:'',
    }
  }

  _pressButton(movie) {
     var _this = this;
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'SerarchResult',
                component:SerarchResult,
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

  fetchData() {
   alert(this.state.loaded)
    const REQUEST_URL =  `http://api.douban.com/v2/movie/search?q=${this.state.query}`;
    fetch(REQUEST_URL)
    .then(response => response.json())
    .then(responseData => {
      this._pressButton(responseData.subjects);

    })
    .done();
  }
  render() {
    return (
        <View style={[styles.container]}>
          <View >
            <TextInput
            style={{height:50,fontSize:18}}
            placeholder="搜索。。。。"
            keyboard="default"
            onChangeText={(query) => {
              this.setState({
                query:query,
              });
            }}
            onSubmitEditing={this.fetchData.bind(this)}
           />
          </View>
        </View>
      );
    }
  }

export {SearchList as default}