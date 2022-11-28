import { StyleSheet, View } from "react-native";
import params from "../params";

export default (props) => {
  const { mined, opened, nearMines } = props;

  const styleField = [styles.field];
  if (opened) styleField.push(styles.opened);
  if (styleField.length === 1) styleField.push(styles.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = "#2a28d7";
    if (nearMines == 2) color = "#2b520f";
    if (nearMines > 2 && nearMines < 6) color = "#f9060a";
    if (nearMines >= 6) color = "#f221a9";
  }

  return <View style={styleField}></View>;
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#ccc",
    borderTopColor: "#ccc",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: params.fontSize,
  },
});
