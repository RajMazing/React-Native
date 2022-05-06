import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
 const friends = [
    { name: 'Friend #1', age: 20, key: 'A'},
    { name: 'Friend #2', age: 21, key: 'B'},
    { name: 'Friend #3', age: 22, key: 'C'},
    { name: 'Friend #4', age: 23, key: 'D'},
    { name: 'Friend #5', age: 24, key: 'E'},
    { name: 'Friend #6', age: 25, key: 'F'},
    { name: 'Friend #7', age: 26, key: 'G'},
    { name: 'Friend #8', age: 27, key: 'H'},
    { name: 'Friend #9', age: 28, key: 'I'},
 ];
 

 return (
   <FlatList 
  
     keyExtractor={(friend) => friend.name}
     data={friends} 
     renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{ item.name} - Age {item.age}</Text>
      }}
    />
 );

};

const styles = StyleSheet.create({
    textStyle: {
      marginVertical: 50
    }
});

export default ListScreen;