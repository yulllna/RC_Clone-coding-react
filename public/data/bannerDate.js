const bannerData = [
    {
        id: 1,
        title: "레벨업 대작전 ⭐️",
        tag1: "마지막 혜택",
        tag2: "1시간 남음",
        bigText: "모두에게 드리는 게임 개발 특별 강의 🌟",
        smallText: "성장하는 게임 개발 83% 수강생의 선택",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/c529bc19-b18d-4969-a8ec-bceecf06ed25/rookissraid-b-main-521.gif"
    },
    {
        id: 2,
        title: "인프랜드 🎢",
        tag1: "25% 할인",
        tag2: "1시간 남음",
        bigText: "입문자도 스며들고 실무자도 스며드는 인프랜드 존존존존존~ 🎶",
        smallText: "프로덕트 디자인, 기획, 수학, 업무 자동화! +깜짝 이벤트",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/10635c20-2229-4112-aa21-2445aa3a4243/%5B%EC%9D%B4%EB%B2%A4%ED%8A%B8%5D%EC%9D%B8%ED%94%84%EB%9E%9C%EB%93%9C_main_521.gif"
    },
    {
        id: 3,
        title: "Top 50 👑",
        tag1: "오늘 뭐 듣지?",
        tag2: "",
        bigText: "무슨 강의 들을지 고민이라면? 현직자 Top 50 먼저 보기 👀",
        smallText: "입문부터 실전까지! 믿고 보는 실무자 Pick",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/c529bc19-b18d-4969-a8ec-bceecf06ed25/rookissraid-b-main-521.gif"
    },
    {
        id: 4,
        title: "오늘부터 개발자",
        tag1: "도서 굿즈 증정",
        tag2: "",
        bigText: "Q. 저도 개발자가 될 수 있나요? A. 그럼요! 함께해요.",
        smallText: "지금 강의 수강신청하면 '오늘부터 개발자' 책 드려요!",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/ee583bd5-bf5e-42ad-90ed-23997f13b7e7/328003-eng.png"
    },
    {
        id: 5,
        title: "나에게 맞는 강의",
        tag1: "",
        tag2: "",
        bigText: "뭘 들어야 하지? 🤔 나에게 딱 맞는 입문 강의",
        smallText: "어디서부터 시작해야 할지 모르는 당신을 위한 입문 강의",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/f57e3418-f145-43a4-89d6-f1c4f0293460/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%82%E1%85%A1%E1%84%8B%E1%85%A6%E1%84%80%E1%85%A6%E1%84%86%E1%85%A1%E1%86%BD%E1%84%82%E1%85%B3%E1%86%AB%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4_main_521.png"
    },
    {
        id: 6,
        title: "지식공유신청",
        tag1: "지식공유신청",
        tag2: "",
        bigText: "나누는 지식만큼 커지는 보람과 보상",
        smallText: "인프런 지식공유자로 높은 수익과 가치를 만들어보세요.",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/14394a9e-4b27-4a0f-bc87-c2cae10e2d62/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%8C%E1%85%B5%E1%84%89%E1%85%B5%E1%86%A8%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A1_521.gif"
    },
    {
        id: 7,
        title: "신규 강의 🎁",
        tag1: "신규 강의",
        tag2: "",
        bigText: "나만 몰랐었던 이 강의~♬",
        smallText: "매일 업데이트 되는 인프런 신규강의를 만나보세요!",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/7dc9730a-1a01-40a7-a509-4e8bceb73570/%5B%EB%A9%94%EC%9D%B8%ED%9E%88%EC%96%B4%EB%A1%9C%5D%EC%8B%A0%EA%B7%9C%EA%B0%95%EC%9D%98_main_521.gif"
    },
    {
        id: 8,
        title: "입문 로드맵",
        tag1: "추천 학습 로드맵",
        tag2: "",
        bigText: "왕초보를 위한 Lv. 1 인프런 로드맵 📖",
        smallText: "인프런이 처음이라면, 길라잡이가 되어드릴게요.",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/5207c5ee-e72f-4fc1-aad0-6122d2a55956/%5B%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%92%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%85%E1%85%A9%5D%E1%84%85%E1%85%A9%E1%84%83%E1%85%B3%E1%84%86%E1%85%A2%E1%86%B8%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%86%E1%85%AE%E1%86%AB_main_521.gif"
    },
    {
        id: 9,
        title: "누나의 리액트",
        tag1: "꿀잼 보장 강의",
        tag2: "",
        bigText: "리액트, 누나가 차근차근 알려줄게! 🤗",
        smallText: "강의가 이렇게 재미있어도 되나요? 5개의 프로젝트로 React 완전 정복!",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/782257cf-688d-4aa9-b5e2-53a0ae348aad/%E1%84%8F%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%85%E1%85%A7%E1%84%8C%E1%85%AE%E1%84%82%E1%85%B3%E1%86%AB%E1%84%82%E1%85%AE%E1%84%82%E1%85%A1%20%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%A8%E1%84%90%E1%85%B32.jpg"
    },
    {
        id: 10,
        title: "인프런은 🌱",
        tag1: "인프런 소개",
        tag2: "",
        bigText: "우리는 성장기회의 평등을 추구합니다.",
        smallText: "누구나 배움의 기회를 누리고 꿈을 이룰 수 있도록! 인프런과 함께 배우고, 나누고, 성장하세요.",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/04081c01-4aee-40ad-a500-5260f1cfd508/main_521_%EC%9D%B8%ED%94%84%EB%9F%B0%EC%86%8C%EA%B0%9C.png"
    },
    {
        id: 11,
        title: "인프런 동료찾기",
        tag1: "함께해요",
        tag2: "",
        bigText: "함께 성장할 동료를 찾아요 🌿",
        smallText: "#우리 #함께성장해요 #동료여어디계신가요?",
        imgurl: "https://cdn.inflearn.com/public/main_sliders/68a15e47-7f40-444c-af73-60ab1acb8b3f/%5B%EB%B8%8C%EB%9E%9C%EB%93%9C%5D%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80%26%EA%B4%91%EA%B3%A0%EB%A6%AC%EB%89%B4%EC%96%BC_main_521.gif"
    },

  ];
  
  export default bannerData;