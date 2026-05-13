const villainTypes = {
  bombHamster: {
    name: "퇴근직전 폭탄러",
    emoji: "💣",
    icon: "🐹",
    animal: "hamster",
    badge: "BEST VILLAIN",
    color: "#ff4f87",
    color2: "#ffd15c",
    glow: "#ff9ec2",
    title: "퇴근 10분 전, 모두가 마음의 준비를 할 때 폭탄을 던진다.",
    quote: "아 맞다! 이것도 추가 가능할 듯?",
    roast: "본인은 '좋은 아이디어 공유'라고 생각하지만, 팀원들은 이미 심폐소생술 준비 중이다.",
    danger: 98,
    keywords: ["퇴근 파괴", "순수한 악의 없음", "마감 직전 반짝임"],
    catchphrases: ["급한 건 아닌데 생각나서요 ㅎ", "이것만 넣으면 더 좋을 듯!", "오늘 안 해도 돼요. 근데 지금 보면 좋긴 해요"],
    pattern: ["오후 5:51에 갑자기 천재가 됨", "본인은 도움이라고 믿음", "수정사항을 '작은 것'이라고 부름"],
    passive: ["폭탄 드롭: 모두의 평온을 한 문장으로 삭제", "선의의 빌런: 죄책감 없이 채팅방을 얼림", "마감 감각 마비: 퇴근 시간이 가까울수록 아이디어가 맑아짐"],
    stats: { "팀원 혈압": 98, "아이디어력": 96, "눈치 삭제": 88, "순수함": 91, "마감 파괴": 99 },
    good: "마감직전 각성귀",
    bad: "체크리스트 수호자",
    goodRate: 92,
    badRate: 17
  },
  ghostReader: {
    name: "읽씹 잠수유령",
    emoji: "👻",
    icon: "📱",
    animal: "ghost",
    badge: "SILENT DAMAGE",
    color: "#8d6bff",
    color2: "#7ee8ff",
    glow: "#c7b8ff",
    title: "읽음은 찍혔는데 영혼은 다른 세계로 퇴근했다.",
    quote: "아 나 답장한 줄 알았어.",
    roast: "메신저를 읽고 머릿속으로 답장하는 신종 텔레파시형 직장인. 문제는 아무도 못 듣는다.",
    danger: 89,
    keywords: ["읽음 1", "머릿속 답장", "갑자기 등장"],
    catchphrases: ["앗 지금 봤어요", "아 그거 확인했어요", "보내려고 했는데..."],
    pattern: ["중요한 메시지만 골라서 사라짐", "회의 때는 갑자기 많이 앎", "답장 대신 표정으로 해결하려 함"],
    passive: ["투명화: 알림을 보고도 존재감 삭제", "기억 왜곡: 실제로 답했다고 믿음", "급등장: 모두가 포기할 때 나타남"],
    stats: { "잠수력": 99, "읽음 민첩성": 96, "답장 확률": 21, "평온함": 92, "팀원 불안": 88 },
    good: "회의증식 문어",
    bad: "체크리스트 수호자",
    goodRate: 81,
    badRate: 12
  },
  meetingOctopus: {
    name: "회의증식 문어",
    emoji: "🐙",
    icon: "☕",
    animal: "octopus",
    badge: "MEETING FACTORY",
    color: "#ff7a59",
    color2: "#ffe66d",
    glow: "#ffb097",
    title: "회의를 끝내기 위한 회의를 잡고, 그 회의의 사전회의를 연다.",
    quote: "이건 한번 싱크 맞추고 가시죠.",
    roast: "일을 안 하는 건 아니다. 다만 일이 회의에 잡아먹혀 실종될 뿐이다.",
    danger: 94,
    keywords: ["싱크 맞춤", "회의 캘린더 테러", "논의 지옥"],
    catchphrases: ["15분만 잡을게요", "아젠다만 짧게", "이건 따로 논의하시죠"],
    pattern: ["회의가 끝나면 할 일이 생김", "그 할 일을 위해 회의를 또 잡음", "캘린더를 테트리스처럼 채움"],
    passive: ["캘린더 번식: 빈칸을 보면 마음이 불안", "15분 사기: 절대 15분에 안 끝남", "싱크 중독: 모두가 같은 말을 할 때까지 회전"],
    stats: { "회의력": 100, "캘린더 장악": 97, "실행 지연": 86, "말랑한 압박": 91, "커피 의존": 88 },
    good: "메모장 전략가",
    bad: "일단발사 로켓냥",
    goodRate: 87,
    badRate: 24
  },
  tabMouse: {
    name: "탭50개 실험쥐",
    emoji: "🧪",
    icon: "🐭",
    animal: "mouse",
    badge: "BETA GREMLIN",
    color: "#22c55e",
    color2: "#67e8f9",
    glow: "#9effc0",
    title: "새 툴, 새 템플릿, 새 방식 보면 일단 팀 전체를 실험실에 넣는다.",
    quote: "이거 새 툴인데 진짜 미쳤어요.",
    roast: "도입은 번개같고 정착은 유령같다. 3일 뒤 아무도 그 링크를 찾지 못한다.",
    danger: 86,
    keywords: ["베타 중독", "툴 유목민", "3일 천하"],
    catchphrases: ["이거 한번만 써보실래요?", "노션 구조 갈아엎었어요", "이게 더 효율적일 듯"],
    pattern: ["새 서비스 발견하면 눈이 반짝임", "팀 문서를 갑자기 이사시킴", "전파하고 본인이 먼저 질림"],
    passive: ["툴 전염: 아무도 원하지 않은 가입을 유도", "탭 증식: 브라우저가 비명을 지름", "베타 사랑: 안정화되면 흥미가 식음"],
    stats: { "실험욕": 100, "탭 개수": 98, "정착률": 32, "전파력": 90, "혼란 생성": 84 },
    good: "데이터 부검쿼카",
    bad: "체크리스트 수호자",
    goodRate: 76,
    badRate: 28
  },
  fontRabbit: {
    name: "감성폰트 수호토끼",
    emoji: "🎀",
    icon: "🐰",
    animal: "rabbit",
    badge: "MOOD POLICE",
    color: "#ff6fb1",
    color2: "#b794ff",
    glow: "#ffc1df",
    title: "1px 어긋남과 묘하게 안 맞는 톤을 보는 순간 영혼이 흔들린다.",
    quote: "좋은데... 무드가 살짝 안 맞아요.",
    roast: "대부분 못 보는 걸 너무 잘 봐서 문제다. 본인 눈엔 회사 전체가 미완성 시안이다.",
    danger: 83,
    keywords: ["폰트 경찰", "무드 집착", "여백 감별사"],
    catchphrases: ["이 폰트는 좀 말이 세요", "여백만 살짝", "컬러 톤이 약간..."],
    pattern: ["최종본에서 더 선명해짐", "남의 PPT를 마음속으로 리디자인함", "색감이 안 맞으면 표정부터 흐려짐"],
    passive: ["무드 스캔: 0.3초 만에 어색함 탐지", "최종본 저주: 마지막에 꼭 하나 보임", "폰트 심판: 굴림체를 보면 조용히 상처받음"],
    stats: { "감성력": 100, "디테일": 97, "수정 유발": 85, "미감 압박": 93, "현실 타협": 41 },
    good: "일단발사 로켓냥",
    bad: "탭50개 실험쥐",
    goodRate: 88,
    badRate: 31
  },
  deadlineGoblin: {
    name: "마감직전 각성귀",
    emoji: "🔥",
    icon: "😈",
    animal: "goblin",
    badge: "LAST MINUTE GOD",
    color: "#fb923c",
    color2: "#ef4444",
    glow: "#ffbd8a",
    title: "평소엔 절전모드, 마감 3시간 전부터 갑자기 인간이 아니다.",
    quote: "지금부터 하면 돼요. 진짜 돼요.",
    roast: "남들이 불안해서 울 때 본인은 이제야 뇌가 켜진다. 문제는 결과물이 가끔 좋아서 더 화난다.",
    danger: 91,
    keywords: ["마감 버프", "벼락치기 장인", "팀원 수명 단축"],
    catchphrases: ["아직 시간 있어요", "오늘 안에 됩니다", "집중하면 금방이에요"],
    pattern: ["초반엔 너무 평온함", "중반엔 사라짐", "마감 직전에 괴물처럼 처리함"],
    passive: ["마감 버프: 시간이 없을수록 능력치 상승", "불안 면역: 모두가 타도 혼자 차분", "기적 생산: 욕하면서도 결과는 냄"],
    stats: { "벼락치기": 100, "초반 평온": 94, "팀원 불안": 96, "순간 집중": 99, "사전 준비": 25 },
    good: "퇴근직전 폭탄러",
    bad: "회의증식 문어",
    goodRate: 93,
    badRate: 20
  },
  rocketCat: {
    name: "일단발사 로켓냥",
    emoji: "🚀",
    icon: "🐱",
    animal: "cat",
    badge: "SHIP FIRST",
    color: "#38bdf8",
    color2: "#a78bfa",
    glow: "#9ce7ff",
    title: "검토는 미래의 내가 하고, 현재의 나는 일단 보낸다.",
    quote: "일단 올렸어요! 수정 가능하죠?",
    roast: "속도는 미쳤는데 주변 사람 심장도 같이 미친다. 버튼 앞에서 망설임이라는 감정이 없다.",
    danger: 88,
    keywords: ["선발사 후수습", "업로드 친화", "검토는 미래"],
    catchphrases: ["어차피 수정하면 돼요", "일단 공유드려요", "큰 틀은 맞아요"],
    pattern: ["초안이라는 이름으로 거의 최종을 보냄", "수정 요청을 예상하고도 발사", "일을 멈춰두는 걸 못 참음"],
    passive: ["발사 버튼 친밀도: 전송 버튼과 내적 친분", "수습 민첩성: 사고 후 손이 빨라짐", "멈춤 공포: 대기 상태를 못 견딤"],
    stats: { "실행력": 100, "검토 생략": 87, "수습력": 91, "팀원 심박": 84, "속도감": 99 },
    good: "감성폰트 수호토끼",
    bad: "회의증식 문어",
    goodRate: 89,
    badRate: 18
  },
  checklistDino: {
    name: "체크리스트 수호자",
    emoji: "📋",
    icon: "🦖",
    animal: "dino",
    badge: "NO MISTAKE ZONE",
    color: "#14b8a6",
    color2: "#60a5fa",
    glow: "#8ffff0",
    title: "누락, 오탈자, 미정, TBD를 보면 내면의 공룡이 깨어난다.",
    quote: "잠깐만요. 이거 확인 됐나요?",
    roast: "모두가 대충 넘어가려는 순간 등장해서 현실을 들이민다. 고맙지만 무섭다.",
    danger: 85,
    keywords: ["누락 탐지", "팩트 체크", "최종본 의심"],
    catchphrases: ["이거 누가 오너예요?", "마감일 적어주세요", "최종본 맞죠?"],
    pattern: ["엑셀과 체크박스를 믿음", "말로 한 약속을 기록으로 잡아냄", "최종_v7_진짜최종을 믿지 않음"],
    passive: ["누락 레이더: 빈칸을 냄새로 찾음", "최종본 불신: 파일명을 절대 믿지 않음", "현실 소환: 분위기보다 일정표를 들이밈"],
    stats: { "검수력": 100, "누락 탐지": 99, "융통성": 37, "신뢰도": 96, "팀원 압박": 82 },
    good: "읽씹 잠수유령",
    bad: "퇴근직전 폭탄러",
    goodRate: 74,
    badRate: 11
  },
  memoStrategist: {
    name: "메모장 전략가",
    emoji: "🧠",
    icon: "📝",
    animal: "memo",
    badge: "BIG PICTURE GHOST",
    color: "#6366f1",
    color2: "#f472b6",
    glow: "#b4b7ff",
    title: "머릿속에서는 이미 대서사시인데, 공유문서는 아직 제목만 있다.",
    quote: "제가 생각한 흐름은 좀 큰데요.",
    roast: "말을 듣다 보면 분명 대단하다. 근데 끝나고 나면 모두가 '그래서 뭐부터?' 상태가 된다.",
    danger: 82,
    keywords: ["큰그림 장인", "문서 제목뿐", "말로는 유니콘"],
    catchphrases: ["맥락을 먼저 보면", "이건 단기보다 장기적으로", "제가 러프하게 정리해볼게요"],
    pattern: ["화이트보드 앞에서 강해짐", "설명하다가 세계관 확장", "실행 단위로 쪼개면 잠깐 조용해짐"],
    passive: ["세계관 확장: 작은 일도 3개년 로드맵화", "맥락 폭격: 질문 하나에 배경 15분", "문서 지연: 제목은 완벽함"],
    stats: { "큰그림": 100, "설명력": 92, "실행분해": 48, "설득력": 90, "회의 길이": 86 },
    good: "회의증식 문어",
    bad: "일단발사 로켓냥",
    goodRate: 86,
    badRate: 26
  },
  dataQuokka: {
    name: "데이터 부검쿼카",
    emoji: "📊",
    icon: "🦫",
    animal: "quokka",
    badge: "NUMBER GOBLIN",
    color: "#06b6d4",
    color2: "#84cc16",
    glow: "#9df3ff",
    title: "감으로 정하자는 말이 들리면 조용히 시트를 연다.",
    quote: "근거가 혹시 있을까요?",
    roast: "숫자는 친구고 감성은 참고자료다. 대화하다 보면 어느새 모두가 피벗테이블 앞에 앉아있다.",
    danger: 87,
    keywords: ["근거 요구", "시트 소환", "감성 진압"],
    catchphrases: ["데이터 한번 볼까요?", "샘플 수가 좀 적네요", "이건 상관관계일 수도"],
    pattern: ["분위기 좋은 아이디어에 찬물을 뿌림", "근데 대체로 맞는 말이라 더 열받음", "대시보드를 안정제처럼 봄"],
    passive: ["팩트 방패: 감정 공격 무효화", "시트 소환: 논의가 길어지면 표를 꺼냄", "차가운 다정함: 사람은 좋아하지만 근거는 더 좋아함"],
    stats: { "근거 집착": 100, "감성 차단": 78, "분석력": 97, "대시보드 체류": 94, "분위기 냉각": 82 },
    good: "탭50개 실험쥐",
    bad: "감성폰트 수호토끼",
    goodRate: 84,
    badRate: 23
  }
};

