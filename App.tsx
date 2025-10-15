import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'

export default function App() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Mis notas</Text>
      <View style={styles.formulario}>
        <View style={styles.columna}>
          <Text style={styles.pista}>Nombre</Text>
          <TextInput style={styles.cuadroTexto} placeholder={"Ejemplo: Juan Diego"}></TextInput>
        </View>
        <View style={styles.columna}>
          <Text style={styles.pista}>Apellidos</Text>
          <TextInput style={styles.cuadroTexto} placeholder={"Ejemplo: Bolívar Ramos"}></TextInput>
        </View>
        <View style={styles.columna}>
          <Text style={styles.pista}>Curso</Text>
          <View style={styles.picker}>
            <Picker>
              <Picker.Item label={"1º DAM"} value={"1DAM"} />
              <Picker.Item label={"2º DAM"} value={"2DAM"} />
            </Picker>
          </View>
        </View>
        <View style={styles.columna}>
          <View style={styles.fila}>
            <Text>Nota de programación</Text>
            <View style={styles.botonera}>
              <Pressable style={[styles.boton, styles.rojo]}>
                <Text style={styles.textoBoton}>-</Text>
              </Pressable>
              <Text style={styles.nota}>0</Text>
              <Pressable style={[styles.boton, styles.verde]}>
                <Text style={styles.textoBoton}>+</Text>
              </Pressable>
              </View>
          </View>
        </View>
      </View>
      <Text style={styles.media}>Nota media</Text>
      <Pressable style={[styles.botonAlargado, styles.azul]}>
        <Text style={styles.textoBotonAlargado}>ACEPTAR</Text>
      </Pressable>
      <Pressable style={[styles.botonAlargado, styles.rojo]}>
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
  fila: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginTop: 8,
    justifyContent: "space-between",
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
  verde: {
    backgroundColor: "#28a745",
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

  boton: {
    borderRadius: 16,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  textoBoton: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  nota: {
    width: 30,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },

  botonera: {
    flexDirection: "row",
    columnGap: 10,
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