import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //string
  const [name, setName] = useState<string>("hoi dan it");
  //number
  const [age, setAge] = useState<number>(30)
  //null, undefined, boolean
  const test = false;
  //object, array
  const [person, setPerson] = useState([{
    name: "thin",
    age: 22
  }])

  return (
    <View style={styles.container}>
      <View>

        <TextInput
          onChangeText={v => setName(v)}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric'
          // maxLength={2}
          // multiline={true}
          style={{
            marginTop: 50,
            borderColor: "violet",
            borderWidth: 1,
            padding: 10,
          }} />
      </View>
      <Text>{name}</Text>
      <Button title='add new' />
      <Text style={styles.test}>test</Text>

      {/* <View>
        <Text style={styles.text}>{name}</Text>
      </View>

      <Text style={styles.text}>Hello World with
        <Text style={styles.hoidanit}>hoidanit</Text>
      </Text> */}
    </View>
  );
}

//css-in-jss styled component
const styles = StyleSheet.create({
  hoidanit: {
    color: "green"
  },
  test: {
    fontSize: 30,
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    fontSize: 60, color: "red",
    paddingTop: 20,
  },
  // test: {
  //   color: "red",
  // }
});