const questions = [
  {
    q: "퇴근 10분 전, 당신의 가장 위험한 행동은?",
    options: [
      ["아 맞다! 이것도 넣으면 좋을 듯", "bombHamster"],
      ["답장해야지 생각만 하고 사라짐", "ghostReader"],
      ["내일 아침 9시 회의 초대 발송", "meetingOctopus"],
      ["새 툴 발견해서 단톡에 링크 투척", "tabMouse"]
    ]
  },
  {
    q: "회의 중 내 빌런 모먼트는?",
    options: [
      ["논의가 끝나면 '정리 미팅'을 제안함", "meetingOctopus"],
      ["갑자기 큰 그림을 펼쳐 모두를 우주로 보냄", "memoStrategist"],
      ["말없이 읽고 있다가 마지막에 핵심 질문함", "dataQuokka"],
      ["일단 해보자며 회의를 강제 종료시킴", "rocketCat"]
    ]
  },
  {
    q: "단톡방에서 가장 나다운 말은?",
    options: [
      ["급한 건 아닌데요 ㅎㅎ", "bombHamster"],
      ["앗 제가 답장한 줄 알았어요", "ghostReader"],
      ["이거 오너 누구예요?", "checklistDino"],
      ["무드가 살짝 안 맞는 것 같아요", "fontRabbit"]
    ]
  },
  {
    q: "마감이 다가올 때 나는?",
    options: [
      ["그때부터 갑자기 눈빛이 살아남", "deadlineGoblin"],
      ["체크리스트 켜고 누락자 색출", "checklistDino"],
      ["초안 보내고 수정으로 때움", "rocketCat"],
      ["왜 이 결과가 나왔는지 데이터부터 봄", "dataQuokka"]
    ]
  },
  {
    q: "동기들이 당신 때문에 제일 많이 하는 표정은?",
    options: [
      ["하... 지금?", "bombHamster"],
      ["어디 갔어?", "ghostReader"],
      ["또 바꿔?", "tabMouse"],
      ["맞는 말인데 빡쳐", "checklistDino"]
    ]
  },
  {
    q: "새 프로젝트 시작하면 제일 먼저 하는 짓은?",
    options: [
      ["일단 캘린더부터 잡음", "meetingOctopus"],
      ["레퍼런스/폰트/색감부터 봄", "fontRabbit"],
      ["가설 세우고 테스트판 벌림", "tabMouse"],
      ["전체 구조와 방향성을 말로 압도함", "memoStrategist"]
    ]
  },
  {
    q: "당신의 업무 생존 방식은?",
    options: [
      ["마감이 나를 완성한다", "deadlineGoblin"],
      ["빠르게 쏘고 빠르게 수습한다", "rocketCat"],
      ["근거 없으면 마음이 안 열린다", "dataQuokka"],
      ["디테일이 곧 인성이다", "fontRabbit"]
    ]
  },
  {
    q: "동기들이 당신을 태그할 상황은?",
    options: [
      ["누가 마지막에 일 키웠을 때", "bombHamster"],
      ["회의가 갑자기 4개로 늘었을 때", "meetingOctopus"],
      ["마감 직전에 기적이 필요할 때", "deadlineGoblin"],
      ["최종본에서 오탈자 잡아야 할 때", "checklistDino"]
    ]
  },
  {
    q: "당신이 제일 싫어하는 말은?",
    options: [
      ["그냥 감으로 가시죠", "dataQuokka"],
      ["대충 느낌만 맞으면 되죠", "fontRabbit"],
      ["일단 다음 주에 다시 얘기하죠", "rocketCat"],
      ["이거 프로세스대로 해야 해요", "tabMouse"]
    ]
  },
  {
    q: "마지막으로, 당신의 진짜 죄목은?",
    options: [
      ["순수한 얼굴로 업무를 추가함", "bombHamster"],
      ["기록은 완벽한데 실행은 안 보임", "memoStrategist"],
      ["아무렇지 않게 모두를 불안하게 함", "deadlineGoblin"],
      ["너무 맞는 말만 해서 킹받게 함", "checklistDino"]
    ]
  }
];

