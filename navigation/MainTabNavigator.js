import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ForumScreen from '../screens/ForumScreen';
import MessageScreen from '../screens/MessageScreen';
import MineScreen from '../screens/MineScreen';
import Post from '../Forum/Post';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';

const ForumStack = createStackNavigator(
  {
    Forum: ForumScreen,
    Post: Post,
  },
  config
);

ForumStack.navigationOptions = {
  tabBarLabel: 'Forum',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'} />
  ),
};

ForumStack.path = '';

const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} />
  ),
};

MessageStack.path = '';

const MineStack = createStackNavigator(
  {
    Mine: MineScreen,
  },
  config
);

MineStack.navigationOptions = {
  tabBarLabel: 'Mine',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

MineStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ForumStack,
  MessageStack,
  MineStack,
});

tabNavigator.path = '';

export default tabNavigator;
