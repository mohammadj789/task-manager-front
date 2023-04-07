import React, { useState } from "react";
import Category from "../components/setting/Category";
import Profile from "../components/setting/Profile";
import SettingItem from "../components/setting/SettingItem";
import PageTemplate from "./PageTemplate";
import classes from "./SettingPage.module.css";

const SettingPage = () => {
  const [select, setSelect] = useState(1);
  return (
    <PageTemplate>
      <div className={classes.setting}>
        <div className={classes.titles}>
          <div className={classes.header}>
            <p>Setings</p>
            <span>
              <ion-icon name="cog-outline"></ion-icon>
            </span>
          </div>
          <SettingItem
            selected={select}
            logo={<ion-icon name="person-outline"></ion-icon>}
            title={"Profile"}
            id={1}
            setAsSelected={setSelect}
          />
          <SettingItem
            selected={select}
            logo={<ion-icon name="grid-outline"></ion-icon>}
            title={"Category"}
            id={2}
            setAsSelected={setSelect}
          />
        </div>
        <div className={classes.detail}>
          {select === 1 && <Profile />}
          {select === 2 && <Category />}
        </div>
      </div>
    </PageTemplate>
  );
};

export default SettingPage;