let currentIndex = 0;
let scores = {};
let selectedHistory = [];

const app = document.querySelector("#app");
const typeKeys = Object.keys(villainTypes);

function resetScores() {
  scores = Object.fromEntries(typeKeys.map((key) => [key, 0]));
  selectedHistory = [];
}

function getWinner() {
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = sorted[0][1];
  const tied = sorted.filter(([, value]) => value === topScore).map(([key]) => key);
  if (tied.length === 1) return tied[0];
  for (let i = selectedHistory.length - 1; i >= 0; i -= 1) {
    if (tied.includes(selectedHistory[i])) return selectedHistory[i];
  }
  return sorted[0][0];
}

function renderShell(content, className = "") {
  app.innerHTML = `
    <div class="phone-bg ${className}">
      <div class="noise"></div>
      <div class="ios-status">
        <strong>9:41</strong>
        <span>●●●  5G  🔋</span>
      </div>
      <div class="app-shell">
        ${content}
      </div>
    </div>
  `;
}

function villainFace(key, size = "large") {
  const t = villainTypes[key];
  const faceParts = {
    hamster: `<div class="ear left"></div><div class="ear right"></div><div class="cheek left"></div><div class="cheek right"></div><div class="bomb-mini">💣</div>`,
    ghost: `<div class="ghost-tail"></div><div class="phone-mini">📱</div>`,
    octopus: `<div class="tentacles"><i></i><i></i><i></i><i></i></div><div class="coffee-mini">☕</div>`,
    mouse: `<div class="ear left"></div><div class="ear right"></div><div class="lab-mini">🧪</div>`,
    rabbit: `<div class="bunny-ear left"></div><div class="bunny-ear right"></div><div class="ruler-mini">📏</div>`,
    goblin: `<div class="horn left"></div><div class="horn right"></div><div class="fire-mini">🔥</div>`,
    cat: `<div class="cat-ear left"></div><div class="cat-ear right"></div><div class="rocket-mini">🚀</div>`,
    dino: `<div class="spikes"><i></i><i></i><i></i></div><div class="clip-mini">📋</div>`,
    memo: `<div class="memo-hair"></div><div class="note-mini">📝</div>`,
    quokka: `<div class="ear left"></div><div class="ear right"></div><div class="chart-mini">📊</div>`
  };

  return `
    <div class="villain ${size} ${t.animal}" style="--c1:${t.color}; --c2:${t.color2}; --glow:${t.glow}">
      <div class="sticker-pop">${t.emoji}</div>
      <div class="head">
        ${faceParts[t.animal] || ""}
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="brow left"></div>
        <div class="brow right"></div>
        <div class="nose"></div>
        <div class="mouth"></div>
      </div>
      <div class="body"><span>${t.icon}</span></div>
      <div class="arm left"></div><div class="arm right"></div>
      <div class="foot left"></div><div class="foot right"></div>
    </div>
  `;
}

