export const checkCategoryColor = (category) => {
  switch (category) {
    case "sport":
      return { backgroundColor: "rgb(165, 23, 58)" };

    case "health":
      return { backgroundColor: "rgb(52, 255, 2)" };

    case "work":
      return { backgroundColor: "rgb(112, 116, 111)" };

    case "daily":
      return { backgroundColor: "rgb(101, 138, 238)" };

    case "meet":
      return { backgroundColor: "rgb(235, 121, 216)" };

    case "payment":
      return { backgroundColor: "rgb(7, 139, 89)" };

    default:
      return { backgroundColor: "#04c582" };
  }
};
