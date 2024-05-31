// App.js
import React from 'react';
import {FlatList,ScrollView, Image,SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#F7F0E8',
  },

  container2: {
    flexDirection: '',
    flex: 1,
    backgroundColor: '#F7F0E8',
    padding:20,
  },
  Text: {
    fontSize: 32,
    font: 'lotos',
    fontWeight: 700,


  },
  text: {
    fontSize: 12,
    font: 'lotos',
    fontWeight: 500,


  },
  text1: {
    fontSize: 20,
    font: 'lotos',
    fontWeight: 500,


  },
  Group1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
    item: {
    height: 192,
    width: 186,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 8,
    backgroundColor: '#FBF9F7',
  },
   item2: {
    height: 145,
    
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 16,
    backgroundColor: '#FBF9F7',
  },
});
export default function App() {
 
  return (
    <SafeAreaView style={styles}>
    <ScrollView>
    <View style={styles.Group1}>
      <View style={styles}><Text style={styles.Text}>Hello, Devs</Text>
      <Text style={styles}>14 tasks today</Text></View>
      <View style={styles}><Image source={require('./images/Profile.png')} style={styles.image}/></View>
    </View>

     <View style={styles.Group1}>
      <View style={styles}><Image source={require('./images/Vector.png')} style={styles.image}/></View>
      <View style={styles}><Text style={styles.text}>Search</Text></View>
      <View style={styles}><Image source={require('./images/setting.png')} style={styles.image}/></View>
    </View>

   <View style={styles}>
    <View style={styles.Group1}><Text style={styles.text1}>Categoriess</Text></View>
    <View style={styles.container}>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
   </View>
    </View>

      <View style={styles}>
      <View style={styles.Group1}><Text style={styles.text1}>Ongoing Task</Text></View>
       <View style={styles.container2}>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item2}><Text style={styles}>14 tasks today</Text></View>
    </View></View>
  

    </ScrollView>
  </SafeAreaView>
  );
}
