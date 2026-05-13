const types = {
  yepCollector: {
    name: "넵 수집가",
    color: "#748ffc",
    prop: "msg",
    label: "넵!",
    summary: "넵은 빠른데 마음의 승인은 한참 뒤에 도착하는 타입.",
    quote: "“넵 확인해보겠습니다!”",
    stats: {"눈치력": 92, "실행력": 74, "불만 은폐력": 88, "답장 속도": 96, "멘탈 방어력": 55},
    strengths: ["첫 반응이 빠름", "분위기를 험하게 만들지 않음", "일단 받아내는 힘이 있음"],
    weaknesses: ["거절이 늦음", "속으로 재판을 오래 함", "나중에 본인이 터짐"],
    hidden: ["넵 속도 99", "진심도 21", "조용한 한숨 87"],
    good: "프로세스 수호자",
    bad: "급발진 아이디어러"
  },
  afterMeetingSage: {
    name: "회의 후 현자",
    color: "#9775fa",
    prop: "doc",
    label: "",
    summary: "회의 때는 조용한데 끝나고 갑자기 정답지를 제출하는 타입.",
    quote: "“아까 말하려고 했는데…”",
    stats: {"분석력": 98, "회의 발언력": 28, "DM 전투력": 91, "타이밍 감각": 35, "정확도": 94},
    strengths: ["나중에 보면 거의 맞는 말", "맥락 파악이 좋음", "문제의 핵심을 잘 찾음"],
    weaknesses: ["회의 중에는 잘 안 나옴", "좋은 말이 늘 조금 늦음", "동기들이 답답해함"],
    hidden: ["사후 분석력 98", "회의 중 기척 19", "뒤늦은 깨달음 94"],
    good: "단톡 리액션 담당",
    bad: "질문 폭격기"
  },
  quietFixer: {
    name: "조용한 해결사",
    color: "#20c997",
    prop: "doc",
    label: "",
    summary: "존재감은 낮은데 없으면 일이 삐걱대는 타입.",
    quote: "“제가 한번 볼게요.”",
    stats: {"책임감": 96, "수습력": 94, "존재감": 44, "거절력": 22, "신뢰도": 97},
    strengths: ["조용히 문제를 해결함", "맡기면 안정적임", "작은 구멍을 잘 메움"],
    weaknesses: ["공을 잘 못 챙김", "혼자 떠안음", "괜찮다고 해서 진짜 괜찮은 게 아님"],
    hidden: ["부탁 거절 실패율 92", "조용히 빡침 88", "수습 본능 96"],
    good: "눈치 만렙러",
    bad: "혼자 다 하는 사람"
  },
  questionBomber: {
    name: "질문 폭격기",
    color: "#ff922b",
    prop: "idea",
    label: "",
    summary: "질문은 많은데 사실 팀을 살리고 있음. 짜증은 조금 남.",
    quote: "“근데 이거 기준이 뭐예요?”",
    stats: {"집요함": 95, "위험 감지": 92, "회의 연장력": 87, "정확도": 90, "분위기 온도": 47},
    strengths: ["애매한 걸 그냥 안 넘김", "사고를 미리 막음", "기준을 선명하게 만듦"],
    weaknesses: ["회의가 길어짐", "다들 피곤해질 수 있음", "본인도 피곤함"],
    hidden: ["왜요 빈도 91", "폭탄 발견율 94", "회의 +10분력 88"],
    good: "프로세스 수호자",
    bad: "회의 후 현자"
  },
  docManiac: {
    name: "자료 정리 광인",
    color: "#51cf66",
    prop: "doc",
    label: "",
    summary: "폴더 구조가 무너지면 인류애도 같이 무너지는 타입.",
    quote: "“이거 위치 어디예요?”",
    stats: {"정리력": 100, "디테일": 91, "인내심": 74, "혼돈 내성": 18, "문서 신뢰도": 97},
    strengths: ["자료가 안 사라짐", "문서가 예쁘고 찾기 쉬움", "팀의 기억장치 역할"],
    weaknesses: ["남의 파일명에 상처받음", "정리하다 하루가 감", "대충을 싫어함"],
    hidden: ["폴더 집착 99", "파일명 감별력 96", "바탕화면 청결도 94"],
    good: "업무 유목민",
    bad: "알림 무시 고수"
  },
  ideaSprinter: {
    name: "급발진 아이디어러",
    color: "#ff6b6b",
    prop: "idea",
    label: "",
    summary: "좋은 생각인데 지금 말하면 모두의 일이 늘어나는 타입.",
    quote: "“근데 이거 확장하면 재밌지 않아요?”",
    stats: {"아이디어": 100, "추진력": 86, "위험도": 89, "분위기": 92, "마무리력": 47},
    strengths: ["판을 재밌게 만듦", "새로운 가능성을 잘 봄", "분위기를 살림"],
    weaknesses: ["일이 늘어남", "수습은 남이 할 수도 있음", "타이밍이 위험함"],
    hidden: ["판 키우기 97", "갑자기 신남 95", "동료 심박수 상승 89"],
    good: "밸런스 코디네이터",
    bad: "프로세스 수호자"
  },
  moodReader: {
    name: "눈치 만렙러",
    color: "#22b8cf",
    prop: "clock",
    label: "",
    summary: "공기 온도 0.5도 변한 것도 감지하는 사무실 기상청.",
    quote: "“지금 이 얘기 더 하면 안 될 것 같아요.”",
    stats: {"눈치력": 100, "관찰력": 94, "중재력": 82, "직설력": 45, "생존력": 96},
    strengths: ["분위기를 빨리 읽음", "괜한 충돌을 막음", "사람 사이 흐름을 잘 봄"],
    weaknesses: ["너무 많이 신경 씀", "혼자 피곤함", "눈치를 보다가 말 못 함"],
    hidden: ["표정 해석력 98", "위험 감지 95", "혼자 긴장 87"],
    good: "조용한 해결사",
    bad: "침착한 불만러"
  },
  soloWorker: {
    name: "혼자 다 하는 사람",
    color: "#f06595",
    prop: "doc",
    label: "",
    summary: "협업을 믿고 싶지만 결국 자기 손을 가장 믿는 타입.",
    quote: "“그냥 제가 할게요.”",
    stats: {"실행력": 94, "책임감": 97, "위임력": 20, "피로도": 90, "완성도": 88},
    strengths: ["결과물을 만들어냄", "책임감이 강함", "급한 상황에 강함"],
    weaknesses: ["위임을 못 함", "혼자 지침", "팀원이 기여할 틈이 없음"],
    hidden: ["제가할게요 빈도 96", "위임 실패율 88", "혼자 빡침 91"],
    good: "단톡 리액션 담당",
    bad: "조용한 해결사"
  },
  unreadMaster: {
    name: "알림 무시 고수",
    color: "#868e96",
    prop: "msg",
    label: "...",
    summary: "읽은 건 맞는데 답장은 아직 내면에서 숙성 중인 타입.",
    quote: "“아 답장한 줄 알았어요.”",
    stats: {"숙성력": 97, "집중력": 72, "답장 속도": 25, "기억력": 80, "잠수력": 93},
    strengths: ["생각보다 다 보고 있음", "불필요한 반응을 줄임", "중요한 건 이상하게 기억함"],
    weaknesses: ["사람을 초조하게 함", "답장 타이밍을 놓침", "오해를 부름"],
    hidden: ["읽씹 의혹 94", "내적 답장 99", "알림 누적 88"],
    good: "넵 수집가",
    bad: "자료 정리 광인"
  },
  processGuard: {
    name: "프로세스 수호자",
    color: "#339af0",
    prop: "doc",
    label: "",
    summary: "양식은 자유를 억압하는 게 아니라 모두를 살리는 안전벨트라고 믿는 타입.",
    quote: "“이거 프로세스상 먼저 해야 해요.”",
    stats: {"원칙력": 97, "안정감": 93, "융통성": 42, "사고예방": 96, "문서력": 86},
    strengths: ["사고를 줄임", "기준을 지킴", "일이 다시 돌아오지 않게 함"],
    weaknesses: ["즉흥파와 부딪힘", "가끔 답답해 보임", "하지만 보통 맞는 말임"],
    hidden: ["양식 사랑 95", "규칙 감지 97", "즉흥파 경계 89"],
    good: "질문 폭격기",
    bad: "급발진 아이디어러"
  },
  reactionFairy: {
    name: "단톡 리액션 담당",
    color: "#fab005",
    prop: "msg",
    label: "ㅋㅋ",
    summary: "실무 기여도와 별개로 팀 사기 유지에 은근 필요한 타입.",
    quote: "“ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ”",
    stats: {"리액션": 100, "분위기": 94, "정보력": 72, "집중력": 54, "공감력": 88},
    strengths: ["분위기를 살림", "힘든 사람에게 반응이 빠름", "단톡을 죽지 않게 함"],
    weaknesses: ["가끔 본론보다 리액션이 먼저 감", "일 얘기 중에도 웃김", "진지함 유지가 어려움"],
    hidden: ["ㅋㅋ 밀도 99", "짤 저장량 94", "단톡 체류시간 92"],
    good: "회의 후 현자",
    bad: "침착한 불만러"
  },
  calmComplainant: {
    name: "침착한 불만러",
    color: "#4c6ef5",
    prop: "clock",
    label: "",
    summary: "차분하게 말하지만 내용은 거의 고소장인 타입.",
    quote: "“저는 괜찮은데, 구조적으로는…”",
    stats: {"논리력": 94, "불만 정제력": 98, "표정 관리": 90, "직격력": 82, "온도": 38},
    strengths: ["문제를 정확히 짚음", "감정 없이도 강함", "말이 정리되어 있음"],
    weaknesses: ["듣다 보면 무서움", "괜찮다는 말이 안 괜찮음", "팩트로 때림"],
    hidden: ["괜찮아요 불신도 96", "고소장 문장력 93", "차분한 분노 99"],
    good: "프로세스 수호자",
    bad: "눈치 만렙러"
  },
  workNomad: {
    name: "업무 유목민",
    color: "#12b886",
    prop: "idea",
    label: "",
    summary: "어느새 다른 일을 하고 있음. 근데 그것도 필요한 일이었음.",
    quote: "“잠깐 이것만 보고 있었는데…”",
    stats: {"이슈 발견": 93, "집중 이동": 96, "멀티태스킹": 84, "마무리": 58, "시야": 92},
    strengths: ["넓게 봄", "예상 밖 문제를 발견함", "여러 흐름을 연결함"],
    weaknesses: ["원래 하던 걸 잊음", "흐름이 자주 바뀜", "주변이 추적하기 힘듦"],
    hidden: ["새 탭 개수 97", "잠깐만요 빈도 92", "이슈 줍줍력 94"],
    good: "자료 정리 광인",
    bad: "알림 무시 고수"
  }
};

