import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import color from "@/constans/color";
import { useRef, useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { AntDesign } from "@expo/vector-icons";
import CatogreyBtn from "@/component/CatogreyBtn";
import Listings from "./Listings";
import listingData from "@/data/destinations.json";
import GroupListings from "@/component/GroupListings";
import groupData from "@/data/groups.json";
import Search from "@/component/Search";

export default function Home() {
  const headerHight = useHeaderHeight();
  const [category, setCategory] = useState("All");

  const [searchInput, setSearchInput] = useState("");

  const onCatChanged = (category: string) => {
    console.log("Categpry: ", category);
    setCategory(category);
  };

  console.log(searchInput);

  return (
    <>
      {" "}
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 1400 }}>
              <Feather
                name="menu"
                size={24}
                color="black"
                style={{ width: 40, height: 40, paddingLeft: 20 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={`/login`} asChild>
              <TouchableOpacity
                onPress={() => {
                  {
                  }
                }}
                style={{
                  marginRight: 1400,
                  backgroundColor: color.white,
                  shadowColor: "#171717",
                  width: 35,
                  height: 35,
                  paddingTop: 5,
                  borderRadius: 5,
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Entypo name="login" size={26} color="black" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHight }]}>
        <Text style={styles.headingText}>E-Commerce App</Text>

        <View style={styles.searchBar}>
          <TextInput
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
            style={{
              marginLeft: 10,
              width: 190,
              height: 30,
            }}
            placeholder={"Search For an Item"}
            multiline
          ></TextInput>

          <TouchableOpacity>
            <AntDesign
              name="search1"
              style={{ width: 30, marginLeft: 5 }}
              size={26}
              color={color.black}
            />
          </TouchableOpacity>
        </View>

        <Search
          data={listingData}
          input={searchInput}
          setInput={setSearchInput}
        />

        <CatogreyBtn onCagtegoryChanged={onCatChanged} />

        <ScrollView>
          <Listings listings={listingData} category={category} />
          <Listings listings={listingData} category={category} />

          <GroupListings listings={groupData} />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "offwhite",
  },
  headingText: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "800",
    color: "black",
    marginTop: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
    width: 235,
    marginVertical: 20,
  },
});
