import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import Colors from "../config/colors";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: Colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: Colors.secondary },
    targetScreen: "Messages",
  },
];

export default function AccountScreen({ navigation }) {
  const logOut = () => {
      signOut(auth).then(() => {
        console.log("User Logged Out");
        navigation.navigate(routes.WELCOME);
      }
      ).catch((error) =>{
        console.log(error)
      });
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Joha Kim"
          subTitle="johakim9936@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => {
                navigation.navigate(item.targetScreen);
              }}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