const questions = [
  {
    q: "애매한 요청이 왔다. 당신의 첫 반응은?",
    options: [
      ["일단 “넵 확인해보겠습니다”부터 보낸다", "yepCollector"],
      ["이 요청의 기준과 범위를 먼저 묻는다", "questionBomber"],
      ["조용히 정리해서 처리 가능한 형태로 바꾼다", "quietFixer"],
      ["답장 전에 잠깐 내면 회의를 연다", "unreadMaster"]
    ]
  },
  {
    q: "회의가 산으로 간다.",
    options: [
      ["끝나고 나서 핵심 정리를 보낸다", "afterMeetingSage"],
      ["액션 아이템을 정리하며 구조를 잡는다", "processGuard"],
      ["분위기가 위험한지 먼저 감지한다", "moodReader"],
      ["단톡에 조용히 실시간 중계한다", "reactionFairy"]
    ]
  },
  {
    q: "누가 ‘간단히만 보면 돼요’라고 했다.",
    options: [
      ["절대 간단하지 않다는 걸 직감한다", "calmComplainant"],
      ["진짜 간단히 보려다 문서 전체를 정리한다", "docManiac"],
      ["그냥 내가 빠르게 처리한다", "soloWorker"],
      ["보다가 관련 이슈를 세 개 더 발견한다", "workNomad"]
    ]
  },
  {
    q: "팀 단톡에서 내 역할은?",
    options: [
      ["빠른 넵과 확인 담당", "yepCollector"],
      ["ㅋㅋㅋㅋ와 짤 담당", "reactionFairy"],
      ["안 읽은 척하지만 다 알고 있는 사람", "unreadMaster"],
      ["뭔가 이상할 때 조용히 말리는 사람", "moodReader"]
    ]
  },
  {
    q: "새로운 일을 시작할 때 나는?",
    options: [
      ["프로세스와 양식부터 확인한다", "processGuard"],
      ["재밌게 확장할 아이디어부터 떠오른다", "ideaSprinter"],
      ["자료 위치와 기준부터 정리한다", "docManiac"],
      ["그냥 내가 붙잡고 끝까지 간다", "soloWorker"]
    ]
  },
  {
    q: "회의 끝나고 제일 많이 하는 생각은?",
    options: [
      ["아까 그 말 지금 하면 더 좋았을 텐데", "afterMeetingSage"],
      ["결국 누가 뭐 하는 거지?", "processGuard"],
      ["말은 안 했지만 문제는 저거다", "calmComplainant"],
      ["이거 단톡에 올리면 웃기겠다", "reactionFairy"]
    ]
  },
  {
    q: "내가 제일 못 참는 것은?",
    options: [
      ["기준 없는 요청", "questionBomber"],
      ["정리 안 된 자료", "docManiac"],
      ["말만 하고 안 굴러가는 일", "soloWorker"],
      ["갑자기 판이 커지는 일", "processGuard"]
    ]
  },
  {
    q: "나는 주로 어떤 빌런에 가까운가?",
    options: [
      ["말은 착한데 속으로 계산 중", "yepCollector"],
      ["조용한데 수습은 내가 함", "quietFixer"],
      ["생각보다 너무 많이 물어봄", "questionBomber"],
      ["다른 이슈 줍다가 본업을 잊음", "workNomad"]
    ]
  },
  {
    q: "메신저 알림이 쌓이면?",
    options: [
      ["바로바로 넵을 보낸다", "yepCollector"],
      ["읽고 마음속으로 답장한다", "unreadMaster"],
      ["중요도별로 정리한다", "docManiac"],
      ["동기 반응부터 본다", "reactionFairy"]
    ]
  },
  {
    q: "누군가 갑자기 좋은 아이디어를 냈다.",
    options: [
      ["재밌는데 지금 하면 위험하다고 본다", "processGuard"],
      ["오히려 더 키워보고 싶어진다", "ideaSprinter"],
      ["누가 할 건지부터 생각한다", "quietFixer"],
      ["분위기상 말려야 하는지 본다", "moodReader"]
    ]
  },
  {
    q: "내 업무 방식의 핵심은?",
    options: [
      ["정리", "docManiac"],
      ["수습", "quietFixer"],
      ["확장", "ideaSprinter"],
      ["관찰", "moodReader"]
    ]
  },
  {
    q: "내가 자주 듣는 말은?",
    options: [
      ["너 또 혼자 하고 있었어?", "soloWorker"],
      ["너 그걸 왜 이제 말해?", "afterMeetingSage"],
      ["너 질문 진짜 많다", "questionBomber"],
      ["너 답장 좀 해", "unreadMaster"]
    ]
  },
  {
    q: "마지막으로, 나의 회사생활 생존 방식은?",
    options: [
      ["웃으면서 버틴다", "reactionFairy"],
      ["차분하게 팩트로 정리한다", "calmComplainant"],
      ["여기저기 문제를 주워 해결한다", "workNomad"],
      ["넵으로 시간을 번다", "yepCollector"]
    ]
  }
];

