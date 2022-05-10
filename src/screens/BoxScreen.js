import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Position from 'react-native/Libraries/Components/Touchable/Position';




const BoxScreen = () => {
  return (
      // <View style={styles.viewStyle}>
      //   <Text style={styles.textOneStyle}>Child #1</Text>
      //   <Text style={styles.textTwoStyle}>Child #2</Text>
      //   <Text style={styles.textThreeStyle}>Child #3</Text>
      // </View>

      <View style={styles.parentStyle}>
          <View style={styles.viewOneStyle}></View>
          <View style={styles.viewTwoStyle}></View>
          <View style={styles.viewThreeStyle}></View>
          </View>
  )  
}

const styles = StyleSheet.create({
    // viewStyle: {
    //   borderWidth: 3,
    //   borderColor: 'black',
    //   height: 200,
    
     
    // },
    // textOneStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red'
  
     
    // },
    // textTwoStyle: {
    //   borderWidth: 3,
    //   borderColor: 'red',
    //   fontSize: 18,
    //   ...StyleSheet.absoluteFillObject
    //   // The same as top: value, right: value, bottom: value, left: value
    // },
    // textThreeStyle: {
    //   borderWidth: 3, 
    //   borderColor: 'red',
     
    // }

    parentStyle: {
      borderWidth: 3,
      borderColor: 'black',
      height: 200,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    viewOneStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'red'
    },
    viewTwoStyle: {
      height: 50,
      width: 50,
      backgroundColor: 'green',
      marginTop: 50
    },
    viewThreeStyle: {
      height: 50, 
      width: 50,
      backgroundColor: 'orange'
    }
   
});

export default BoxScreen;