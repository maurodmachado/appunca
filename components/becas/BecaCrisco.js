import * as React from "react";
import { ScrollView, Text} from "react-native";
import { Card, Divider } from "react-native-elements";
import { estiloBecas } from "../../assets/styles/estiloBecas";


export default function BecaCrisco() {

  return (
    <> 
    
    <ScrollView>
    
    <Card>
      <Text style={styles.titleText}>Becas Crisco</Text>
  <Card.Divider/>
      <Text style={styles.baseText}>El Consejo de Rectores por la Integración de la Subregión Centro Oeste de Sudamérica (CRISCOS) otorga, a través de la UNCA, becas de intercambio de estudiantes de seis meses a universidades de Perú, Paraguay, Chile y Bolivia.</Text>      
      <Divider/>
      <Text style={styles.baseTextTitle}>Beneficios</Text>
      <Text style={styles.baseTextList}>Solvencia de gastos de matriculación, alojamiento y alimentación en la universidad de destino</Text>     
      
  
</Card>
      
      
        </ScrollView>

    </>
  );
}
const styles = estiloBecas