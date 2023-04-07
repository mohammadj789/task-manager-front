import React, { useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userAction } from "../../store/UserSlice";

import classes from "./Profile.module.css";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const fileInput = useRef();
  const [dsiabled, setDisabled] = useState(true);
  const reduxDispatch = useDispatch();
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    console.log("fileObj is", fileObj);
    dispatch({ type: "CHNGPIC", payload: fileObj });
  };

  const saveHandler = () => {
    if (prof.username !== user.username)
      reduxDispatch(userAction.changeUsername(prof.username));

    if (prof.email !== user.email)
      reduxDispatch(userAction.changeEmail(prof.email));

    if (prof.name !== user.name)
      reduxDispatch(userAction.changeName(prof.name));

    if (prof.age !== user.age)
      reduxDispatch(userAction.changeAge(prof.age));
    setDisabled(true);
  };

  const profileReducer = (state, action) => {
    switch (action.type) {
      case "CHNGUSER":
        setDisabled(false);
        return { ...state, username: action.payload };
      case "CHNGNAME":
        setDisabled(false);
        return { ...state, name: action.payload };
      case "CHNGAGE":
        setDisabled(false);
        return { ...state, age: action.payload };
      case "CHNGEMAIL":
        setDisabled(false);
        return { ...state, email: action.payload };
      case "CHNGPIC":
        setDisabled(false);
        return { ...state, pic: action.payload };

      default:
        return state;
    }
  };

  const [prof, dispatch] = useReducer(profileReducer, {
    username: user.username,
    email: user.email,
    name: user.name,
    age: user.age,
    friends: user.friends.length,
    pic: user.profilePic,
  });
  return (
    <div className={classes.main}>
      <div className={classes.pic}>
        <img src={prof.pic} alt={user.name} />
        <input
          onChange={handleFileChange}
          ref={fileInput}
          type="file"
        ></input>
        <button
          onClick={() => {
            fileInput.current.click();
          }}
        >
          Change Profile Image
        </button>
      </div>
      <div className={classes.email}>
        <p className={classes.label}>Email</p>
        <input
          value={prof.email}
          onChange={(e) =>
            dispatch({ type: "CHNGEMAIL", payload: e.target.value })
          }
        />
      </div>
      <div className={classes.username}>
        <p className={classes.label}>Username</p>

        <input
          value={prof.username}
          onChange={(e) =>
            dispatch({ type: "CHNGUSER", payload: e.target.value })
          }
        />
      </div>
      <div className={classes.name}>
        <p className={classes.label}>Name</p>
        <input
          value={prof.name}
          onChange={(e) =>
            dispatch({ type: "CHNGNAME", payload: e.target.value })
          }
        />
      </div>
      <div className={classes.age}>
        <p className={classes.label}>Age</p>
        <input
          value={prof.age}
          onChange={(e) =>
            dispatch({ type: "CHNGAGE", payload: e.target.value })
          }
        />
      </div>
      <div className={classes.friend}>
        <p
          className={classes.label}
        >{`You have ${prof.friends} Friends`}</p>
      </div>
      <button
        onClick={saveHandler}
        disabled={dsiabled}
        className={classes.save}
      >
        Save
      </button>
    </div>
  );
};

export default Profile;
