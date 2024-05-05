import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const Search = ({ data, input, setInput }) => {
  const handleOnSubmit = () => {
    const data = data.filter((item) => item.name === input);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === item.name) {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          } else {
            return null;
          }
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
