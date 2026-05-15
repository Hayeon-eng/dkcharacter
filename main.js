const AXES = ["idea","speed","quiet","detail","talk","care","avoid","solo","social","tool"];
const state = { index: 0, scores: Object.fromEntries(AXES.map(a => [a, 0])), answers: [] };

const types = {
  bomb: {
    title: "퇴근직전 폭탄햄 ⭐",
    hash: "#급한건아닌데빌런",
    accent: "#C9EC74",
    mascot: "ham",
    prop: "💣",
    quote: "“급한 건 아닌데… 하나만 더 가능?”",
    rule: s => s.idea*1.5 + s.talk + s.speed - s.detail*.3,
    meter: 92,
    lines: ["퇴근 10분 전부터 뇌가 갑자기 출근함", "아이디어는 좋은데 타이밍이 거의 재난문자", "본인은 ‘공유’라고 생각하고 동기들은 가방을 다시 내려놓음"],
    chats: ["💬 ‘지금 말 안 하면 까먹을 듯’", "💬 ‘이거 하나만 넣으면 ㄹㅈㄷ일 듯’", "💬 ‘내일 해도 되긴 하는데…’"],
    lunch: "🍚 메뉴 정할 땐 조용한데, 다 정해지면 ‘근데 저기도 괜찮지 않나?’ 함",
    party: "🍻 1차 끝날 때 갑자기 회사 개선안 발표함",
    good: "마감직전 각성토끼", bad: "체크체크 수호토끼"
  },
  ghost: {
    title: "읽씹잠수 유령 👻",
    hash: "#답한줄알았어빌런",
    accent: "#AEDDFF",
    mascot: "ghost",
    prop: "📱",
    quote: "“헉 지금 봤어요”",
    rule: s => s.quiet*1.8 + s.avoid + s.care*.4,
    meter: 84,
    lines: ["읽음 표시는 남기고 사람은 사라짐", "머릿속으로는 이미 답장 세 번 함", "급하면 귀신같이 나타나서 일은 또 함. 그래서 더 킹받음"],
    chats: ["💬 ‘아 나 답한 줄’", "💬 ‘알림에 묻혔어요ㅠ’", "💬 ‘이거 오늘까지였나요?’"],
    lunch: "🍚 ‘아무거나 좋아요’ 해놓고 진짜 아무거나 가면 조용해짐",
    party: "🍻 2차 얘기 나오면 갑자기 내일 아침 일정 생김",
    good: "말랑수습 곰", bad: "메신저폭주 다람쥐"
  },
  checklist: {
    title: "체크체크 수호토끼 🧾",
    hash: "#진짜최종안믿어빌런",
    accent: "#FFE083",
    mascot: "rabbit",
    prop: "✅",
    quote: "“잠깐만, 이것만 확인하고”",
    rule: s => s.detail*1.9 + s.care - s.speed*.2,
    meter: 88,
    lines: ["최종본을 믿지 않음. 진짜최종도 안 믿음", "오탈자를 보면 심장이 먼저 반응함", "덕분에 사고는 막는데 퇴근도 같이 막음"],
    chats: ["💬 ‘혹시 이 부분만 다시 볼 수 있을까요?’", "💬 ‘파일명이 좀 헷갈려서요’", "💬 ‘마지막으로 한 번만…’"],
    lunch: "🍚 메뉴판 리뷰 별점까지 보고 들어감",
    party: "🍻 정산할 때 제일 먼저 엑셀 켬",
    good: "일단보내 햄스터", bad: "퇴근직전 폭탄햄"
  },
  send: {
    title: "일단보내 햄스터 🚀",
    hash: "#수정가능하죠빌런",
    accent: "#FFBE98",
    mascot: "ham",
    prop: "🚀",
    quote: "“일단 보냈습니다!”",
    rule: s => s.speed*1.8 + s.idea*.6 - s.detail*.4,
    meter: 86,
    lines: ["보내고 나서 생각이 선명해짐", "실행력은 진짜 빠른데 주변 백업이 필수", "회수 가능한 일만 맡기면 팀 평화 유지 가능"],
    chats: ["💬 ‘앗 방금 보낸 건 무시해주세요’", "💬 ‘수정 가능하죠?’", "💬 ‘일단 초안입니다’"],
    lunch: "🍚 웨이팅 길면 바로 다른 집 감. 고민 오래 하는 거 못 참음",
    party: "🍻 회식 장소 예약도 빠른데 인원수 틀릴 수 있음",
    good: "체크체크 수호토끼", bad: "말없이완성 고양이"
  },
  meeting: {
    title: "회의증식 문어 🐙",
    hash: "#싱크한번할까요빌런",
    accent: "#D8C8FF",
    mascot: "ham",
    prop: "📅",
    quote: "“이건 15분만 따로 볼까요?”",
    rule: s => s.talk*1.7 + s.care + s.detail*.3,
    meter: 90,
    lines: ["회의를 줄이기 위해 회의를 잡음", "정리는 잘하는데 캘린더가 울고 있음", "15분 회의가 다음 회의 3개를 낳음"],
    chats: ["💬 ‘한 번만 싱크 맞추죠’", "💬 ‘제가 아젠다 잡아둘게요’", "💬 ‘이건 따로 논의가 필요할 듯’"],
    lunch: "🍚 점심 메뉴도 후보 3개 놓고 투표 열 가능성 있음",
    party: "🍻 회식 자리 배치까지 은근 조율함",
    good: "읽씹잠수 유령", bad: "일단보내 햄스터"
  },
  solo: {
    title: "말없이완성 고양이 🐱",
    hash: "#그냥제가했어요빌런",
    accent: "#BEE7C5",
    mascot: "ham",
    prop: "💻",
    quote: "“그냥 제가 해놨어요”",
    rule: s => s.solo*1.8 + s.quiet + s.detail*.5,
    meter: 82,
    lines: ["답답하면 조용히 직접 해버림", "결과물은 있는데 과정 공유가 실종됨", "동기들이 고마운데 살짝 소외감 느낌"],
    chats: ["💬 ‘아 그거 제가 처리했어요’", "💬 ‘말하려고 했는데 이미 끝나서…’", "💬 ‘괜찮아요 제가 할게요’"],
    lunch: "🍚 혼밥도 잘함. 근데 부르면 또 나옴",
    party: "🍻 구석에 있다가 정리할 때 제일 많이 도와줌",
    good: "말랑수습 곰", bad: "회의증식 문어"
  },
  tool: {
    title: "새툴전도 수달 🧪",
    hash: "#이거써봤어빌런",
    accent: "#B9F2E5",
    mascot: "ham",
    prop: "🧪",
    quote: "“님들 이 툴 미쳤는데요?”",
    rule: s => s.tool*2 + s.idea + s.speed*.3,
    meter: 87,
    lines: ["새 앱 보면 일단 가입부터 함", "팀 생산성 올린다고 링크 7개 던짐", "3일 뒤 본인도 안 쓸 때 있음. 근데 가끔 진짜 물어옴"],
    chats: ["💬 ‘이 AI 써봄?’", "💬 ‘노션 템플릿 하나 만들었는데’", "💬 ‘자동화하면 3분 컷임’"],
    lunch: "🍚 맛집도 지도앱 컬렉션으로 관리함",
    party: "🍻 술자리에서 갑자기 생산성 앱 추천함",
    good: "퇴근직전 폭탄햄", bad: "체크체크 수호토끼"
  },
  face: {
    title: "표정관리 실패쿼카 🫠",
    hash: "#괜찮아요얼굴은아님빌런",
    accent: "#FFC7DB",
    mascot: "ham",
    prop: "🫠",
    quote: "“아 괜찮아요”  얼굴: 안 괜찮음",
    rule: s => s.care*1.2 + s.avoid + s.quiet*.6,
    meter: 79,
    lines: ["말은 둥글게 하는데 표정은 네모남", "회의 중 동공지진으로 의견 제출함", "숨기려고 할수록 더 잘 보임"],
    chats: ["💬 ‘전 괜찮아요’", "💬 ‘아… 네…’", "💬 ‘좋습니다ㅎㅎ’"],
    lunch: "🍚 ‘아무거나’라더니 표정으로 메뉴 거절함",
    party: "🍻 2차 싫은 게 얼굴에 먼저 올라옴",
    good: "말랑수습 곰", bad: "퇴근직전 폭탄햄"
  },
  social: {
    title: "회식각성 강아지 🍻",
    hash: "#갑자기친해짐빌런",
    accent: "#FFD29B",
    mascot: "ham",
    prop: "🍻",
    quote: "“어? 우리 말 놓을까요?”",
    rule: s => s.social*2 + s.talk + s.care*.2,
    meter: 81,
    lines: ["업무 때보다 회식 때 업무 이해도가 올라감", "옆팀이랑 갑자기 친해져서 정보 물어옴", "다음날 살짝 후회하지만 또 함"],
    chats: ["💬 ‘오늘 끝나고 한 잔?’", "💬 ‘아 이건 오프더레코드인데’", "💬 ‘어제 개웃겼다 진짜’"],
    lunch: "🍚 점심 멤버 모으는 속도가 빠름",
    party: "🍻 1차 조용하다가 1시간 뒤 MC 됨",
    good: "읽씹잠수 유령", bad: "말없이완성 고양이"
  },
  calm: {
    title: "말랑수습 곰 🧸",
    hash: "#다들맞말이에요빌런",
    accent: "#F1D6B8",
    mascot: "ham",
    prop: "🧸",
    quote: "“아 근데 둘 다 맞는 말 같아요”",
    rule: s => s.care*1.6 + s.talk*.5 + s.avoid*.4,
    meter: 76,
    lines: ["분위기 이상해지면 자동으로 수습 모드 켜짐", "다들 편한데 본인은 집 가서 기절함", "착한데 가끔 너무 많이 안고 감"],
    chats: ["💬 ‘제가 중간안 정리해볼게요’", "💬 ‘다들 너무 고생했어요’", "💬 ‘이건 누구 잘못이라기보단…’"],
    lunch: "🍚 메뉴 취향 다 맞춰주다가 본인 먹고 싶은 건 못 먹음",
    party: "🍻 취한 동기 챙기다가 본인 귀가 늦어짐",
    good: "표정관리 실패쿼카", bad: "새툴전도 수달"
  }
};

