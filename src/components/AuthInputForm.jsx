import { useInput } from "../hooks/useInput";
import SignButton from "./SignButton";
const emailValidate = (target) => target.includes("@");
const pwValidate = (target) => target.trim().length >= 8;
const AuthInputForm = ({ buttonContent, buttonId, onSuccessSubmitEvent }) => {
  const {
    value: emailValue,
    onChange: onChangeEmailInput,
    setIsFocused: setEmailIsFocused,
    invalid: emailIsInValid,
  } = useInput("", emailValidate);
  const {
    value: pwValue,
    onChange: onChangePwInput,
    setIsFocused: setPwIsFocused,
    invalid: pwIsInValid,
  } = useInput("", pwValidate);
  const submitEventHandler = (e) => {
    e.preventDefault();
    setPwIsFocused(true);
    if (emailIsInValid || pwIsInValid) {
      //실패했을 때
      return;
    }
    onSuccessSubmitEvent({ email: emailValue, password: pwValue });
  };

  return (
    <form onSubmit={submitEventHandler}>
      <input
        data-testid="email-input"
        type="text"
        value={emailValue}
        onChange={onChangeEmailInput}
        onBlur={() => setEmailIsFocused(true)}
      />
      {emailIsInValid && <em>이메일을 확인하세요</em>}
      <input
        data-testid="password-input"
        type="password"
        value={pwValue}
        onChange={onChangePwInput}
        onBlur={() => setPwIsFocused(true)}
      />
      {pwIsInValid && <em>비밀번호를 확인하세요</em>}
      <SignButton
        text={buttonContent}
        isValid={emailValidate(emailValue) && pwValidate(pwValue)}
        data-testid={buttonId}
      />
    </form>
  );
};
export default AuthInputForm;
