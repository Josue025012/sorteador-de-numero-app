import React, {useState} from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";


export default function Index() {
  const [n, setN] = useState(0)

  function sortearNumero() {
    setN(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
        backgroundColor: "#333",
      }}
    >
      <Text 
      style={{
        width: 280,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: "regular",
        color: "white",
      }}>
        O número sorteado foi: {n}
      </Text>
      <TouchableOpacity
      style={{
        backgroundColor: 'white',
        borderRadius: 20,
        width: 280,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPressIn={sortearNumero}
      activeOpacity={0.8}>
        <Text
        style={{
          width: 100,
          textAlign: "center",
          color: "black",
          fontSize: 16,
          fontWeight: "bold",
          boxShadow: "solid",
          shadowColor: "black",
        }}>
          Sortear
        </Text>
      </TouchableOpacity>
    </View>
  );
}
