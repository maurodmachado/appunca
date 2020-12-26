import * as React from "react";
import { View, Text, StyleSheet, Linking, Image} from "react-native";
import { Card, normalize } from "react-native-elements";


export default function MapaUniversidadComponent() {

  return (
    <> 
    
    <View style={styles.container}>
    
    <Card>
  <Card.Title><Text style={styles.titleText}>Mapa de la Universidad</Text></Card.Title>
 
  <Card.Divider/>
  <Image
          source={require('../assets/mapaunca.jpg')}
          style={styles.responsiveImage}
        />
</Card>
        </View>

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
      width: "95%", 
      alignSelf:"center"
  },
  titleText: {
    fontSize: normalize(21),
    fontWeight: "bold",
    textAlign:"center",
    marginBottom:'2%',
  }
});