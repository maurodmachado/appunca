
- Reveer secciones que incluye la página para que los enlaces a los que se redirecciona tenga la información que corresponde.
- Solicitar breve descripción de cada facultad de unas 40 - 45 palabras
- Generalizar datos a mostrar en contacto. Dirección - Contacto (Telefono, whatsapp(opcional) y email) - Solicitar estos datos

Sugerencias:
- Agregar comunicacion via whatsapp (facilidad y seguridad por parte del ingresante)
- Agregar video o gif explicativo de la preinscripcion en http://preinscripcion.unca.edu.ar ya que todas inscripciones seran dirigidas a esta pagina.   


- PLANES DE ESTUDIO EN FOTOCOPIA????!! SOLICITAR DIGITALIZADO SI O SI


<Button
      type="outline"    
      buttonStyle={{borderRadius: 10, margin:5, borderWidth: 1, borderColor: '#093869', backgroundColor: '#FFFFFF'}}
      title='Inscripciones'
      titleStyle={{color:'#093869'}}
      icon={<FontAwesomeIcon icon={faAlignJustify} size={20} color="#093869" style={{position:'absolute', left:10}}/>}
      title='Inscripciones'
      onPress={toggleOverlay2}
      />
      <Overlay isVisible={visible2} onBackdropPress={toggleOverlay2}>
      <View style={styles.centeredView}>
          <Text style={{fontSize:20, fontWeight: 'bold'}}>Para Inscribirse:</Text>
          <Text style={styles.textCard}>Fotocopia DNI</Text>
          <Text style={styles.textCard}>Partida de Nacimiento Legalizada</Text>
          <Text style={styles.textCard}>Título secundario (provisoriamente Constancia de terminación de estudios)</Text>
          <Text style={styles.textCard}>Certificado de Domicilio</Text>
          <Text style={styles.textCard}>Fotos carnet de 4x4 (cuatro)</Text>
          <Text style={styles.textCard}>Formulario de Inscripción</Text>
          <Text style={styles.textCard}>Enviar por E-mail a: inscripcion@exactas.unca.edu.ar</Text>
          </View>
      </Overlay>