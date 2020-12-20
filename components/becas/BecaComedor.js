import * as React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Card, Divider } from "react-native-elements";


export default function BecaComedor() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    
    <Card>
  <Card.Title><Text style={styles.titleText}>Becas de Comedor</Text></Card.Title>
  <Card.Divider/>
      <Text style={styles.baseText}>La Universidad Nacional de Catamarca ofrece Becas de Comedor Universitario a número de sus alumnos.</Text> 
      <Text style={styles.baseText}>Ademas, subsidia a los estudiantes que no tienen la beca completa, con el 50% del valor total del menú</Text>
      
      <Text style={styles.baseText}>La subvención incluye a todos los alumnos universitarios y preuniversitarios</Text>
      <Divider/>
      <Text style={styles.baseTextTitle}>Requisitos</Text>
      <Text style={styles.baseTextList}>Certificado de Alumno Regular y una Foto 4x4, para obtener el carnet habilitante</Text>     
      <Text style={styles.baseTextList}>Ser alumno regular activo en la UNCa</Text>
      <Text style={styles.baseTextList}>Ser alumno de la Escuela Preuniversitaria “Fray M. Esquiú” o E.N.E.T. N° 1 “Prof. Vicente G. Aguilera”</Text>

         
  
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
    fontSize: 16,
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