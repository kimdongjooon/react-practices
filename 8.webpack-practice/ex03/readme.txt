ex03: webpack 개발 서버 

1. 설치 패키지.
    $ npm i -D webpack webpack-cli webpack-dev-server

2. 번들링 환경 (webpack.config.js)설정.
    1) entry
    2) output
    3) devServer

2. 스크립팅
    "scripts": {
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

3. 빌드
    $ npm run build

4. 시작
    $ npm start