import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreateStory";
import firebase from "firebase";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator 
    labeled = {false}
    barStyle = {styles.bottomTabStyle}
    screenOptions = {({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if(route.name === "Feed"){
          iconName = focused? "home": "home-outline";
        }
        else if(route.name === "CreateStory"){
          iconName = focused ? "add-circle" : "add-circle-outline";
        }
        return (
          <Ionicons
            name={iconName}
            size={RFValue(25)}
            color={color}
            style={styles.icons}
          />
        );
      }
    })}

    activeColor={"#ee8249"}
    inactiveColor={"gray"}
    >

     <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Create Story" component={CreateStory} />
      </Tab.Navigator>
  );
};

  

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  bottomTabStyleLight: {
    backgroundColor: "#eaeaea",
    height: "8%",
    borderTopLeftRadius: RFValue(30),
    borderTopRightRadius: RFValue(30),
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});
