import * as React from "react";
import { View, Text} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBecas } from "../../assets/styles/estiloBecas";



export default function BecaAyudaEconomica() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    

    <Card>
      <Text style={styles.titleText}>Becas de Ayuda Económica</Text>
  <Card.Divider/>
      <Text style={styles.baseText}>La Universidad Nacional de Catamarca otorga Becas de Ayuda Económica a los alumnos que cursen de 2º Año en adelante, que posean un buen rendimiento académico, y cuya situación socio-económica obstaculiza la continuación de los estudios universitarios.
      </Text>
      <Divider/>
      <Text style={styles.baseTextTitle}>Requisitos</Text>
      <Text style={styles.baseTextList}>Tener  el 50 % de materias aprobadas del curso inmediato anterior, conforme su plan de estudios, en el año calendario  precedente a la solicitud.</Text>
      <Text style={styles.baseTextList}> Promedio Mínimo de Seis (6) Puntos.</Text>
      
<Text style={styles.baseTextList}>Ser alumno regular activo en la UNCa</Text>
<Text style={styles.baseTextList}>No poseer otro tipo de Beca (Nacional, provincial, privada y/o municipal).</Text>

         
  
</Card>
      
      
        </View>

    </>
  );
}
const styles = estiloBecas