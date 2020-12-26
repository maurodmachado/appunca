import 'react-native-gesture-handler';
import React from 'react';
import HomeComponent from './components/HomeComponent';
import CarrerasComponent from './components/CarrerasComponent';
import PreguntasComponent from './components/PreguntasComponent';
import BecasComponent from './components/BecasComponent';
import DeporteComponent from './components/DeporteComponent';
import SaludComponent from './components/SaludComponent';
import MapaUniversidadComponent from './components/MapaUniversidadComponent';


//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Facultades
import FacultadTecnologiaComponent from './components/facultades/tecnologia/FacultadTecnologiaComponent';
import FacultadHumanidadesComponent from './components/facultades/humanidades/FacultadHumanidadesComponent';
import EscuelaArqueologiaComponent from './components/facultades/escuela-arqueologia/EscuelaArqueologiaComponent';
import FacultadEconomicasComponent from './components/facultades/economicas/FacultadEconomicasComponent';
import FacultadAgrariasComponent from './components/facultades/agrarias/FacultadAgrariasComponent';
import FacultadDerechoComponent from './components/facultades/derecho/FacultadDerechoComponent';
import FacultadSaludComponent from './components/facultades/salud/FacultadSaludComponent';
import FacultadExactasComponent from './components/facultades/exactas/FacultadExactasComponent';

//Carreras
import CarrerasTecnologia from './components/facultades/tecnologia/CarrerasTecnologia';
import CarrerasHumanidades  from './components/facultades/humanidades/CarrerasHumanidades';
import CarrerasEscArqueologia from './components/facultades/escuela-arqueologia/CarrerasEscArqueologia';
import CarrerasEconomicas from './components/facultades/economicas/CarrerasEconomicas';
import CarrerasAgrarias from './components/facultades/agrarias/CarrerasAgrarias';
import CarrerasDerecho from './components/facultades/derecho/CarrerasDerecho';
import CarrerasSalud from './components/facultades/salud/CarrerasSalud';
import CarrerasExactas from './components/facultades/exactas/CarrerasExactas';

//Becas
import BecaAyudaEconomica from './components/becas/BecaAyudaEconomica';
import BecaComedor from './components/becas/BecaComedor';
import BecaTransporte from './components/becas/BecaTransporte';
import BecaResidencia from './components/becas/BecaResidencia';
import BecaCrisco from './components/becas/BecaCrisco';

import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

const Stack = createStackNavigator(
  
);


const App = () => {
  
  
  useEffect(() => {
    SplashScreen.hide()
    
  }, [])
  return (
    <>
    {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Descubriendo la UNCa"
        >
          <Stack.Screen 
          name="Descubriendo la UNCa"
          component={HomeComponent}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Preguntas"
          component={PreguntasComponent}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Carreras"
          component={CarrerasComponent}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Becas"
          component={BecasComponent}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Deporte"
          component={DeporteComponent}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="Salud"
          component={SaludComponent}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="MapaUniversidad"
          component={MapaUniversidadComponent}
          options={{headerShown: false}}
          />

    {/* Facultad de Tecnologia */}
    <Stack.Screen 
          name="Facultad de Tecnologia"
          component={FacultadTecnologiaComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasTecnologia"
          component={CarrerasTecnologia}
          options={{headerShown: false}}
          />

          {/* Facultad de Humanidades */}
        <Stack.Screen 
          name="Facultad de Humanidades"
          component={FacultadHumanidadesComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasHumanidades"
          component={CarrerasHumanidades}
          options={{headerShown: false}}
          />

          {/* Escuela de Arqueologia */}
        <Stack.Screen 
          name="Escuela de Arqueologia"
          component={EscuelaArqueologiaComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasEscArqueologia"
          component={CarrerasEscArqueologia}
          options={{headerShown: false}}
          />

          {/* Facultad de Ciencias Economicas */}
        <Stack.Screen 
          name="Facultad de Economicas"
          component={FacultadEconomicasComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasEconomicas"
          component={CarrerasEconomicas}
          options={{headerShown: false}}
          />

          {/* Facultad de Ciencias Agrarias */}
        <Stack.Screen 
          name="Facultad de Agrarias"
          component={FacultadAgrariasComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasAgrarias"
          component={CarrerasAgrarias}
          options={{headerShown: false}}
          />

          {/* Facultad de Derecho */}
        <Stack.Screen 
          name="Facultad de Derecho"
          component={FacultadDerechoComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasDerecho"
          component={CarrerasDerecho}
          options={{headerShown: false}}
          />

          {/* Facultad de Ciencias de la Salud */}
        <Stack.Screen 
          name="Facultad de Salud"
          component={FacultadSaludComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasSalud"
          component={CarrerasSalud}
          options={{headerShown: false}}
          />

          {/* Facultad de Ciencias Exactas */}
        <Stack.Screen 
          name="Facultad de Exactas"
          component={FacultadExactasComponent}
          options={{headerShown: false}}
          />
        <Stack.Screen 
          name="CarrerasExactas"
          component={CarrerasExactas}
          options={{headerShown: false}}
          />

          {/* Becas */}
          <Stack.Screen 
          name="BecaAyudaEconomica"
          component={BecaAyudaEconomica}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="BecaComedor"
          component={BecaComedor}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="BecaTransporte"
          component={BecaTransporte}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="BecaResidencia"
          component={BecaResidencia}
          options={{headerShown: false}}
          />
          <Stack.Screen 
          name="BecaCrisco"
          component={BecaCrisco}
          options={{headerShown: false}}
          />

          
        </Stack.Navigator>
      </NavigationContainer>
    
    </>
  );
};



export default App;
