import React, {useState} from 'react';
import {Text, View, Button, Pressable, StyleSheet, SafeAreaView} from 'react-native';

 type FrogProps = {
 name: string;
 color: string;
 };

const Frog = (props : FrogProps) => {
  const frogStyleArray: Array =
  [
    styles.frog,
    {backgroundColor: props.color},
  ];
  //frogStyleArray.push({backgroundColor: props.color})
  //frogStyleArray = StyleSheet.compose(styles.frog,{backgroundColor: props.color});
  return (
    <View style = {frogStyleArray}>
    <Text> {props.name} </Text>
    </View>
  );
};

const Lake = () => {
  const [exNumber, setExNumber] = useState(0);
    const lakeStyleArray: Array = [styles.lake];
    switch(exNumber){
      case 1: 
        lakeStyleArray.push(styles.ex01);
        break;
      case 2: 
        lakeStyleArray.push(styles.ex02);
        break;
      case 3: 
      lakeStyleArray.push(styles.ex03);
        break;
      case 4: 
      lakeStyleArray.push(styles.ex04);
        break;
      case 5: 
      lakeStyleArray.push(styles.ex05);
        break;
      case 6: 
      lakeStyleArray.push(styles.ex06);
        break;
      case 7: 
      lakeStyleArray.push(styles.ex07);
        break;
      case 8: 
      lakeStyleArray.push(styles.ex08);
        break;
      case 9: 
      lakeStyleArray.push(styles.ex09);
        break;
    }
  return (
    <View style = {styles.main}>
      <SafeAreaView style = {[lakeStyleArray, lakeStyleArray]}>
      <Frog name='1' color= '#660000'/>
      <Frog name='2' color= '#606000'/>
      <Frog name='3' color= '#006600'/>
      </SafeAreaView>
      <Text style={{justifyContent: 'center'}}> Текущая задача:  {exNumber} </Text>
      <SafeAreaView style = {styles.buttons}>
        <Pressable
        onPress = {() => 
        {setExNumber(1);}} style={styles.button} ><Text> кнопка 1 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(2);}} style={styles.button} ><Text> кнопка 2 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(3);}} style={styles.button} ><Text> кнопка 3 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(4);}} style={styles.button} ><Text> кнопка 4 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(5);}} style={styles.button} ><Text> кнопка 5 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(6);}} style={styles.button} ><Text> кнопка 6 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(7);}} style={styles.button} ><Text> кнопка 7 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(8);}} style={styles.button} ><Text> кнопка 8 </Text> </Pressable>
        <Pressable
        onPress = {() => 
        {setExNumber(9);}} style={styles.button} ><Text> кнопка 9 </Text> </Pressable>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
  backgroundColor : '#f4a460',
  height : '100%',
  width: "100%",
  },
  lake:{
  backgroundColor: '#228b22',
  height : '70%',
  flexDirection: 'row'
  },
  buttons:{
  flexDirection:"row",
  flexWrap: "wrap",
  height:'5%',
  backgroundColor: '#b0e0e6',
  },
  button:{
  borderWidth:2,
  backgroundColor: '#c0c0c0',
  width:"33%",
  borderRadius: 1,
  alignItems: "center",
  justifyContent:"center",
  },
  frog: {
    height: 50,
    width: 50,
    backgroundColor: '#32cd32',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ex01: {
    justifyContent: 'flex-end',
  },
  ex02:{
    justifyContent: 'center',
  },
  ex03:{
    justifyContent: 'space-around',
  },
  ex04:{
    justifyContent: 'space-between',
  },
  ex05:{
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  ex06:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  ex07:{
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  ex08:{
    flexDirection: 'row-reverse',
  },
  ex09:{
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
  },
});

export default Lake;