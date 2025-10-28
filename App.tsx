import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import SelectorNota from './components/SelectorNota'
import { CURSOS, getCurso } from './model/Cursos'
import * as R from 'ramda'
import SelectorNumero from './components/SelectorNumero'

export default function App() {
  const [notaMedia, setNotaMedia] = useState(0)
  const [listaNotas, setListaNotas] = useState<Array<number>>([])
  const [nombre, setNombre] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [idCursoSeleccionado, setIdCursoSeleccionado] = useState("1DAM")
  const cursoSeleccionado = useMemo( () => getCurso(idCursoSeleccionado), [idCursoSeleccionado] )
  useEffect(actualizarNotaMedia, [listaNotas])
  useEffect(inicializarListaNotas, [cursoSeleccionado])

  function inicializarListaNotas() {
    const objetoCurso = getCurso(idCursoSeleccionado)
    const listaCeros = R.repeat(0, objetoCurso.asignaturas.length)
    setListaNotas(listaCeros)
  }

  function actualizarNotaMedia (){
    const media = listaNotas.length === 0 ? 0 :
    listaNotas.reduce( (valorPrevio, valorActual) => valorPrevio + valorActual ) / listaNotas.length
    setNotaMedia(media)
  }

  function borrarDatos() {
    setNombre("")
    setApellidos("")
    inicializarListaNotas()
  }
  function subirNota (posicion: number) {
    const nuevaLista = R.update(posicion, listaNotas[posicion]+1, listaNotas)
    setListaNotas (nuevaLista)
  }
  function bajarNota(posicion: number) {
    const nuevaLista = R.update(posicion, listaNotas[posicion]-1, listaNotas)
    setListaNotas (nuevaLista)
  }

  function getEstadisticas():Array<number> {
    const aprobados = listaNotas.filter( nota => nota >= 5 ).length
    const suspensos = listaNotas.length - aprobados
    return [ aprobados, suspensos ]
  }

  function mostrarInformacion () {
    const [aprobados, suspensos] = getEstadisticas ()
    const info=`
    Nombre: ${nombre}
    Apellidos: ${apellidos}
    Curso: ${cursoSeleccionado.nombre}
    Aprobados: ${aprobados}
    Suspensos: ${suspensos}

    Nota media: ${notaMedia}
    `
    Alert.alert ("Boletín de notas", info)
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Mis notas</Text>
      <View style={styles.formulario}>
        <View style={styles.columna}>
          <Text style={styles.pista}>Nombre</Text>
          <TextInput
            style={styles.cuadroTexto}
            placeholder={"Ejemplo: Juan Diego"}
            value={nombre}
            onChangeText={setNombre}
          />
        </View>
        <View style={styles.columna}>
          <Text style={styles.pista}>Apellidos</Text>
          <TextInput
            style={styles.cuadroTexto}
            placeholder={"Ejemplo: Bolívar Ramos"}
            value={apellidos}
            onChangeText={setApellidos}
          />
        </View>
        <View style={styles.columna}>
          <Text style={styles.pista}>Curso</Text>
          <View style={styles.picker}>
            <Picker selectedValue={idCursoSeleccionado} onValueChange={setIdCursoSeleccionado}>
              {
                CURSOS.map( curso => <Picker.Item label={curso.nombre} value={curso.id}/> )
              }
            </Picker>
          </View>
        </View>
        <View style={styles.columna}>
        {
          cursoSeleccionado.asignaturas.map( (asignatura, i) =>
            (
              <SelectorNumero
                key={asignatura}
                texto={`Nota de ${asignatura}`}
                valor={listaNotas[i]}
                masPulsado = { () => subirNota (i) }
                menosPulsado = { () => bajarNota (i) }
              />
            )
          )
        }
        </View>
      </View>
      <Text style={styles.media}>Nota media: {notaMedia}</Text>
      <Pressable
        style={[styles.botonAlargado, styles.azul]}
        onPress={() => console.log(`${nombre} ${apellidos} ${idCursoSeleccionado}`)}
      >
        <Text style={styles.textoBotonAlargado}>ACEPTAR</Text>
      </Pressable>
      <Pressable
        style={[styles.botonAlargado, styles.rojo]}
        onPress={borrarDatos}
      >
        <Text style={styles.textoBotonAlargado}>BORRAR</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  formulario:{
    flex:1,    
  },
  columna: {
    paddingVertical: 8,
  },
  
  pista: {
    fontSize: 16,
    color: "#555",
    marginBottom: 4,
    fontWeight: "500",
  },
  
  picker: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    marginTop: 4,
    height: 48,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,   
    marginBottom:16, 
  },
  rojo: {
    backgroundColor: "#dc3545",
  },
  
  cuadroTexto: {
    borderWidth: 1,
    borderColor: "#CED4DA",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    marginTop: 4,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom:8
  },
  
  media: {
    color: "#333",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
    marginBottom: 12,
  },   
  azul:{
    backgroundColor: "#007BFF",
  },
  botonAlargado: {    
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  textoBotonAlargado: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
})