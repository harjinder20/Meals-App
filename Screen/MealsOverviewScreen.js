import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy_data";
import MealsItem from "../Components/MealsItem";
import { useEffect,useLayoutEffect } from "react";

export default function MealsOverviewScreen({ navigation, route }) {
  const { idOfItem,itemTitle,backgroundColor } = route.params;
  const mealsItem = MEALS.filter((meals) => {
    return meals.categoryIds.includes(idOfItem) ? meals : null;
  });

  function onPresshandler(itemData){
    // console.log(itemData.item.id)
    navigation.navigate("MealsDiscription",{
      item:itemData,
      backgroundColor:backgroundColor,
    });
  }

  const renderMealsItem = ({ item }) => {
    return <MealsItem item={item} navigationFunc={onPresshandler} backgroundColor={"#FAAB78"}/>;
  };
  return (
    <View style={{...styles.container,backgroundColor:'#EFF5F5'}}>
      <FlatList
        data={mealsItem}
        keyExtractor = {(item)=>{
          return item.id
        }}
        renderItem={renderMealsItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
