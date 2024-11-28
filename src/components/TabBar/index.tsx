import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { Text, View } from "react-native";
import { Title, Wrapper } from "./styles";
import React from "react";
import { ParamListBase } from "@react-navigation/native";

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const onPress = (route: any) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });
    if (!event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <Wrapper>
      {state.routes.map((route, index) => {
        return (
          <PlatformPressable onPress={() => onPress(route)} key={route.name}>
            <Title active={index === state.index}>{route.name}</Title>
          </PlatformPressable>
        );
      })}
    </Wrapper>
  );
};

export default TabBar;
