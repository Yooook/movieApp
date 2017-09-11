/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
  StyleSheet
} from 'react-native';

let styles = StyleSheet.create({
 
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  container: {
    flex:1,
    padding:10,
  },
  item:{
    flex:1,
    flexDirection:'row',
    borderBottomWidth:1,
    padding:10,
    borderColor:'rgba(100,53,201,0.3)'
  },
   
  image: {
    width:110,
    height:160,
  },
  itemContent: {
    flex:1,
    marginLeft:20,
    marginTop:10,
  },
  itemHeader: {
    fontSize:18,
    fontFamily:'Helvetica Neue',
    fontWeight:'200',
    color:'#6435c9',
    marginBottom:15,
  },
   tab1: {
        height:90,
        paddingTop:5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    himiTextStyle:{
      color:'#777',
      fontSize:16,
  },
  itemText: {
    fontSize:24,
    color:"#6435c9",
    fontWeight:'normal'
  }
});


module.exports = styles;