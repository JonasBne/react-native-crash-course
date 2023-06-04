import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={containerStyles.wrapper}>
      <View style={headingStyles.heading}>
        <Text style={headingStyles.temperature}>6</Text>
        <Text style={headingStyles.feels}>Feels like 5</Text>
        <View style={headingStyles.highAndLowWrapper}>
          <Text style={headingStyles.highAndLow}>High: 8</Text>
          <Text style={headingStyles.highAndLow}>Low: 4</Text>
        </View>
      </View>
      <View style={bodyStyles.body}>
        <Text style={bodyStyles.description}>It&apos;s sunny</Text>
        <Text style={bodyStyles.message}>
          It&apos;s perfect t-shirt weather
        </Text>
      </View>
    </SafeAreaView>
  );
};

const containerStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: "pink",
    flex: 1,
  },
});

const headingStyles = StyleSheet.create({
  heading: {
    alignItems: "center",
    flex: 1,
  },
  temperature: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highAndLow: {
    color: "black",
    fontSize: 20,
  },
  highAndLowWrapper: {
    flexDirection: "row",
    columnGap: 20,
  },
});

const bodyStyles = StyleSheet.create({
  body: {
    // flex: 4,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 32,
  },
});

export default App;
