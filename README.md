# STC_Project ( Share videos with Chatting )

> _1인 프로젝트  - <주인장,또왔네>_ 

## Description

> 개발기간 : 2022.06.21 ~   

* ### 프로젝트 소개 : 

  * 지인과 함께 재미있는 영상이나 좋은 음악들을 리스트로 만들어 함께 즐길 수 있는 실시간 채팅 어플입니다. 

* ### 구현기능 :

  * 로그인 / 로그아웃

  * 채팅방 생성 및 입장   

  * 실시간 채팅

  * 동영상 시청 및 시청 기록 유지

  * 동영상 검색 및 추가


## Tech Stack :


* ### Frontend : 

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=black"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=black"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=black"/> <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=black"/> <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat-square&logo=PostCSS&logoColor=black"/>

* ### Backend : 

<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=black"/>

* Deployment :

<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=black"/> <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=PWA&logoColor=black"/> 

- - -

## OverView

* ### 대기실 / Foyer :

<img src = "https://user-images.githubusercontent.com/70142275/181812382-8c7b2494-2ba4-4378-9f2f-1e8b0ed6246f.PNG" width="70%" height="70%">

    * 로그 인/아웃  
    * 채팅방 생성/입장/퇴장

    왼쪽에 사이드바는 고정되어있으며, 반응형 화면의 사이즈에 따라 위치가 변경된다 ( 화면이 작을 땐 아래로 ).
   
    채팅방 생성시 중복여부와 입장할 방의 존재여부를 Firebase에 저장된 데이터를 이용해 확인할 수 있다.
  
```javascript
  getRoom(room, data) {
    getDoc(doc(this.firestore_db, 'rooms', `${room}`)).then((docSnap) => {
      if (docSnap.exists()) {
        toast.success('방에 입장합니다!', { autoClose: 1000 });
        data(true);
      } else {
        toast.error('존재하지 않는 방입니다!', { autoClose: 1000 });
        data(false);
      }
    });
  }
```

* ### 채팅방 / Room :

<img src = "https://user-images.githubusercontent.com/70142275/181812398-b3096bc0-7fef-457e-8ecd-72d54ffa1a46.PNG" width="70%" height="70%">

    * 동영상 리스트 관리 및 재생 
    * 실시간 채팅 
     
    반응형 UI 디자인으로 윈도우의 크기에 따라 동영상과 채팅창 크기가 조정된다. 특히 모바일 기기 크기에선 동영상 부분과 채팅창을 두 화면으로 
    분리시켜 슬라이드 형식으로 넘겨서 사용할 수 있도록 구현해놨다 ( 자세한 화면은 아래에 있는 시현모습을 참고 ). 
    
* ### 검색창 / Video :

<img src = "https://user-images.githubusercontent.com/70142275/181812410-da1d8c82-8741-4aa5-914e-d3d6893546fd.PNG" width="70%" height="70%">
    
    * 동영상 검색 및 재생 
    * 채팅방에 동영상 추가
     
    필요한 영상을 검색 후 클릭해서 재생할 수 있으며, 필요시 추가버튼을 눌러 원하는 동영상을 채팅방 영상리스트에 추가할 수 있다. 
    마찬가지로 반응형 UI를 적용해 윈도우의 크기에 따라 나열된 영상들의 크기와 배치방식이 변경된다.
    

* ### 실제 시현모습 ( 모바일 화면크기 ) :
<img src = "https://user-images.githubusercontent.com/70142275/181812433-c438a6e2-140b-4fe6-9f24-5cf261ca5287.gif" width="30%" height="30%">

