
import { StyleSheet} from "react-native";
import { normalize } from "../../components/utils/utils";


export const estiloPregFrec = StyleSheet.create({
  baseText: {
    fontSize: normalize(23),
    textAlign:"center"
  },
  buttonShortStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: '#1999d0',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '10%',
    borderRadius: 5,
    paddingRight: '2%',
    margin:'2%',
  },
  buttonContainer: {
      justifyContent: "center",
      padding: '2%'
  },
  buttonIconSeparatorStyle: {
      backgroundColor: '#1999d0',
      width: 1,
      height: '80%',
  },
  buttonImageIconStyle: {
    padding: '2%',
    margin: '2%',
    marginTop:'2%',
  },
  buttonStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#093869',
      borderWidth: 1, 
      borderColor: '#0F0F0F',
      height: '10%',
      borderRadius: 5,
      paddingRight: '2%',
      margin:'2%',
  },
  buttonTextStyleCenter: {
    color: '#FFFFFF',
    textAlignVertical:'center',
    marginBottom: '2%',
    marginLeft: '3%',
    fontSize: normalize(17),
    marginRight:'5%',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    marginBottom: '2%',
    marginLeft: '3%',
    fontSize: normalize(17),
    marginRight:'5%',
  },
  container: {
      margin: '2%',
      textAlignVertical: "center",
      width: "90%", 
      alignSelf:"center"
  },
  titleText: {
    fontSize: normalize(21),
    fontWeight: "bold",
    textAlign:"center",
    marginBottom:'2%',
    marginTop:'2%',
  },
  });