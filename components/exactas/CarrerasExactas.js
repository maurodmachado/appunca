import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
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
          title='Profesorado en Biología' />
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/pf.html')}
          title='Profesorado en Física'/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/pm.html')}
          title='Profesorado en Matemática'/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/pq.html')}
          title='Profesorado en Química'/>
          
          <Text style={styles.titleCarrera}>Licenciaturas</Text>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lca.html')} 
          title='Licenciatura en Ciencias Ambientales' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lb.html')}
          title='Licenciatura en Ciencias Biológicas' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lf.html')}
          title='Licenciatura en Física' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lm.html')} 
          title='Licenciatura en Matemática' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/lq.html')} 
          title='Licenciatura en Química' titleStyle={styles.itemTitleStyle}/>
          
          <Text style={styles.titleCarrera}>Tecnicaturas</Text>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/tca.html')} 
          title='Tecnicatura en Ciencias Ambientales'/>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ti-dw.html')}
          title='Tecnicatura en Informática - Orientación Diseño Web'/>
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ti-me.html')}
          title='Tecnicatura en Informática - Orientación Mantenimiento de Equipos' />
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ti-r.html')}
          title='Tecnicatura en Informática - Orientación Redes' />
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/ter.html')}
          title='Tecnicatura Universitaria en Energías Renovables' />
          <Button buttonStyle={styles.itemTecnicaturas} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/tqu.html')}
          title='Tecnicatura Química Universitaria' />

          <Text style={styles.titleCarrera}>Ciclos de Complementación Curricular</Text>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/cpc.html')} 
          title='Ciclo Profesorado en Computación' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/clece.html')}
          title='Ciclo de Licenciatura en Enseñanza de las Ciencias Experimentales' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/clem.html')}
          title='Ciclo de Licenciatura en Enseñanza de la Matemática' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.exactas.unca.edu.ar/academ/carreras/leccl.html')} 
          title='Ciclo de Licenciatura en Enseñanza de la Computación' titleStyle={styles.itemTitleStyle}/>
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