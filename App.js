import 'react-native-gesture-handler';
import React from 'react';
import HomeComponent from './components/HomeComponent';
import CarrerasComponent from './components/CarrerasComponent';
import PreguntasComponent from './components/PreguntasComponent';
import BecasComponent from './components/BecasComponent';
import DeporteComponent from './components/DeporteComponent';
import ComedorComponent from './components/SaludComponent';
import FacultadHumanidadesComponent from './components/humanidades/FacultadHumanidadesComponent';
import CarrerasHumanidades  from './components/humanidades/CarrerasHumanidades';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarrerasEscArqueologia from './components/escuela-arqueologia/CarrerasEscArqueologia';
import EscuelaArqueologiaComponent from './components/escuela-arqueologia/EscuelaArqueologiaComponent';
import CarrerasTecnologia from './components/tecnologia/CarrerasTecnologia';
import FacultadTecnologiaComponent from './components/tecnologia/FacultadTecnologiaComponent';
import FacultadEconomicasComponent from './components/economicas/FacultadEconomicasComponent';
import CarrerasEconomicas from './components/economicas/CarrerasEconomicas';
import FacultadAgrariasComponent from './components/agrarias/FacultadAgrariasComponent';
import CarrerasAgrarias from './components/agrarias/CarrerasAgrarias';
import FacultadDerechoComponent from './components/derecho/FacultadDerechoComponent';
import CarrerasDerecho from './components/derecho/CarrerasDerecho';
import FacultadSaludComponent from './components/salud/FacultadSaludComponent';
import CarrerasSalud from './components/salud/CarrerasSalud';
import FacultadExactasComponent from './components/exactas/FacultadExactasComponent';
import CarrerasExactas from './components/exactas/CarrerasExactas';
import BecaAyudaEconomica from './components/becas/BecaAyudaEconomica';
import BecaComedor from './components/becas/BecaComedor';
import BecaTransporte from './components/becas/BecaTransporte';
import BecaResidencia from './components/becas/BecaResidencia';
import BecaCrisco from './components/becas/BecaCrisco';
import SaludComponent from './components/SaludComponent';
import MapaUniversidadComponent from './components/MapaUniversidadComponent';


const Stack = createStackNavigator(
  
);


const App = () => {
  
  return (
    <>
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
