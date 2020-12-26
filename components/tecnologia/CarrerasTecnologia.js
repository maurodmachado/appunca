import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { normalize } from '../utils/utils';
export default function CarrerasTecnologia({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Tecnologia')
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
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/tecnicatura-universitaria-industrial/')} 
          title='Tecnicatura Universitaria Industrial' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/tecnicatura-universitaria-de-minas/')}
          title='Tecnicatura Universitaria de Minas' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/tecnico-universitario-en-gestion-de-riesgo-higiene-y-seguridad-en-el-trabajo/')}
          title='Tecnicatura Universitaria en Gestión de Riesgo, Higiene y seguridad en el trabajo' titleStyle={styles.itemTitleWhiteStyle}/>
          
          <Text style={styles.titleCarrera}>Carreras de grado</Text>
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/ingenieria-en-informatica/')} 
          title='Ingeniería en Informática' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/arquitectura/')}
          title='Arquitectura' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/ingenieria-electronica/')}
          title='Ingeniería en Electrónica' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/ingenieria-en-agrimensura/')} 
          title='Ingeniería en Agrimensura' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/ingenieria-de-minas/')} 
          title='Ingeniería en Minas' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/licenciatura-en-geologia/')} 
          title='Licenciatura en Geología' titleStyle={styles.itemTitleWhiteStyle}/>
          
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
    fontSize: normalize(18),
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
    backgroundColor:'#65d6ce',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
  itemColor2: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#00303f',
    borderWidth:1,
    borderColor:'#0F0F0F'
    },

});