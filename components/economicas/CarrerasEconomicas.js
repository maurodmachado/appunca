import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function CarrerasEconomicas({navigation}) {
  
 
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Economicas')
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
              <Text style={styles.titleCarrera}>Oferta académica</Text>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://eco.unca.edu.ar/content/carreras/index.php?categoria=grado&oferta=cpn2018')} 
          title='Contador Público' />
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://eco.unca.edu.ar/content/carreras/index.php?categoria=grado&oferta=ladm')}
          title='Licenciatura en Administración' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemColor2} onPress={() => Linking.openURL('http://eco.unca.edu.ar/content/carreras/index.php?categoria=grado&oferta=lges')}
          title='Licenciatura en Gestión de la Educación Superior'/>
          <Button buttonStyle={styles.itemColor1} onPress={() => Linking.openURL('http://eco.unca.edu.ar/content/carreras/index.php?categoria=grado&oferta=lgp')}
          title='Licenciatura en Gestión Pública' titleStyle={styles.itemTitleStyle}/>         
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
    fontSize: 16
  },
  itemColor1: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#79a3b1',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
  itemColor2: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#393e46',
    borderWidth:1,
    borderColor:'#0F0F0F'
    },

});