
import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { normalize } from "../../components/utils/utils";

export const estiloBecas = StyleSheet.create({
  baseText: {
    fontSize:RFValue(15, 580),
    fontFamily: 'GoogleSans-Regular',    
    textAlign:"center",
    marginBottom:'1%',
  },
  baseTextList: {
    fontSize:RFValue(15, 580),
    fontFamily: 'GoogleSans-Regular',    
    textAlign:"center",
    backgroundColor:'#1999d0',
    margin:'1%',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    
  },
  baseTextTitle: {
    marginTop:'1%',
    marginBottom:'1%',
    fontSize:RFValue(16, 580),
    fontFamily: 'GoogleSans-Regular',
    textAlign:"center"
  },
  buttonInfoStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: 'red',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '5%',
    borderRadius: 15,
    margin: '2%',
  },
  buttonShortStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: '#1999d0',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '10%',
    borderRadius: 5,
    margin: '2%',
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize:RFValue(19, 580),
    fontFamily: 'KeepCalm-Medium',    
    textAlign:"center",
    marginBottom:10,
}
});