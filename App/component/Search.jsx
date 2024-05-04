import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const Search = ({ data, input, setInput }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input == item.name) {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          } else {
            return null; // Return null when you don't want to render anything
          }
        }}
        keyExtractor={(item) => item.id.toString()} // Don't forget to provide a key extractor
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
