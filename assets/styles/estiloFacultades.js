
import { StyleSheet} from "react-native";
import { normalize } from "../../components/utils/utils";


export const estiloFacultades = StyleSheet.create({
  buttonAnterior:{
    marginRight: 2,
    borderColor:'black',
    borderWidth:1,
  },
  buttonSiguiente:{
    marginLeft: 2,
    borderColor:'black',
    borderWidth:1,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center", 
  },
  buttonWhitIcon:{
    padding:5,
    
  },
  buttonShortStyle: {
    flexDirection:'row',
    backgroundColor: '#1999d0',
    borderWidth: 1,
    borderColor: '#0F0F0F',
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center',
    bottom:0
  },
  buttonShortOutlineStyle: {
    flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#1999d0',
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center',
    bottom:0
  },
    buttonContainer: {
    justifyContent: 'flex-end',
    alignItems:'flex-end',
        margin:'1%',
    },
    buttonImageShortIconStyle: {
      margin: '3%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    responsiveImage: {
      borderWidth:1,
      borderColor:'#0F0F0F',
      width: '100%',
      // Without height undefined it won't work
      height: undefined,
      // figure out your image aspect ratio
      aspectRatio: 135 / 75,
    },
    cardContainer:{
      borderWidth: 1, 
      borderColor:'#0F0F0F',
      flex:1, 
      margin: '1%',
      marginBottom:10
    },
    cardBodyContainer:{
      justifyContent:'center'
    },
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textCardTitle:{
      marginTop: 5,
      marginBottom: 5,
      fontSize:normalize(14),
      // fontFamily: 'titleFont',
    },
    textCard:{
      marginTop: 5,
      marginBottom: 5,
      fontSize:normalize(16),
      // fontFamily: 'appFont',      
      textAlign:'center'
    },
    centeredView: {
      
      justifyContent: "center",
      alignItems: "center",
    },
    alignVertical:{
      textAlignVertical:'center'
    },
    textCartTitleStyle: {
    fontSize:normalize(18),
    // fontFamily: 'titleFont',    
    color: "black",
    textShadowColor: 'white',
    textShadowRadius:10,
    textAlign:'center',
    },
    textStyle: {
    fontSize:normalize(16),
    // fontFamily: 'appFont',    
    color: "white",
    textShadowColor: 'black',
    textShadowRadius:10,
    textAlign:'center'
    },
    textOutlineStyle: {
    fontSize:normalize(16),
    // fontFamily: 'appFont',    
    color: "#0f0f0f",
    textAlign:'center'
    },
    buttonTextStyle:{
      flex:100,
      flexDirection: 'row',
      justifyContent: 'center'
    }
  });