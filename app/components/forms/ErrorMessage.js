import { StyleSheet } from "react-native";
import AppText from "../AppText";
import React from "react";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
