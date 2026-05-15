const app = document.querySelector('#app');

const axes = ['idea','impulse','late','avoid','reply','silent','detail','cautious','standard','organize','talk','process','lastminute','focus','pressure','experiment','tool','optimize','social','care','mood','food','face','blunt'];
const scores = Object.fromEntries(axes.map(k => [k, 0]));
let index = 0;

const types = {
  bomb: {
    name: '퇴근직전폭탄러', emoji: '💣', tone: '#bfe995', accent:'#79d47f',
    quote: '“급한 건 아닌데… 지금 말 안 하면 까먹을 것 같아서.”',
    profile: { idea:3, impulse:3, late:3, talk:1 },
    meter: '팀원 노트북 재오픈 확률', percent: 92,
    lines: ['퇴근 직전 ⭐ 뇌가 갑자기 켜짐', '아이디어는 진짜 괜찮음. 타이밍만 살짝 범죄임', '“이거 하나만 더 보면 좋을 듯”을 너무 해맑게 말함'],
    chat: ['“급한 건 아닌데 하나만 봐줄 수 있어?”', '“아 맞다, 이것도 가능할 듯…”', '“5분이면 될 것 같아”'],
    lunch: '점심 때는 메뉴 빨리 정하자고 하지만, 막상 정하면 “오 거기도 좋고…” 함 🍜',
    party: '회식 때 조용하다가 갑자기 아이디어 회의를 열 수 있음 🍻',
    good: '마감직전각성러', bad: '체크리스트수호자'
  },
  ghost: {
    name: '읽고답한줄요정', emoji: '👻', tone: '#b8ddff', accent:'#71b8ff',
    quote: '“헉 나 답장한 줄 알았어.”',
    profile: { avoid:3, reply:3, silent:2, cautious:1 },
    meter: '메시지 마음속 답장률', percent: 97,
    lines: ['읽음은 빠른데 답장은 다른 차원에 있음 💬', '악의는 없음. 머릿속에서는 이미 세 번 답함', '급해지면 갑자기 나타나서 모든 맥락을 알고 있음'],
    chat: ['“헉 지금 봤어요”', '“아 나 이거 보긴 봤는데…”', '“잠깐만 확인하고 말해줄게”'],
    lunch: '점심 메뉴 고를 때 “난 다 괜찮아” 하고 조용히 사라짐 🍙',
    party: '회식 2차 얘기 나오면 폰 보는 척하며 퇴로 계산함',
    good: '말랑조율러', bad: '회의증식마법사'
  },
  check: {
    name: '체크리스트수호자', emoji: '🧾', tone: '#fff0a8', accent:'#ffc45d',
    quote: '“잠깐만, 이거 하나만 확인하고.”',
    profile: { detail:3, cautious:3, standard:3, process:1 },
    meter: '최종파일 의심률', percent: 89,
    lines: ['최종_final_진짜최종 파일도 한 번 더 봄', '오탈자 발견하면 심장이 먼저 반응함', '덕분에 사고는 막는데, 가끔 퇴근도 같이 막음'],
    chat: ['“혹시 이 부분만 다시 확인 가능할까요?”', '“파일명 맞춰둘게요”', '“이거 최종 맞죠? 진짜 최종?”'],
    lunch: '메뉴 정할 때 리뷰, 거리, 웨이팅까지 머릿속으로 비교함 📍',
    party: '회식 예약 인원 수 틀리면 혼자 조용히 식은땀 남',
    good: '일단보내고수정러', bad: '퇴근직전폭탄러'
  },
  meeting: {
    name: '회의증식마법사', emoji: '🐙', tone: '#ffd4a8', accent:'#ff9a62',
    quote: '“그럼 이건 따로 한번 맞춰볼까요?”',
    profile: { organize:3, talk:3, process:3, social:1 },
    meter: '캘린더 번식력', percent: 84,
    lines: ['회의를 줄이기 위해 회의를 잡음 🗓️', '말은 정리되는데 일정표가 울고 있음', '본인은 혼란을 막는 중이라고 믿음'],
    chat: ['“15분만 싱크 맞추죠”', '“이건 논의가 필요할 듯”', '“제가 아젠다 정리해볼게요”'],
    lunch: '점심도 자연스럽게 후보 3개, 투표 1개, 결론 1개로 운영함',
    party: '회식 자리에서 다음 모임 날짜까지 잡을 수 있음',
    good: '읽고답한줄요정', bad: '새툴전도사'
  },
  deadline: {
    name: '마감직전각성러', emoji: '⭐', tone: '#ffc4d9', accent:'#ff7aa7',
    quote: '“와 지금 갑자기 잘 된다.”',
    profile: { lastminute:3, focus:3, pressure:3, late:1 },
    meter: '마감 앞두고 전투력 상승', percent: 95,
    lines: ['평소엔 조용한데 마감 직전 ⭐ 갑자기 손이 빨라짐', '위기 상황에서 이상하게 침착함', '대신 주변 사람들은 같이 심장이 빨라짐'],
    chat: ['“지금 하면 될 것 같아”', '“나 방금 감 잡았어”', '“오늘 안에는 가능할 듯”'],
    lunch: '점심 약속 잡아놓고 마감 때문에 12시 7분에 정신 차림',
    party: '회식 전에는 피곤하다더니 막상 가면 은근 오래 있음',
    good: '퇴근직전폭탄러', bad: '체크리스트수호자'
  },
  tool: {
    name: '새툴전도사', emoji: '🧪', tone: '#bdf3e6', accent:'#62d1b9',
    quote: '“님들 이거 써봄? 진짜 편한데?”',
    profile: { experiment:3, tool:3, optimize:3, idea:1 },
    meter: '새 서비스 가입 버튼 클릭률', percent: 91,
    lines: ['새로운 툴 보면 눈이 반짝임 ✨', '3일 뒤 본인도 안 쓸 때가 있음', '그래도 가끔 진짜 괜찮은 걸 물어옴'],
    chat: ['“이거 자동화 가능할 듯”', '“AI로 해보면 금방일 것 같은데”', '“노션 템플릿 하나 만들까?”'],
    lunch: '점심 맛집도 지도 저장, 리뷰 필터, 거리 계산까지 해봄',
    party: '회식 후 정산 자동화 링크를 들고 나타남',
    good: '회의증식마법사', bad: '체크리스트수호자'
  },
  lunch: {
    name: '말랑조율러', emoji: '🍜', tone: '#d5f5b8', accent:'#9ada71',
    quote: '“난 진짜 아무데나 괜찮아. 근데 너희는?”',
    profile: { social:3, care:3, mood:3, food:2 },
    meter: '분위기 온도 체크력', percent: 88,
    lines: ['동기들 표정이랑 말투를 은근 다 보고 있음', '갈등 나면 조용히 쿠션어를 깔아줌', '본인 의견은 자꾸 뒤로 밀려서 가끔 지침'],
    chat: ['“다들 괜찮으면 그걸로 하자”', '“혹시 부담되면 말해줘”', '“나는 맞춰도 돼!”'],
    lunch: '점심 메뉴 정할 때 모두의 취향과 컨디션을 계산함 🍜',
    party: '회식에서 빠지는 사람 안 불편하게 길을 만들어줌',
    good: '읽고답한줄요정', bad: '표정관리실패러'
  },
  poker: {
    name: '표정관리실패러', emoji: '🫥', tone: '#ddd2ff', accent:'#ac96ff',
    quote: '“아니 괜찮아.” 얼굴: 안 괜찮음.',
    profile: { face:3, blunt:2, silent:2, cautious:1 },
    meter: '얼굴로 먼저 말하는 비율', percent: 86,
    lines: ['말은 둥글게 하는데 표정이 먼저 출근함', '회의 중 동공지진으로 의견 제출함', '솔직해서 편한데, 가끔 너무 잘 보임'],
    chat: ['“음… 괜찮긴 한데”', '“아니야 괜찮아”', '“그건 조금 애매한 듯”'],
    lunch: '점심 메뉴 별로면 “난 괜찮아”라고 하지만 얼굴은 이미 리뷰 남김',
    party: '회식 2차 얘기 나오면 미소가 살짝 멈춤',
    good: '체크리스트수호자', bad: '말랑조율러'
  }
};

