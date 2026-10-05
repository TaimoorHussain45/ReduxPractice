import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  addAmount,
  addFive,
  decrements,
  increment,
  reset,
} from "./feauters/counter/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  console.log("count", count);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}
        >
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrements())}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addFive())}
        >
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addAmount(10))}
        >
          <Text>10</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => dispatch(reset())}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    fontSize: 36,
    color: "#0000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  button: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    borderColor: "#00000",
    borderWidth: 1,
    marginVertical: 10,
  },
});
