import * as React from "react";
import { View, Text, StyleSheet, Linking} from "react-native";
import { Badge, Card, Divider } from "react-native-elements";


export default function SaludComponent() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    
    <Card>
  <Card.Title><Text style={styles.titleText}>Servicio de Salud Universitaria <Badge value="+ Información" status="error" onPress={() => Linking.openURL('http://www.unca.edu.ar/pagina-1600-servicio-de-salud-universitaria-71.html?pagina_=0')}/></Text></Card.Title>
 
  <Card.Divider/>
      <Text style={styles.baseText}>Su objetivo principal es educar para la prevención, brindando a los jóvenes la oportunidad de aprender, adquirir y desarrollar los conocimientos, las competencias, los valores que lo facultan para su autocuidado.</Text>      
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
  baseText: {
    fontSize: 16,
    textAlign:"center",
    marginBottom:10,
  },
  baseTextList: {
    fontSize: 15,
    textAlign:"center",
    backgroundColor:'#1999d0',
    
    margin:2
    
  },
  baseTextTitle: {
    marginTop:10,
    marginBottom:10,
    fontSize: 16,
    fontWeight:'bold',
    textAlign:"center"
  },
  buttonContainer: {
      justifyContent: "center",
      padding: 5
  },
  buttonIconSeparatorStyle: {
      backgroundColor: '#1999d0',
      width: 1,
      height: 45,
  },
  buttonImageShortIconStyle:{
      padding: 5,
    margin: 5,
    marginTop:5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    marginTop:10,
  },
  buttonShortStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: '#1999d0',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
      height: 60,
      borderRadius: 5,
      margin: 4,
  },
  buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#093869',
      borderWidth: 1, 
      borderColor: '#0F0F0F',
      height: 60,
      borderRadius: 5,
      margin: 4,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 17,
    marginRight:20,
  },
  buttonTextStyleCenter: {
    color: '#FFFFFF',
    textAlignVertical:'center',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 17,
    marginRight:20,
  },
  container: {
      margin:20,
      textAlignVertical: "center",
      width: "90%", 
      alignSelf:"center"
  },
  containerHome: {
      margin:180,
      textAlignVertical: "center",
      width: "90%", 
      alignSelf:"center"
  },
  footerText: {
      textAlign:"center",
      fontSize: 19,
      color: "#093869"
    },
  header: {    
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      
    },
  titleText: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign:"center",
    marginBottom:10,
  }
});