const questions = [
  {tag:'마감 직전 ⭐', title:'갑자기 더 좋은 생각이 났다.', mascot:'bomb', options:[
    ['“아 맞다, 이것도 가능할 듯…” 하고 단톡에 던짐 💬',{idea:2,impulse:2,late:2,talk:1}],
    ['내일 말하려고 메모만 함. 높은 확률로 까먹음 📝',{avoid:1,cautious:1,reply:1}],
    ['혼자 고치기 시작함. 그리고 퇴근이 사라짐 🫠',{detail:1,lastminute:2,focus:1}],
    ['그냥 참음. 근데 표정은 이미 말하고 있음',{face:2,silent:1,cautious:1}]
  ]},
  {tag:'동기방 💬', title:'누가 “이거 누가 볼 수 있어?”라고 올렸다.', mascot:'ghost', options:[
    ['일단 읽음. 마음으로는 응원함 👀',{avoid:2,reply:2,silent:1}],
    ['“제가 볼게요” 하고 말한 뒤 살짝 후회함',{care:2,social:1,pressure:1}],
    ['아무도 안 하길래 결국 내가 함',{focus:1,care:1,organize:1}],
    ['“혹시 급한 건가요?”로 상황부터 확인함',{cautious:2,process:1,detail:1}]
  ]},
  {tag:'점심 메뉴 🍜', title:'다들 “아무거나”라고 하는 시간.', mascot:'lunch', options:[
    ['“아무거나 좋아요”라고 함. 근데 진짜 아무거나는 아님',{mood:2,food:2,face:1}],
    ['저장해둔 맛집 리스트를 조용히 꺼냄 📍',{food:2,organize:1,care:1}],
    ['결정 안 나면 가까운 데 가자고 함',{process:1,organize:1,care:1}],
    ['“난 간단히 먹을게” 하고 혼자 사라질 준비함',{avoid:2,silent:1,reply:1}]
  ]},
  {tag:'회식 2차 🍻', title:'누가 “2차 갈 사람?”이라고 했다.', mascot:'poker', options:[
    ['“저 내일 아침에 일이 있어서…” 이미 가방 잡고 있음',{avoid:2,cautious:1,silent:1}],
    ['갑자기 텐션 올라와서 옆팀이랑 친해짐',{social:2,talk:2,mood:1}],
    ['조용히 있다가 술 들어가면 회사 얘기 진지해짐',{talk:2,process:1,blunt:1}],
    ['“근데 우리 프로세스는 진짜 바꿔야 함” 회의 시작함 🧾',{process:2,organize:2,talk:1}]
  ]},
  {tag:'회의실 🧊', title:'회의하다가 누가 갑자기 정색했다.', mascot:'meeting', options:[
    ['“아 근데 다들 맞는 말 하신 듯…” 하면서 수습함',{care:2,social:2,mood:1}],
    ['아무 말 안 하는데 얼굴이 이미 말하고 있음',{face:3,silent:1}],
    ['쟁점 정리하려다가 할 일이 하나 더 생김',{organize:2,process:2,care:1}],
    ['지금 말하면 길어질 것 같아서 일단 참음',{cautious:2,avoid:1,silent:1}]
  ]},
  {tag:'슬랙 답장 💬', title:'답장을 쓰려고 창을 열었다.', mascot:'ghost', options:[
    ['읽고 👀 머릿속으로만 “넵!” 함',{reply:3,avoid:1,silent:1}],
    ['너무 길어져서 지우고 다시 씀',{cautious:2,detail:1}],
    ['“넵 확인했습니다!”는 빠른데 실행은 아직임',{impulse:1,reply:1,late:1}],
    ['답장 대신 갑자기 전화함',{talk:2,impulse:1,social:1}]
  ]},
  {tag:'파일 공유 📎', title:'누가 “최종본 어디 있어?”라고 물었다.', mascot:'check', options:[
    ['파일명부터 정리해서 다시 올림',{detail:2,standard:2,organize:1}],
    ['“아 잠깐만요” 하고 폴더 탐험 시작',{avoid:1,reply:1,cautious:1}],
    ['바로 보냄. 그리고 3초 뒤 수정본 발견함',{impulse:2,late:1,detail:1}],
    ['내가 가진 게 진짜 최종인지 의심부터 함',{cautious:2,detail:2,standard:1}]
  ]},
  {tag:'새로운 툴 🧪', title:'누가 업무 자동화 링크를 보내줬다.', mascot:'tool', options:[
    ['바로 가입함. 비밀번호도 이미 만들었음',{tool:3,experiment:2,impulse:1}],
    ['좋아 보이는데 우리한테 맞는지 먼저 봄',{optimize:2,cautious:1,process:1}],
    ['“이거 쓰면 좋겠다” 하고 일단 저장만 함',{tool:1,avoid:1,reply:1}],
    ['또 툴 늘어나는 게 살짝 무서움',{cautious:2,standard:1,detail:1}]
  ]},
  {tag:'퇴근 10분 전 ⭐', title:'누가 “이거 하나만…”이라고 한다.', mascot:'bomb', options:[
    ['“급한 건 아니면 내일 봐도 될까요?”라고 정중히 방어함',{cautious:2,avoid:1,process:1}],
    ['“넵!” 하고 받았는데 마음속으로 비명 지름',{care:1,pressure:2,face:1}],
    ['보다가 갑자기 더 큰 문제를 발견함',{detail:2,idea:1,cautious:1}],
    ['“이거 지금 하면 더 빨리 끝날 듯” 하고 바로 달림',{lastminute:2,focus:2,impulse:1}]
  ]},
  {tag:'발표 직전 🎤', title:'자료에서 오타를 발견했다.', mascot:'check', options:[
    ['심장이 먼저 반응함. 바로 고침',{detail:3,focus:1,pressure:1}],
    ['말할까 말까 하다가 결국 말함',{cautious:2,care:1}],
    ['발표자가 안 흔들리게 조용히 DM 보냄 💬',{care:2,detail:1,social:1}],
    ['오타보다 전체 흐름이 더 신경 쓰임',{process:1,organize:1,idea:1}]
  ]},
  {tag:'아이디어 회의 💡', title:'누가 “자유롭게 말해보자”고 했다.', mascot:'bomb', options:[
    ['방금 생각난 걸 말하다가 세계관이 커짐',{idea:3,talk:2,impulse:1}],
    ['남들 말 듣다가 마지막에 한마디 함',{silent:1,cautious:1,blunt:1}],
    ['아이디어보다 실행 가능한지 먼저 봄',{process:2,optimize:1,cautious:1}],
    ['새 포맷이나 툴부터 떠올림',{experiment:2,tool:1,idea:1}]
  ]},
  {tag:'월요일 아침 ☕', title:'주말 사이 메시지가 쌓여 있다.', mascot:'ghost', options:[
    ['중요한 것부터 찾다가 답장을 놓침',{reply:2,avoid:1,cautious:1}],
    ['다 읽고 체크리스트로 바꿈',{organize:2,standard:1,detail:1}],
    ['일단 “확인했습니다”부터 보냄',{reply:1,impulse:1,process:1}],
    ['읽는 동안 표정이 점점 사라짐',{face:2,pressure:1,silent:1}]
  ]},
  {tag:'점심 예약 📍', title:'가게가 웨이팅 40분이라고 한다.', mascot:'lunch', options:[
    ['“다른 데 갈까?” 하고 바로 후보를 꺼냄',{care:2,food:2,organize:1}],
    ['기다려도 맛있으면 괜찮다고 생각함',{food:2,mood:1}],
    ['그냥 회사 근처 아무 데나 가고 싶어짐',{avoid:1,cautious:1}],
    ['기다리는 동안 메뉴판을 미리 분석함',{detail:1,food:1,optimize:1}]
  ]},
  {tag:'갑작스런 부탁 🫠', title:'동기가 “미안한데 이것 좀…”이라고 했다.', mascot:'lunch', options:[
    ['바빠도 일단 듣고 봄',{care:2,social:1,pressure:1}],
    ['지금 받으면 위험해서 범위부터 물어봄',{cautious:2,process:1}],
    ['받아놓고 혼자 끝까지 해버림',{focus:2,pressure:1,silent:1}],
    ['표정에서 이미 답이 나감',{face:2,blunt:1}]
  ]},
  {tag:'회의 초대 🗓️', title:'캘린더에 모르는 회의가 들어왔다.', mascot:'meeting', options:[
    ['아젠다가 없으면 살짝 불안함',{process:2,cautious:1,standard:1}],
    ['일단 들어가서 분위기 보고 말함',{social:1,cautious:1,mood:1}],
    ['이 회의가 꼭 필요한지 생각함',{optimize:2,process:1,blunt:1}],
    ['초대만 보고도 이미 피곤함',{avoid:2,face:1,silent:1}]
  ]},
  {tag:'초안 공유 📝', title:'팀원이 초안을 올렸다.', mascot:'check', options:[
    ['오탈자부터 보임. 진짜 보임',{detail:3,standard:1}],
    ['좋은 점 먼저 말하고 수정점 얘기함',{care:2,social:1}],
    ['큰 방향이 맞는지 먼저 봄',{process:2,organize:1,idea:1}],
    ['바로 수정해서 새 버전으로 올림',{impulse:1,focus:2,detail:1}]
  ]},
  {tag:'갑자기 급함 🚨', title:'방금까지 조용하던 일이 갑자기 오늘까지가 됐다.', mascot:'deadline', options:[
    ['이상하게 집중이 잘 됨',{lastminute:3,focus:2,pressure:1}],
    ['일단 범위 줄이는 방법부터 찾음',{optimize:2,process:1,cautious:1}],
    ['“왜 지금 말하지?”가 얼굴에 잠깐 뜸',{face:2,blunt:1}],
    ['새벽까지 갈까 봐 미리 마음의 준비함',{pressure:2,cautious:1,late:1}]
  ]},
  {tag:'정산 시간 💸', title:'회식비 정산 링크가 필요하다.', mascot:'tool', options:[
    ['정산 앱 링크를 이미 알고 있음',{tool:2,optimize:2,organize:1}],
    ['일단 누가 얼마 냈는지 표로 정리함',{detail:2,standard:1,organize:1}],
    ['“나중에 보내주세요” 하고 까먹을 뻔함',{reply:2,avoid:1}],
    ['금액 틀리면 말해야 하나 고민함',{cautious:2,care:1}]
  ]},
  {tag:'단체 사진 📸', title:'회식 끝나고 사진 찍자고 한다.', mascot:'poker', options:[
    ['웃고는 있는데 눈은 집에 가 있음',{face:3,avoid:1}],
    ['자리 배치 자연스럽게 정리함',{organize:2,social:1,care:1}],
    ['찍고 바로 공유 링크 만듦',{tool:1,optimize:1,impulse:1}],
    ['사진보다 누가 안 불편한지가 신경 쓰임',{care:2,mood:1}]
  ]},
  {tag:'기획 바뀜 🔁', title:'거의 다 했는데 방향이 바뀌었다.', mascot:'poker', options:[
    ['“네 알겠습니다”라고 함. 얼굴은 잠깐 멈춤',{face:3,pressure:1}],
    ['왜 바뀌었는지 이유부터 확인함',{process:2,cautious:1}],
    ['바뀐 김에 더 나은 안을 제안함',{idea:2,impulse:1,optimize:1}],
    ['일단 해야 할 것만 다시 쪼갬',{organize:2,focus:1,standard:1}]
  ]},
  {tag:'커피 타임 ☕', title:'동기가 “잠깐 나가자”고 했다.', mascot:'lunch', options:[
    ['무슨 일인지 표정부터 살핌',{mood:2,care:1,face:1}],
    ['나가자마자 회사 얘기 시작함',{talk:2,process:1}],
    ['커피 메뉴 고르는 데 더 오래 걸림',{food:1,mood:1,cautious:1}],
    ['잠깐이라더니 30분 상담소 됨',{care:2,social:2}]
  ]},
  {tag:'작업 몰입 🎧', title:'드디어 집중하려는 순간 알림이 왔다.', mascot:'deadline', options:[
    ['무시하려다 궁금해서 봄',{reply:1,impulse:1}],
    ['알림 끄고 몰입 모드 들어감',{focus:2,standard:1}],
    ['답장만 빨리 하고 다시 하려다 흐름 끊김',{reply:1,pressure:1}],
    ['알림 내용 보고 일이 하나 더 늘어남',{process:1,pressure:2}]
  ]},
  {tag:'자료 요청 📂', title:'누가 “전에 그 자료 있지?”라고 했다.', mascot:'check', options:[
    ['바로 찾음. 정리해둔 내가 조금 뿌듯함',{detail:2,standard:2}],
    ['있는 줄 알았는데 폴더명이 기억 안 남',{reply:1,avoid:1}],
    ['찾다가 관련 자료까지 같이 보냄',{care:1,organize:1,detail:1}],
    ['자료보다 왜 필요한지부터 물어봄',{process:2,cautious:1}]
  ]},
  {tag:'좋은 아이디어 💡', title:'씻다가 갑자기 일이 떠올랐다.', mascot:'bomb', options:[
    ['바로 나에게 메시지 보냄. 내일의 나를 믿지 않음',{idea:2,cautious:1}],
    ['동기방에 보내려다 참음. 아주 장함',{impulse:1,late:1,cautious:1}],
    ['그 자리에서 머릿속으로 다 완성함',{idea:2,focus:1}],
    ['아침 되면 무조건 까먹음',{avoid:1,reply:1}]
  ]},
  {tag:'새 프로젝트 🚀', title:'처음 시작하는 일이 생겼다.', mascot:'tool', options:[
    ['툴, 템플릿, 자동화부터 찾아봄',{tool:3,experiment:2,optimize:1}],
    ['일단 역할과 일정부터 나눔',{organize:3,process:1,standard:1}],
    ['작게라도 바로 만들어봄',{impulse:2,focus:1,experiment:1}],
    ['이 일이 왜 필요한지 맥락부터 봄',{process:2,cautious:1,idea:1}]
  ]},
  {tag:'괜찮냐는 질문 🫥', title:'동기가 “너 괜찮아?”라고 물었다.', mascot:'poker', options:[
    ['“응 괜찮아”라고 함. 안 괜찮음',{face:3,silent:1}],
    ['괜찮은 척하다가 결국 다 말함',{talk:2,care:1,mood:1}],
    ['상황만 짧게 설명하고 다시 일함',{focus:1,process:1,blunt:1}],
    ['말하면 길어질 것 같아서 웃음으로 넘김',{avoid:2,silent:1,mood:1}]
  ]},
  {tag:'퇴근길 지하철 🚇', title:'퇴근했는데 회사 생각이 난다.', mascot:'ghost', options:[
    ['내일 해야지 하고 메모함. 뿌듯함',{cautious:1,organize:1}],
    ['지금 말하면 민폐라서 참음',{care:2,late:1}],
    ['갑자기 해결법이 떠올라서 나한테 보냄',{idea:2,focus:1}],
    ['슬랙 열었다가 다시 닫음',{avoid:2,reply:1}]
  ]},
  {tag:'팀 분위기 🌥️', title:'오늘따라 다들 조용하다.', mascot:'lunch', options:[
    ['괜히 간식 얘기를 꺼냄',{mood:2,care:1,social:1}],
    ['조용한 게 좋아서 그대로 둠',{silent:2,avoid:1}],
    ['무슨 일 있었나 눈치 봄',{mood:2,face:1}],
    ['일단 회의록이나 정리함',{organize:1,process:1,standard:1}]
  ]},
  {tag:'마지막 검토 🧾', title:'보내기 버튼만 누르면 된다.', mascot:'check', options:[
    ['한 번만 더 본다. 근데 한 번이 아님',{detail:3,cautious:2}],
    ['일단 보냄. 수정은 인생의 일부임',{impulse:2,late:1}],
    ['보내기 전에 누가 봐줬으면 좋겠음',{care:1,cautious:1}],
    ['보내고 나서야 오타가 보일까 봐 무서움',{pressure:1,detail:2}]
  ]},
  {tag:'퇴근 버튼 🧳', title:'오늘 일은 끝난 것 같다.', mascot:'bomb', options:[
    ['끝난 줄 알았는데 머릿속에서 새 일이 켜짐',{idea:2,late:2}],
    ['내일 할 것만 짧게 적고 끔',{organize:1,cautious:1}],
    ['진짜 끝났는지 파일을 한 번 더 봄',{detail:2,standard:1}],
    ['메신저 알림 안 보이게 조용히 퇴장함',{avoid:2,reply:1}]
  ]}
];

