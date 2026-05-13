const types = {
  bomb: {
    name: "퇴근직전 폭탄러",
    emoji: "💣",
    color: "#B8E986",
    soft: "#F3FFE6",
    one: "퇴근 12분 전에 갑자기 세상을 바꾸려는 해맑은 재앙.",
    quote: "아 맞다, 이것도 추가 가능할 듯?",
    propBig: "💣",
    propSmall: "👜",
    traits: [
      "본인은 좋은 아이디어를 공유했다고 믿는다.",
      "타이밍만 이상할 뿐 내용은 묘하게 맞는 말이라 더 화난다.",
      "팀원의 퇴근 버튼 위에 조용히 손을 얹는다."
    ],
    stats: { "팀원 혈압": 97, "해맑음": 91, "마감 파괴력": 88 },
    good: "마감직전 각성형",
    bad: "체크리스트 수호자",
    goodText: "어차피 둘 다 막판에 불이 붙어서 이상하게 굴러감.",
    badText: "수호자는 이미 체크를 끝냈고, 너는 그 체크리스트를 다시 태움."
  },
  ghost: {
    name: "읽씹 잠수요정",
    emoji: "👻",
    color: "#A9D7FF",
    soft: "#EEF8FF",
    one: "읽고 답한 줄 아는, 회사 메신저계의 미스터리.",
    quote: "어? 나 답장 안 했어?",
    propBig: "📱",
    propSmall: "💬",
    traits: [
      "머릿속으로는 이미 장문의 답장을 보냈다.",
      "회의 때 갑자기 나타나서 맥락을 다 알고 있어 더 무섭다.",
      "알림 숫자가 너무 커서 이제 감정이 없다."
    ],
    stats: { "잠수력": 94, "악의 없음": 99, "답장 지연": 92 },
    good: "조율 펭귄",
    bad: "퇴근직전 폭탄러",
    goodText: "펭귄이 부드럽게 다시 끌어올려 준다.",
    badText: "폭탄러는 기다리지 않고 새 폭탄을 하나 더 던진다."
  },
  meeting: {
    name: "회의 증식 문어",
    emoji: "🐙",
    color: "#FFD89C",
    soft: "#FFF5E6",
    one: "하나의 이슈를 세 개의 회의로 번식시키는 조직 생태계 교란종.",
    quote: "이건 한 번 맞춰보고 가시죠.",
    propBig: "☕",
    propSmall: "📅",
    traits: [
      "정리 미팅의 정리 미팅을 만들 수 있다.",
      "일을 안 하는 건 아닌데 캘린더가 먼저 질린다.",
      "회의 끝나면 할 일이 생기고, 그 할 일을 위해 회의를 잡는다."
    ],
    stats: { "캘린더 점유율": 96, "말 부드러움": 82, "논의 생산력": 89 },
    good: "메모장 전략가",
    bad: "일단 발사형",
    goodText: "전략가는 말할 세계관이 많고, 문어는 들을 회의가 많다.",
    badText: "발사형은 회의 초대가 오기 전에 이미 보냈다."
  },
  checklist: {
    name: "체크리스트 수호자",
    emoji: "✅",
    color: "#FFE88A",
    soft: "#FFFBE8",
    one: "오탈자와 누락을 보면 심장이 먼저 반응하는 최종본 감시자.",
    quote: "잠깐만, 여기 하나만 확인하고.",
    propBig: "📋",
    propSmall: "🔍",
    traits: [
      "최종_final_진짜최종 파일도 믿지 않는다.",
      "남들은 못 본 1픽셀의 틀어짐을 보고 하루가 망한다.",
      "팀을 살리지만 팀을 약간 숨 막히게도 한다."
    ],
    stats: { "검수력": 99, "불안 탐지": 93, "최종 의심": 95 },
    good: "일단 발사형",
    bad: "퇴근직전 폭탄러",
    goodText: "발사형이 쏘면 수호자가 수습해서 기적의 밸런스.",
    badText: "이미 닫은 문서를 다시 여는 사람과 평화로울 수 없음."
  },
  launcher: {
    name: "일단 발사형",
    emoji: "🚀",
    color: "#FFB4A2",
    soft: "#FFF0EC",
    one: "보내고 생각한다. 근데 가끔 그게 맞아서 더 위험하다.",
    quote: "일단 공유드렸습니다!",
    propBig: "🚀",
    propSmall: "📎",
    traits: [
      "검토보다 공유 버튼이 빠르다.",
      "수정 가능하다는 말을 신앙처럼 믿는다.",
      "멈춘 일에 산소호흡기를 꽂는 타입. 가끔 산소가 과하다."
    ],
    stats: { "실행 속도": 98, "후수습": 87, "검토 생략": 79 },
    good: "체크리스트 수호자",
    bad: "회의 증식 문어",
    goodText: "너는 쏘고, 수호자는 조준을 맞춘다.",
    badText: "문어가 회의를 잡는 동안 이미 세 번 보냄."
  },
  font: {
    name: "감성 폰트수호신",
    emoji: "🎨",
    color: "#FFC7E8",
    soft: "#FFF0F8",
    one: "내용보다 무드가 삐끗하면 먼저 아픈 사람.",
    quote: "좋은데, 지금 톤이 살짝 안 맞아.",
    propBig: "🎨",
    propSmall: "🖋️",
    traits: [
      "폰트가 바뀌면 분위기가 바뀌고, 분위기가 바뀌면 세계가 무너진다.",
      "레퍼런스 폴더가 작은 박물관 수준이다.",
      "감으로 말하는 것 같지만 대체로 맞아서 반박이 어렵다."
    ],
    stats: { "무드 감지": 98, "폰트 민감도": 94, "마지막 수정": 88 },
    good: "메모장 전략가",
    bad: "일단 발사형",
    goodText: "전략가가 판을 짜면 수호신이 보기 좋게 만든다.",
    badText: "발사형은 네가 폰트 고르기 전에 이미 링크를 뿌렸다."
  },
  lab: {
    name: "새 툴 실험쥐",
    emoji: "🧪",
    color: "#BFF4EA",
    soft: "#EEFFFB",
    one: "새로운 협업툴을 보면 눈이 반짝이고, 팀은 조용히 긴장한다.",
    quote: "이거 써보면 진짜 편할 것 같은데?",
    propBig: "🧪",
    propSmall: "🖥️",
    traits: [
      "좋은 툴을 찾는 게 아니라 툴을 찾는 행위가 좋다.",
      "노션 구조를 갈아엎고 3일 뒤 본인도 헷갈려 한다.",
      "그래도 가끔 진짜 좋은 걸 물어와서 퇴출은 안 된다."
    ],
    stats: { "새 탭 개수": 96, "도입 욕구": 93, "유기 확률": 71 },
    good: "읽씹 잠수요정",
    bad: "체크리스트 수호자",
    goodText: "요정은 새 툴 초대장을 읽고 조용히 사라져 평화롭다.",
    badText: "수호자는 기존 프로세스 문서를 아직 사랑한다."
  },
  deadline: {
    name: "마감직전 각성형",
    emoji: "🔥",
    color: "#FFCF70",
    soft: "#FFF7E5",
    one: "평소엔 절전모드, 마감 앞에서는 갑자기 괴물이 된다.",
    quote: "오늘 안에는 됩니다.",
    propBig: "🔥",
    propSmall: "⏰",
    traits: [
      "오전의 나와 오후 5시의 내가 다른 사람이다.",
      "주변 사람을 불안하게 하지만 결과물은 또 나온다.",
      "마감이 없으면 동기부여도 없다."
    ],
    stats: { "막판 화력": 99, "평소 절전": 81, "기적 생산": 92 },
    good: "퇴근직전 폭탄러",
    bad: "조율 펭귄",
    goodText: "폭탄이 떨어지면 너는 이상하게 살아난다.",
    badText: "펭귄은 미리미리를 믿고, 너는 벼랑 끝을 믿는다."
  },
  strategy: {
    name: "메모장 전략가",
    emoji: "🧠",
    color: "#CFC7FF",
    soft: "#F3F0FF",
    one: "머릿속에는 이미 3개년 로드맵이 있는데 파일명은 아직 untitled.",
    quote: "이게 결국 큰 흐름에서 보면요.",
    propBig: "🧠",
    propSmall: "📝",
    traits: [
      "설명은 거대한데 첫 줄 쓰는 데 오래 걸린다.",
      "갑자기 판을 크게 만들어 사람들을 설득한다.",
      "생각이 많아서 가끔 본인도 길을 잃는다."
    ],
    stats: { "큰그림": 98, "말 길이": 87, "착수 지연": 76 },
    good: "회의 증식 문어",
    bad: "일단 발사형",
    goodText: "문어가 회의를 열고, 전략가는 세계관을 푼다.",
    badText: "발사형은 네가 배경 설명할 때 이미 결과를 공유했다."
  },
  penguin: {
    name: "조율 펭귄",
    emoji: "🐧",
    color: "#A9D7FF",
    soft: "#EEF8FF",
    one: "모두가 이상해질 때 혼자 회의록을 정리하는 사회생활 보호종.",
    quote: "그럼 역할만 다시 정리해볼게요.",
    propBig: "🐧",
    propSmall: "🤝",
    traits: [
      "싸움이 나기 전에 말투를 먼저 부드럽게 만든다.",
      "본인 일보다 남의 혼란을 정리하다가 하루가 끝난다.",
      "팀을 살리지만 정작 본인은 조용히 닳는다."
    ],
    stats: { "중재력": 98, "회의록": 91, "혼자 참음": 89 },
    good: "읽씹 잠수요정",
    bad: "마감직전 각성형",
    goodText: "요정을 다시 수면 위로 올리는 거의 유일한 존재.",
    badText: "펭귄은 질서를 짜고, 각성형은 마감으로 질서를 만든다."
  }
};

