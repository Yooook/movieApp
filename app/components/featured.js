/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
  Text,
  View,
  Component
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import MovieList from './movieList';
 import styles from '../style/Main';


 class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   	let defaultName = 'MovieList';  
    let defaultComponent = MovieList;  
    return (  
        <Navigator  
	    //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component  
	   //通过给initialRoute对象设置名称和对应的组件完成route的初始化，即只要传入需要跳转的组件的名称和组建对象，即可在renderScene中完成页面的跳转。  
	    initialRoute={{ name: defaultName, component: defaultComponent }}  
	    configureScene={(route) => {  
	      return Navigator.SceneConfigs.FadeAndroid;//下滑移出界面 FadeAndroid:表示的是淡入淡出的动画效果  
	    }}  
	  
	    //导航器的加载方法  
	    renderScene={(route, navigator) => {  
	      let Component = route.component;  
	       if(route.component){
                return <Component {...route.params} navigator={navigator} />
            } 
	    }}  
	     />  
        );	
    }
  }

export {Featured as default}