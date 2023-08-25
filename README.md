# pre-onboarding-12th-1-8
- https://www.wanted.co.kr/events/pre_ob_fe_12?t=1692094248252#noticeContainer <br />
- https://github.com/walking-sunset/selection-task

## 팀원
강석규, 박진영, 백민석, 이종혁

## 배포 주소
https://pre-onboarding-12th-1-8.vercel.app/

## 실행 방법
- `git clone https://github.com/fghman/pre-onboarding-12th-1-8.git` : 프로젝트 내려받기
- `cd wanted-pre-onboarding-12th-1-8` : 디렉터리 이동
- `npm install` : 패키지 설치
- `npm start` : 애플리케이션 실행 (브라우저가 자동으로 실행되어 홈페이지로 이동합니다.)

## 프로젝트 디렉토리 설명:
- `src / api`: api 요청 함수 관리
- `src / constants`: API URL 등의 상수 관리
- `src / context`: 투두 관련 컴포넌트에서 공통적으로 사용되는 데이터, 함수 관리
- `src / hooks`: 커스텀 훅 관리
- `src / pages`: 페이지를 렌더링하는 컴포넌트 관리
- `src / reducer` : 투두 관련 컴포넌트에서 공통적으로 사용되는 상태 값의 변화를 관리
- `src / utils` : 자주 사용되는 유틸성 함수 관리

## 구현 사항
- API와 함수, Hooks를 컴포넌트 파일 내에 정의하지 않고 각각 분리하여 재사용성을 높임
- axios 인스턴스를 분리해서 사용함
- JWT 토큰을 사용한 로그인, 회원가입 로직 개발
  - 회원가입과 로그인 페이지에서 공통적으로 사용되는 UI를 AuthInputForm.jsx 컴포넌트 1개로 통합하여 유지보수가 용이함
  - 회원가입, 로그인 폼 작성 시 이메일 조건, 비밀번호 조건 등의 유효성 검사
    - 로그인, 회원가입 유효성 검사를 위한 커스텀 훅을 만들 필요가 없어 코드 길이가 줄어듦
  - 유효성 검사 여부에 따른 가입 및 로그인 버튼 비활성화
  - 응답받은 JWT 토큰을 localStorage에 저장하여 관리
  - React Router를 사용한 로그인 여부에 따른 페이지 리다이렉팅
    - 토큰이 없는 상태에서의 Todo List 페이지 접속, 토큰이 있는 상태에서의 회원가입, 로그인 페이지 접속 등을 차단 후 리다이렉트
    - 라우트를 별도의 Route.jsx 파일로 분리하고, 인증 여부에 따른 리다이렉트 로직을 Auth.jsx 한 곳으로 모아서 처리함
- API 스펙에 따른 Todo 애플리케이션 기능 개발
  - Todo 페이지는 UI에서의 기능을 기준으로 컴포넌트 분리를 진행함
  - 페이지 마운트 시 서버로부터 회원의 Todo List를 불러와 State에 저장한 다음, 이를 렌더링하도록 구현
  - 페이지 마운트 시 회원의 Todo List를 렌더링하도록 구현
  - 추가 버튼을 눌러 새로운 Todo를 리스트에 추가
  - Todo 수정 시 input형태의 컴포넌트로 변경하여 수정 및 취소 기능 구현
  - 취소버튼을 누르면 수정한 내용을 초기화하고 수정모드 비활성화
  - 체크박스 체크를 통한 Todo 완료 여부 구현
  - 삭제 버튼을 눌러 Todo 삭제 기능 구현
  - 서버 요청 로직을 뷰 컴포넌트로부터 분리하여 컨텍스트에서 관리함으로서 유지보수 측면에서 용이
  - reducer를 사용해서 특정 로직이 어떤 타입인지 쉽게 파악할 수 있음
 
## Tech Stack

<div>
  
Area| Tech Stack|
:--------:|:------------------------------:|
**Frontend** | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245.svg?&style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=white">
</div>

- React
- react-router-dom
- axios
- styled-components

## API

[https://github.com/walking-sunset/selection-task#api](https://github.com/walking-sunset/selection-task#api)


