# pre-onboarding-12th-1-8
- https://www.wanted.co.kr/events/pre_ob_fe_12?t=1692094248252#noticeContainer <br />
- https://github.com/walking-sunset/selection-task

## 팀원
강석규, 박진영, 백민석, 이종혁

## 배포 주소
https://pre-onboarding-12th-1-8.vercel.app/

## 실행 방법
- `git clone https://github.com/fghman/pre-onboarding-12th-1-8.git ./` : 프로젝트 내려받기
- `npm install` : 패키지 설치
- `npm start` : 애플리케이션 실행 (브라우저가 자동으로 실행되어 홈페이지로 이동합니다.)

## 프로젝트 디렉토리 설명:
- `src / api`: api 요청 함수 관리
- `src / context`: 투두 관련 컴포넌트에서 공통적으로 사용되는 데이터, 함수 관리
- `src / hooks`: 커스텀 훅 관리
- `src / pages`: 페이지를 렌더링하는 컴포넌트 관리
- `src / reducer` : 투두 관련 컴포넌트에서 공통적으로 사용되는 상태 값의 변화를 관리
- `src / utils` : 자주 사용되는 유틸성 함수 관리

## 구현 사항

- API 요청 함수, 데이터 로직을 뷰 컴포넌트 파일 내에서 정의하지 않고 커스텀훅에서 사용하여 재사용성 및 관심사 분리 용이
- axios 인스턴스를 생성함으로써 서버 요청시 공통적으로 적용되는 로직을 한 파일에서 관리하여 추후 axios 요청 로직 수정 시 유지보수면에서 용이
- API
  - /repos/facebook/react/issues?page=0&per_page=30 : 이슈 목록 요청
  - /repos/facebook/react/issues/:issue_number : 특정 이슈의 상세 정보 요청
- styled-components 사용
  - 컴포넌트 개발할 때마다 css파일을 따로 생성하지 않아도 되는 이점
  - props에 따라 스타일을 유연하게 변경할 수 있는 이점
  - css-in-js를 지원하는 라이브러리 중에서 해당 라이브러리가 다운로드 수도 높고
    상대적으로 오래 유지보수 되어 안정감이 있다고 생각하여 styled-components 채택
- 이슈 목록 페이지
  - javascript 빌트인 객체 중 intersection observer를 통해 무한 스크롤 기능 구현
    - 관찰 대상이 되는 요소가 뷰포트에 교차되었을 때 비동기로 동작하여 퍼포먼스면에서 이점
    - 단 몇줄로 lazy load 가능
- 이슈 상세 정보 페이지를 위해 다음 라이브러리 사용
  - react-markdown : react에서 string을 props로 받아 마크다운 문법을 해석하여 렌더링해주는 컴포넌트를 제공해주는 라이브러리 
  - remark-gfm : table, link 등 기존 마크다운의 추가 문법을 해석할 수 있도록 지원해주는 라이브러리
 
- 이슈 목록 화면
  - 이슈 목록 가져오기 API 활용: API 요청 시 dispatch를 인자로 받아 비동기 요청 상태를 state로 관리해 주었다.
  - open 상태의 이슈 중 코멘트가 많은 순으로 정렬: 이슈 목록 요청 시 기본이 open인 상태만 요청하므로 parameter에 따로 추가 안함, 코멘트가 많은 순의 경우 요청시 parameter에 다음과 같이 추가 -> sort=comments
  - 각 행에는 '이슈번호, 이슈제목, 작성자, 작성일, 코멘트수'를 표시: 서버로부터 받아온 정보(이슈 번호, 이슈 제목, 작성자, 작성일, 코멘트수)를 IssueItem 컴포넌트의 props로 받아오는 걸로 설정
  - 다섯 번째 셀마다 광고 이미지 출력: 응답 받은 이슈 목록을 배열로 저장하여 reduce로 루프 돌린 후 인덱스가 4의 배수일때마다 광고 컴포넌트 뒤에 이슈를 렌더링하는 것으로 하고 아닐 경우 이슈만 렌더링하는 로직으로 구현
  - 무한 스크롤: js 빌트인 객체인 intersection observer를 통해 구현
관찰 대상이 뷰포트와 교차하였을 때 로딩 상태를 업데이트 해주고 이슈 목록 상태를 추가로 업데이트
해당 intersection observer의 경우 이슈목록 페이지 뿐만 아니라 다른 곳에서도 자주 사용될 수 있으니 커스텀 훅으로 분리하여 재활용 도모


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
  - 서버 요청 로직을 뷰 컴포넌트로부터 분리하여 컨텍스트에서 관리함으로서 관심사 분리를 통한 유지보수 측면 용이
  - reducer를 사용하여 상태 업데이트의 의도를 쉽게 파악할 수 있으며 추후 해당 리듀서를 다른 컴포넌트에서도 재활용할 수 있는 장점이 있음
 
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