const questions = [
  {
    q: "퇴근 20분 전, 입 밖으로 나오면 제일 위험한 말은?",
    options: [
      ["아 맞다, 이것도 추가 가능할 듯?", "bomb", "💣"],
      ["일단 공유드렸습니다!", "launcher", "🚀"],
      ["이거 한 번만 더 맞춰보고 가죠.", "meeting", "📅"],
      ["오늘 안에는 됩니다.", "deadline", "🔥"]
    ]
  },
  {
    q: "메신저 답장이 늦는 진짜 이유는?",
    options: [
      ["읽고 답한 줄 알았다.", "ghost", "👻"],
      ["어떻게 답할지 생각하다가 시간이 사라졌다.", "penguin", "🐧"],
      ["새 툴 알림이랑 섞여서 묻혔다.", "lab", "🧪"],
      ["큰 흐름을 설명하려다 글이 길어졌다.", "strategy", "🧠"]
    ]
  },
  {
    q: "회의 중 내가 제일 자주 하는 행동은?",
    options: [
      ["다음 회의를 자연스럽게 만든다.", "meeting", "🐙"],
      ["역할과 할 일을 정리한다.", "penguin", "🤝"],
      ["큰 그림부터 다시 잡는다.", "strategy", "🧠"],
      ["폰트나 톤이 계속 신경 쓰인다.", "font", "🎨"]
    ]
  },
  {
    q: "문서 최종본을 받았을 때 가장 먼저 드는 생각은?",
    options: [
      ["최종이 진짜 최종일까?", "checklist", "✅"],
      ["이 톤이 맞나?", "font", "🎨"],
      ["일단 보내도 될 듯?", "launcher", "🚀"],
      ["이 구조 자체를 바꿔야 하지 않나?", "strategy", "🧠"]
    ]
  },
  {
    q: "새 프로젝트가 시작됐다. 나는 제일 먼저 뭘 함?",
    options: [
      ["새 협업툴부터 찾아본다.", "lab", "🧪"],
      ["일정과 역할을 나눈다.", "penguin", "🐧"],
      ["바로 초안을 던진다.", "launcher", "🚀"],
      ["레퍼런스 무드를 모은다.", "font", "🎨"]
    ]
  },
  {
    q: "동기가 나를 보고 가장 많이 할 말은?",
    options: [
      ["너는 왜 항상 마지막에 생각나?", "bomb", "💣"],
      ["답장 좀 해.", "ghost", "📱"],
      ["그만 갈아엎어.", "lab", "🧪"],
      ["너 없으면 정리는 안 됨.", "penguin", "🤝"]
    ]
  },
  {
    q: "마감이 가까워질수록 나는?",
    options: [
      ["갑자기 사람이 바뀐다.", "deadline", "🔥"],
      ["검수 체크리스트가 길어진다.", "checklist", "✅"],
      ["아이디어가 이제야 또렷해진다.", "bomb", "💣"],
      ["방향성부터 다시 보고 싶다.", "strategy", "🧠"]
    ]
  },
  {
    q: "내가 제일 못 참는 상황은?",
    options: [
      ["오탈자 있는데 그냥 나가는 것", "checklist", "🔍"],
      ["분위기랑 안 맞는데 밀어붙이는 것", "font", "🎨"],
      ["논의만 하고 아무것도 안 나가는 것", "launcher", "🚀"],
      ["누가 뭘 하는지 아무도 모르는 것", "penguin", "🐧"]
    ]
  },
  {
    q: "단톡방에 결과 공유하면 제일 듣고 싶은 말은?",
    options: [
      ["야 이거 진짜 너다.", "bomb", "💣"],
      ["너 왜 여기서도 답장 안 해?", "ghost", "👻"],
      ["인정하기 싫은데 맞음.", "deadline", "🔥"],
      ["이 테스트 만든 사람 누구냐.", "meeting", "🐙"]
    ]
  }
];

