export type Chunk = {
  type: "h1" | "h2" | "h3" | "strong" | "li" | "p";
  content: string;
};

export const contents: Chunk[][] = [
  [{ type: "strong", content: `new_ISC = ITCT("20th")` }],
  [
    { type: "strong", content: "The Origin : ISAAC (오혁 x VERSEDAY)" },
    { type: "strong", content: "기간" },
    { type: "p", content: ": 2023.07.11 - 2023.07.18" },
    { type: "strong", content: "장소" },
    { type: "p", content: ": 서울대학교, 제1파워플랜트(68동)" },
    { type: "strong", content: "주소" },
    { type: "p", content: ": 서울 관악구 관악로 1" },
    { type: "strong", content: "시간" },
    { type: "p", content: ": 10:00 - 19:00" },
    { type: "strong", content: "휴관" },
    { type: "p", content: ": 없음" },
    { type: "strong", content: "오프닝 리셉션" },
    { type: "p", content: ": 2023.07.11, 화, 6pm" },
    { type: "strong", content: "전시 소개" },
    {
      type: "p",
      content:
        "< ISAAC >展은 중력, 속도, 시간 등의 보편적 과학법칙 속에 내재된 인문철학적 메시지를 예술적 체험을 통해 전달하는 미디어아트 전시 프로젝트로, 미디어아트 레이블 VERSEDAY와 뮤지션 오혁의 협업 전시입니다.",
    },
    {
      type: "p",
      content:
        "기억의 찰나성과 불특정성을 아이작 뉴턴의 역학 법칙을 통해 표현한 전시 공간은 보이지 않는 힘에 대해 의문을 가졌던 한 아이의 놀이터입니다. 높이 8m에 달하는 대형 LED와 거대한 수면에 반사된 영상 속 추억의 물건들은 등가속 운동을 반복하며, 그네를 탄 관람객과 미묘한 물리적 긴장관계를 형성합니다. 수면은 영상 속 오브젝트 위치와 소리의 진동에 따라 잔잔한 동심원 파형을 만들어 반사된 LED 영상의 이미지를 해체합니다. 압도적 크기의 영상과 몽환적인 사운드, 물에 반사된 이미지들이 그네라는 놀이 체험과 함께 어우러져 독특한 명상적 체험을 제공합니다.",
    },
    { type: "strong", content: "작가 노트" },
    { type: "p", content: "그네를 타는 나는 마치 꿈을 꾸듯" },
    {
      type: "p",
      content: "커다란 미디어 저편에서 날아왔다 침잠하는 기억들을 마주한다",
    },
    { type: "p", content: "시간의 무게" },
    { type: "p", content: "움직이는 것은 나인가, 우주인가, 시간인가," },
    { type: "p", content: "그 중심은 여기인지, 기억인지, 너인지" },
    {
      type: "p",
      content:
        "추억의 오브제가 미지의 공간 같은 미디어 수면 위로 살짝 올라왔다가 다시 심연으로 빨려 들어간다.",
    },
    {
      type: "p",
      content:
        "영상을 반사하는 바닥의 수면은 소리의 진동을 담아 일렁이며 맺힌 추억의 상들을 해체한다.",
    },
  ],
  [
    { type: "strong", content: "The Origin : ISAAC (오혁 x VERSEDAY)" },
    { type: "strong", content: "기간" },
    { type: "p", content: ": 2023.07.11 - 2023.07.18" },
    { type: "strong", content: "장소" },
    { type: "p", content: ": 서울대학교, 제1파워플랜트(68동)" },
    { type: "strong", content: "주소" },
    { type: "p", content: ": 서울 관악구 관악로 1" },
    { type: "strong", content: "시간" },
    { type: "p", content: ": 10:00 - 19:00" },
    { type: "strong", content: "휴관" },
    { type: "p", content: ": 없음" },
    { type: "strong", content: "오프닝 리셉션" },
    { type: "p", content: ": 2023.07.11, 화, 6pm" },
    { type: "strong", content: "전시 소개" },
    {
      type: "p",
      content:
        "< ISAAC >展은 중력, 속도, 시간 등의 보편적 과학법칙 속에 내재된 인문철학적 메시지를 예술적 체험을 통해 전달하는 미디어아트 전시 프로젝트로, 미디어아트 레이블 VERSEDAY와 뮤지션 오혁의 협업 전시입니다.",
    },
    {
      type: "p",
      content:
        "기억의 찰나성과 불특정성을 아이작 뉴턴의 역학 법칙을 통해 표현한 전시 공간은 보이지 않는 힘에 대해 의문을 가졌던 한 아이의 놀이터입니다. 높이 8m에 달하는 대형 LED와 거대한 수면에 반사된 영상 속 추억의 물건들은 등가속 운동을 반복하며, 그네를 탄 관람객과 미묘한 물리적 긴장관계를 형성합니다. 수면은 영상 속 오브젝트 위치와 소리의 진동에 따라 잔잔한 동심원 파형을 만들어 반사된 LED 영상의 이미지를 해체합니다. 압도적 크기의 영상과 몽환적인 사운드, 물에 반사된 이미지들이 그네라는 놀이 체험과 함께 어우러져 독특한 명상적 체험을 제공합니다.",
    },
    { type: "strong", content: "작가 노트" },
    { type: "p", content: "그네를 타는 나는 마치 꿈을 꾸듯" },
    {
      type: "p",
      content: "커다란 미디어 저편에서 날아왔다 침잠하는 기억들을 마주한다",
    },
    { type: "p", content: "시간의 무게" },
    { type: "p", content: "움직이는 것은 나인가, 우주인가, 시간인가," },
    { type: "p", content: "그 중심은 여기인지, 기억인지, 너인지" },
    {
      type: "p",
      content:
        "추억의 오브제가 미지의 공간 같은 미디어 수면 위로 살짝 올라왔다가 다시 심연으로 빨려 들어간다.",
    },
    {
      type: "p",
      content:
        "영상을 반사하는 바닥의 수면은 소리의 진동을 담아 일렁이며 맺힌 추억의 상들을 해체한다.",
    },
  ],
  [
    { type: "strong", content: "The Origin : ISAAC (오혁 x VERSEDAY)" },
    { type: "strong", content: "기간" },
    { type: "p", content: ": 2023.07.11 - 2023.07.18" },
    { type: "strong", content: "장소" },
    { type: "p", content: ": 서울대학교, 제1파워플랜트(68동)" },
    { type: "strong", content: "주소" },
    { type: "p", content: ": 서울 관악구 관악로 1" },
    { type: "strong", content: "시간" },
    { type: "p", content: ": 10:00 - 19:00" },
    { type: "strong", content: "휴관" },
    { type: "p", content: ": 없음" },
    { type: "strong", content: "오프닝 리셉션" },
    { type: "p", content: ": 2023.07.11, 화, 6pm" },
    { type: "strong", content: "전시 소개" },
    {
      type: "p",
      content:
        "< ISAAC >展은 중력, 속도, 시간 등의 보편적 과학법칙 속에 내재된 인문철학적 메시지를 예술적 체험을 통해 전달하는 미디어아트 전시 프로젝트로, 미디어아트 레이블 VERSEDAY와 뮤지션 오혁의 협업 전시입니다.",
    },
    {
      type: "p",
      content:
        "기억의 찰나성과 불특정성을 아이작 뉴턴의 역학 법칙을 통해 표현한 전시 공간은 보이지 않는 힘에 대해 의문을 가졌던 한 아이의 놀이터입니다. 높이 8m에 달하는 대형 LED와 거대한 수면에 반사된 영상 속 추억의 물건들은 등가속 운동을 반복하며, 그네를 탄 관람객과 미묘한 물리적 긴장관계를 형성합니다. 수면은 영상 속 오브젝트 위치와 소리의 진동에 따라 잔잔한 동심원 파형을 만들어 반사된 LED 영상의 이미지를 해체합니다. 압도적 크기의 영상과 몽환적인 사운드, 물에 반사된 이미지들이 그네라는 놀이 체험과 함께 어우러져 독특한 명상적 체험을 제공합니다.",
    },
    { type: "strong", content: "작가 노트" },
    { type: "p", content: "그네를 타는 나는 마치 꿈을 꾸듯" },
    {
      type: "p",
      content: "커다란 미디어 저편에서 날아왔다 침잠하는 기억들을 마주한다",
    },
    { type: "p", content: "시간의 무게" },
    { type: "p", content: "움직이는 것은 나인가, 우주인가, 시간인가," },
    { type: "p", content: "그 중심은 여기인지, 기억인지, 너인지" },
    {
      type: "p",
      content:
        "추억의 오브제가 미지의 공간 같은 미디어 수면 위로 살짝 올라왔다가 다시 심연으로 빨려 들어간다.",
    },
    {
      type: "p",
      content:
        "영상을 반사하는 바닥의 수면은 소리의 진동을 담아 일렁이며 맺힌 추억의 상들을 해체한다.",
    },
  ],
  [
    { type: "strong", content: "The Origin : ISAAC (오혁 x VERSEDAY)" },
    { type: "strong", content: "기간" },
    { type: "p", content: ": 2023.07.11 - 2023.07.18" },
    { type: "strong", content: "장소" },
    { type: "p", content: ": 서울대학교, 제1파워플랜트(68동)" },
    { type: "strong", content: "주소" },
    { type: "p", content: ": 서울 관악구 관악로 1" },
    { type: "strong", content: "시간" },
    { type: "p", content: ": 10:00 - 19:00" },
    { type: "strong", content: "휴관" },
    { type: "p", content: ": 없음" },
    { type: "strong", content: "오프닝 리셉션" },
    { type: "p", content: ": 2023.07.11, 화, 6pm" },
    { type: "strong", content: "전시 소개" },
    {
      type: "p",
      content:
        "< ISAAC >展은 중력, 속도, 시간 등의 보편적 과학법칙 속에 내재된 인문철학적 메시지를 예술적 체험을 통해 전달하는 미디어아트 전시 프로젝트로, 미디어아트 레이블 VERSEDAY와 뮤지션 오혁의 협업 전시입니다.",
    },
    {
      type: "p",
      content:
        "기억의 찰나성과 불특정성을 아이작 뉴턴의 역학 법칙을 통해 표현한 전시 공간은 보이지 않는 힘에 대해 의문을 가졌던 한 아이의 놀이터입니다. 높이 8m에 달하는 대형 LED와 거대한 수면에 반사된 영상 속 추억의 물건들은 등가속 운동을 반복하며, 그네를 탄 관람객과 미묘한 물리적 긴장관계를 형성합니다. 수면은 영상 속 오브젝트 위치와 소리의 진동에 따라 잔잔한 동심원 파형을 만들어 반사된 LED 영상의 이미지를 해체합니다. 압도적 크기의 영상과 몽환적인 사운드, 물에 반사된 이미지들이 그네라는 놀이 체험과 함께 어우러져 독특한 명상적 체험을 제공합니다.",
    },
    { type: "strong", content: "작가 노트" },
    { type: "p", content: "그네를 타는 나는 마치 꿈을 꾸듯" },
    {
      type: "p",
      content: "커다란 미디어 저편에서 날아왔다 침잠하는 기억들을 마주한다",
    },
    { type: "p", content: "시간의 무게" },
    { type: "p", content: "움직이는 것은 나인가, 우주인가, 시간인가," },
    { type: "p", content: "그 중심은 여기인지, 기억인지, 너인지" },
    {
      type: "p",
      content:
        "추억의 오브제가 미지의 공간 같은 미디어 수면 위로 살짝 올라왔다가 다시 심연으로 빨려 들어간다.",
    },
    {
      type: "p",
      content:
        "영상을 반사하는 바닥의 수면은 소리의 진동을 담아 일렁이며 맺힌 추억의 상들을 해체한다.",
    },
  ],
  [
    { type: "strong", content: "The Origin : ISAAC (오혁 x VERSEDAY)" },
    { type: "strong", content: "기간" },
    { type: "p", content: ": 2023.07.11 - 2023.07.18" },
    { type: "strong", content: "장소" },
    { type: "p", content: ": 서울대학교, 제1파워플랜트(68동)" },
    { type: "strong", content: "주소" },
    { type: "p", content: ": 서울 관악구 관악로 1" },
    { type: "strong", content: "시간" },
    { type: "p", content: ": 10:00 - 19:00" },
    { type: "strong", content: "휴관" },
    { type: "p", content: ": 없음" },
    { type: "strong", content: "오프닝 리셉션" },
    { type: "p", content: ": 2023.07.11, 화, 6pm" },
    { type: "strong", content: "전시 소개" },
    {
      type: "p",
      content:
        "< ISAAC >展은 중력, 속도, 시간 등의 보편적 과학법칙 속에 내재된 인문철학적 메시지를 예술적 체험을 통해 전달하는 미디어아트 전시 프로젝트로, 미디어아트 레이블 VERSEDAY와 뮤지션 오혁의 협업 전시입니다.",
    },
    {
      type: "p",
      content:
        "기억의 찰나성과 불특정성을 아이작 뉴턴의 역학 법칙을 통해 표현한 전시 공간은 보이지 않는 힘에 대해 의문을 가졌던 한 아이의 놀이터입니다. 높이 8m에 달하는 대형 LED와 거대한 수면에 반사된 영상 속 추억의 물건들은 등가속 운동을 반복하며, 그네를 탄 관람객과 미묘한 물리적 긴장관계를 형성합니다. 수면은 영상 속 오브젝트 위치와 소리의 진동에 따라 잔잔한 동심원 파형을 만들어 반사된 LED 영상의 이미지를 해체합니다. 압도적 크기의 영상과 몽환적인 사운드, 물에 반사된 이미지들이 그네라는 놀이 체험과 함께 어우러져 독특한 명상적 체험을 제공합니다.",
    },
    { type: "strong", content: "작가 노트" },
    { type: "p", content: "그네를 타는 나는 마치 꿈을 꾸듯" },
    {
      type: "p",
      content: "커다란 미디어 저편에서 날아왔다 침잠하는 기억들을 마주한다",
    },
    { type: "p", content: "시간의 무게" },
    { type: "p", content: "움직이는 것은 나인가, 우주인가, 시간인가," },
    { type: "p", content: "그 중심은 여기인지, 기억인지, 너인지" },
    {
      type: "p",
      content:
        "추억의 오브제가 미지의 공간 같은 미디어 수면 위로 살짝 올라왔다가 다시 심연으로 빨려 들어간다.",
    },
    {
      type: "p",
      content:
        "영상을 반사하는 바닥의 수면은 소리의 진동을 담아 일렁이며 맺힌 추억의 상들을 해체한다.",
    },
  ],
  [
    { type: "strong", content: "The Origin : ISAAC (오혁 x VERSEDAY)" },
    { type: "strong", content: "기간" },
    { type: "p", content: ": 2023.07.11 - 2023.07.18" },
    { type: "strong", content: "장소" },
    { type: "p", content: ": 서울대학교, 제1파워플랜트(68동)" },
    { type: "strong", content: "주소" },
    { type: "p", content: ": 서울 관악구 관악로 1" },
    { type: "strong", content: "시간" },
    { type: "p", content: ": 10:00 - 19:00" },
    { type: "strong", content: "휴관" },
    { type: "p", content: ": 없음" },
    { type: "strong", content: "오프닝 리셉션" },
    { type: "p", content: ": 2023.07.11, 화, 6pm" },
    { type: "strong", content: "전시 소개" },
    {
      type: "p",
      content:
        "< ISAAC >展은 중력, 속도, 시간 등의 보편적 과학법칙 속에 내재된 인문철학적 메시지를 예술적 체험을 통해 전달하는 미디어아트 전시 프로젝트로, 미디어아트 레이블 VERSEDAY와 뮤지션 오혁의 협업 전시입니다.",
    },
    {
      type: "p",
      content:
        "기억의 찰나성과 불특정성을 아이작 뉴턴의 역학 법칙을 통해 표현한 전시 공간은 보이지 않는 힘에 대해 의문을 가졌던 한 아이의 놀이터입니다. 높이 8m에 달하는 대형 LED와 거대한 수면에 반사된 영상 속 추억의 물건들은 등가속 운동을 반복하며, 그네를 탄 관람객과 미묘한 물리적 긴장관계를 형성합니다. 수면은 영상 속 오브젝트 위치와 소리의 진동에 따라 잔잔한 동심원 파형을 만들어 반사된 LED 영상의 이미지를 해체합니다. 압도적 크기의 영상과 몽환적인 사운드, 물에 반사된 이미지들이 그네라는 놀이 체험과 함께 어우러져 독특한 명상적 체험을 제공합니다.",
    },
    { type: "strong", content: "작가 노트" },
    { type: "p", content: "그네를 타는 나는 마치 꿈을 꾸듯" },
    {
      type: "p",
      content: "커다란 미디어 저편에서 날아왔다 침잠하는 기억들을 마주한다",
    },
    { type: "p", content: "시간의 무게" },
    { type: "p", content: "움직이는 것은 나인가, 우주인가, 시간인가," },
    { type: "p", content: "그 중심은 여기인지, 기억인지, 너인지" },
    {
      type: "p",
      content:
        "추억의 오브제가 미지의 공간 같은 미디어 수면 위로 살짝 올라왔다가 다시 심연으로 빨려 들어간다.",
    },
    {
      type: "p",
      content:
        "영상을 반사하는 바닥의 수면은 소리의 진동을 담아 일렁이며 맺힌 추억의 상들을 해체한다.",
    },
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];
