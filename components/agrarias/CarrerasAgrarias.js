import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { normalize } from '../utils/utils';
export default function CarrerasAgrarias({navigation}) {

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Agrarias')
      return true;
    };
  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
}, []);
    return (
        <>
        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
         <View style={styles.containerButton}>
              <Text style={styles.titleCarrera}>Carreras de pregrado</Text>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://agrarias.unca.edu.ar/tecnicatura-universitaria-en-parques-y-jardines/')} 
          title='Tecnicatura universitaria en Parques y Jardines' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://agrarias.unca.edu.ar/tecnicatura-universitaria-en-procesamiento-agroalimentario/')}
          title='Tecnicatura Universitaria en Procesamiento Agroalimentario' titleStyle={styles.itemTitleStyle}/>
          
          <Text style={styles.titleCarrera}>Carreras de grado</Text>
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://agrarias.unca.edu.ar/ingenieria-agronomica/')} 
          title='Ingeniería Agronómica' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://agrarias.unca.edu.ar/ingenieria-de-paisajes/')}
          title='Ingeniería de Paisajes' titleStyle={styles.itemTitleStyle}/>
          </View>
          </ScrollView>
          </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
  },
containerButton: {
margin:20,
textAlignVertical: "center",
width: "90%", 
alignSelf:"center"
},
titleCarrera:{
color: "black",
fontSize: 18,
marginBottom:5,
textAlign:'center'

},
itemTitleStyle: {
color: "black",
fontSize: normalize(16)
},
itemTitleWhiteStyle: {
  color: "white",
  fontSize: normalize(16)
  },
  itemColor1: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#6DAB3C',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
  itemColor2: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#8db596',
    borderWidth:1,
    borderColor:'#0F0F0F'
    },

});