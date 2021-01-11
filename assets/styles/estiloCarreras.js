

  
import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const estiloCarreras = StyleSheet.create({
    containerButton: {
    margin:20,
    textAlignVertical: "center",
    width: "90%", 
    alignSelf:"center"
    },
    titleCarrera:{
    color: "black",
    fontSize:RFValue(18, 580),
    marginBottom:5,
    textAlign:'center'
    
    },
    itemTitleBlackStyle: {
    color: "black",
    fontSize:RFValue(16, 580),
    },
    itemTitleWhiteStyle: {
      color: "white",
      fontSize:RFValue(16, 580),
      }
      
});