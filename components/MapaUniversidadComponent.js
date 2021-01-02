import * as React from "react";
import { View, Text, StyleSheet, Linking, Image} from "react-native";
import { Card, normalize } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";


export default function MapaUniversidadComponent() {

  return (
    <> 
    
    <ScrollView>
    {Platform.OS === 'ios' && <View style={{marginTop: '5%'}}></View>}
    <Card><Text style={styles.titleText}>Mapa de la Universidad</Text>
 
  <Card.Divider/>
  <Image
          source={require('../assets/mapaunca.jpg')}
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
    fontSize: normalize(21),
    // fontFamily: 'titleFont',    
    textAlign:"center",
    marginBottom:'2%',
  }
});