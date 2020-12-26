import * as React from "react";
import { View, Text, StyleSheet, Linking, ScrollView} from "react-native";
import { Badge, Button, Card, Divider } from "react-native-elements";
import { normalize } from "./utils/utils";


export default function SaludComponent() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    
    <Card>
  <Card.Title><Text style={styles.titleText}>Servicio de Salud Universitaria <Badge badgeStyle={{height:'auto'}} textStyle={{fontSize:normalize(12)}} status='error' value="+ Información" onPress={() => Linking.openURL('http://www.unca.edu.ar/pagina-1600-servicio-de-salud-universitaria-71.html?pagina_=0')}/></Text></Card.Title>
  
 
  <Card.Divider/>
  <ScrollView style={{height:'18%'}}>
      <Text style={styles.baseText}>
        Su objetivo principal es educar para la prevención, brindando a los jóvenes la oportunidad de aprender, adquirir y desarrollar los conocimientos, las competencias, los valores que lo facultan para su autocuidado.</Text>      
        </ScrollView> 
      <Divider/>
      <Text style={styles.baseTextTitle}>Servicios</Text>
      <Text style={styles.baseTextList}>Atención en consultorios de Clínica médica, Ginecología, Obstetricia, Psicología, Nutrición y Enfermería</Text>     
      <Text style={styles.baseTextList}>Exámenes Psicofísicos</Text>
      <Text style={styles.baseTextList}>Programas de Prevención de Enfermedades y Promoción de la Salud</Text>
      <Text style={styles.baseTextList}>Complementación de medicamentos necesarios para tratamientos</Text>
      <Text style={styles.baseTextList}>Programa de Sexualidad Responsable y Prevención de ETS</Text>
      <Text style={styles.baseTextList}>Programa Nacional de Inmunizaciones</Text>
      <Text style={styles.baseTextList}>Asesoría Nutricional</Text>   
</Card>
        </View>

    </>
  );
}
const styles = StyleSheet.create({
  badgeText: {
    fontSize: normalize(14),
  },
  baseText: {
    fontSize: normalize(14),
    textAlign:"center",
    marginBottom:'1%',
  },
  baseTextList: {
    fontSize: normalize(15),
    textAlign:"center",
    backgroundColor:'#1999d0',
    margin:'1%',
    
  },
  baseTextTitle: {
    marginTop:'1%',
    marginBottom:'1%',
    fontSize: normalize(16),
    fontWeight:'bold',
    textAlign:"center"
  },
  buttonInfoStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: 'red',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '5%',
    borderRadius: 15,
    margin: '2%',
  },
  buttonShortStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: '#1999d0',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '10%',
    borderRadius: 5,
    margin: '2%',
  },
  buttonTextStyleCenter: {
    color: '#FFFFFF',
    textAlignVertical:'center',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: normalize(17),
    marginRight:20,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: normalize(19),
    fontWeight: "bold",
    textAlign:"center",
    marginBottom:10,
}
});