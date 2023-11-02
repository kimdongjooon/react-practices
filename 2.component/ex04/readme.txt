ex04: State
 1) 기본 개념.
    - 컴포넌트 내부의 상태를 나타내는 쓰기 가능한 데이터
    - 컴포넌트 this.state안에 여러 데이터(상태)를 가질 수 있다.
    - "상태가 변경되면 컴포넌트의 반응형(Reactive) 렌더링이 트리거가 되고 
 2) 제어 컴포넌트 
 3) 상태 컴포넌트 vs 순수 컴포넌트 
 4) data flow: bottom -> top





==============================================================================================================================

1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2) 라이브러리
        $ npm i react react-dom prop-types styled-components

2. 설정
    1) webpack.config.js
    2) babel.config.json

3. 스크립팅
    1) 
    "scripts": {
        "debug": "npx webpack serve --progress --env",
        "build": "npx webpack"
    }

4. 테스트 서버 실행
    $ npm run debug src=(01|02|03|....)
