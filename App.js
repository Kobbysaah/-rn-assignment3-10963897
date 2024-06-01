
// App.js
import {FlatList,ScrollView, Image,SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const DATA = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Commits' },
  { id: '5', title: 'Clone' },
  { id: '6', title: 'Installing' },
  { id: '7', title: 'Debugging' },
  { id: '8', title: 'Update' },
  { id: '9', title: 'AI community' },
  { id: '10', title: 'Item 13' },
];

const renderItem = ({ item }) => (
  <View style={styles.item2}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const App = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

 
  return (
    <SafeAreaView style={styles}>
    <ScrollView>
    <View style={styles.Group1}>
    <View>
    <Text style={styles.Text}>Hello, Devs</Text>
    <Text style={styles.text}>14 tasks today</Text></View>
     <Image source={require('./images/Profile.png')} style={styles.image}/>
    </View>

     <View style={styles.Group1}>
      <View style={styles.Group11}><Image source={require('./images/Vector.png')}/>
      <Text style={styles.text}>Search</Text></View>
      <View><Image source={require('./images/setting.png')}/></View>
    </View>

   <View style={styles.Group111}>
    <Text style={styles.text1}>Categoriess</Text>
    <View style={styles.container}>
    <View style={styles.item}><Text style={styles.Text2}>Exercise</Text><Text style={styles.text}>15 tasks</Text><View style={styles}><Image source={require('./images/youngwoman.png')}/></View>
    </View>
    <View style={styles.item}><Text style={styles.Text2}>Study</Text><Text style={styles.text}>14 tasks</Text><Image source={require('./images/youngwoman1.png')}/></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View>
      <View style={styles.item}><Text style={styles}>14 tasks today</Text></View></View>
  </View>

    <View>
     <View style={styles.Group111}>
      <Text style={styles.text1}>Ongoing Task</Text>
     <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
      </View>
    </View>
  

    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#F7F0E8',
  },

    text: {
    fontSize: 12,
    font: 'lotos',
    fontWeight: 500,
  },

    text1: {
    fontSize: 20,
    font: 'lotos',
    fontWeight: 700,


  },

  Text: {
    fontSize: 32,
    font: 'lotos',
    fontWeight: 700,


  },

  Text2: {
    fontSize: 16,
    font: 'lotos',
    fontWeight: 700,
    height: 19.6,


  },

 
  Group1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#F7F0E8',
  },
 
  Group11: {
    padding:15,
    flex:1,
    justifyContent: 'left',
    flexDirection: 'row',
    width: 280,
    height: 48,
    backgroundColor: '#ffff',
    borderRadius:15,
    },

    Group111: {
    paddingLeft: 20,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F7F0E8',
   
    },

    item: {
    borderRadius: 15,
    height: 192,
    width: 186,
    marginHorizontal:15,
    marginVertical:10,
    backgroundColor: '#FBF9F7',
    paddingLeft: 20,
  },
  item2: {
  borderStyle:'line',
  paddingLeft: 16,
  padding: 40,
  width: 354,
  height: 128,
  borderRadius: 15,
  marginVertical: 5,
  backgroundColor: '#FBF9F7',
  borderWidth: 1,
  borderColor: '#E8D1BA',
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
});