function addScores(obj){ Object.entries(obj).forEach(([k,v]) => scores[k] = (scores[k] || 0) + v); }
function resetScores(){ Object.keys(scores).forEach(k => scores[k] = 0); }
function esc(s){ return String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function uid(){ return Math.random().toString(36).slice(2,8); }

function mascot(key='check', label='캐릭터'){
  const t = types[key] || types.check;
  const id = uid();
  const prop = getProp(key);
  const ears = key === 'check' || key === 'deadline' ? rabbitEars(id, t) : key === 'ghost' ? ghostTop(t) : roundEars(id, t);
  const mouth = key === 'poker' ? '<path d="M101 133 Q110 130 119 133" stroke="#17181d" stroke-width="5" stroke-linecap="round" fill="none"/>' : '<path d="M101 132 Q110 139 119 132" stroke="#17181d" stroke-width="5" stroke-linecap="round" fill="none"/>';
  return `<svg class="mascot mascot-${key}" viewBox="0 0 220 220" role="img" aria-label="${esc(label)}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g${id}" x1="42" y1="55" x2="180" y2="200" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff7d0"/><stop offset=".44" stop-color="${t.tone}"/><stop offset="1" stop-color="#fff8ec"/></linearGradient>
      <filter id="s${id}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="6" flood-color="#1f232b" flood-opacity=".16"/></filter>
    </defs>
    <ellipse cx="112" cy="202" rx="60" ry="10" fill="#24242a" opacity=".10"/>
    <g filter="url(#s${id})">
      ${ears}
      <g class="body">
        <path d="M54 103 C69 78 100 69 132 74 C171 80 195 110 193 150 C191 191 158 207 113 207 C70 207 42 184 43 147 C43 128 47 113 54 103Z" fill="url(#g${id})" stroke="#17181d" stroke-width="7" stroke-linejoin="round"/>
        <path d="M70 103 C90 82 138 79 166 98" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".28"/>
        <path d="M49 154 Q29 159 29 179" stroke="#17181d" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M170 157 Q185 165 183 185" stroke="#17181d" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M81 203 Q89 194 98 204" stroke="#17181d" stroke-width="5" stroke-linecap="round" fill="none" opacity=".55"/>
        <path d="M131 204 Q140 195 149 204" stroke="#17181d" stroke-width="5" stroke-linecap="round" fill="none" opacity=".55"/>
      </g>
      <circle cx="82" cy="118" r="13" fill="#17181d"/><circle class="eye-dot" cx="86" cy="114" r="4.8" fill="#fff"/>
      <circle cx="136" cy="118" r="13" fill="#17181d"/><circle class="eye-dot" cx="140" cy="114" r="4.8" fill="#fff"/>
      <path d="M72 96 L91 92" stroke="#17181d" stroke-width="5" stroke-linecap="round" opacity=".9"/>
      <path d="M128 92 L147 96" stroke="#17181d" stroke-width="5" stroke-linecap="round" opacity=".9"/>
      <ellipse cx="64" cy="139" rx="18" ry="11" fill="#f7a1aa" opacity=".72"/><path d="M55 134 l7 9 M64 132 l7 10" stroke="#17181d" stroke-width="3" stroke-linecap="round" opacity=".75"/>
      <ellipse cx="158" cy="139" rx="18" ry="11" fill="#f7a1aa" opacity=".72"/><path d="M149 134 l7 9 M158 132 l7 10" stroke="#17181d" stroke-width="3" stroke-linecap="round" opacity=".75"/>
      ${mouth}
      ${prop}
      <circle class="spark" cx="188" cy="63" r="4" fill="#fff4a8"/><path class="spark" d="M194 82 l6 6 6-6-6-6z" fill="#ffd36d" opacity=".8"/>
    </g>
  </svg>`;
}
function rabbitEars(id,t){ return `<g class="body"><path d="M72 77 C58 41 63 13 83 12 C101 11 108 46 96 82" fill="${t.tone}" stroke="#17181d" stroke-width="7"/><path d="M82 65 C75 42 78 27 86 25 C94 24 98 48 92 69" fill="#ffd49a" opacity=".72"/><path d="M153 80 C145 42 155 14 174 17 C193 20 194 56 173 88" fill="${t.tone}" stroke="#17181d" stroke-width="7"/><path d="M163 68 C160 45 166 29 174 30 C183 31 183 54 171 73" fill="#ffd49a" opacity=".72"/></g>`; }
function roundEars(id,t){ return `<g class="body"><path d="M64 91 C47 77 47 55 64 48 C82 41 96 57 92 80" fill="${t.tone}" stroke="#17181d" stroke-width="7"/><path d="M159 84 C160 61 177 49 193 60 C209 71 201 95 178 99" fill="${t.tone}" stroke="#17181d" stroke-width="7"/></g>`; }
function ghostTop(t){ return `<g class="body"><path d="M80 83 C79 59 100 44 121 51 C140 57 147 76 139 91" fill="${t.tone}" stroke="#17181d" stroke-width="7" stroke-linejoin="round"/></g>`; }
function getProp(key){
  if(key==='bomb') return `<g class="prop"><rect x="142" y="151" width="49" height="38" rx="8" fill="#fff1a5" stroke="#17181d" stroke-width="5"/><path d="M152 164 h25 M152 174 h18" stroke="#17181d" stroke-width="4" stroke-linecap="round"/><path d="M162 145 l9-12 5 13" fill="#ffcc5c" stroke="#17181d" stroke-width="4"/></g>`;
  if(key==='ghost') return `<g class="prop"><rect x="151" y="145" width="33" height="47" rx="8" fill="#fff" stroke="#17181d" stroke-width="5"/><circle cx="168" cy="184" r="3" fill="#17181d"/><circle cx="183" cy="139" r="6" fill="#ff7aa7"/></g>`;
  if(key==='check') return `<g class="prop"><rect x="147" y="135" width="55" height="57" rx="8" fill="#fff" stroke="#17181d" stroke-width="5"/><rect x="157" y="124" width="35" height="17" rx="6" fill="#ffc85e" stroke="#17181d" stroke-width="5"/><path d="M158 150 h10 v10 h-10z M158 169 h10 v10 h-10z" fill="#fff" stroke="#17181d" stroke-width="3"/><path d="M159 154 l4 4 9-11 M159 173 l4 4 9-11" stroke="#59bd84" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M181 155 h13 M181 174 h13" stroke="#17181d" stroke-width="4" stroke-linecap="round"/></g>`;
  if(key==='meeting') return `<g class="prop"><path d="M148 131 h45 a10 10 0 0 1 10 10 v22 a10 10 0 0 1-10 10 h-20 l-13 12 3-12 h-15 a10 10 0 0 1-10-10 v-22 a10 10 0 0 1 10-10z" fill="#fff" stroke="#17181d" stroke-width="5"/><path d="M154 145 h34 M154 157 h24" stroke="#17181d" stroke-width="4" stroke-linecap="round"/></g>`;
  if(key==='deadline') return `<g class="prop"><circle cx="174" cy="160" r="25" fill="#fff" stroke="#17181d" stroke-width="5"/><path d="M174 145 v16 l11 7" stroke="#17181d" stroke-width="4" stroke-linecap="round"/><path d="M161 128 l-8-10 M187 128 l8-10" stroke="#17181d" stroke-width="4" stroke-linecap="round"/></g>`;
  if(key==='tool') return `<g class="prop"><rect x="138" y="144" width="56" height="34" rx="7" fill="#dff7ff" stroke="#17181d" stroke-width="5"/><path d="M130 179 h74 l-9 13 h-55z" fill="#b9e3ff" stroke="#17181d" stroke-width="5"/><circle cx="166" cy="161" r="4" fill="#6eb5ff"/></g>`;
  if(key==='lunch') return `<g class="prop"><path d="M148 157 h50 q-4 31-25 31t-25-31z" fill="#fff" stroke="#17181d" stroke-width="5"/><path d="M153 157 q20-18 40 0" fill="#ffe0a7" stroke="#17181d" stroke-width="5"/><path d="M161 148 q7-9 14 0 M178 148 q7-9 14 0" stroke="#e48d5b" stroke-width="4" fill="none" stroke-linecap="round"/></g>`;
  return `<g class="prop"><path d="M150 145 q20-20 44 0 v30 q-22 15-44 0z" fill="#fff" stroke="#17181d" stroke-width="5"/><path d="M160 158 h24" stroke="#17181d" stroke-width="4" stroke-linecap="round"/></g>`;
}

function shell(content){ app.innerHTML = `<div class="phone"><header class="top"><div class="brand"><span class="brand-badge">😈</span><span>오피스 빌런 테스트</span></div><span class="tiny-note">오늘도 무사히</span></header>${content}</div><div class="toast" id="toast">복사됐어</div>`; }
function heroGroup(){ return `<div class="hero-group">
  <div class="hero-char">${mascot('bomb','퇴근직전폭탄러')}</div><div class="hero-char">${mascot('ghost','읽고답한줄요정')}</div><div class="hero-char">${mascot('check','체크리스트수호자')}</div><div class="hero-char">${mascot('lunch','말랑조율러')}</div><div class="hero-char">${mascot('deadline','마감직전각성러')}</div>
</div>`; }
function home(){ resetScores(); index = 0; shell(`<section class="card home-card"><span class="kicker">동기들 사이에서 나는?</span><h1 class="title">나의 오피스<br/>빌런 유형은?</h1><p class="subtitle">마감, 동기방, 점심, 회식까지. 평소엔 몰랐던 내 업무 습관을 살짝 찔러봐요.</p><div class="hero-scene"><div class="cloud c1"></div><div class="cloud c2"></div><div class="cloud c3"></div><span class="float-star s1">⭐</span><span class="float-star s2">💬</span><span class="float-star s3">🍜</span>${heroGroup()}</div><button class="start" onclick="startTest()">테스트 시작하기</button><div class="mini-row"><span class="mini-chip">마감 직전 ⭐</span><span class="mini-chip">동기방 💬</span><span class="mini-chip">점심 메뉴 🍜</span><span class="mini-chip">회식 2차 🍻</span></div></section>`); }
function startTest(){ resetScores(); index = 0; question(); }
function question(){ const q = questions[index]; const pct = ((index)/questions.length)*100; shell(`<div class="progress-wrap"><div class="progress-top"><span class="progress-count">${index+1} / ${questions.length}</span><span class="progress-tag">${q.tag}</span></div><div class="bar"><span style="width:${pct}%"></span></div></div><section class="card question-card"><div class="question-mascot">${mascot(q.mascot,q.tag)}</div><span class="question-tag">${q.tag}</span><h2 class="question-title">${esc(q.title)}</h2><div class="options">${q.options.map((o,i)=>`<button class="option" onclick="answer(${i})"><span class="option-letter">${String.fromCharCode(65+i)}</span><span class="option-text">${esc(o[0])}</span></button>`).join('')}</div></section>`); }
function answer(i){ addScores(questions[index].options[i][1]); index += 1; if(index >= questions.length) result(); else question(); }
function bestType(){ let best='bomb', bestScore=-Infinity; for(const [key,t] of Object.entries(types)){ let s = 0; for(const [axis,weight] of Object.entries(t.profile)) s += (scores[axis] || 0) * weight; if(s > bestScore){ bestScore = s; best = key; } } return best; }
function result(){ const key = bestType(); const t = types[key]; shell(`<section class="card result-card"><div>${mascot(key,t.name)}</div><span class="result-label">${t.emoji} 오늘의 유형</span><h1 class="result-name">${t.name}</h1><p class="result-quote">${esc(t.quote)}</p><div class="meter"><div class="meter-head"><span>${esc(t.meter)}</span><span>${t.percent}%</span></div><div class="meter-bar"><div class="meter-fill" style="width:${t.percent}%"></div></div></div><div class="section"><h3>이런 순간에 티남</h3><ul>${t.lines.map(x=>`<li>• ${esc(x)}</li>`).join('')}</ul></div><div class="section"><h3>자주 하는 말 💬</h3><ul>${t.chat.map(x=>`<li>“${esc(x.replace(/^“|”$/g,''))}”</li>`).join('')}</ul></div><div class="section"><h3>점심 & 회식 모드</h3><ul><li>• ${esc(t.lunch)}</li><li>• ${esc(t.party)}</li></ul></div><div class="pair"><div class="type-box"><small>잘 맞는 유형</small><strong>${esc(t.good)}</strong></div><div class="type-box"><small>상극 유형</small><strong>${esc(t.bad)}</strong></div></div><div class="result-actions"><button class="ghost-btn" onclick="home()">다시 하기</button><button class="solid-btn" onclick="copyResult()">결과 복사</button></div></section>`); }
function copyResult(){ const key = bestType(); const t = types[key]; const text = `내 오피스 빌런 유형은 ${t.emoji} ${t.name}\n${t.quote}\n${t.meter} ${t.percent}%`; navigator.clipboard?.writeText(text).then(()=>toast('복사됐어')).catch(()=>toast('복사 실패 ㅠㅠ')); }
function toast(msg){ const el = document.querySelector('#toast'); if(!el) return; el.textContent = msg; el.classList.add('show'); setTimeout(()=>el.classList.remove('show'), 1400); }
window.startTest = startTest; window.answer = answer; window.home = home; window.copyResult = copyResult; home();
