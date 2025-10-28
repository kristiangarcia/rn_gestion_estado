import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SelectorNumeroProps = {
    texto: string,
    minimo: number,
    maximo: number,
    valor: number,
    masPulsado: () => void,
    menosPulsado: () => void
}

export default function SelectorNumero({texto, minimo=0, maximo=10, valor, masPulsado, menosPulsado}: SelectorNumeroProps) {
    return (
        <View style={styles.fila}>
            <Text>{texto}</Text>
            <View style={styles.botonera}>
                <Pressable
                    disabled={valor === minimo}
                    style={[styles.boton, styles.rojo, { opacity: valor === 0 ? 0.4 : 1 }]}
                    onPress={() => menosPulsado()}
                >
                    <Text style={styles.textoBoton}>-</Text>
                </Pressable>
                <Text style={styles.nota}>{valor}</Text>
                <Pressable
                    disabled={valor === maximo}
                    style={[styles.boton, styles.verde, { opacity: valor === 10 ? 0.4 : 1 }]}
                    onPress={() => masPulsado()}
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