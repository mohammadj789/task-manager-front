import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const FreindSelectList = (props) => {
  const friends = useSelector((state) => state.user.friends);
  const [checked, setChecked] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  props.onCheckedChange(checked.map((friend) => friend.id));
  return (
    <List
      dense
      sx={{
        overflow: "auto",
        width: "100%",

        bgcolor: "background.paper",
        height: "300px",
      }}
    >
      {friends.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar ${value.name}`}
                  src={value.profilePic}
                />
              </ListItemAvatar>
              <ListItemText id={value.id} primary={value.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default FreindSelectList;
