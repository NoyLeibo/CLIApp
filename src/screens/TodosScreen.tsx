import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function TodosScreen() {
  const navigation = useNavigation<StackNavigationProp<{Home: undefined}>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todos Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {fontSize: 24, fontWeight: 'bold'},
});
