
import { StyleSheet} from "react-native";
import { normalize } from "../../components/utils/utils";


export const estiloBase = StyleSheet.create({
  baseText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize:normalize(15),
    fontFamily: 'GoogleSans-Regular',
    textAlign:"center"
  },
  baseTextList: {
    fontSize: normalize(15),
    fontFamily: 'GoogleSans-Regular',
    textAlign:"center",
    borderColor:'black',
    borderWidth:1,
    backgroundColor:'#1999d0',
    margin:'1%',
    
  },
  baseTextTitle: {
    marginTop:'1%',
    marginBottom:'1%',
    fontSize: normalize(14),
    fontFamily: 'KeepCalm-Medium',
    textAlign:"center"
  },
  buttonShortStyle:{
    flexDirection: "row", 
    justifyContent: "center",
    backgroundColor: '#1999d0',
    borderWidth: 1, 
    borderColor: '#0F0F0F',
    height: '10%',
    borderRadius: 10,
    marginLeft:'25%',
    marginRight:'25%',
    margin:'1%',
    marginBottom:'5%'
  },
  buttonContainer: {
      justifyContent: "center",
      padding: '2%',
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
      borderRadius: 5,
      margin:'2%',
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    textAlignVertical:'center',
    fontSize: normalize(17),
    fontFamily: 'GoogleSans-Regular',
    flex:1,
    textAlign:'center'
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize:normalize(18),
    fontFamily: 'KeepCalm-Medium',
    textAlign:'center',
  },
  responsiveImage: {
    width: '100%',
    borderWidth:1,
    borderColor:'black',
    // Without height undefined it won't work
    height: undefined,
    // figure out your image aspect ratio
    aspectRatio: 135 / 60,
    marginBottom:'2%'
  },
  });