import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { TouchableOpacity, View, Text, Linking, ScrollView, Image} from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import { estiloBase } from "../../assets/styles/estiloBase";
import { estiloFacultades } from "../../assets/styles/estiloFacultades";


export default function CarreraDetail({ route, navigation}) {
    const {nombre, link ,linkPlan, duracion, descripcionProf, cargaHoraria, imgCarrera} = route.params.carrera;
    
    useEffect(() => {
      const backAction = () => {
        navigation.goBack();
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    }, []);
  
  return (
    <> 
    
    <ScrollView >
    {Platform.OS === 'ios' && <View style={{marginTop: '5%'}}></View>}
    <Card >
    <Text style={styles.titleText}>{nombre}</Text>
  <Divider/>
  {linkPlan !== '' ? <View style={{width:'100%', alignSelf:'center', margin:'5%', flexDirection:'row'}}>
      <Text style={styles.baseTextTitle}>Plan de estudios</Text>
      <Text style={styles.buttonTextStyle}></Text>
      <Button
          style={styles.buttonShortStyle}
          activeOpacity={0.5}
           onPress={() => Linking.openURL(`${linkPlan}`)}
           title="Descargar"
          >
          <Text style={styles.buttonTextStyle}>Descargar</Text>
          </Button>
         
      </View> : <View style={{width:'100%', alignSelf:'center', margin:'5%', flexDirection:'row'}}>
      <Text style={styles.baseTextTitle}>Plan de estudios</Text>
      <Text style={styles.buttonTextStyle}></Text>
      <Button
          style={styles.buttonShortStyle}
          activeOpacity={0.5}
           onPress={() => Linking.openURL(`${link}`)}
           title="Ver plan en la web"
          >
          <Text style={styles.buttonTextStyle}>Ver plan</Text>
          </Button>
         
      </View>}  
      <View style={{width:'100%', alignContent:'center', justifyContent:'center', marginBottom:'5%', flexDirection:'row'}}>
      <Text style={styles.baseTextTitle}>Duración</Text>
      <Text style={styles.buttonTextStyle}></Text>
      <Text style={{...styles.baseText}}>{duracion}</Text>   
     
      </View> 
      {cargaHoraria !== '' ? <View style={{width:'100%', alignContent:'center', justifyContent:'center', marginBottom:'5%', flexDirection:'row'}}>
      <Text style={styles.baseTextTitle}>Carga horaria</Text>
      <Text style={styles.buttonTextStyle}></Text>
      <Text style={{...styles.baseText}}>{cargaHoraria}</Text>  
      </View>
      :
      <View></View>
      }
      
      <Divider/>
      <Text style={styles.baseTextTitle}>Profesional formado</Text>
      
      <Text style={styles.baseText}>{descripcionProf}</Text>     
      
      <Image
            source={{uri: imgCarrera}}
            style={styles.responsiveImage}></Image>
      
      <TouchableOpacity
          style={styles.buttonShortStyle}
          activeOpacity={0.5}
           onPress={() => Linking.openURL(`${link}`)}
          >
          <Text style={styles.buttonTextStyle}>Ver en la web</Text>
          </TouchableOpacity>
          <Text style={styles.buttonTextStyle}></Text>
</Card>
      
      
        </ScrollView>

    </>
  );
}
const styles = estiloBase;
const styleButton = estiloFacultades