let current = 0;
let scores = {};
const app = document.querySelector("#app");

function resetScores() {
  scores = Object.fromEntries(Object.keys(types).map((key) => [key, 0]));
}

function shell(content) {
  app.innerHTML = `
    <div class="app">
      <header class="topbar">
        <div class="brand"><div class="logo"></div><span>Office Villain Test</span></div>
        <div class="badge">동기 전용 현실고증 테스트</div>
      </header>
      ${content}
    </div>
    <div class="toast" id="toast">복사 완료. 단톡방에 던져.</div>
  `;
}

function character(key) {
  const t = types[key];
  return `
    <div class="character" style="--c:${t.color}">
      <div class="blob"></div>
      <div class="eye left"></div><div class="eye right"></div>
      <div class="mouth"></div>
      <div class="cheek left"></div><div class="cheek right"></div>
      <div class="arm left"></div><div class="arm right"></div>
      <div class="leg left"></div><div class="leg right"></div>
      <div class="id-card"></div>
      <div class="prop big">${t.propBig}</div>
      <div class="prop small">${t.propSmall}</div>
    </div>
  `;
}

function renderHome() {
  const featured = "bomb";
  const t = types[featured];
  document.documentElement.style.setProperty("--accent", t.color);
  document.documentElement.style.setProperty("--accent-2", t.soft);
  shell(`
    <section class="hero card">
      <div>
        <div class="kicker">${t.emoji} 회사에서 나는 무슨 빌런?</div>
        <h1>나는 어떤<br/>오피스 빌런일까?</h1>
        <p class="lead">회사 동기들 기준으로 보는 현실고증 업무 빌런 테스트. 결과가 마음에 안 들면? 그게 보통 제일 정확합니다.</p>
        <div class="hero-actions">
          <button class="primary" onclick="startTest()">테스트 시작하기</button>
          <button class="secondary" onclick="showResult('bomb')">결과 미리보기</button>
        </div>
      </div>
      <div class="preview">
        <div class="preview-card">
          ${character(featured)}
          <div class="preview-title">퇴근직전 폭탄러</div>
          <div class="preview-copy">"아 맞다" 한마디로 팀원의 퇴근을 흐리게 하는 타입</div>
        </div>
      </div>
    </section>
  `);
}

