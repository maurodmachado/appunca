
import { StyleSheet} from "react-native";
import { normalize } from "../../components/utils/utils";

export const estiloBecas = StyleSheet.create({
  baseText: {
    fontSize: normalize(14),
    fontFamily: 'appFont',
    textAlign:"center",
    marginBottom:'1%',
  },
  baseTextList: {
    fontSize: normalize(15),
    fontFamily: 'appFont',
    textAlign:"center",
    backgroundColor:'#1999d0',
    margin:'1%',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    
  },
  baseTextTitle: {
    marginTop:'1%',
    marginBottom:'1%',
    fontSize: normalize(16),
    fontFamily: 'appFont',
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
  buttonTextStyleCenter: {
    color: '#FFFFFF',
    textAlignVertical:'center',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: normalize(17),
    fontFamily: 'appFont',
    marginRight:20,
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center'
  },
  titleText: {
    fontSize: normalize(19),
    fontFamily: 'titleFont',
    textAlign:"center",
    marginBottom:10,
}
});