import { StyleSheet} from "react-native";

export const estilo = StyleSheet.create({
    
    baseText: {
      fontSize: 23,
      textAlign:"center"
    },
    buttonContainer: {
        justifyContent: "center",
        padding: 10
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    buttonImageShortIconStyle:{
        padding: 5,
      margin: 5,
      marginTop:5,
    },
    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      marginTop:10,
    },
    buttonShortStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#093869',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#093869',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 80,
        borderRadius: 5,
        margin: 5,
    },
    buttonTextStyle: {
      color: '#fff',
      marginBottom: 4,
      marginLeft: 10,
      fontSize: 18,
      marginRight:20,
    },
    container: {
        margin:20,
        textAlignVertical: "center",
        width: "90%", 
        alignSelf:"center"
    },
    containerHome: {
        margin:180,
        textAlignVertical: "center",
        width: "90%", 
        alignSelf:"center"
    },
    footerText: {
        textAlign:"center",
        fontSize: 19,
        color: "#093869"
      },
    header: {    
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        
      },
    titleText: {
      fontSize: 21,
      fontWeight: "bold",
      textAlign:"center",
    },
   
  });