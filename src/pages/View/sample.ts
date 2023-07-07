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
    { type: "strong", content: "모집 일정" },
    { type: "p", content: "지원 접수 | 2023.07.7 - 2023.07.14" },
    { type: "p", content: "면접 일시 | 2023.07.16 - 2023.07.18 (대면)" },
    { type: "strong", content: "지원 방법" },
    { type: "p", content: "경영대 인트라넷 공지 확인 " },
    { type: "strong", content: "지원자격" },
    { type: "p", content: "1) 경영대를 사랑하는 모든 학부생" },
    { type: "p", content: "2) 주2회 회의 참석 및 여름학기까지 활동" },
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
    {
      type: "strong",
      content: "[2023 기표와 기의 단덕 공연 '기:승전결' 홍보]",
    },
    { type: "p", content: "일시: 2023/0110 (화) 19:00" },
    { type: "strong", content: "장소" },
    { type: "p", content: "장소: 합정 '드림홀'" },
    { type: "strong", content: "" },
    { type: "p", content: "입장료: 무료" },
    { type: "strong", content: "시간" },
    {
      type: "p",
      content: "안녕하세요! 서울대학교 언어학과 밴드 ‘기표와 기의’입니다.",
    },
    {
      type: "p",
      content:
        "기표와 기의 1기 마지막 공연이자, 첫 단독 공연인, ‘기:승전결’에 대한 소식을 전해 드리려고 합니다.",
    },
    { type: "p", content: "" },
    { type: "p", content: "여러분에게 1월은 어떤 의미를 가지나요?" },
    {
      type: "p",
      content:
        "다양한 생각들이 들겠으나, 아마 대부분 새로운 시작이라는 의미를 떠올리지 않았을까 싶습니다.",
    },
    {
      type: "p",
      content:
        "하지만 1월은 새로운 시작을 준비하면서도, 지난해를 마무리하는 시기이기도 합니다.",
    },
    {
      type: "p",
      content:
        "저희 기표와 기의는 이번 공연을 통하여, 2022년과 작별하는 시간을, 2023년의 시작을 알리는 시간을 여러분과 함께 갖고자 합니다.",
    },
    {
      type: "p",
      content:
        "더불어, 뜨거웠던 기표와 기의의 1년간의 이야기를 여러분들과 함께 되짚어 보고자 합니다.",
    },
    { type: "p", content: "2022년 7월 여름 연합 공연 ‘In Moonlight’" },
    { type: "p", content: "2022년 9월 가을 연합 공연 ‘Blue Sign’" },
    { type: "p", content: "2022년 12월 겨울 연합 공연 ‘사계’" },
    {
      type: "p",
      content:
        "처음 밴드를 결성하여 서툰 모습들도 많이 보였지만, 여러분들의 많은 관심과 성원에 힘입어 저희 기표와 기의는 지난해 3번의 공연을 성공적으로 마쳤으며, 이제는 어엿한 밴드로 거듭나게 되었습니다.",
    },
    {
      type: "p",
      content:
        "단독 공연을 통해 지난 공연들에 와보신 분들께서는 기표와 기의의 성장을, 처음 방문하시는 분들께서는 기표와 기의의 매력을 온전히 느낄 수 있을 것입니다.",
    },
    {
      type: "p",
      content:
        "기표와 기의의 이야기를 함께 되짚어 볼, 여러분들의 방문을 기다리겠습니다.",
    },
    {
      type: "p",
      content:
        "별도의 예매 절차는 없으며, 궁금한 점이나 공연 관련 다양한 문의사항은 010-3787-5516 으로 부탁드립니다.",
    },
    { type: "p", content: "지난 한 해 저희와 함께해 주셔서 감사하며," },
    {
      type: "p",
      content: "기표와 기의의 1년을 함께 마무리해 주시면 감사하겠습니다.",
    },
    { type: "p", content: "시간 나시면 많이들 찾아주시길 바랍니다." },
    { type: "p", content: "감사합니다!" },
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
