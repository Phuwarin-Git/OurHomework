import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import firebase from '../../database/firebase';

export default function Profile() {

  const user = firebase.auth().currentUser;
  var userinfo = null
  user.providerData.forEach((userInfo) => {
    userinfo = userInfo
  });
  var DisplayName = userinfo.displayName
  console.warn(user.displayName)
  
 
  let item = [];
  let countCal = 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.name}>{user.displayName}</Text>     
        </View>
          <Text style={styles.description}>Details</Text>
          <Text style={styles.Details}> Name : {user.displayName}</Text>
      </View>
      <Text></Text>
    </View>
  );
}



const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ff3333",
    height: 215,
  },
  Details:{
    fontSize:20,
    color:"#696969",
    marginTop: 10,
    marginLeft: 80
  },
  avatar: {
    width: 260,
    height: 260,
    borderRadius: 126,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 28,
    color: "#696969",
    marginTop: 80,
    marginLeft: 50

  },
});