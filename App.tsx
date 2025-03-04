import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

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

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 8, title: "Tony Kroos" },
    { id: 9, title: "Nine" },
    { id: 10, title: "M10" },
  ])

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

            borderColor: "violet",
            borderWidth: 1,
            padding: 10,
          }} />
      </View>
      <Text>{name}</Text>

      <Button
        title='add new'
        onPress={() => alert("tap me")}
      />

      <ScrollView style={{ marginTop: 20, borderColor: "red", borderWidth: 1 }}>
        {todoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}>
              {todo.title}
            </Text>
          )
        })}
      </ScrollView>

      {/* <Text style={styles.test}>test</Text> */}

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
  todo: {
    fontSize: 30,
    backgroundColor: "pink",
    marginBottom: 20,
    padding: 15,
  },

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
    marginTop: 50,
  },
  // test: {
  //   color: "red",
  // }
});
