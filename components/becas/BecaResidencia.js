import * as React from "react";
import { View, Text} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBecas } from "../../assets/styles/estiloBecas";


export default function BecaResidencia() {

  return (
    <> 
    
    <View style={styles.contenedor}>
    
    <Card>
      <Text style={styles.titleText}>Becas de Residencia Universitaria</Text>
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
const styles = estiloBecas