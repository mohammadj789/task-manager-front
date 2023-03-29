import validator from "validator";

const emailIsValid = (email) => {
  const changedEmail = email.trim()?.toLowerCase();
  if (changedEmail === "") {
    return [false, " Email field can't be empty"];
  } else if (!validator.isEmail(changedEmail)) {
    return [false, "Email is unvalid"];
  } else {
    return [true, ""];
  }
};

const passwordIsValid = (password) => {
  const changedPass = password.trim()?.toLowerCase();

  if (changedPass === "") {
    return [false, " Password field can't be empty"];
  } else if (changedPass.includes("password")) {
    return [false, " Password is way to weak "];
  } else if (changedPass.length < 7) {
    return [false, " Password is shorter than minimum (7) "];
  } else {
    return [true, ""];
  }
};
const nameIsValid = (name) => {
  const changedName = name.trim()?.toLowerCase();
  if (changedName === "") {
    return [false, " Name field can't be empty"];
  } else {
    return [true, ""];
  }
};

const retryPassIsValid = (repass, pass) => {
  if (repass === pass) {
    return [true, ""];
  } else {
    return [false, "Passwords doesn't match"];
  }
};

export const verifyForm = (
  nameRef,
  emailRef,
  passwordRef,
  rePassref
) => {
  let status = {
    name: [undefined, ""],
    email: [undefined, ""],
    pass: [undefined, ""],
    repass: [undefined, ""],
  };
  if (nameRef.current != null) {
    const [nameValid, namelValidmessage] = nameIsValid(
      nameRef.current.value
    );
    status.name = [nameValid, namelValidmessage];
  }
  if (emailRef.current != null) {
    const [emailValid, emailValidmessage] = emailIsValid(
      emailRef.current.value
    );
    status.email = [emailValid, emailValidmessage];
  }

  if (passwordRef.current != null) {
    const [passValid, passValidmessage] = passwordIsValid(
      passwordRef.current.value
    );
    if (rePassref.current != null) {
      if (passValid) {
        const [rePassValid, rePassValidmessage] = retryPassIsValid(
          rePassref.current.value,
          passwordRef.current.value
        );
        status.pass = [passValid, passValidmessage];
        status.repass = [rePassValid, rePassValidmessage];
      } else {
        status.pass = [passValid, passValidmessage];
        status.repass = [false, passValidmessage];
      }
    } else {
      status.pass = [passValid, passValidmessage];
    }
  }

  return status;
};
