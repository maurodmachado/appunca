import * as React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Card, Divider } from "react-native-elements";


export default function BecaResidencia() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    
    <Card>
  <Card.Title><Text style={styles.titleText}>Becas de Residencia Universitaria</Text></Card.Title>
  <Card.Divider/>
      <Text style={styles.baseText}>La UNCa ofrece alojamiento a sus alumnos que soliciten esta beca</Text>      
      <Divider/>
      <Text style={styles.baseTextTitle}>Requisitos</Text>
      <Text style={styles.baseTextList}>Ser argentino o naturalizado</Text>     
      <Text style={styles.baseTextList}>Ser alumno regular activo en la UNCa</Text>
      <Text style={styles.baseTextList}>Los alumnos ingresantes, deben tener aprobado el Nivel Medio con un promedio general no menor a siete (7). Deberán acreditar haber aprobado el curso de ingreso, con un promedio minimo de siete (7)</Text>
      <Text style={styles.baseTextList}>Los solicitantes a partir de 2º año, deberán tener aprobadas el 50% de las materias del curso inmediato anterior, conforme su plan de estudios. Promedio minimo: 6</Text>
      <Text style={styles.baseTextList}> No poseer otro tipo de Beca (Nacional, provincial, privada y/o municipal).</Text>
  
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