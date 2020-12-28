
import { StyleSheet} from "react-native";
import { normalize } from "../../components/utils/utils";


export const estiloBase = StyleSheet.create({
  baseText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize:normalize(15),
    fontFamily: 'appFont',
    textAlign:"center"
  },
  baseTextList: {
    fontSize: normalize(15),
    fontFamily: 'appFont',
    textAlign:"center",
    borderColor:'black',
    borderWidth:1,
    backgroundColor:'#1999d0',
    margin:'1%',
    
  },
  baseTextTitle: {
    marginTop:'1%',
    marginBottom:'1%',
    fontSize: normalize(16),
    fontFamily: 'appFont',
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
    fontFamily: 'appFont',
    marginRight:'5%',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    marginBottom: '2%',
    marginLeft: '3%',
    fontSize: normalize(17),
    fontFamily: 'appFont',
    marginRight:'5%',
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    margin:'2%'
  },
  titleText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize:normalize(18),
    fontFamily: 'titleFont',
    textAlign:'center',
  },
  responsiveImage: {
    width: '100%',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    aspectRatio: 135 / 40,
    marginBottom:'2%'
  },
  });