let step = 0;
const scores = Object.fromEntries(Object.keys(types).map(k => [k, 0]));
const app = document.querySelector("#app");

function shell(content) {
  app.innerHTML = `
    <div class="shell">
      <div class="top">
        <div class="brand"><div class="logo"></div><span>사무실 빌런 도감</span></div>
        <div class="badge">동기 13인 전용</div>
      </div>
      ${content}
    </div>
  `;
}

function character(key) {
  const t = types[key];
  return `
    <div class="character-card" style="--type:${t.color}">
      <div class="character">
        <div class="shadow"></div>
        <div class="ear left"></div><div class="ear right"></div>
        <div class="head">
          <div class="face">
            <div class="eye left"></div><div class="eye right"></div>
            <div class="cheek left"></div><div class="cheek right"></div>
            <div class="mouth"></div>
          </div>
        </div>
        <div class="body"></div>
        <div class="arm left"></div><div class="arm right"></div>
        <div class="leg left"></div><div class="leg right"></div>
        <div class="prop ${t.prop}" data-label="${t.label || ""}"></div>
      </div>
    </div>
  `;
}

function home() {
  shell(`
    <section class="panel hero" style="--type:#ff5c8a">
      <div class="copy">
        <div class="eyebrow">💅 귀엽지만 말은 셉니다</div>
        <h1>우리 동기 중<br/>나는 어떤 빌런?</h1>
        <p class="lead">
          회사생활을 망치는 진짜 빌런은 아닙니다. 그냥 조금 귀엽고, 조금 이상하고,
          가끔 너무 정확해서 킹받는 13가지 업무 생존 캐릭터 테스트입니다.
        </p>
        <div class="cta">
          <button class="primary" onclick="start()">빌런력 측정하기</button>
          <button class="ghost" onclick="result('yepCollector')">결과 미리보기</button>
        </div>
      </div>
      <div class="preview" style="--type:#748ffc">
        <div class="stage">${character("yepCollector")}</div>
        <div class="preview-info">
          <strong>넵 수집가</strong>
          <span>넵은 빠른데 마음의 승인은 한참 뒤에 도착하는 타입.</span>
        </div>
      </div>
    </section>
  `);
}

