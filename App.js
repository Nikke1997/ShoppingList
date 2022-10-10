import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
const [items, setItems] = useState([]);
const [text, setText] = useState('') 

const add = () => {
setItems([...items, {key: String(items.lenght), text: text}]);
setText('');
}

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder='Item'
      onChangeText={text => setText(text)}
      value={text}
      ></TextInput>

      <View style={styles.buttonContainer}>
<View>
  <Button title='Add' onPress={add}> </Button>
</View>
<View>
  <Button title='Clear' onPress={() => setItems([])}></Button>
</View>
      </View>



      <View style={styles.list}>
<FlatList
ListHeaderComponent={() => <Text style={{color: 'blue', fontWeight: 'bold', alignSelf: 'center' }}>Shopping List</Text>}
data={items}
renderItem={({ item }) => <Text style={{ alignSelf: 'center' }}>{item.text}</Text>}>
</FlatList>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 50
  },
  input: {
borderColor: 'grey',
borderWidth: 1,
fontSize: 16,
marginTop: 10,
width: '50%'
  },
  buttonContainer: {
    marginTop: 10,
flexDirection: 'row',
justifyContent: 'space-evenly',
height: 50,
width: '50%'

  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
});
