import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useDebugValue, useEffect, useLayoutEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import uuid from 'react-native-uuid';
import {useDispatch,useSelector} from 'react-redux';
import {addFavorite,removeFavorite} from '../store/favorite'

function MealsDiscription({ navigation, route }) {
  const { item, backgroundColor } = route.params;
  const [imageHeight, setImageHeight] = React.useState(100);
  const [imageWidth, setImageWidth] = React.useState(100);
  const [favourite,setFavourite]=useState(false)
  let imageNewHeight = Dimensions.get("screen").width / imageWidth;
  const dispatch = useDispatch();
  const idList = useSelector((state)=>state.favoriteMeals.ids)

  useEffect(()=>{
    if(idList.includes(item.id)){
      setFavourite(true)
    }else{
      setFavourite(false)
    }
  },[idList,item])

  function handleFavorite(){
    console.log("Pressed! ===>>> ",favourite,idList)
    if(favourite){
      dispatch(removeFavorite({id:item.id}))
    }else{
      dispatch(addFavorite({id:item.id}))
    }
    console.log(item.id)
  // dispatch(addFavorite({id:JSON.stringify(thisItem.id)}))
  }

  useEffect(() => {
    Image.getSize(item.imageUrl, (width, height) => {
      setImageHeight(height), setImageWidth(width);
    });
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
          style={({pressed})=>[
            pressed?{backgroundColor:"white",opacity:0.4}:null
          ]}
          onPress={handleFavorite}>
            <AntDesign name={!favourite?"hearto"
            :'heart'} size={RFValue(22)} color={!favourite?"black":'red'} />
          </Pressable>
        );
      },
    });
  }, [favourite,navigation,item]);

  Image.getSize(item.imageUrl, (width, height) => {
    width, " ", height;
  });

  let ListItem = ({item }) => {
    return (
      // console.log(item),
      (
        <View
          style={{
            backgroundColor: "#D35656",
            marginVertical: "1%",
            borderRadius: 10,
            marginHorizontal: "10%",
            opacity: 0.8,
          }}
          // key={key}
        >
          <Text
            style={{
              padding: "3%",
              textAlign: "center",
              fontSize: RFValue(13),
              color: "#0B032D",
              fontWeight: "600",
              fontWeight: "800",
            }}
            key={uuid.v4()}
          >
            {item}
          </Text>
        </View>
      )
    );
  };
  return (
    // console.log(item.title.length),
    <ScrollView
      // showsVerticalScrollIndicator={false}
      // contentContainerStyle={{ flex: 1 }}
      style={{ flex: 1, backgroundColor: "#FAAB78" }}
      bounces={false}
    >
      <View
        style={{
          height: imageNewHeight * imageHeight,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={{
            height: imageNewHeight * imageHeight,
            width: Dimensions.get("screen").width,
          }}
        />
      </View>
      <View
        style={{
          height: Dimensions.get("screen").height * 0.12,
          // marginBottom: "3%",
          // opacity:0.5,
          backgroundColor:"#D35656",
          paddingVertical:"2%",
          borderRadius:'30',
          margin:'1%'
        }}
      >
        <View
          style={{
            flex: 0.7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize:item.title.length>27?RFValue(16):RFValue(20),
              fontWeight: "900",
              marginVertical: "1%",
              color: "#3C3D47",
              textAlign: "center",
            }}
          >
            {item.title}
          </Text>
        </View>
        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ marginHorizontal: "5%", color: "white",fontSize: RFValue(12), }}>
            {item.duration} mins
          </Text>
          <Text style={{ marginHorizontal: "5%", color: "white",fontSize: RFValue(12), }}>
            {item.complexity}
          </Text>
          <Text style={{ marginHorizontal: "5%", color: "white",fontSize: RFValue(12), }}>
            {item.affordability}
          </Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: "pink",
          paddingBottom: "7%",
        }}
      >
        {/* //Ingredients */}
        <View style={{}}>
          <View
            style={{
              borderBottomWidth: 4,
              marginHorizontal: "10%",
              borderBottomColor: "FCDDB0",
            }}
          >
            <Text style={{ ...styles.subTittle }}>Ingredients</Text>
          </View>
          {item.ingredients.map((item, index) => {
            return <ListItem item={item} />;
          })}
        </View>

        {/* //steps */}
        <View style={{}}>
          <View
            style={{
              borderBottomWidth: 4,
              marginHorizontal: "10%",
              borderBottomColor: "FCDDB0",
            }}
          >
            <Text style={{ ...styles.subTittle }}>Steps</Text>
          </View>
          {item.steps.map((item, index) => {
            return <ListItem item={item} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDiscription;

const styles = StyleSheet.create({
  subTittle: {
    fontSize: RFValue(18),
    fontWeight: "bold",
    padding: 2,
    margin: 4,
    textAlign: "center",
  },
});