function start() {
  step = 0;
  Object.keys(scores).forEach(k => scores[k] = 0);
  question();
}

function question() {
  const q = questions[step];
  const pct = (step / questions.length) * 100;
  shell(`
    <section class="test">
      <div class="progress"><div style="width:${pct}%"></div></div>
      <div class="panel question-card">
        <div class="meta">${step + 1} / ${questions.length}</div>
        <h2 class="question">${q.q}</h2>
        <div class="options">
          ${q.options.map(([text, type]) => `<button class="option" onclick="answer('${type}')">${text}</button>`).join("")}
        </div>
      </div>
    </section>
  `);
}

function answer(type) {
  scores[type] += 1;
  step += 1;
  if (step >= questions.length) {
    const winner = Object.entries(scores).sort((a,b) => b[1] - a[1])[0][0];
    result(winner);
  } else {
    question();
  }
}

function result(key) {
  const t = types[key];
  shell(`
    <section class="panel result" style="--type:${t.color}">
      <div class="left">
        <div class="result-stage">${character(key)}</div>
        <div class="chips">
          <span class="chip">#${t.name.replaceAll(" ", "")}</span>
          <span class="chip">#동기단톡공유각</span>
          <span class="chip">#개킹받는데맞음</span>
        </div>
      </div>
      <div class="right">
        <h1>${t.name}</h1>
        <p class="summary">${t.summary}</p>
        <div class="quote">${t.quote}</div>

        <div class="section">
          <h3>업무 빌런 능력치</h3>
          ${Object.entries(t.stats).map(([name, value]) => `
            <div class="stat">
              <div class="stat-head"><span>${name}</span><span>${value}</span></div>
              <div class="bar"><div class="fill" style="width:${value}%"></div></div>
            </div>
          `).join("")}
        </div>

        <div class="section grid">
          <div class="box">
            <h3>강점</h3>
            <ul>${t.strengths.map(x => `<li>${x}</li>`).join("")}</ul>
          </div>
          <div class="box">
            <h3>약점</h3>
            <ul>${t.weaknesses.map(x => `<li>${x}</li>`).join("")}</ul>
          </div>
        </div>

        <div class="section">
          <h3>Hidden Stats</h3>
          <div class="chips">${t.hidden.map(x => `<span class="chip">${x}</span>`).join("")}</div>
        </div>

        <div class="section grid">
          <div class="box"><h3>잘 맞는 타입</h3><strong>${t.good}</strong></div>
          <div class="box"><h3>안 맞는 타입</h3><strong>${t.bad}</strong></div>
        </div>

        <button class="restart" onclick="home()">다시 하기</button>
      </div>
    </section>
  `);
}

window.start = start;
window.answer = answer;
window.result = result;
window.home = home;

home();