function startTest() {
  current = 0;
  resetScores();
  renderQuestion();
}

function renderQuestion() {
  const item = questions[current];
  const percent = Math.round((current / questions.length) * 100);
  shell(`
    <section class="test-card card">
      <div class="progress-wrap">
        <div class="progress-label">${current + 1}/${questions.length}</div>
        <div class="progress"><div style="width:${percent}%"></div></div>
      </div>
      <div class="question-box">
        <div>${character(Object.keys(types)[current % Object.keys(types).length])}</div>
        <div>
          <div class="q-num">QUESTION ${String(current + 1).padStart(2, "0")}</div>
          <h2 class="question">${item.q}</h2>
        </div>
      </div>
      <div class="options">
        ${item.options.map(([text, key, icon]) => `
          <button class="option" onclick="answer('${key}')">
            <span class="option-icon">${icon}</span>
            <span>${text}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `);
}

function answer(key) {
  scores[key] += 1;
  current += 1;
  if (current >= questions.length) {
    const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    showResult(winner);
  } else {
    renderQuestion();
  }
}

function statRows(stats) {
  return Object.entries(stats).map(([name, value]) => `
    <div class="stat-line">
      <div class="stat-head"><span>${name}</span><span>${value}%</span></div>
      <div class="stat-bar"><div class="stat-fill" style="width:${value}%"></div></div>
    </div>
  `).join("");
}

function resultHTML(key, capture = false) {
  const t = types[key];
  return `
    <section class="${capture ? "capture-card" : "result-card card"}" style="--accent:${t.color};--accent-2:${t.soft}">
      <div class="result-visual">
        <div class="result-badge">${t.emoji} 나의 오피스 빌런</div>
        ${character(key)}
        <h1 class="result-title">${t.name}</h1>
        <p class="result-one">${t.one}</p>
      </div>
      <div class="result-body">
        <div class="quote">“${t.quote}”</div>
        <div class="section">
          <h3>주요 증상</h3>
          <ul class="bullets">${t.traits.map((x) => `<li>${x}</li>`).join("")}</ul>
        </div>
        <div class="section">
          <h3>위험 수치</h3>
          <div class="stat-row">${statRows(t.stats)}</div>
        </div>
        <div class="grid2">
          <div class="match"><small>잘 맞는 빌런</small><strong>${t.good}</strong><p class="result-one" style="text-align:left;font-size:14px;margin-top:8px">${t.goodText}</p></div>
          <div class="match"><small>상극 빌런</small><strong>${t.bad}</strong><p class="result-one" style="text-align:left;font-size:14px;margin-top:8px">${t.badText}</p></div>
        </div>
        ${capture ? "" : `
          <div class="action-row">
            <button class="primary" onclick="copyResult('${key}')">결과 문구 복사</button>
            <button class="secondary" onclick="renderHome()">다시 하기</button>
          </div>
        `}
      </div>
    </section>
  `;
}

function showResult(key) {
  const t = types[key];
  document.documentElement.style.setProperty("--accent", t.color);
  document.documentElement.style.setProperty("--accent-2", t.soft);
  shell(resultHTML(key));
}

async function copyResult(key) {
  const t = types[key];
  const text = `나는 ${t.name} ${t.emoji}\n“${t.quote}”\n${t.one}\n\n너도 해봐: 오피스 빌런 테스트`;
  try {
    await navigator.clipboard.writeText(text);
    showToast("복사 완료. 단톡방에 던져.");
  } catch (e) {
    showToast("복사가 막혔어. 화면 캡쳐 ㄱㄱ");
  }
}

function showToast(text) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

window.startTest = startTest;
window.answer = answer;
window.showResult = showResult;
window.renderHome = renderHome;
window.copyResult = copyResult;

resetScores();
renderHome();
