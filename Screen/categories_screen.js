import { SafeAreaView, View, Text, FlatList, Platform } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTiles from "../Components/CategoryGridTiles";

function CategoryScreen({ navigation }) {

  function onPresshandler(itemData){
    // console.log(itemData.item.id)
    navigation.navigate("MealsOverviewScreen",{
      idOfItem : itemData.item.id,
      itemTitle:itemData.item.title,
      backgroundColor:itemData.item.color,
    })
  }

  function renderItem(itemData) {
    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onPressHandler={()=>onPresshandler(itemData)}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FEBE8C", width: "100%" }}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => {
          return item.id;
        }}
        numColumns={2}
        style={{ marginTop: Platform.OS == "android" ? "7%" : null }}
      />
    </SafeAreaView>
  );
}

export default CategoryScreen;
