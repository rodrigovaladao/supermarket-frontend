import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

import { Button, Input, ListCard } from "../../components";
import { SAVE_USERNAME_PATH } from "../../services/constants";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const onClickContinue = () => {
    // alert("Clicked");
    if (userName.length < 3) {
      alert("User name should have at least 3 characters");
      return;
    }
    localStorage.setItem(SAVE_USERNAME_PATH, userName);
    navigate("/list");
  };

  return (
    <div className="home-screen-container">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/images/shopping-bag.svg"
          alt="Shopping bag with vegetables and fruits"
        ></img>
        <h1 className="home-screen-title">
          Your grocery list easier than ever
        </h1>
        <h3 className="home-screen-subtitle">
          We help you organize your shopping list in the best way
        </h3>
        <h3 className="home-screen-subtitle-description">
          Please type your user name below to have access to your shopping list
        </h3>
        <Input
          onChange={(text) => setUserName(text)}
          value={userName}
          label="UserName"
          placeholder="Type your user name"
        />
        <div className="home-screen-button-container">
          <Button onClick={onClickContinue}>Continue</Button>
        </div>
      </div>
    </div>
  );
};
