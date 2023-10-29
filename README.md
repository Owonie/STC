# STC_Project ( Share videos with Chatting )

> _1인 프로젝트  - <주인장,또왔네>_ 

## Description

> 개발기간 : 2022.06.21 ~ 2022.07.22  

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
<p align="center">
<img src = "https://user-images.githubusercontent.com/70142275/181812382-8c7b2494-2ba4-4378-9f2f-1e8b0ed6246f.PNG" width="70%" height="70%">
</p>

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
<p align="center">
<img src = "https://user-images.githubusercontent.com/70142275/181812398-b3096bc0-7fef-457e-8ecd-72d54ffa1a46.PNG" width="70%" height="70%">
</p>

  * 동영상 리스트 관리 및 재생 
  
  * 실시간 채팅 
     
    반응형 UI 디자인으로 윈도우의 크기에 따라 동영상과 채팅창 크기가 조정된다. 특히 모바일 기기 크기에선 동영상 부분과    
    채팅창을 두 화면으로 분리시켜 슬라이드 형식으로 넘겨서 사용할 수 있도록 구현해놨다 ( 자세한 화면은 아래에 있는 시현모습을 참고 ). 
    
* ### 검색창 / Video :
<p align="center">
<img src = "https://user-images.githubusercontent.com/70142275/181812410-da1d8c82-8741-4aa5-914e-d3d6893546fd.PNG" width="70%" height="70%">
</p>

  * 동영상 검색 및 재생 

  * 채팅방에 동영상 추가
     
    필요한 영상을 검색 후 클릭해서 재생할 수 있으며, 필요시 추가버튼을 눌러 원하는 동영상을 채팅방 영상리스트에 추가할 수 있다. 
    마찬가지로 반응형 UI를 적용해 윈도우의 크기에 따라 나열된 영상들의 크기와 배치방식이 변경된다.
    

* ### 실제 시현모습 ( 모바일 화면크기 ) :
<p align="center">
<img src = "https://user-images.githubusercontent.com/70142275/181812433-c438a6e2-140b-4fe6-9f24-5cf261ca5287.gif" width="45%" height="45%">
</p>

## Discussion

* ### 기억남는 프로젝트의 난제 : 
    
    * Firebase / React-Router-Dom 의 버전 문제
    >
    > 프로젝트 셋업 당시, 리서치를 통해 많은 레퍼런스를 저장했지만, 버전의 불일치로 많은 메서드들이 추가되거나 바뀌어서 수 많은 에러가 발생했다.
    >
    > 해결방안 :
    > > 처음엔 비교적 참고자료가 많았던 구 버전으로 라이브러리를 다운그레이드했다. 직접 Firebase와 React-Router의 공식문서와 Github 소스코드를 
    > > 참고하면서 사용법을 익혔고, 어느정도 숙달이 된 후에 다시 버전을 업그레이드 시킨뒤 마이그레이션을 진행했다.

    * state / props 상태관리
    >
    > 프로젝트가 규모가 조금씩 커지면서 자식 컴포넌트가 상대적으로 많아졌다. 반복적인 state의 전달은 코드의 가독성이 떨어질 뿐 아니라 컴포넌트의
    > 재사용성과 효율성마저 낮췄다. SPA 어플리케이션 특성상 페이지를 라우팅으로 전환하면 컴포넌트가 리렌더링 되는 현상이 일어났다.
    > useCallback이나 react.memo과 같은 React Hook으로 자식컴포넌트의 리렌더링을 막기엔 한계가 있었다.\
    > 
    > 해결방안 :
    > > state를 전역변수로 관리하기 위해 React-ReduxToolkit을 install했다. 리덕스 툴킷엔 redux-persist 까지 내재되있어 새로고침 시 상태초기화
    > > 문제도 해결했다. 리덕스의 도입은 동영상 재생시간 기록 등 페이지 전환 기능을 훨씬 수월하게 만들어줬다.

* ### 앞으로 개선할 점 : 
     * 테스트 코드 작성
     * 데이터 관리 최적화 ( 필요시 서버를 직접구축 )
     * 타입스크립트 적용
     * SEO 최적화 ( Pre-rendering )