function renderHome() {
  renderShell(`
    <section class="home screen-card">
      <div class="top-actions">
        <button class="round-btn">←</button>
        <button class="share-pill">↗ 공유각</button>
      </div>
      <div class="title-area">
        <p class="eyebrow">회사 동기들이 보는 나의 빌런 유형</p>
        <h1>나는 어떤<br><span>오피스 빌런</span>일까?</h1>
        <p class="lead">좋게 포장 안 함. 귀엽게 패줌. 단톡방에서 서로 태그하다가 갑자기 정적 오는 그 테스트.</p>
      </div>
      <div class="hero-card" style="--c1:#ff4f87; --c2:#ffd15c; --glow:#ff9ec2">
        <div class="badge-tilt">SCREENSHOT ME</div>
        <div class="speech one">아 맞다!<br>이것도 추가 가능?</div>
        <div class="speech two">퇴근 9분 전입니다만?</div>
        ${villainFace("bombHamster")}
        <div class="mini-stat">
          <span>팀원 혈압 상승 지수</span>
          <strong>98%</strong>
          <div><i style="width:98%"></i></div>
        </div>
      </div>
      <button class="primary big" onclick="startTest()">내 빌런력 검사하기 💥</button>
      <button class="ghost-btn" onclick="showResult('bombHamster')">결과 화면 미리보기</button>
    </section>
  `, "home-bg");
}

