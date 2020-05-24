// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Login from './components/login';
import Signup from './components/signup';

import TodoScreen from './src/screen/todo';

import { BlogProvider } from './src/context/BlogContext'
import ClassScreen from './src/screen/class' //=index
import ShowScreen from './src/screen/Showscreen'
import CreateScreen from './src/screen/CreateScreen';

import ChatScreen from './src/screen/chat';
import ProfileScreen from './src/screen/profile';



const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#ff3333',
            height: 100
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: 'Signup' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={
            { title: 'Login' },
            { headerLeft: null }
          }
        />
        <Stack.Screen
          name="Dashboard"
          component={TabStackScreen}
          options={
            { title: 'Dashboard' },
            { headerLeft: false },
            {
              headerShown: false
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Note = createStackNavigator()
function App() {
  return (
    <NavigationContainer independent={true}>

      <Note.Navigator>
        <Note.Screen
          name="Note"
          component={ClassScreen}
          options={{
            title: "Work",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#ff3333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            
          }} />
        <Note.Screen name="show" component={ShowScreen} options={{ title: "Note Details", headerTitleAlign: "center" }} />
        <Note.Screen name="create" component={CreateScreen} options={{ title: "Create Your Note", headerTitleAlign: "center" }} />
      </Note.Navigator>
    </NavigationContainer>

  );
}

const TodoStack = createStackNavigator();
function TodoStackScreen() {
  return (
    <TodoStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#ff3333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

    }}>
      <TodoStack.Screen name="Welcome" component={TodoScreen} />
    </TodoStack.Navigator>
  )
}

const ClassStack = createStackNavigator();

function ClassStackScreen() {
  return (
    <ClassStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#ff3333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }} >
      <ClassStack.Screen name="Class" component={ClassScreen} />
    </ClassStack.Navigator>
  )
}

const ChatStack = createStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#ff3333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <ChatStack.Screen name="Chat" component={ChatScreen} />
    </ChatStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#ff3333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}
const Tab = createBottomTabNavigator();

function TabStackScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todo" options={{
          tabBarLabel: 'Note',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" size={24} color="#262626" />
          ),
        }}component={NoteReal} />
      {/* <Tab.Screen name="Class" component={TodoStackScreen} /> */}
      {/* <Tab.Screen name="Chat" component={ChatStackScreen} /> */}
      <Tab.Screen name="Profile" options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="#262626" />
          ),
        }}component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}

function NoteReal() {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
}