const questions = [
  q("메신저에 ‘급한 건 아닌데’가 떴다. 너라면?", "💬 동기방 알림", [["‘지금 말 안 하면 까먹을 듯’ 하고 바로 보냄",{idea:2,talk:2}], ["읽고 나중에 답해야지… 하다가 잊음",{quiet:2,avoid:1}], ["일단 초안 만들어보고 말함",{solo:2,detail:1}], ["내일 오전에 정리해서 말함",{detail:2,care:1}]]),
  q("마감 직전 ⭐ 갑자기 더 좋은 생각이 났다.", "⏰ 17:52", [["‘이거 하나만 넣으면 진짜 괜찮을 듯’",{idea:2,talk:1}], ["일단 보냄. 수정은 그 다음의 나에게",{speed:2}], ["최종본 다시 열고 오탈자부터 봄",{detail:2}], ["말하면 다들 싫어할 것 같아서 메모만 함",{quiet:1,care:2}]]),
  q("점심 메뉴 정할 때 제일 나다운 건?", "🍚 점심시간", [["‘아무거나 ㄱ’ 근데 진짜 아무거나는 좀",{avoid:1,care:1}], ["저장해둔 맛집 지도 바로 꺼냄",{tool:1,social:2}], ["웨이팅 길면 바로 플랜B",{speed:2}], ["다들 먹고 싶은 거 맞춰줌",{care:2}]]),
  q("회의 중 누가 갑자기 정색했다.", "🗣️ 회의실", [["‘아 근데 그 말도 맞긴 함…’ 하고 수습",{care:2,talk:1}], ["조용히 물 마심. 존재감 삭제",{quiet:2,avoid:1}], ["‘근데 애초에 방향이…’ 하며 판 키움",{idea:2,talk:2}], ["회의록 정리하면서 다음 액션 적음",{detail:2,care:1}]]),
  q("동기방에 파일을 올려야 한다.", "📎 파일공유", [["일단 올리고 ‘수정 가능하죠?’",{speed:2}], ["파일명 세 번 확인하고 올림",{detail:2}], ["공유 전에 혼자 거의 완성해둠",{solo:2}], ["어떤 툴로 공유할지 새 방식 제안",{tool:2,idea:1}]]),
  q("회식 2차 얘기가 나왔다.", "🍻 회식각", [["‘앗 저 내일 아침 일정이…’",{avoid:2,quiet:1}], ["갑자기 텐션 올라가서 옆팀이랑 친해짐",{social:2,talk:1}], ["술 들어가면 회사 프로세스 얘기함",{idea:1,talk:2}], ["취한 사람 챙기다가 귀가 늦어짐",{care:2}]]),
  q("상사가 ‘간단하게만 정리해줘요’라고 했다.", "📄 간단히", [["진짜 간단하게 보내고 후수정",{speed:2}], ["간단한데 표가 3개 생김",{detail:2}], ["정리하다가 새 구조까지 제안",{idea:2}], ["혼자 조용히 밤에 완성",{solo:2,quiet:1}]]),
  q("슬랙 답장이 늦어진 진짜 이유는?", "💬 답장", [["읽고 답한 줄 알았음",{quiet:2}], ["뭐라 쓸지 고민하다가 시간이 감",{care:1,avoid:2}], ["답장보다 처리 먼저 하는 중",{solo:2}], ["알림이 너무 많아서 그냥 세상이 무너짐",{tool:1,avoid:1}]]),
  q("누가 ‘이거 누가 할까요?’라고 했다.", "🙋 업무분배", [["답답해서 ‘제가 할게요’",{solo:2,care:1}], ["역할표부터 만들고 싶어짐",{detail:1,talk:1}], ["일단 제일 빠른 방법 제안",{speed:2}], ["새 툴 쓰면 자동화 가능하다고 말함",{tool:2}]]),
  q("퇴근 준비 다 했는데 알림이 왔다.", "👜 퇴근각", [["읽음. 답은 내일의 내가",{quiet:2,avoid:1}], ["‘넵 확인했습니다!’ 바로 보냄",{speed:1,care:1}], ["갑자기 관련 아이디어까지 같이 보냄",{idea:2,talk:1}], ["혹시 빠진 거 없나 다시 봄",{detail:2}]]),
  q("팀원이 초안을 보여줬다.", "👀 초안검토", [["‘좋은데 이것만 살짝…’이 길어짐",{detail:2,talk:1}], ["‘일단 올려보고 반응 보죠’",{speed:2}], ["무드가 안 맞는 것 같아 조심히 말함",{care:2,detail:1}], ["혼자 개선안 샘플 만들어옴",{solo:2,idea:1}]]),
  q("점심 먹다가 회사 얘기가 나왔다.", "🍜 밥먹다", [["갑자기 개선안 발표 시작",{idea:2,talk:2}], ["웃으면서 듣다가 핵심 한마디만 함",{quiet:1,detail:1}], ["‘밥 먹을 땐 일 얘기 금지’",{avoid:2}], ["다들 말 편하게 하게 분위기 맞춤",{care:2,social:1}]]),
  q("새로운 협업툴 링크를 봤다.", "🧪 새툴발견", [["가입하고 10분 뒤 동기방에 공유",{tool:2,talk:1}], ["좋아 보여도 일단 기존 방식 유지",{detail:1,avoid:1}], ["이걸로 자동화하면 좋겠다고 상상",{tool:2,idea:1}], ["남들이 쓰면 그때 따라감",{care:1,avoid:1}]]),
  q("마감 1시간 전 ⭐ 너의 상태는?", "🔥 마감전", [["갑자기 집중력 터짐. 지금 개잘됨",{speed:2,idea:1}], ["체크리스트 보면서 손 떨림",{detail:2}], ["안 되는 부분 혼자 붙잡고 있음",{solo:2}], ["누가 말 걸까 봐 숨고 싶음",{quiet:2,avoid:1}]]),
  q("동기가 ‘나 이거 이상해?’라고 물었다.", "🥹 피드백", [["괜찮다고 했다가 결국 디테일 말함",{detail:1,care:2}], ["솔직히 말하는데 말이 좀 셈",{talk:2}], ["수정 예시를 직접 만들어줌",{solo:1,care:1}], ["‘난 괜찮은데?’ 하고 진짜 괜찮음",{speed:1}]]),
  q("단톡방에서 약속 시간을 정한다.", "📅 약속잡기", [["투표 만들고 장소까지 정리",{talk:1,detail:1,care:1}], ["읽고 마음속으로 참석함",{quiet:2}], ["가능한 시간 바로 던짐",{speed:2}], ["사람들 눈치 보다가 마지막에 답함",{care:1,avoid:1}]]),
  q("누가 갑자기 전화했다.", "📞 전화옴", [["받자마자 ‘무슨 일인데요?’",{speed:1,talk:1}], ["벨 울리는 동안 영혼 나감",{avoid:2,quiet:1}], ["전화 끝나고 정리 메시지 보냄",{detail:2,care:1}], ["전화보다 메신저가 좋은데 참음",{quiet:1,care:1}]]),
  q("회의가 끝났는데 할 일이 애매하다.", "🤔 회의후", [["‘그럼 액션아이템 정리해볼게요’",{detail:2,talk:1}], ["대충 감 잡고 바로 시작",{speed:2}], ["모호해서 조용히 불안해짐",{quiet:1,avoid:1}], ["일단 혼자 해석해서 만들어봄",{solo:2}]]),
  q("회식 자리에서 제일 무서운 순간은?", "🍺 술자리", [["‘우리끼리 솔직히 말하면…’ 시작",{talk:2,social:1}], ["건배사 시킬 것 같은 분위기",{avoid:2}], ["2차 장소 정하자는 말",{quiet:1,avoid:1}], ["정산이 안 맞는 순간",{detail:2}]]),
  q("월요일 아침, 업무방에 공지가 떴다.", "☕ 월요일", [["바로 확인하고 체크",{detail:2}], ["읽었는데 뇌가 아직 출근 안 함",{quiet:1,avoid:1}], ["바뀐 점 보고 더 좋은 방식 생각남",{idea:2}], ["관련 툴/템플릿부터 찾음",{tool:2}]]),
  q("누가 ‘이건 좀 에반데’라고 했다.", "😶 에반데", [["속으로 동의하지만 말은 둥글게",{care:2}], ["그 말이 맞는지 근거부터 봄",{detail:2}], ["‘그럼 이렇게 바꿔보죠’ 바로 제안",{speed:1,idea:1}], ["분위기 이상해서 조용히 사라짐",{quiet:2,avoid:1}]]),
  q("동기 생일 선물을 고른다.", "🎁 생일", [["실용템 후보 정리해서 투표",{detail:1,care:1}], ["귀여운 거 보면 바로 결제각",{speed:1,social:1}], ["받는 사람 취향 생각하다가 오래 걸림",{care:2}], ["공동구매 링크부터 찾음",{tool:1,talk:1}]]),
  q("업무방에 ‘확인 부탁드립니다’가 올라왔다.", "👀 확인부탁", [["바로 ‘확인했습니다’",{speed:2}], ["확인하다가 문제 3개 발견",{detail:2}], ["읽고 잠깐 사라짐",{quiet:2}], ["관련해서 새 아이디어까지 생각남",{idea:2}]]),
  q("다들 지쳐있는데 분위기가 너무 조용하다.", "🫠 오후 4시", [["괜히 간식 얘기 꺼냄",{care:2,social:1}], ["조용한 게 좋아서 그대로 있음",{quiet:2}], ["갑자기 ‘이거 빨리 끝내죠’ 모드",{speed:2}], ["지금 말하면 회의될까 봐 참음",{avoid:2}]]),
  q("너의 파일명 스타일은?", "🗂️ 파일명", [["final_final_real_last_v3",{detail:2}], ["대충 알아볼 수 있으면 됨",{speed:2}], ["폴더 구조부터 새로 만듦",{tool:1,detail:1}], ["로컬에만 있고 공유는 나중에",{solo:2,quiet:1}]]),
  q("동기가 갑자기 ‘오늘 커피?’라고 했다.", "☕ 커피챗", [["좋아. 근데 회사 얘기 80% 함",{talk:2,social:1}], ["가고 싶은데 답장 늦음",{quiet:2}], ["시간/장소 바로 정함",{speed:2}], ["상대 고민 들어주다가 상담소 됨",{care:2}]]),
  q("갑자기 업무 방향이 바뀌었다.", "🔄 방향변경", [["‘그럼 플랜 다시 짜죠’",{detail:1,talk:1}], ["새 방향이면 더 좋은 아이디어 있음",{idea:2}], ["일단 가능한 것부터 처리",{speed:2}], ["속으로 멘붕인데 겉으론 괜찮음",{care:1,avoid:1}]]),
  q("퇴근 후 동기방이 갑자기 활발하다.", "🌙 퇴근후", [["대화 보다가 답장 타이밍 놓침",{quiet:2}], ["밈 던지고 사라짐",{social:1,speed:1}], ["내일 할 얘기를 지금 꺼냄",{idea:2,talk:1}], ["읽긴 읽는데 알림 꺼둠",{avoid:2}]]),
  q("누가 ‘이거 누락된 것 같은데?’라고 했다.", "🚨 누락발견", [["심장 철렁하고 바로 확인",{detail:2}], ["‘제가 볼게요’ 하고 처리",{solo:2,care:1}], ["원인보다 복구부터",{speed:2}], ["조용히 표정으로 죄송함 표시",{quiet:1,care:1}]]),
  q("금요일 오후, 갑자기 회의 초대가 왔다.", "🥲 금요일", [["일단 들어가서 빨리 끝낼 생각",{speed:2}], ["왜인지 아젠다부터 확인",{detail:2}], ["‘이건 월요일에 해도 되지 않나…’",{avoid:2}], ["회의에서 더 큰 아이디어를 꺼낼지도",{idea:2,talk:1}]]),
];

