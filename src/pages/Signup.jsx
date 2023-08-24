import { useNavigate } from 'react-router-dom';
import { signUpMethod } from '../api/auth/signupMethod';
import InputForm from '../components/InputForm';
export const Signup = () => {
  const navigate = useNavigate();
  const signUpHandler = async (data) => {
    try {
      const res = await signUpMethod(data);
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
      <InputForm
        buttonContent="회원가입"
        buttonId="signup-button"
        onSuccessSubmitEvent={signUpHandler}></InputForm>
    </>
  );
};
