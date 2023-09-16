import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryScreen from "./Screen/categories_screen";
import MealsOverviewScreen from "./Screen/MealsOverviewScreen";
import MealsDiscription from "./Screen/MealsDiscription";
import FavouritesScreen from "./Screen/FavoritesScreen";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { ImageBackground } from "react-native-web";
import { RFValue } from "react-native-responsive-fontsize";
import { responsiveScreenHeight } from "react-native-responsive-dimensions";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackHomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#D6E4E5" },
      }}
    >
      <Stack.Screen name="MealsCategories" component={CategoryScreen} />
      <Stack.Screen
        name="MealsOverviewScreen"
        component={MealsOverviewScreen}
        options={({ navigation, route }) => {
          const { itemTitle } = route.params;
          return {
            title: itemTitle,
          };
        }}
      />
      <Stack.Screen name="MealsDiscription" component={MealsDiscription} />
    </Stack.Navigator>
  );
}

const StackFavoritesScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"My Favorites"} component={FavouritesScreen} />
      <Stack.Screen name="MealsDiscription" component={MealsDiscription} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              // tabBarActiveBackgroundColor: "#EFF5F5",
              tabBarActiveTintColor: "#497174",
              tabBarLabelStyle: { fontSize: RFValue(11), fontWeight: "800" },
              tabBarStyle: {
                paddingBottom: "3%",
                height: responsiveScreenHeight(8),
                backgroundColor: "#D6E4E5",
              },
            }}
          >
            <Tab.Screen
              name="stackMealsCategories"
              component={StackHomeNavigator}
              options={{
                headerShown: false,
                title: "Home",
                tabBarIcon: ({ focused }) => (
                  <Entypo
                    name="home"
                    size={focused ? 27 : 20}
                    color={focused ? "#EB6440" : "black"}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Favourites"
              component={StackFavoritesScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <Fontisto
                    name="favorite"
                    size={focused ? 27 : 20}
                    color={focused ? "#EB6440" : "black"}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
