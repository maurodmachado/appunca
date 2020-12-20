import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Linking, BackHandler } from 'react-native';
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function CarrerasHumanidades({navigation}) {
    useEffect(() => {
        const backAction = () => {
          navigation.navigate('Facultad de Humanidades')
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
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-ciencias-de-la-educacion')} 
          title='Profesorado en Ciencias de la Educación' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-filosofia')}
          title='Profesorado en Filosofía' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-frances')}
          title='Profesorado en Francés' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-geografia')}
          title='Profesorado en Geografía' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-historia')} 
          title='Profesorado en Historia' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-ingles')} 
          title='Profesorado en Inglés' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemProfesorado} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/profesorado-en-letras')} 
          title='Profesorado en Letras' titleStyle={styles.itemTitleStyle}/>
          
          <Text style={styles.titleCarrera}>Licenciaturas</Text>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-ciencias-de-la-educacion')} 
          title='Licenciatura en Ciencias de la Educación' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licencicatura-en-frances')}
          title='Licenciatura en Francés' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-geografia')}
          title='Licenciatura en Geografía' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-historia')} 
          title='Licenciatura en Historia' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-ingles')} 
          title='Licenciatura en Inglés' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-letras')} 
          title='Licenciatura en Letras' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemLicenciatura} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-trabajo-social')}
          title='Licenciatura en Trabajo Social' titleStyle={styles.itemTitleStyle}/>

          <Text style={styles.titleCarrera}>Traductorados</Text>
          <Button buttonStyle={styles.itemTraductorados} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/traductorado-en-frances')} 
          title='Traductorado Público Nacional en Francés' titleStyle={styles.itemTitleStyle}/>
          <Button buttonStyle={styles.itemTraductorados} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/traductorado-en-frances')}
          title='Traductorado Público Nacional en Inglés' titleStyle={styles.itemTitleStyle}/>
          
          <Text style={styles.titleCarrera}>Ciclos de Complementación Curricular</Text>
          <Button buttonStyle={styles.itemCCC} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/grado/licenciatura-en-psicopedagogia-ciclo-de-complementacion-curricular')} 
          title='Licenciatura en Psicopedagogía' titleStyle={styles.itemTitleStyle}/>
         
          
          <Text style={styles.titleCarrera}>Carreras a distancia</Text>
          <Button buttonStyle={styles.itemCarreraDistancia} onPress={() => Linking.openURL('http://www.huma.unca.edu.ar/oferta-academica/distancia/licenciatura-en-gestion-educativa-ciclo-de-complementacion-curricular')}
          title='Licenciatura en Gestión Educativa' titleStyle={styles.itemTitleStyle}/>
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
itemProfesorado: {
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#C44830',
    borderWidth:1,
    borderColor:'#0F0F0F'
  },
itemLicenciatura: {
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#762B1D',
    borderWidth:1,
    borderColor:'#0F0F0F'
    },
itemTraductorados:{
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#C44830',
    borderWidth:1,
    borderColor:'#0F0F0F'
    },
itemCCC:{
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#762B1D',
    borderWidth:1,
    borderColor:'#0F0F0F'
    },

itemCarreraDistancia:{
    marginTop:5,
    marginBottom:5,
    backgroundColor:'#C44830',
    borderWidth:1,
    borderColor:'#0F0F0F'
    }
});