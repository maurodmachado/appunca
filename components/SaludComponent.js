import * as React from "react";
import { View, Text, StyleSheet, Linking, ScrollView, Image} from "react-native";
import { Badge, Card, Divider } from "react-native-elements";
import { estiloBase } from "../assets/styles/estiloBase";
import { imagenes } from "./facultades/InformacionApp";
import { normalize } from "./utils/utils";


export default function SaludComponent() {


  return (
    <> 
    
    <ScrollView>
    {Platform.OS === 'ios' && <View style={{marginTop: '5%'}}></View>}
    <Card><Text style={styles.titleText}>Salud Universitaria <Badge badgeStyle={{height:'auto'}} textStyle={{fontSize:normalize(12)}} status='error' value="+ Información" onPress={() => Linking.openURL('http://www.unca.edu.ar/pagina-1600-servicio-de-salud-universitaria-71.html?pagina_=0')}/></Text>
  
 
  <Card.Divider/>
  <Image
            source={{uri: imagenes.imagenSalud}}
            style={styles.responsiveImage}></Image>
      <Text style={styles.baseText}>
        Su objetivo principal es educar para la prevención, brindando a los jóvenes la oportunidad de aprender, adquirir y desarrollar los conocimientos, las competencias, los valores que lo facultan para su autocuidado.</Text>      
        
      <Divider/>
      
      <Text style={styles.baseTextTitle}>Servicios</Text>
      <Text style={{...styles.baseTextList, backgroundColor:'#E70707', color:'#FFFFFF'}}>Atención en consultorios de Clínica médica, Ginecología, Obstetricia, Psicología, Nutrición y Enfermería</Text>     
      <Text style={{...styles.baseTextList, backgroundColor:'#FF8282', color:'#0f0f0f'}}>Exámenes Psicofísicos</Text>
      <Text style={{...styles.baseTextList, backgroundColor:'#E70707', color:'#FFFFFF'}}>Programas de Prevención de Enfermedades y Promoción de la Salud</Text>
      <Text style={{...styles.baseTextList, backgroundColor:'#FF8282', color:'#0f0f0f'}}>Complementación de medicamentos necesarios para tratamientos</Text>
      <Text style={{...styles.baseTextList, backgroundColor:'#E70707', color:'#FFFFFF'}}>Programa de Sexualidad Responsable y Prevención de ETS</Text>
      <Text style={{...styles.baseTextList, backgroundColor:'#FF8282', color:'#0f0f0f'}}>Programa Nacional de Inmunizaciones</Text>
      <Text style={{...styles.baseTextList, backgroundColor:'#E70707', color:'#FFFFFF'}}>Asesoría Nutricional</Text>   
      
</Card>
        </ScrollView>

    </>
  );
}
const styles = estiloBase;