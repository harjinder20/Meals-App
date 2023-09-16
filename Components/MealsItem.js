import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

function MealsItem({ item, navigationFunc,backgroundColor }) {
  return (
    <View style={{ ...styles.mealsItem }}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? { opacity: 0.5 } : null,
        ]}
        onPress={() => {
          navigationFunc(item);
        }}
      >
        <Image
          style={{ ...styles.imageContainer }}
          source={{
            uri: item.imageUrl,
          }}
        />
        <View
          style={{
            ...styles.textContainer,
            backgroundColor,backgroundColor
          }}
        >
          <View
            style={{
              ...styles.textHeading,
            }}
          >
            <Text
              style={{
                fontSize: RFValue(15),
                fontWeight: "bold",
                marginVertical: "1%",
                color:'#3C3D47',
                fontWeight:"900"
              }}
            >
              {item.title}
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ color:'white',fontWeight:'500'}}>{item.duration} mins</Text>
            <Text style={{ color:'white',fontWeight:'500'}}>{item.complexity}</Text>
            <Text style={{ color:'white',fontWeight:'500'}}>{item.affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealsItem;

const styles = StyleSheet.create({
  mealsItem: {
    height: Dimensions.get("screen").height * 0.35,
    marginHorizontal: "5%",
    marginVertical: "5%",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 2,
    borderRadius: 10,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  imageContainer: {
    flex: 0.75,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  textContainer: {
    flex: 0.25,
    backgroundColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  textHeading: {
    flex: 0.6,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
