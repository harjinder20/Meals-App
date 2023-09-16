import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Platform,
  StyleSheet,
} from "react-native";
import React from "react";
import { MEALS } from "../data/dummy_data";
import MealsItem from "../Components/MealsItem";
import { useSelector } from "react-redux";
import { RFValue } from "react-native-responsive-fontsize";

function FavouritesScreen({ navigation }) {
  let details = useSelector((state) => state.favoriteMeals.ids);
  let mealsItem = MEALS.filter((item) => {
    if (details.indexOf(item.id) > -1) {
      return item;
    }
  });

  function onPresshandler(itemData) {
    // console.log(itemData.item.id)
    navigation.navigate("MealsDiscription", {
      item: itemData,
    });
  }
  const renderMealsItem = ({ item }) => {
    return (
      <MealsItem
        item={item}
        navigationFunc={onPresshandler}
        backgroundColor={"#FAAB78"}
      />
    );
  };
  return (
    console.log(details, mealsItem),
    (
      <View style={{ ...styles.container, backgroundColor: "#EFF5F5" }}>
        {mealsItem.length > 0 ? (
          <FlatList
            data={mealsItem}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={renderMealsItem}
          />
        ) : (
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:"center",fontSize:RFValue(18),fontWeight:"600",}}>
              There is no item selected as {'\n'} FAVOURITE 🥺
            </Text>
          </View>
        )}
      </View>
    )
  );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
