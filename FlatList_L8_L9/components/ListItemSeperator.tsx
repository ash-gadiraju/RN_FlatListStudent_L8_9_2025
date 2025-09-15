import React from "react";
import { StyleSheet, View } from "react-native";
import colors from '../styles/colors';

type propsType = {
  color ?: string; //optional color
}
const ListItemSeparator: React.FC<propsType> = ({color}) => {
  return <View 
  style={[styles.separator,
    {backgroundColor: color || colors.theme.light.text}
  ]}/>;
};

//sets the backgroundCOlor to color IF the user passed in a prop
// if no prop was passed in, then default is used.
export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    height: 3,
    width: '100%', //100% of the width of the flatlist
  },
});
