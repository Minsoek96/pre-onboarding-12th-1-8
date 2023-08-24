import { useNavigate } from 'react-router-dom';
import InputForm from '../components/InputForm';
import { signInMethod } from '../api/auth/signInMethod';
import { setAccessToken } from '../utils/localStorage';
import Button from '../components/Button';
export const Signin = () => {
  const navigate = useNavigate()
  const post = async (data) => {
    try {
      const res = await signInMethod(data);
      setAccessToken(res.data.access_token);
      navigate("/todo");
    } catch (e) {
      alert("로그인에 실패했습니다");
    }
  };
  return <>
    <InputForm
     buttonContent="로그인"
     buttonId="signin-button"
     onSuccessSubmitEvent={post}
    ></InputForm>
    <Button content="회원가입 하러가기"
    onClick={() => navigate("/signup")}></Button>
  </>;
};
