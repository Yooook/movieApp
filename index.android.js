/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React from 'react';
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio, 
  ListView,
  Image,
  TabBar
} from 'react-native';
import MovieList from './app/components/movieList';
import USList from './app/components/USList';
import Featured from './app/components/featured';
import Search from './app/components/search';
import USfeatured from './app/components/USfeatured';
import styles from './app/style/Main';

import TabNavigator from 'react-native-tab-navigator';
 const REQUIRE_URL = `http://api.douban.com/v2/movie/top250?start=0&count=10`

 class AwesomeProject extends React.Component {
  constructor(props) {
    super(props);
 this.state = {
      selectedTab:'home'
    } 
  }
  

  render() {
    return (
      <View style={{flex: 1}}>
         <TabNavigator tabBarStyle={styles.tab1} >
            <TabNavigator.Item
             selected={this.state.selectedTab === 'home'}
             title="Home"
             titleStyle={styles.himiTextStyle} 
             renderIcon={() => <Image source={require('./app/images/tabbar_1.png')} />}
             renderSelectedIcon={() => <Image source={require('./app/images/tabbar_1_press.png')} />}
             onPress={() => this.setState({ selectedTab: 'home' })}>
          <Featured/>
            </TabNavigator.Item>
  
            <TabNavigator.Item
             selected={this.state.selectedTab === 'profile'}
             title="Profile"
             titleStyle={styles.himiTextStyle}  
             renderIcon={() => <Image source={require('./app/images/tabbar_2.png')} />}
             renderSelectedIcon={() => <Image source={require('./app/images/tabbar_2_press.png')} />}
             onPress={() => this.setState({ selectedTab: 'profile' })}>
                 <USfeatured/>
            </TabNavigator.Item>
            
           <TabNavigator.Item
             selected={this.state.selectedTab === 'search'}
             title="search"
             titleStyle={styles.himiTextStyle}  
             renderIcon={() => <Image source={require('./app/images/tabbar_2.png')} />}
             renderSelectedIcon={() => <Image source={require('./app/images/tabbar_2_press.png')} />}
             onPress={() => this.setState({ selectedTab: 'search' })}>
                 <Search/>
            </TabNavigator.Item>
          </TabNavigator>
       </View>
      );
    }
  }

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
