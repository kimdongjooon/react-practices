1. backend
    1) 테스트(개발 모드)
        eclipse ctrl+f11 (spring-boot application 실행)
    
    2) 빌드(배포)
        # mvn -f emaillist/backend exec:exec clean package
    
    3) 빌드(서버배포) 테스트 
        (해당 파일이 있는 폴더에서 일반적으로 backend/target 폴더에 있음. )
        # java -Dspring.profiles.active=production -jar emaillist.jar 
        java -Dspring.profiles.active=production -jar /usr/local/poscodx2023/springboot-apps/emaillist07/emaillist.jar 
        

2. frontend
    1)

3-1. deploy: ssh 연결(ssh key 인증)
    1) key 생성하기. 
        # ssh-keygen -t rsa -b 2048 -m PEM -C "ehdwns6745@naver.com"
    
    2) key 생성확인(home/.ssh 파일에 기재.)
        - private key(개인키): ~/.ssh/id_rsa
        - public key(공개키): ~/.ssh/id_rsa.pub

    3) 공개키를 서버에 설치하기 (공개키 옯기기) 
        - mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys

    4) private key 잘 저장하기.

    5) 접속 테스트
        # ssh -i mykey.pem root@192.168.0.92 > 우분투 입력 

    6) 접속 환경 설정. 
        1. ~/.ssh/environment
            ===== 
            PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/local/poscodx2023/java/bin:/usr/local/poscodx2023/git/bin:/usr/local/poscodx2023/maven/bin
            PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/local/poscodx2023/java/bin:/usr/local/poscodx2023/git/bin:/usr/local/poscodx2023/maven/bin
            =====
        2. /etc/ssh/sshd_config
            $ vi /etc/ssh/sshd_config 에서 
                PermitUserEnvironment yes 설정
            1691    
            

3-2. deploy: Publish Over SSH 플러그인(Jenkins)
    1) Publish Over SSH 플러그인 설치. 
        DashBoard > Jenkins관리 > avaliable 설치 클릭, 검색 설치 진행.

    2) Publish over SSH 확인 
        - Dashboard > Jenkins 관리 > System 
        - 실행서버(ssh server) 등록 : springboot-publish-server
        - 프로젝트의 빌드 후 조치 (post-build action) - jenkins system에서 ..
            - Send build artifacts over SSH 설정.
                1. emaillist.jar : tansfer 
                2. launch.sh: transfer + excution


