import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { estiloCarreras } from '../../../assets/styles/estiloCarreras';

export default function CarrerasEscArqueologia({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Escuela de Arqueologia')
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
        <SafeAreaView> 
      <ScrollView>
         <View style={styleCarreras.containerButton}>
              <Text style={styleCarreras.titleCarrera}>Licenciaturas</Text>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://arqueologia.unca.edu.ar/?p=contenidos&id=12&t=Licenciatura+en+Arqueología')} 
          title='Licenciatura en Arqueología' titleStyle={styleCarreras.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://arqueologia.unca.edu.ar/?p=contenidos&id=15&t=Licenciatura+en+Antropología+Social+y+Cultural')}
          title='Licenciatura en Antropología Social y Cultural' titleStyle={styleCarreras.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://arqueologia.unca.edu.ar/?p=contenidos&id=16&t=Licenciatura+en+Patrimonio+Cultural')}
          title='Licenciatura en Patrimonio Cultural' titleStyle={styleCarreras.itemTitleBlackStyle}/>
                   
          
          </View>
          </ScrollView>
          </SafeAreaView>
        </>
    )
}
const styleCarreras = estiloCarreras;

const styles = StyleSheet.create({
  
itemLicenciatura: {
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#FFCC00',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
});