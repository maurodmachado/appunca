import * as React from "react";
import { View, Text, StyleSheet, Linking, Image} from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { imagenes } from "./facultades/InformacionApp";


export default function MapaUniversidadComponent() {


  return (
    <> 
    
    <ScrollView>
    {Platform.OS === 'ios' && <View style={{marginTop: '5%'}}></View>}
    <Card><Text style={styles.titleText}>Mapa de la Universidad</Text>
 
  <Card.Divider/>
  <Image
          source={{uri: imagenes.imagenMapaUnca}}
          style={styles.responsiveImage}
        />
</Card>
        </ScrollView>

    </>
  );
}
const styles = StyleSheet.create({
  
  responsiveImage: {
    width: '100%',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    aspectRatio: 135 / 180,
  },
  container: {
      textAlignVertical: "center",
      alignSelf:"center"
  },
  titleText: {
    fontSize:RFValue(21, 580),
    fontFamily: 'KeepCalm-Medium',    
    textAlign:"center",
    marginBottom:'2%',
  }
});