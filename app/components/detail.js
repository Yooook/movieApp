/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import MovieList from './movieList';
 import styles from '../style/Main';


 class Detail extends React.Component {
      constructor(props){
        super(props);
        this.state = {
            message:"",
            load:false
        };
        const REQUIRE_URL = `http://api.douban.com/v2/movie/subject/${this.props.message.id}`;
       	this.fetchData(REQUIRE_URL);
    }


	    fetchData(url){
	    fetch(url)
	        .then(response => response.json())
	        .then(responseData => {
	            console.log(responseData);
	            this.setState({
	            	
	                message:responseData.summary,
	                load:true
	                
	            })
	        })
	        .done();
	  };

     _pressButton(){
        const { navigator } = this.props;
        if(this.props.getResult){
            this.props.getResult("This is from SecondPageComponent");
        }

        if(navigator){
            navigator.pop();
        }
    }



 
  render() {
  	 if (!this.state.load) {
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

   let movie = this.state.message;
  let summary = movie.split(/\n/).map((p,key) => {
  	return(
  		<View  key={key} style={{marginBottom:15,padding:10}}>
  			<Text style={styles.itemText}>{p}</Text>
  		</View>
  	);
  })


    return (
          <View>  
        <TouchableOpacity onPress={this._pressButton.bind(this)}>  
   			 <Text style={{fontSize:30}}>点击返回前一个界面</Text>  
        </TouchableOpacity>  
        {summary}  
        </View>  
      );
    }
  }

export {Detail as default}