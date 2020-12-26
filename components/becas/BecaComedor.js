import * as React from "react";
import { View, Text} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBecas } from "../../assets/styles/estiloBecas";


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
const styles = estiloBecas