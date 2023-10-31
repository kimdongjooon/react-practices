ex08: JSX tutorial
01. 특징1: HTML과의 차이점.
02. 특징2: Single root
03. 함수 컴포넌트
04. pure React(React Api);
05. 클래스 컴포넌트
06. 툭징3: JSX 표현식 표기법: {javascript expression}
07. Comment



==============================================================================================================================

1. 설치
    1) 개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server cssloader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2) 라이브러리
        $ npm i react react-dom

2. 설정
    1) webpack.config.js
    2) babel.config.json

3. 스크립팅
    1) 
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4. 테스트 서버 실행
    $ npm run debug src=(01|02|03|....)
