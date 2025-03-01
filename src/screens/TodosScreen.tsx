import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import {CheckBox} from '@rneui/themed';
import CheckBox from 'react-native-check-box';

export default function TodosScreen() {
  const navigation = useNavigation<StackNavigationProp<{Home: undefined}>>();

  useEffect(() => {
    console.log('test');
  }, []);

  const [todos, setTodos] = useState([
    {id: 1, name: 'Tal', todo: 'Todo1', isDone: false},
    {id: 2, name: 'Niv', todo: 'Todo2', isDone: false},
    {id: 3, name: 'Noy', todo: 'Todo3', isDone: false},
  ]);

  const onChangeTodo = useCallback((id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo,
      ),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.todoContainer}>
            <CheckBox
              style={{flex: 1, paddingRight: 10}}
              onClick={() => {
                `Checkbox clicked: ${item.name}, Current state: ${item.isDone}`;
                onChangeTodo(item.id);
              }}
              isChecked={!!item.isDone}
            />
            <Text style={styles.todoText}>Name: {item.name}</Text>
            <Text style={styles.todoText}>Todo: {item.todo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, fontWeight: 'bold'},
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  todoText: {margin: 10},
});
