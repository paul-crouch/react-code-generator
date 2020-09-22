import React from "react";
import { Meta } from "@storybook/react/";
import { View } from "react-native";

export default {
  title: "Components/{{ClassName}}",
  component: {{ClassName}},
} as Meta;

export const Examples = () => (
  <View>
    <{{ClassName}}>Standard paragraph style</ {{ClassName}}>
  </View>
);
