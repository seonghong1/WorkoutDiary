### Workout Diary
#### url : https://workout-diary-two.vercel.app

- 일별 운동 경험을 기록하는 다이어리 프로젝트 입니다.



Framework & Library : React
상태관리 : Jotai
Calendar : react-big-calendar
Style : SCSS





- 4/20 - TODO :: 노트북, 테블릿, 모바일 3가지 브레이크 포인트 반응형 작업 - workout 영역 반응형 작업 필요
- 4/20 - TODO :: 캘린더 내부 showMore버튼 랜더링 관련 테스트 및 확인 필요

- 4/19 - TODO :: 캘린더 내부 ui수정 (스타일 추가, 레이아웃 수정)
- 4/19 - TODO :: 화면 resize이벤트 추가 (현재 화면의 해상도를 전역으로 상태관리, windowSizeAtom) / lodash 패키지 추가

- 4/18 - TODO :: 타입 재정의 필요 (일부 작업하면서 임시로 타입을 any 변경)
- 4/18 - TODO :: 캘린더 통계 영역 개발
- 4/18 - TODO :: font-size px->rem 으로 수정후 반응형 수정

- 4/17 - TOTO :: CRUD및 일부 아이콘 추가 필요(react-icons)
- 4/17 - TODO :: scrollBar style 적용 필요
- 4/17 - TODO :: 임시로 추가한 버튼들 스타일 적용 필요
- 4/17 - TODO :: 컴포넌트 내부 crud로직 분리 -> ApiService
- 4/17 - TODO :: 날짜 관련 변수 및 코드 재확인 필요(중복 및 재사용 가능한 코드 확인)
- 4/17 - TODO :: props 타입 interface로 변환
- 4/17 - TODO :: $color-main 색상 변환

- 4/16 - TODO :: inputBox 요소 추가, 삭제 구현 필요
- 4/16 - TODO :: inputItems 요소 추가, 삭제 구현 필요
- 4/16 - TODO :: WorkoutForm영역 정보 추가 노출 필요 (날짜, 종목..)
- 4/16 - TODO :: 더미데이터 => 로컬스토리지로 데이터 저장 방식 및 crud코드 수정

- 4/12 - TODO :: 종목별 options 구축하기
- 4/12 - TODO :: options Data 구축 후 category input text->select-box로 변경하기

- 4/14 - TODO :: options Data 가나다순 정렬, 맞춤법 및 띄어쓰기 점검
- 4/14 - TODO :: 테스트시 변경한 타입 정리하기 (any, 주석된 타입)
- 4/14 - TODO :: 변수, 함수 네이밍 재정의하기
- 4/14 - TODO :: import 순서 컨벤션 정의 및 수정하기

#### 컴포넌트 정의

- module.scss를 활용하고 있어 컴포넌트마다 폴더를 생성한다.
- 폴더 및 컴포넌트, 스타일 파일 네이밍은 아래와 같이 정의한다.
  컴포넌트 : "컴포넌트명/index.tsx" / style "컴포넌트명/컴포넌트명.module.scss"

#### 참조 경로

- 같은 디렉토리 내부에 접근할 경우만 상대경로를 사용, 그 외의 경우는 모두 절대경로 활용

#### className정의

- class명이 두음절 이상인 경우 camelCase로 작성한다.
- module.scss를 참조할땐 "styles"로 지정한다.

#### import 순서

- react hook
- library

- store
- util, api service

- component
- style

- type
- constants
