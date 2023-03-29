import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/UI/Input";
import { verifyForm } from "../helper/input";
import useHttp from "../hooks/useHttp";
import classes from "./sign.module.css";

const Sign = (props) => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const RetryPasswordInputRef = useRef();

  const [signin, setSignin] = useState(true);
  const [forget, setForget] = useState(false);

  const [name, setName] = useState([true, ""]);
  const [email, setEmail] = useState([true, ""]);
  const [password, setPassword] = useState([true, ""]);
  const [rePass, setRePass] = useState([true, ""]);
  const forgetHandler = () => {
    clearAllInputs();
    setForget(true);
    setSignin(true);
  };
  const clearAllInputs = () => {
    setName([true, ""]);
    setEmail([true, ""]);
    setPassword([true, ""]);
    setRePass([true, ""]);

    !!nameInputRef.current?.value &&
      (nameInputRef.current.value = "");

    !!emailInputRef.current?.value &&
      (emailInputRef.current.value = "");

    !!passwordInputRef.current?.value &&
      (passwordInputRef.current.value = "");
    !!RetryPasswordInputRef.current?.value &&
      (RetryPasswordInputRef.current.value = "");
  };

  const RightHandler = () => {
    clearAllInputs();
    if (forget) {
      setForget(false);

      return;
    }
    setSignin(false);
  };
  const LeftHandler = () => {
    clearAllInputs();
    if (forget) {
      return;
    }
    setSignin(true);
  };

  const { isLoading, error, sendRequest } = useHttp();
  const getData = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const status = verifyForm(
      nameInputRef,
      emailInputRef,
      passwordInputRef,
      RetryPasswordInputRef
    );

    setName(status.name);
    setEmail(status.email);
    setPassword(status.pass);
    setRePass(status.repass);
    if (
      status.name[0] === false ||
      status.email[0] === false ||
      status.pass[0] === false ||
      status.repass[0] === false
    )
      return;

    let url;
    let body;

    if (forget) {
      url = "";
    } else {
      if (signin) {
        url = "http://localhost:4000/users/login";
        body = {
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
        };
      } else if (!signin) {
        url = "http://localhost:4000/users";

        body = {
          name: nameInputRef.current.value,
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
        };
      }
    }

    sendRequest(
      {
        url,
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
      },
      getData
    );
  };

  return (
    <div className={classes.form}>
      <form>
        <div className={classes.selector}>
          <div
            className={`${classes.selectorDiv} ${
              signin && classes.selected
            }`}
          >
            <button
              type="button"
              className={`${classes.selectorBtn} ${classes.btn} ${
                signin && classes.selectedBtn
              }`}
              onClick={LeftHandler}
            >
              {forget ? "Reset Password" : "Login"}
            </button>
          </div>
          <div
            className={`${classes.selectorDiv} ${
              !signin && classes.selected
            }`}
          >
            <button
              type="button"
              className={`${classes.selectorBtn} ${classes.btn} ${
                !signin && classes.selectedBtn
              }`}
              onClick={RightHandler}
            >
              {forget ? "Back" : "Sign Up"}
            </button>
          </div>
        </div>

        {!forget && !signin && (
          <div className={classes.wholeinput}>
            <Input
              lableClass={classes.title}
              inputClass={`${classes.auth} ${
                !name[0] && classes.invalid
              }`}
              lableContent={"Full Name"}
              inputType={"text"}
              ref={nameInputRef}
            />

            {!name[0] && (
              <p className={classes.errorText}>{name[1]}</p>
            )}
          </div>
        )}

        <div className={classes.wholeinput}>
          <Input
            lableClass={classes.title}
            inputClass={`${classes.auth} ${
              !email[0] && classes.invalid
            }`}
            lableContent={"Email"}
            inputType={"email"}
            ref={emailInputRef}
          />
          {!email[0] && (
            <p className={classes.errorText}>{email[1]}</p>
          )}
        </div>

        {!forget && (
          <div className={classes.wholeinput}>
            <Input
              lableClass={classes.title}
              inputClass={`${classes.auth} ${
                !password[0] && classes.invalid
              }`}
              lableContent={"Password"}
              inputType={"Password"}
              ref={passwordInputRef}
            />

            {!password[0] && (
              <p className={classes.errorText}>{password[1]}</p>
            )}
          </div>
        )}

        {!forget && !signin && (
          <div className={classes.wholeinput}>
            <Input
              lableClass={classes.title}
              inputClass={`${classes.auth} ${
                !rePass[0] && classes.invalid
              }`}
              lableContent={"Retry Password"}
              inputType={"Password"}
              ref={RetryPasswordInputRef}
            />

            {!rePass[0] && (
              <p className={classes.errorText}>{rePass[1]}</p>
            )}
          </div>
        )}

        <div className={classes.submition}>
          <div>
            <button
              onClick={submitHandler}
              className={`${classes.submitBtn} ${classes.btn} ${
                isLoading && classes.disable
              }`}
            >
              <p>
                {isLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-6 h-6 ${classes.spiner}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    />
                  </svg>
                ) : (
                  "Submit"
                )}
              </p>
            </button>
            {error && <p className={classes.errorText}>{error}</p>}
          </div>
          {signin && !forget && (
            <button
              type="button"
              onClick={forgetHandler}
              className={`${classes.forgetBtn} ${classes.btn}`}
            >
              forget your password
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Sign;
