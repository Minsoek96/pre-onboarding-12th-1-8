import { useNavigate } from "react-router-dom";
import AuthInputForm from "../components/AuthInputForm";
import { signInMethod } from "../api/auth/signInMethod";
import { setAccessToken } from "../utils/localStorage";
export const Signin = () => {
  const navigate = useNavigate();
  const post = async (data) => {
    try {
      const res = await signInMethod(data);
      setAccessToken(res.data.access_token);
      navigate("/todo");
    } catch (e) {
      alert("로그인에 실패했습니다");
    }
  };
  return (
    <>
      <AuthInputForm
        buttonContent="로그인"
        buttonId="signin-button"
        onSuccessSubmitEvent={post}
      />
    </>
  );
};
