import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, useColorScheme} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<{Todos: undefined}>>();
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string | null>(null);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <View style={styles.container}>
      <View style={backgroundStyle}>
        <Text style={styles.title}>{count}</Text>
        <Button title="Increase" onPress={() => setCount(count + 1)}></Button>
        {count >= 5 && (
          <Text style={styles.title}>The counter is bigger then 5</Text>
        )}
        <Button title="Reset count" onPress={() => setCount(0)}></Button>
      </View>
      <Text style={styles.title}>This is home Screen</Text>
      <TextInput
        placeholder="Type your text: "
        onChangeText={changedText => setText(changedText)}
      />
      {text && <Text style={styles.title}>Your text is: {text}</Text>}{' '}
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Todos"
          onPress={() => navigation.navigate('Todos')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 24, fontWeight: 'bold'},
  buttonContainer: {marginBottom: 10},
});
