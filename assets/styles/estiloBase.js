
import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const estiloBase = StyleSheet.create({
  baseText: {
    marginTop: 5,
    marginBottom: 5,
    fontSize:RFValue(15, 580),
    fontFamily: 'GoogleSans-Regular',
    textAlign:"center"
  },
  baseTextList: {
    fontSize:RFValue(16, 580),
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
    fontSize:RFValue(14, 580),
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
    width:'80%',
    alignSelf:'center',
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
    fontSize:RFValue(17, 580),
    justifyContent:'center',
    alignSelf:'center',
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
    fontSize:RFValue(18, 580),
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