function startTest() {
  currentIndex = 0;
  resetScores();
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentIndex];
  const percent = Math.round((currentIndex / questions.length) * 100);
  renderShell(`
    <section class="quiz screen-card">
      <div class="quiz-head">
        <button class="round-btn" onclick="renderHome()">←</button>
        <div class="progress-label">${currentIndex + 1} / ${questions.length}</div>
      </div>
      <div class="progress"><i style="width:${percent}%"></i></div>
      <div class="question-card">
        <span class="question-chip">빌런 심문 중</span>
        <h2>${item.q}</h2>
      </div>
      <div class="option-list">
        ${item.options.map(([text, key], idx) => `
          <button class="option" onclick="answer('${key}')">
            <span class="option-icon">${villainTypes[key].emoji}</span>
            <b>${String.fromCharCode(65 + idx)}</b>
            <span>${text}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `, "quiz-bg");
}

function answer(key) {
  scores[key] += 1;
  selectedHistory.push(key);
  currentIndex += 1;
  if (currentIndex >= questions.length) {
    showResult(getWinner());
    return;
  }
  renderQuestion();
}

function statRows(stats) {
  return Object.entries(stats).map(([name, value]) => `
    <div class="stat-row">
      <div><span>${name}</span><strong>${value}</strong></div>
      <div class="stat-bar"><i style="width:${value}%"></i></div>
    </div>
  `).join("");
}

function matchCard(label, typeName, rate, mood) {
  const key = typeKeys.find((item) => villainTypes[item].name === typeName) || "bombHamster";
  const t = villainTypes[key];
  return `
    <div class="match-card ${mood}" style="--c1:${t.color}; --c2:${t.color2}">
      <div class="match-top"><span>${label}</span><b>${rate}%</b></div>
      <div class="match-body">
        ${villainFace(key, "tiny")}
        <strong>${typeName}</strong>
      </div>
      <div class="match-bar"><i style="width:${rate}%"></i></div>
    </div>
  `;
}

function showResult(key) {
  const t = villainTypes[key];
  renderShell(`
    <section class="result" id="captureTarget" style="--c1:${t.color}; --c2:${t.color2}; --glow:${t.glow}">
      <div class="result-hero screen-card">
        <div class="top-actions result-actions no-capture">
          <button class="round-btn" onclick="renderHome()">←</button>
          <button class="share-pill" onclick="captureResult()">📸 저장</button>
        </div>
        <div class="result-title">
          <p>나는 어떤 ${t.emoji}</p>
          <h1>${t.name}</h1>
          <span>${t.badge}</span>
        </div>
        <div class="poster-card">
          <div class="ink one"></div><div class="ink two"></div>
          <div class="speech one">${t.quote}</div>
          <div class="speech two">위험도 ${t.danger}%</div>
          ${villainFace(key)}
          <div class="poster-copy">
            <h2>${t.title}</h2>
            <p>${t.roast}</p>
          </div>
        </div>
        <div class="chips">
          ${t.keywords.map((word) => `<span>#${word}</span>`).join("")}
        </div>
      </div>

      <div class="result-grid">
        <div class="paper-card lines">
          <h3>주로 하는 말 TOP3</h3>
          <ol>${t.catchphrases.map((text) => `<li>${text}</li>`).join("")}</ol>
        </div>
        <div class="paper-card tape">
          <h3>주요 행동 패턴</h3>
          <ul>${t.pattern.map((text) => `<li>${text}</li>`).join("")}</ul>
        </div>
      </div>

      <div class="match-wrap">
        ${matchCard("환장궁합", t.good, t.goodRate, "good")}
        ${matchCard("상극주의", t.bad, t.badRate, "bad")}
      </div>

      <div class="power-card screen-card">
        <h3>😈 빌런 능력치</h3>
        ${statRows(t.stats)}
      </div>

      <div class="passive-card screen-card">
        <h3>빌런 패시브 스킬</h3>
        ${t.passive.map((text) => {
          const [skill, desc] = text.split(": ");
          return `<div class="passive-item"><b>${skill}</b><span>${desc}</span></div>`;
        }).join("")}
      </div>

      <div class="bottom-actions no-capture">
        <button class="secondary" onclick="renderHome()">↻ 다시 하기</button>
        <button class="primary" onclick="copyShareText('${key}')">내 빌런 자랑하기</button>
      </div>
    </section>
  `, "result-bg");
}

async function captureResult() {
  const target = document.querySelector("#captureTarget");
  const buttons = document.querySelectorAll(".no-capture");
  buttons.forEach((el) => el.classList.add("hide-for-capture"));

  try {
    if (!window.html2canvas) throw new Error("html2canvas not loaded");
    const canvas = await window.html2canvas(target, {
      backgroundColor: null,
      scale: Math.min(window.devicePixelRatio || 2, 3),
      useCORS: true
    });
    const link = document.createElement("a");
    link.download = "office-villain-result.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } catch (error) {
    alert("저장 버튼이 안 먹으면 화면 캡쳐로 박제하세요. 이 UI는 캡쳐빨 받게 만들었습니다.");
  } finally {
    buttons.forEach((el) => el.classList.remove("hide-for-capture"));
  }
}

async function copyShareText(key) {
  const t = villainTypes[key];
  const text = `나는 ${t.name} ${t.emoji}\n${t.quote}\n위험도 ${t.danger}% 나옴. 반박은 단톡방에서 받음.`;
  try {
    await navigator.clipboard.writeText(text);
    alert("공유 멘트 복사 완료. 이제 단톡방에 투척하세요 💣");
  } catch (error) {
    alert(text);
  }
}

window.startTest = startTest;
window.answer = answer;
window.showResult = showResult;
window.renderHome = renderHome;
window.captureResult = captureResult;
window.copyShareText = copyShareText;

renderHome();
