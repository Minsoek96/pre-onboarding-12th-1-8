import { useNavigate } from "react-router-dom";
import { signUp } from "../api/auth";
import AuthInputForm from "../components/AuthInputForm";
export const Signup = () => {
  const navigate = useNavigate();
  const signUpHandler = async (data) => {
    try {
      const res = await signUp(data);
      if (res.status === 201) {
        alert("회원가입 성공, 다시 로그인해주세요");
        navigate("/signin");
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <>
      <AuthInputForm
        buttonContent="회원가입"
        buttonId="signup-button"
        onSuccessSubmitEvent={signUpHandler}
      />
    </>
  );
};
