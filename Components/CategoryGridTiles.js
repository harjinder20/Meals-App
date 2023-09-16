import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTiles({ title, color ,onPressHandler}) {
  return (
    <View style={{ ...styles.gridItem }}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.gridButton,
          pressed ? { opacity: 0.5 } : null,
        ]}
        onPress={onPressHandler}
      >
        <View style={{ ...styles.innerContainer,backgroundColor:color}}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridTiles;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,
    width: "40%",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 2,
    borderRadius: 10,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  gridButton: {
    flex: 1,
    borderRadius: 9,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
