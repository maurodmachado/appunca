import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { normalize } from '../utils/utils';
export default function CarrerasExactas({navigation}) {
  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Facultad de Exactas')
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
         <Text style={styles.titleCarrera}>Profesorados</Text>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/pb.html')} 
          title='Profesorado en Biología' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/pf.html')}
          title='Profesorado en Física' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/pm.html')}
          title='Profesorado en Matemática' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/pq.html')}
          title='Profesorado en Química' titleStyle={styles.itemTitleWhiteStyle}/>
          
          <Text style={styles.titleCarrera}>Licenciaturas</Text>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lca.html')} 
          title='Licenciatura en Ciencias Ambientales' titleStyle={styles.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lb.html')}
          title='Licenciatura en Ciencias Biológicas' titleStyle={styles.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lf.html')}
          title='Licenciatura en Física' titleStyle={styles.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lm.html')} 
          title='Licenciatura en Matemática' titleStyle={styles.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lq.html')} 
          title='Licenciatura en Química' titleStyle={styles.itemTitleBlackStyle}/>
          
          <Text style={styles.titleCarrera}>Tecnicaturas</Text>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/tca.html')} 
          title='Tecnicatura en Ciencias Ambientales' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ti-dw.html')}
          title='Tecnicatura en Informática - Orientación Diseño Web' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ti-me.html')}
          title='Tecnicatura en Informática - Orientación Mantenimiento de Equipos' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ti-r.html')}
          title='Tecnicatura en Informática - Orientación Redes' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ter.html')}
          title='Tecnicatura Universitaria en Energías Renovables' titleStyle={styles.itemTitleWhiteStyle}/>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/tqu.html')}
          title='Tecnicatura Química Universitaria' titleStyle={styles.itemTitleWhiteStyle}/>

          <Text style={styles.titleCarrera}>Ciclos de Complementación Curricular</Text>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/cpc.html')} 
          title='Ciclo Profesorado en Computación' titleStyle={styles.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/clece.html')}
          title='Ciclo de Licenciatura en Enseñanza de las Ciencias Experimentales' titleStyle={styles.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/clem.html')}
          title='Ciclo de Licenciatura en Enseñanza de la Matemática' titleStyle={styles.itemTitleBlackStyle}/>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/leccl.html')} 
          title='Ciclo de Licenciatura en Enseñanza de la Computación' titleStyle={styles.itemTitleBlackStyle}/>
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
margin:5,
textAlign:'center'

},
itemTitleBlackStyle: {
color: "black",
fontSize: normalize(16)
},
itemTitleWhiteStyle: {
color: "white",
fontSize: normalize(16)
},
  itemProfesorado: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#283747',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
  itemLicenciatura: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#5DADE2',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
  itemTecnicaturas: {
    marginTop:4,
    marginBottom:4,
    backgroundColor:'#1F618D',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
  itemCCC: {
  marginTop:4,
  marginBottom:4,
  backgroundColor:'#3498DB',
  borderWidth:1,
  borderColor:'#0F0F0F'
  },

});