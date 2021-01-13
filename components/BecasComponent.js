import * as React from "react";
import { View, Text, TouchableOpacity, Linking, ScrollView} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBus, faDollarSign, faGlobeAmericas, faHardHat, faHome, faUtensils,} from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-native-elements";
import { estiloBase } from "../assets/styles/estiloBase";


export default function BecasComponent({navigation}) {

  const navegarAComponent = (route) => {
    navigation.navigate(route)
  }

  return (
    <> 
    
    <ScrollView>
    {Platform.OS === 'ios' && <View style={{marginTop: '5%'}}></View>}
    <Card><Text style={styles.titleText}>Becas disponibles</Text>
  <Text style={styles.titleText}>Tenemos para ofrecerte:</Text>
  <Card.Divider/>
      
         <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaAyudaEconomica') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faDollarSign} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de ayuda económica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaComedor') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faUtensils} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de Comedor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaTransporte') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faBus} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de Transporte</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5} 
          onPress= {() => navegarAComponent('BecaResidencia') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faHome} size={30} color={"white"}/></View>
            <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas de Residencia Universitaria</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress= {() => navegarAComponent('BecaCrisco') }
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faGlobeAmericas} size={30} color={"white"}/></View>
         <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas CRISCO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('http://unca.edu.ar/noticia-2334900-inscripcin-becas-estudiantiles-2021.html')}
          >
            <View style={styles.buttonImageIconStyle}><FontAwesomeIcon icon={faHardHat} size={30} color={"white"}/></View>
         <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Becas Livent</Text>
        </TouchableOpacity>
         <TouchableOpacity
          style={styles.buttonShortStyle}
          activeOpacity={0.5}
          onPress={() => Linking.openURL('http://www.unca.edu.ar/pagina-1-becas-de-ayuda-econmica.html')}
          >
          <Text style={styles.buttonTextStyle}>Y muchas más...</Text>
          
          </TouchableOpacity>
  <Card.Divider style={{backgroundColor:'#FFFFFF'}}/>
</Card>
      
      
        </ScrollView>

    </>
  );
}
  
const styles = estiloBase