function q(text, scene, options){ return { text, scene, options: options.map(([text, scores]) => ({ text, scores })) }; }
const app = document.getElementById("app");
function shell(content){ app.innerHTML = `<div class="phone"><div class="top"><div class="brand">오피스<b>빌런</b>테스트</div><div class="mini">동기방 캡쳐각</div></div>${content}</div><div class="toast" id="toast">저장 완료 ✨</div>`; }
function mascot(type="bomb", small=false){ const t = types[type] || types.bomb; const cls = t.mascot === "ghost" ? "ghost" : t.mascot === "rabbit" ? "rabbit" : ""; return `<div class="mascot ${cls} ${small?'small':''}" style="--accent:${t.accent}"><div class="ear l"></div><div class="ear r"></div><div class="body"><div class="face"><i class="eye l"></i><i class="eye r"></i><i class="cheek l"></i><i class="cheek r"></i><i class="mouth"></i></div></div><div class="arm l"></div><div class="arm r"></div><div class="leg l"></div><div class="leg r"></div><div class="prop">${t.prop}</div><div class="bubble">야르</div></div>`; }
function home(){ shell(`<section class="card home"><div class="eyebrow">⭐ 회사 동기 전용</div><h1>나는 어떤<br/>오피스 빌런일까?</h1><p class="lead">메신저, 점심, 회식, 마감 직전까지.<br/>동기들이 보면 바로 “야 이거 너잖아” 하는 테스트.</p><div class="heroBox">${mascot('bomb')}</div><button class="primary" onclick="start()">테스트 시작하기</button><button class="ghostBtn" onclick="preview()">결과 느낌만 보기</button><p class="note">30문항 · 약 3분 · 상처는 조금 받을 수 있음</p></section>`); }
function start(){ state.index=0; state.answers=[]; AXES.forEach(a=>state.scores[a]=0); renderQ(); }
function renderQ(){ const item = questions[state.index]; const pct = Math.round((state.index/questions.length)*100); shell(`<div class="progressWrap"><div class="qTop"><span class="qCount">${state.index+1} / ${questions.length}</span><span class="qTag">${pct}% 진행중</span></div><div class="bar"><span style="width:${pct}%"></span></div></div><section class="card questionCard"><div>${mascot(pickMini(), true)}</div><div class="scene">${item.scene}</div><h2 class="question">${item.text.replace(/⭐/g,'<span class="star">⭐</span>')}</h2><div class="options">${item.options.map((o,i)=>`<button class="option" onclick="answer(${i})"><span class="badge">${['A','B','C','D'][i]}</span><span class="optText">${formatOption(o.text)}</span></button>`).join('')}</div><button class="back" onclick="goBack()">이전으로</button></section>`); }
function formatOption(txt){ const parts = txt.split(/(?=\(|💬|🍚|🍻)/); if(parts.length>1) return `${parts[0]}<small>${parts.slice(1).join(' ')}</small>`; return txt; }
function answer(i){ const opt = questions[state.index].options[i]; state.answers.push(i); Object.entries(opt.scores).forEach(([k,v])=>state.scores[k]+=v); state.index++; if(state.index>=questions.length) result(); else renderQ(); }
function goBack(){ if(state.index===0){ home(); return; } const prevIndex = state.index-1; const ans = state.answers.pop(); const opt = questions[prevIndex].options[ans]; Object.entries(opt.scores).forEach(([k,v])=>state.scores[k]-=v); state.index=prevIndex; renderQ(); }
function pickMini(){ const arr = ['bomb','ghost','checklist','tool','face']; return arr[state.index % arr.length]; }
function getType(){ const entries = Object.entries(types).map(([k,t])=>[k,t.rule(state.scores)]).sort((a,b)=>b[1]-a[1]); return entries[0][0]; }
function result(forced){ const key = forced || getType(); const t = types[key]; shell(`<section class="resultPage"><div id="capture" class="capture" style="--accent:${t.accent}"><div class="resultHero"><span class="label">${t.hash}</span>${mascot(key)}<h1 class="resultTitle">${t.title}</h1><div class="quote">${t.quote}</div></div><div class="scoreBox"><div class="scoreLine"><span>동기 피해 체감도</span><b>${t.meter}%</b></div><div class="meter"><i style="width:${t.meter}%"></i></div></div><div class="section"><h3>⭐ 주요 범행 패턴</h3><div class="list">${t.lines.map(x=>`<div>• ${x}</div>`).join('')}</div></div><div class="section"><h3>💬 동기방 출몰 멘트</h3>${t.chats.map(x=>`<div class="chat">${x}</div>`).join('')}</div><div class="section"><h3>🍚 밥먹을 때</h3><div class="list"><div>${t.lunch}</div></div></div><div class="section"><h3>🍻 회식할 때</h3><div class="list"><div>${t.party}</div></div></div><div class="pair"><div class="section"><h3>🤝 잘 맞는 공범</h3><div class="typeName">${t.good}</div></div><div class="section"><h3>💀 상극 피해자</h3><div class="typeName">${t.bad}</div></div></div></div><div class="actions"><button class="save" onclick="saveCard()">결과 카드 저장하기</button><button class="restart" onclick="home()">다시 하기</button></div></section>`); }
function preview(){ result('bomb'); }
async function saveCard(){ const target = document.getElementById('capture'); if(!window.html2canvas){ alert('캡쳐 라이브러리를 불러오는 중이에요. 잠시 후 다시 눌러주세요.'); return; } const canvas = await html2canvas(target,{backgroundColor:null,scale:2}); const a = document.createElement('a'); a.download='office-villain-result.png'; a.href=canvas.toDataURL('image/png'); a.click(); const toast=document.getElementById('toast'); if(toast){toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),1500);} }
window.start=start; window.answer=answer; window.goBack=goBack; window.home=home; window.preview=preview; window.saveCard=saveCard; home();
