import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        <SafeAreaView style={styles.container}> 
      <ScrollView style={styles.scrollView}>
         <View style={styles.containerButton}>
              <Text style={styles.titleCarrera}>Licenciaturas</Text>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://arqueologia.unca.edu.ar/?p=contenidos&id=12&t=Licenciatura+en+Arqueología')} 
          title='Licenciatura en Arqueología' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://arqueologia.unca.edu.ar/?p=contenidos&id=15&t=Licenciatura+en+Antropología+Social+y+Cultural')}
          title='Licenciatura en Antropología Social y Cultural' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://arqueologia.unca.edu.ar/?p=contenidos&id=16&t=Licenciatura+en+Patrimonio+Cultural')}
          title='Licenciatura en Patrimonio Cultural' titleStyle={styles.itemTitleStyle}/>
                   
          
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
    margin:5,
    textAlign:'center'
    
},
    itemTitleStyle: {
    color: "white",
    fontSize: 16
  },
itemLicenciatura: {
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#C44830',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
});