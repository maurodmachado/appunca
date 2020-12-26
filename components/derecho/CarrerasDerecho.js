import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { normalize } from '../utils/utils';
export default function CarrerasDerecho({navigation}) {

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Derecho')
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
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/tecnicatura-universitaria-de-minas/')}
          title='Perito en Ciencias Criminalísticas' titleStyle={styles.itemTitleStyle}/>
          
          <Text style={styles.titleCarrera}>Carreras de grado</Text>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://tecno.unca.edu.ar/tecnicatura-universitaria-industrial/')} 
          title='Abogacía' titleStyle={styles.itemTitleWhiteStyle} />
          
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
    backgroundColor:'#6699CC',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
  itemColor2: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#336699',
    borderWidth:1,
    borderColor:'#0F0F0F'
    },

});