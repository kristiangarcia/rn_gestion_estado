import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SelectorNotaProps = {
    asignatura: string,
    nota: number,
    setNota: (nuevaNota: number) => void
}

export default function SelectorNota({ asignatura, nota, setNota }: SelectorNotaProps) {
    return (
        <View style={styles.fila}>
            <Text>Nota de {asignatura}</Text>
            <View style={styles.botonera}>
                <Pressable
                    disabled={nota === 0}
                    style={[styles.boton, styles.rojo, { opacity: nota === 0 ? 0.4 : 1 }]}
                    onPress={() => setNota(nota - 1)}
                >
                    <Text style={styles.textoBoton}>-</Text>
                </Pressable>
                <Text style={styles.nota}>{nota}</Text>
                <Pressable
                    disabled={nota === 10}
                    style={[styles.boton, styles.verde, { opacity: nota === 10 ? 0.4 : 1 }]}
                    onPress={() => setNota(nota + 1)}
                >
                    <Text style={styles.textoBoton}>+</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fila: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 20,
        marginTop: 8,
        justifyContent: "space-between",
    },
    botonera: {
        flexDirection: "row",
        columnGap: 10,
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
    rojo: {
        backgroundColor: "#dc3545",
    },
    verde: {
        backgroundColor: "#28a745",
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
    }
})