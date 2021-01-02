

  
import { StyleSheet} from "react-native";
import { normalize } from "../../components/utils/utils";

export const estiloCarreras = StyleSheet.create({
    containerButton: {
    margin:20,
    textAlignVertical: "center",
    width: "90%", 
    alignSelf:"center"
    },
    titleCarrera:{
    color: "black",
    fontSize: normalize(18),
    marginBottom:5,
    textAlign:'center'
    
    },
    itemTitleBlackStyle: {
    color: "black",
    fontSize: normalize(16),
    },
    itemTitleWhiteStyle: {
      color: "white",
      fontSize: normalize(16),
      }
      
});