import * as React from "react";
import { ScrollView, Text} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBecas } from "../../assets/styles/estiloBecas";


export default function BecaTransporte() {

  return (
    <> 
    
    <ScrollView>
    
    <Card>
      <Text style={styles.titleText}>Becas de Transporte</Text>
  <Card.Divider/>
      <Text style={styles.baseText}>La Universidad Nacional de Catamarca otorga a sus alumnos universitarios y preuniversitarios,  que por su situación socio - económica vean amenazado el inicio o permanencia en el sistema educativo, para lo cual la UNCa otorga las Becas de Transporte para cubrir el traslado diario de del alumno desde su lugar de residencia hasta la Universidad o la Escuela y su regreso</Text>      
      <Divider/>
      <Text style={styles.baseTextTitle}>Requisitos</Text>
      <Text style={styles.baseTextList}>Alumnos Ingresantes tener aprobado el Nivel Medio o Equivalente</Text>     
      <Text style={styles.baseTextList}>Ser alumno regular activo en la UNCa</Text>
      <Text style={styles.baseTextList}>Ser alumno de la Escuela Preuniversitaria “Fray M. Esquiú” o E.N.E.T. N° 1 “Prof. Vicente G. Aguilera”</Text>
      <Text style={styles.baseTextList}>Acreditar que reside a más de 1 km y hasta 50 km de la UNCA o Escuela Preuniversitaria</Text>
      
  
</Card>
      
      
        </ScrollView>

    </>
  );
}
const styles = estiloBecas