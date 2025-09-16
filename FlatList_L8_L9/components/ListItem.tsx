import { dataType } from "@/data/appData";
import colors from "@/styles/colors";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



// declare data type for props here
/*
Giving the ListItem componenet the data it needs
to display, the status of what is selected, nd the ability 
to upadte the selected status when clicked on.
*/
type propsType = {
  item: dataType;
  isSelected: boolean;
  onPress: (item: dataType) => void;
}

const selectedList = (item: dataType) => {
  console.log(item.title);
  setSelectedId(item.id);
};
const [selectedId, setSelectedId] = useState<string>("1");

const ListItem: React.FC<propsType> = ({item, isSelected, onPress}) => {
  return  <TouchableOpacity onPress={() => selectedList(item)}>
              <View style={[styles.flatlistRow, 
                {
                  backgroundColor: isSelected
                  ? colors.primary : colors.secondary,
                }
              ]}>
                <Text style={[styles.titleText, 
                  {
                    color: isSelected ? colors.theme.light.text : colors.theme.dark.text
                  }
                ]}>{item.title}</Text>
              </View>
            </TouchableOpacity>
};

export default ListItem;

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.secondary,
    padding: 5,
    height: 60,
    width: 350,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 5,
  },
  text: {
    color: colors.text.dark,
    fontSize: 20,
  },
  flatlist: {
    alignItems: "center",
  },
  flatlistRow: {
    backgroundColor: colors.primary,
    marginBottom: 0,
    marginTop: 9,
    padding: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleContainer: {
    marginTop: 5,
   
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
