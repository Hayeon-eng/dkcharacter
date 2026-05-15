const axes = ["impulse","plan","loud","ghost","detail","rough","idea","stable","social","solo","food","party"];
const scores = Object.fromEntries(axes.map(a => [a, 0]));
let current = 0;

const types = {
  bomb: {
    name:"퇴근직전폭탄러", short:"폭탄러", icon:"💣", color:"#B8E986", pale:"#F0FFE2", prop1:"💣", prop2:"👜",
    quote:"아 맞다, 이것도 가능할 듯?",
    desc:"남들 퇴근 각 잡을 때 갑자기 뇌가 개밤티로 켜지는 타입. 아이디어는 꽤 괜찮은데 타이밍이 사회적 재난임.",
    tags:["#퇴근10분전", "#아이디어투척", "#야르이거맞냐"],
    why:["아이디어 점수가 높고 참는 힘이 낮음","좋은 생각이 나면 내일보다 지금이 편함","본인은 공유라고 생각하지만 동기들은 노트북을 다시 엶"],
    chat:["💬 ‘급한 건 아닌데’라고 시작하면 보통 급함","💬 오후 6:43에 ‘잠깐만’ 금지어 지정됨","💬 듣다 보면 맞말이라 더 킹받음"],
    lunch:["🍚 메뉴 고를 때도 갑자기 숨은 맛집 던짐","☕ 커피 사러 가는 길에 새 프로젝트 아이디어 냄"],
    party:["🍻 회식 2차 가는 길에 회사 개선안 발표함","🎤 분위기 뜨면 갑자기 옆팀이랑 친해짐"],
    good:"마감직전각성러", bad:"체크리스트수호자"
  },
  ghost: {
    name:"읽씹잠수요정", short:"잠수요정", icon:"👻", color:"#A9D7FF", pale:"#EAF6FF", prop1:"📱", prop2:"…",
    quote:"아 나 답한 줄 알았어.",
    desc:"읽음 표시는 남기고 존재감은 사라지는 타입. 악의는 없는데 동기들이 찾다가 인류애를 잃음.",
    tags:["#읽고내면화", "#답장상상완료", "#잠수야르"],
    why:["메신저보다 머릿속 회의가 빠름","답장 타이밍을 놓치면 그대로 증발함","급하면 귀신같이 나타나는 편"],
    chat:["💬 ‘헉 지금 봤어요’의 인간화","💬 단톡방에서는 조용한데 회의에서 갑자기 다 봤다고 함","💬 알림 128개부터는 그냥 자연재해"],
    lunch:["🍚 ‘아무거나 ㄱ’ 해놓고 조용히 후보 탈락시킴","🥤 커피 주문 받을 때만 반응 속도 빨라짐"],
    party:["🍻 2차 얘기 나오면 배터리 1% 표정","🫥 사진 찍을 때 묘하게 프레임 밖에 있음"],
    good:"말랑조율러", bad:"회의증식마법사"
  },
  checklist: {
    name:"체크리스트수호자", short:"체크수호자", icon:"🧾", color:"#FFE08A", pale:"#FFF7D9", prop1:"✅", prop2:"🔍",
    quote:"잠깐만, 이거 하나만 더 확인하고.",
    desc:"최종본을 믿지 않는 오피스 검수 요괴. 덕분에 사고는 막는데 사람도 같이 막음.",
    tags:["#진짜최종안믿음", "#1픽셀탐지", "#개밤티검수"],
    why:["디테일 축이 압도적으로 높음","파일명에 final 붙어도 의심함","불안해서 확인하는 게 아니라 보여서 확인함"],
    chat:["💬 ‘혹시 여기만 다시 볼 수 있을까요?’ = 17곳 있음","💬 오탈자 발견하면 눈빛 바뀜","💬 야르... 이거 그대로 나가면 우리 끝남"],
    lunch:["🍚 메뉴판도 리뷰 별점 낮은 순으로 봄","🥢 주문 누락을 제일 먼저 감지함"],
    party:["🍻 회식 예약 시간/인원/룸 여부 다 확인함","📸 단체사진에서 눈 감은 사람 찾아냄"],
    good:"일단보내고수정러", bad:"퇴근직전폭탄러"
  },
  send: {
    name:"일단보내고수정러", short:"수정러", icon:"🚀", color:"#FFB199", pale:"#FFF0EA", prop1:"🚀", prop2:"✏️",
    quote:"보냈는데 수정 가능하죠?",
    desc:"속도는 진짜 빠른데 주변에 백업 인력이 필요함. 보내고 나서 생각이 선명해지는 실전형 빌런.",
    tags:["#선발송후사고", "#빠르긴함", "#수정가능하죠"],
    why:["즉흥/실행 점수가 높고 과검수 점수가 낮음","완벽보다 일단 굴러가는 걸 선호함","본인은 빠르다고 생각함. 맞음. 문제는 빠르기만 할 때가 있음"],
    chat:["💬 ‘일단 공유드려요’ 뒤에 수정 댓글 8개","💬 첨부파일 빠뜨리고 3초 뒤 재전송","💬 개빠른데 개불안함"],
    lunch:["🍚 메뉴 정하기 전에 이미 주문 화면 들어감","🧃 ‘걍 여기 ㄱ?’ 하고 예약까지 함"],
    party:["🍻 회식 장소도 일단 잡고 봄","🎲 게임 룰 설명 전에 시작 버튼 누름"],
    good:"체크리스트수호자", bad:"읽씹잠수요정"
  },
  meeting: {
    name:"회의증식마법사", short:"회의마법사", icon:"🐙", color:"#FFC47A", pale:"#FFF1D9", prop1:"📅", prop2:"☕",
    quote:"그럼 이건 따로 싱크 한 번 할까요?",
    desc:"회의를 줄이기 위한 회의를 만드는 타입. 말은 정리되는데 캘린더가 조용히 울고 있음.",
    tags:["#싱크한번", "#캘린더폭식", "#회의야르"],
    why:["계획/커뮤니케이션 점수가 높음","정리가 안 된 상태를 견디기 힘듦","회의 끝나면 다음 회의가 자연 번식함"],
    chat:["💬 ‘15분만’ = 42분","💬 논의용/정리용/팔로업용 미팅을 구분함","💬 동기 점심시간을 은근히 위협함"],
    lunch:["🍚 점심도 후보 취합 후 투표 열고 싶어함","📍 네이버지도 공유가 빠름"],
    party:["🍻 회식 참석 여부 표 만들 가능성 있음","🧑‍💼 술자리에서도 안건 정리함"],
    good:"읽씹잠수요정", bad:"일단보내고수정러"
  },
  tool: {
    name:"새툴전도사", short:"툴전도사", icon:"🧪", color:"#BFF4EA", pale:"#E9FFFA", prop1:"🧪", prop2:"💻",
    quote:"님들 이거 써봄? 생산성 미침.",
    desc:"새로운 툴, AI, 자동화 보면 눈빛이 바뀜. 3일 뒤 본인도 안 쓸 때가 있지만 가끔 진짜 보물을 물어옴.",
    tags:["#이거써봄", "#생산성미침", "#야르자동화"],
    why:["아이디어/실험 점수가 높음","기존 방식에 금방 답답해함","새로운 버튼을 못 참고 누름"],
    chat:["💬 ‘이걸로 하면 5분 컷’이라고 함. 세팅은 2시간","💬 링크 공유 속도 ㄹㅈㄷ","💬 무료 플랜 한도 다 쓰고 조용해짐"],
    lunch:["🍚 맛집 앱/지도 리스트 새로 파옴","🥤 키오스크 신기능 발견하면 꼭 눌러봄"],
    party:["🍻 회식 정산 자동화 만들겠다고 함","📱 랜덤 게임 앱 깔자고 함"],
    good:"퇴근직전폭탄러", bad:"체크리스트수호자"
  },
  hamster: {
    name:"혼자다해버림햄스터", short:"햄스터", icon:"🐹", color:"#F7C7A3", pale:"#FFF0E4", prop1:"📦", prop2:"🐹",
    quote:"그냥 제가 해놨어요.",
    desc:"작고 귀여운데 갑자기 결과물을 물고 오는 타입. 능력은 있는데 과정 공유가 실종돼서 동기들이 고마우면서도 살짝 소외됨.",
    tags:["#혼자처리", "#답답하면직접", "#햄찌빌런"],
    why:["솔로/실행 점수가 높음","기다리느니 직접 하는 게 마음 편함","공유보다 완성을 먼저 해버림"],
    chat:["💬 조용하다가 ‘완료했습니다’ 한 줄 남김","💬 중간 과정 물어보면 이미 끝나 있음","💬 개고마운데 개무서움"],
    lunch:["🍚 모두 메뉴 고민할 때 이미 결제하고 옴","🥡 혼밥도 타격 없음"],
    party:["🍻 회식 예약도 말없이 해둘 수 있음","🧥 사라진 줄 알았는데 계산하고 옴"],
    good:"말랑조율러", bad:"회의증식마법사"
  },
  face: {
    name:"표정관리실패러", short:"표정러", icon:"🧊", color:"#CDBBFF", pale:"#F2EEFF", prop1:"😐", prop2:"🫠",
    quote:"아니 괜찮아요.  얼굴: 안 괜찮음.",
    desc:"말은 둥글게 하는데 얼굴이 네모난 타입. 사회생활은 하는데 광대와 눈썹이 퇴사서를 냄.",
    tags:["#얼굴이말함", "#안괜찮음", "#개티남"],
    why:["감정 반응은 빠른데 포장이 느림","불편함을 숨기려 하지만 얼굴이 먼저 제출함","동기들이 표정 보고 회의 분위기를 읽음"],
    chat:["💬 ‘넵 좋아요’ 뒤에 묘한 정적","💬 이모티콘은 웃는데 본인은 안 웃음","💬 야르 표정으로 이미 반대함"],
    lunch:["🍚 싫은 메뉴 나오면 0.5초 굳음","🥗 ‘괜찮아요’ 하고 젓가락 속도 느려짐"],
    party:["🍻 2차 얘기 나오면 얼굴에서 와이파이 끊김","📸 단체사진에서 영혼 반쯤 없음"],
    good:"읽씹잠수요정", bad:"퇴근직전폭탄러"
  },
  mood: {
    name:"말랑조율러", short:"조율러", icon:"🧸", color:"#FFC7E8", pale:"#FFF0F8", prop1:"🧸", prop2:"💬",
    quote:"얘들아 싸우지 말고 일단 밥부터 먹자.",
    desc:"동기들 사이 공기청정기 같은 타입. 근데 다들 기대다 보면 본인만 조용히 방전됨.",
    tags:["#분위기관리", "#말랑방패", "#동기보호자"],
    why:["관계/안정 점수가 높음","일보다 사람 기분을 먼저 감지함","갈등 상황에서 자동으로 쿠션어가 나옴"],
    chat:["💬 ‘둘 다 맞는 말인 것 같아’ 장인","💬 단톡방 싸해지면 이모지로 응급처치","💬 본인 멘탈은 셀프 방치"],
    lunch:["🍚 메뉴 갈리면 중간 지점 찾음","🥹 ‘난 진짜 아무거나 괜찮아’가 진짜일 때도 있음"],
    party:["🍻 술 못 마시는 사람 챙김","🚕 택시 타는 것까지 확인하고 집 감"],
    good:"혼자다해버림햄스터", bad:"회의증식마법사"
  },
  late: {
    name:"마감직전각성러", short:"각성러", icon:"🔥", color:"#FF9EB5", pale:"#FFF0F3", prop1:"🔥", prop2:"⏰",
    quote:"와 지금 개잘됨. 왜 이제 됨?",
    desc:"평소엔 저전력 모드인데 마감이 코앞에 오면 갑자기 인간 터보가 됨. 결과는 나오는데 주변 심장이 먼저 나감.",
    tags:["#마감버프", "#벼락치기장인", "#ㄹㅈㄷ각성"],
    why:["즉흥/압박 실행 점수가 높음","시간이 많으면 오히려 집중이 흐려짐","마감 알림이 도핑제 역할을 함"],
    chat:["💬 오후엔 조용하다가 밤에 파일 12개 보냄","💬 ‘이제 감 잡음’이 마감 40분 전","💬 동기들 심박수로 진행률 측정 가능"],
    lunch:["🍚 점심 직전까지 미루다가 5분 만에 결정","☕ 커피 들어가면 갑자기 살아남"],
    party:["🍻 회식 전까지 일 끝내겠다고 하고 진짜 끝냄","🕺 끝나면 텐션 과하게 올라옴"],
    good:"퇴근직전폭탄러", bad:"체크리스트수호자"
  }
};

const questions = [
  {scene:"💬 메신저", q:"동기 단톡방에 갑자기 새 얘기가 떴다. 너의 반응은?", options:[
    ["‘오 이거 개좋은데?’ 하고 바로 판 키움","지금 이 흐름 타야 함",{loud:2,idea:2,impulse:1}],
    ["읽고 머릿속으로 답장 완료","현실 답장은 아직",{ghost:3,solo:1}],
    ["‘잠깐 정리하면…’ 하고 구조 잡음","혼돈 못 참음",{plan:2,stable:1,loud:1}],
    ["이모지 하나로 생존 신고","말 많이 하면 일 생김",{ghost:1,social:1,stable:1}]
  ]},
  {scene:"🏢 업무", q:"퇴근 17분 전, 더 좋은 아이디어가 떠올랐다.", options:[
    ["지금 말 안 하면 까먹음. 바로 투척","미안한데 야르",{impulse:3,idea:2,loud:2}],
    ["메모장에 적어두고 내일 말하려다 까먹음","내일의 나 미안",{plan:1,ghost:2,stable:1}],
    ["혼자 초안까지 만들어놓고 갑자기 공유","말보다 결과",{solo:2,impulse:1,idea:1}],
    ["참는데 표정에서 다 티남","얼굴이 먼저 발언",{stable:1,social:1,detail:1}]
  ]},
  {scene:"🍚 점심", q:"점심 메뉴 정할 때 제일 너다운 건?", options:[
    ["‘아무거나 ㄱ’ 근데 진짜 아무거나는 싫음","국룰입니다",{ghost:1,food:2,social:1}],
    ["저장해둔 맛집 리스트 갑자기 오픈","나만 믿어",{idea:1,loud:1,food:3}],
    ["후보 4개 놓고 투표 열고 싶음","민주주의 점심",{plan:2,social:2,food:1}],
    ["그냥 제일 가까운 데 가자고 함","배고픔이 우선",{rough:2,stable:1,food:1}]
  ]},
  {scene:"📅 회의", q:"회의 중 ‘의견 있으세요?’가 나왔다.", options:[
    ["방금 생각난 걸 7분짜리 세계관으로 확장","말하다 보니 커짐",{loud:3,idea:2}],
    ["‘괜찮아요’ 해놓고 끝나고 DM 보냄","그땐 생각 안 났음",{ghost:2,detail:1,stable:1}],
    ["회의록 쓰다가 다음 액션까지 박아둠","일단 정리부터",{plan:3,detail:1}],
    ["아무 말 안 하다가 마지막에 핵심 문제 발견","늦게 보이지만 정확함",{detail:2,solo:1,stable:1}]
  ]},
  {scene:"🧾 검수", q:"최종본 확인할 때 너는?", options:[
    ["파일명에 final 붙어도 안 믿음","진짜최종_최종2",{detail:3,plan:2}],
    ["대충 문제 없어 보이면 바로 ㄱ","완벽은 다음 생에",{rough:3,impulse:1}],
    ["남들이 놓친 오탈자만 귀신같이 보임","눈이 피곤한 재능",{detail:3,solo:1}],
    ["일단 보내고 피드백 받으면서 고침","실전이 답",{rough:2,impulse:2,loud:1}]
  ]},
  {scene:"💬 메신저", q:"답장이 늦어진 진짜 이유는?", options:[
    ["읽고 답한 줄 알았다","머릿속 전송 완료",{ghost:3}],
    ["뭐라고 답할지 고민하다가 하루 지남","신중한 잠수",{ghost:2,detail:1,stable:1}],
    ["지금 답하면 일이 생길 것 같았다","생존 전략",{ghost:2,stable:2}],
    ["알림이 너무 많아서 사회가 무너졌다","개밤티 알림지옥",{rough:1,ghost:1,loud:1}]
  ]},
  {scene:"🍻 회식", q:"회식 자리에서 너의 기본 모드는?", options:[
    ["초반엔 조용한데 갑자기 텐션 올라감","예열형 광기",{party:2,loud:2,impulse:1}],
    ["2차 얘기 나오면 배터리 1%","집이 최고",{party:-1,ghost:2,stable:1}],
    ["술 들어가면 회사 개선안 발표","왜 여기서요",{loud:2,idea:2,party:2}],
    ["끝까지 사람들 택시 타는 것까지 챙김","동기 보호자",{social:3,stable:1,party:1}]
  ]},
  {scene:"🧪 새 툴", q:"누가 새 협업툴 링크를 보냈다.", options:[
    ["바로 가입하고 기능 다 눌러봄","버튼 못 참음",{idea:3,impulse:2}],
    ["‘이걸 왜 또…’ 하면서 기존 방식 지킴","변경 피로도 MAX",{stable:2,plan:1}],
    ["장단점 표 만들어서 비교함","툴도 검증 대상",{plan:2,detail:1}],
    ["일단 좋아 보인다고 단톡에 전파","생산성 미침",{loud:2,idea:2,social:1}]
  ]},
  {scene:"🔥 마감", q:"마감 1시간 전 너의 상태는?", options:[
    ["갑자기 생산성 400%","지금 개잘됨",{impulse:2,rough:1,idea:1}],
    ["이제야 큰 그림이 보임","늦었지만 선명함",{idea:2,impulse:1}],
    ["하나만 더 확인하다가 시간 녹음","검수 블랙홀",{detail:3,plan:1}],
    ["주변 사람 일정까지 조율 중","내 일도 바쁜데",{social:2,plan:1,stable:1}]
  ]},
  {scene:"☕ 커피", q:"동기들이 커피 사러 간다. 너는?", options:[
    ["‘나도!’ 하고 메뉴는 3분 뒤 보냄","메뉴판과 내적갈등",{ghost:1,food:1}],
    ["새 카페 추천하면서 루트까지 바꿈","갑분탐험",{idea:2,loud:1,food:2}],
    ["주문 취합해서 깔끔하게 정리","카페 PM",{plan:2,social:2,food:1}],
    ["자리 지킨다 하고 일하다가 늦게 후회","나도 갈걸",{solo:2,stable:1}]
  ]},
  {scene:"📎 자료", q:"자료 공유할 때 제일 가까운 모습은?", options:[
    ["정리 덜 됐지만 일단 공유","필요하면 보겠지",{rough:2,impulse:2}],
    ["폴더/파일명/버전까지 정리 후 공유","깔끔해야 마음 편함",{plan:2,detail:2}],
    ["혼자 만들어놓고 나중에 ‘여기 있어요’","언제 했냐",{solo:3,detail:1}],
    ["공유하면서 사용법까지 설명","친절한데 김",{loud:1,social:2,plan:1}]
  ]},
  {scene:"🫠 분위기", q:"회의실 공기가 갑자기 싸해졌다.", options:[
    ["바로 농담 하나 던져서 살림","사회적 CPR",{social:2,loud:1}],
    ["아무 말 안 하지만 얼굴이 다 말함","표정 제출",{ghost:1,detail:1}],
    ["양쪽 말 정리해서 중재함","말랑 방패",{social:3,stable:2}],
    ["싸한 이유를 분석하기 시작","상황도 디버깅",{plan:1,detail:2}]
  ]},
  {scene:"📱 단톡", q:"단톡방에서 가장 자주 하는 말은?", options:[
    ["‘야 이거 개좋은데?’","일단 신남",{loud:2,idea:2}],
    ["‘헉 지금 봄 ㅠ’","진짜일 수도",{ghost:3}],
    ["‘혹시 이 부분만 다시 확인 가능?’","이 부분만 아님",{detail:3}],
    ["‘일단 ㄱ?’","속도가 생명",{rough:2,impulse:2}]
  ]},
  {scene:"🧑‍💻 협업", q:"남이 답답하게 일하고 있으면?", options:[
    ["기다리다 결국 내가 함","손이 먼저 감",{solo:3,impulse:1}],
    ["어디서 막혔는지 물어보고 같이 정리","착한데 피곤함",{social:2,plan:2}],
    ["새 방식 제안함","이참에 바꾸자",{idea:2,loud:1}],
    ["속으로만 답답해하다 표정으로 들킴","안 괜찮음",{ghost:1,detail:1,stable:1}]
  ]},
  {scene:"🍚 밥친구", q:"동기랑 밥 먹을 때 네 포지션은?", options:[
    ["회사 썰 듣다가 리액션 장인 됨","밥보다 썰",{social:2,food:1}],
    ["먹으면서도 업무 얘기 꺼냄","죄송한데 생각남",{loud:1,idea:1,food:1}],
    ["메뉴 맛/가격/웨이팅 종합평가","리뷰어 빙의",{detail:2,food:2}],
    ["밥 먹는 시간엔 조용히 충전","말 걸면 방전",{ghost:1,solo:2,stable:1}]
  ]},
  {scene:"📌 계획", q:"새 프로젝트 시작하면 먼저 하는 건?", options:[
    ["일단 첫 버전 만들어봄","계획은 움직이며",{impulse:2,rough:1}],
    ["목표/일정/담당자부터 정리","안 그러면 불안",{plan:3,stable:1}],
    ["레퍼런스랑 새 아이디어 모음","머릿속 축제",{idea:3}],
    ["누가 뭘 어려워할지 먼저 봄","사람 먼저",{social:2,stable:1}]
  ]},
  {scene:"🤔 피드백", q:"피드백 받을 때 속마음은?", options:[
    ["오케이 바로 고칠게요","수정 버튼 ON",{impulse:1,rough:1,social:1}],
    ["왜 그런지 근거가 궁금함","납득 필요",{detail:1,plan:2}],
    ["겉으론 웃는데 얼굴은 굳음","티남",{ghost:1,stable:1}],
    ["이참에 방향 자체를 바꿔볼까?","스케일 커짐",{idea:2,loud:1}]
  ]},
  {scene:"🗂 파일", q:"네 바탕화면 상태는?", options:[
    ["정리됨. 당연함.","파일명도 인격",{detail:2,plan:2}],
    ["난장판인데 나는 어디 있는지 앎","나만의 우주",{rough:2,solo:1}],
    ["새 폴더(12) 있음","괜찮아 아직",{rough:1,ghost:1}],
    ["정리하려고 새 툴부터 찾음","본질 회피",{idea:2,plan:1}]
  ]},
  {scene:"🗣 발표", q:"갑자기 발표를 맡게 됐다.", options:[
    ["말하다 보면 어떻게든 됨","입이 먼저 출근",{loud:2,impulse:1}],
    ["스크립트 없으면 죽음","대본은 생명",{plan:2,detail:1}],
    ["자료는 내가 만들고 발표는 남이 했으면","무대 뒤 선호",{solo:2,ghost:1}],
    ["분위기 봐가며 부드럽게 말함","사회생활 장인",{social:2,stable:1}]
  ]},
  {scene:"🍻 회식2", q:"회식에서 ‘한마디씩 하자’가 나왔다.", options:[
    ["갑자기 진심 모드로 길어짐","TMI 오픈",{loud:2,party:2,social:1}],
    ["짧고 안전하게 끝냄","생존형 멘트",{stable:2,ghost:1}],
    ["웃기려고 했다가 스스로 민망","억텐 주의",{impulse:1,loud:1,party:1}],
    ["남들 멘트 듣고 감동 받음","말랑해짐",{social:2,party:1}]
  ]},
  {scene:"🧠 아이디어", q:"새 아이디어가 별로라는 말을 들으면?", options:[
    ["그럼 다른 버전 3개 더 냄","안 꺼짐",{idea:3,impulse:1}],
    ["왜 별론지 구조적으로 물어봄","납득 플리즈",{plan:2,detail:1}],
    ["괜찮다면서 하루종일 신경 씀","얼굴은 이미",{ghost:1,stable:1}],
    ["일단 작게 테스트해보자고 함","실험으로 증명",{idea:2,rough:1}]
  ]},
  {scene:"🚨 사고", q:"작은 업무 사고가 났다.", options:[
    ["바로 공유하고 수습 들어감","빠른 자수",{loud:1,impulse:1,social:1}],
    ["조용히 고쳐놓고 나중에 말함","흔적 지우기",{solo:2,ghost:1}],
    ["재발 방지 체크리스트 만듦","사고도 자산",{plan:2,detail:2}],
    ["일단 멘탈이 얼굴에 뜸","시스템 오류",{stable:1,ghost:1}]
  ]},
  {scene:"🧃 휴식", q:"쉬는 시간에 너는?", options:[
    ["동기랑 회사 썰 업데이트","정보 교류",{social:2,loud:1}],
    ["혼자 조용히 폰 봄","충전 중",{solo:2,ghost:1}],
    ["새로운 밈/릴스 공유","이건 봐야 됨",{idea:1,loud:1}],
    ["쉬면서도 할 일 정리","쉬는 게 아님",{plan:2,detail:1}]
  ]},
  {scene:"🙋 요청", q:"누가 ‘이거 오늘 가능?’이라고 물었다.", options:[
    ["가능하다고 하고 나중에 후회","입이 빠름",{impulse:2,social:1}],
    ["일정 보고 가능 범위 딱 자름","현실적",{plan:2,stable:1}],
    ["일단 혼자 처리해버림","말보다 손",{solo:2,impulse:1}],
    ["읽고 잠깐 사라짐","답장 준비중",{ghost:2,stable:1}]
  ]},
  {scene:"🔔 알림", q:"업무 알림이 계속 울릴 때?", options:[
    ["바로바로 반응하다가 하루 끝남","알림의 노예",{loud:1,social:1,impulse:1}],
    ["몰아서 봄. 그래서 늦음","배치 처리",{ghost:2,solo:1}],
    ["우선순위대로 정리함","알림도 정돈",{plan:2,detail:1}],
    ["중요한 것만 대충 감으로 찍음","생존 감각",{rough:2,stable:1}]
  ]},
  {scene:"🎨 취향", q:"결과물이 ‘뭔가 애매하다’고 느껴질 때?", options:[
    ["무드/톤이 안 맞는다고 말함","느낌 경찰",{detail:2,social:1}],
    ["숫자나 근거가 부족하다고 봄","감 말고 근거",{plan:2,detail:1}],
    ["일단 다른 시안 만들어봄","손이 빠름",{impulse:2,idea:1}],
    ["말하면 길어질 것 같아 일단 참음","표정만 제출",{ghost:1,stable:1}]
  ]},
  {scene:"🧑‍🤝‍🧑 동기", q:"동기들이 너를 찾는 순간은?", options:[
    ["분위기 수습 필요할 때","말랑 소방수",{social:3,stable:1}],
    ["빠르게 뭐라도 만들어야 할 때","돌격대장",{impulse:2,rough:1}],
    ["최종 확인이 필요할 때","인간 검수기",{detail:3}],
    ["새로운 방법이 필요할 때","도구상자",{idea:3}]
  ]},
  {scene:"📤 공유", q:"자료를 단톡에 올릴 때 멘트는?", options:[
    ["‘일단 초안입니다!’","방어막 설치",{rough:1,impulse:1}],
    ["‘확인 부탁드립니다. 특히 2p.’","포인트 지정",{plan:1,detail:2}],
    ["‘야르 이거 한번 봐봐’","친구톤",{loud:2,social:1}],
    ["멘트 없이 파일만 띡","쿨한 척",{solo:1,ghost:1}]
  ]},
  {scene:"🧘 안정", q:"업무 방식이 갑자기 바뀌었다.", options:[
    ["왜 바뀌는지 먼저 알아야 함","납득형",{plan:2,stable:2}],
    ["오히려 재밌음. 새 판 ㄱ","변화 환영",{idea:2,impulse:1}],
    ["겉으론 괜찮다는데 표정 굳음","개티남",{stable:1,ghost:1}],
    ["바뀐 김에 내가 다시 정리함","정리본 생산",{plan:2,solo:1}]
  ]},
  {scene:"🌙 야근각", q:"오늘 야근각이 보인다. 너는?", options:[
    ["갑자기 집중력 올라감","이제 시작",{impulse:2,rough:1}],
    ["필요한 것만 쳐내고 범위 조정","현실주의",{plan:2,stable:1}],
    ["동기들 상태부터 살핌","다 같이 살자",{social:2,stable:1}],
    ["말없이 처리하다가 사라짐","햄스터 모드",{solo:2,ghost:1}]
  ]},
  {scene:"📸 캡쳐각", q:"이 테스트 결과가 나오면 너는?", options:[
    ["바로 단톡에 올리고 ‘누구냐’ 함","저격 개시",{loud:2,social:2}],
    ["찔려서 조용히 저장만 함","나잖아",{ghost:2,stable:1}],
    ["동기들 유형 분류표 만들고 싶어짐","도감화",{plan:2,idea:1}],
    ["결과 문구 오탈자부터 봄","직업병",{detail:2}]
  ]}
];

function resetScores(){ axes.forEach(a => scores[a]=0); }
function addScores(obj){ Object.entries(obj).forEach(([k,v]) => scores[k]=(scores[k]||0)+v); }

function typeScore(t){
  const s=scores;
  const rules = {
    bomb: s.impulse*1.4+s.idea*1.35+s.loud*1.1-s.plan*.35,
    ghost: s.ghost*1.6+s.solo*.55+s.stable*.35-s.loud*.25,
    checklist: s.detail*1.55+s.plan*1.05-s.rough*.45,
    send: s.rough*1.35+s.impulse*1.15+s.loud*.45-s.detail*.35,
    meeting: s.plan*1.15+s.loud*.75+s.social*.8+s.stable*.4,
    tool: s.idea*1.45+s.impulse*.7+s.loud*.55-s.stable*.25,
    hamster: s.solo*1.45+s.impulse*.55+s.detail*.35-s.loud*.25,
    face: s.ghost*.7+s.detail*.5+s.stable*.8+s.social*.25,
    mood: s.social*1.55+s.stable*.75+s.food*.25-s.solo*.25,
    late: s.impulse*1.2+s.rough*.75+s.idea*.6+s.party*.25-s.plan*.25
  };
  return rules[t];
}
function getWinner(){ return Object.keys(types).sort((a,b)=>typeScore(b)-typeScore(a))[0]; }
function topAxes(){ return Object.entries(scores).sort((a,b)=>b[1]-a[1]).slice(0,4); }
const axisLabel={impulse:"즉흥력",plan:"정리병",loud:"단톡화력",ghost:"잠수력",detail:"검수본능",rough:"일단력",idea:"아이디어광",stable:"안정추구",social:"동기케어",solo:"혼자처리",food:"밥진심",party:"회식생존"};

const app=document.querySelector('#app');
function shell(content){app.innerHTML=`<div class="shell fade"><nav class="nav"><div class="brand"><div class="logo"></div><span>오피스 빌런 테스트</span></div><div class="tag">동기 단톡방 저격용 · 30문항</div></nav>${content}</div>`}
function character(tkey){const t=types[tkey];return `<div class="character" style="--c:${t.color};--d:${t.color}"><div class="ear l"></div><div class="ear r"></div><div class="body"></div><div class="arm l"></div><div class="arm r"></div><div class="leg l"></div><div class="leg r"></div><div class="head"><div class="eye l"></div><div class="eye r"></div><div class="cheek l"></div><div class="cheek r"></div><div class="mouth"></div></div><div class="badge-id"></div><div class="prop p1">${t.prop1}</div><div class="prop p2">${t.prop2}</div></div>`}
function home(){shell(`<section class="hero card"><div><div class="kicker">😈 개밤티 오피스 버전</div><h1>나는 어떤<br/>오피스 빌런?</h1><p>동기들이랑 메신저할 때, 밥 먹을 때, 회식할 때 나오는 진짜 습관으로 보는 업무 민폐력 테스트. 결과 나오면 캡쳐해서 단톡방에 던지기 딱 좋게 만들었음.</p><div class="btnrow"><button class="btn primary" onclick="start()">테스트 시작하기</button><button class="btn ghost" onclick="showResult('bomb')">결과 카드 미리보기</button></div><p class="notice">※ 진지한 인사평가 아님. 찔리면 보통 맞음.</p></div><div class="preview card"><div class="sticker s1">#OO빌런</div><div class="sticker s2">야르 이거 누구냐</div><div class="bubble"></div><div class="charwrap">${character('bomb')}</div><div class="sample-title"><b>퇴근직전폭탄러</b><span>“아 맞다, 이것도 가능할 듯?”</span></div></div></section>`)}
function start(){current=0;resetScores();renderQuestion();}
function renderQuestion(){const item=questions[current];const pct=(current/questions.length)*100;shell(`<section class="test card"><div class="progressTop"><div class="count">${current+1} / ${questions.length}</div><div class="bar"><div style="width:${pct}%"></div></div></div><div class="qcard"><div class="scene">${item.scene}</div><h2 class="question">${item.q}</h2><div class="options">${item.options.map((op,i)=>`<button class="option" onclick="answer(${i})"><span class="opIcon">${op[0].trim()[0]}</span><span class="opText">${op[0].replace(/^\S+\s?/, '')}<span class="opSub">${op[1]}</span></span></button>`).join('')}</div></div></section>`)}
function answer(i){addScores(questions[current].options[i][2]);current++; if(current>=questions.length) showResult(getWinner()); else renderQuestion();}
function villainPercent(tkey){const raw=Math.max(0,Math.round(typeScore(tkey)*4.2+42));return Math.min(99,raw)}
function showResult(tkey){const t=types[tkey];const vp=villainPercent(tkey);const axesTop=topAxes();shell(`<section class="result card" style="--main:${t.color};--pale:${t.pale}"><div class="resultHero"><div class="resultCharacter">${character(tkey)}</div><div class="resultMain"><div class="smallcaps">${t.icon} 당신의 오피스 빌런 유형</div><h1 class="resultTitle">${t.name}</h1><div class="quote">“${t.quote}”</div><p class="desc">${t.desc}</p><div class="chips">${t.tags.map(x=>`<span class="chip">${x}</span>`).join('')}</div></div></div><div class="resultBody"><div class="sectionGrid"><div class="box"><h3>📊 빌런 지표</h3><div class="meter"><div class="meterLine"><div class="meterHead"><span>빌런력</span><span>${vp}%</span></div><div class="meterBar"><div class="meterFill" style="width:${vp}%"></div></div></div><div class="meterLine"><div class="meterHead"><span>동기 피해 체감도</span><span>${Math.min(99,vp+7)}%</span></div><div class="meterBar"><div class="meterFill" style="width:${Math.min(99,vp+7)}%"></div></div></div><div class="meterLine"><div class="meterHead"><span>본인 자각률</span><span>${Math.max(8,100-vp)}%</span></div><div class="meterBar"><div class="meterFill" style="width:${Math.max(8,100-vp)}%"></div></div></div></div></div><div class="box"><h3>🧬 왜 이 유형이냐면</h3><div class="list">${t.why.map(x=>`<div class="li"><span>•</span><span>${x}</span></div>`).join('')}</div></div></div><div class="sectionGrid"><div class="box"><h3>💬 동기들이랑 메신저할 때</h3><div class="list">${t.chat.map(x=>`<div class="talk">${x}</div>`).join('')}</div></div><div class="box"><h3>🍚 밥/☕ 커피 먹을 때</h3><div class="list">${t.lunch.map(x=>`<div class="li"><span>${x.slice(0,2)}</span><span>${x.slice(2)}</span></div>`).join('')}</div></div></div><div class="sectionGrid"><div class="box"><h3>🍻 회식 출몰 패턴</h3><div class="list">${t.party.map(x=>`<div class="li"><span>${x.slice(0,2)}</span><span>${x.slice(2)}</span></div>`).join('')}</div></div><div class="box"><h3>🧃 네 안의 상위 성향</h3><div class="chips">${axesTop.map(([k,v])=>`<span class="chip">${axisLabel[k]} ${v}</span>`).join('')}</div><div class="pair" style="margin-top:12px"><div><b>잘 맞는 공범</b>${t.good}</div><div><b>상극 피해자</b>${t.bad}</div></div></div></div><div class="actions"><button class="btn primary" onclick="start()">다시 하기</button><button class="btn ghost" onclick="copyResult('${t.name}')">결과 문구 복사</button><button class="btn ghost" onclick="home()">처음으로</button></div><p class="notice">캡쳐해서 단톡방에 올린 뒤 “야르 이거 누구냐” 하면 완성.</p></div></section>`)}
function copyResult(name){const text=`나의 오피스 빌런 유형은 ${name} 😈\n야르 이거 나 맞냐`;navigator.clipboard?.writeText(text);alert('결과 문구 복사됨! 단톡방 ㄱ');}
window.start=start;window.answer=answer;window.showResult=showResult;window.home=home;window.copyResult=copyResult;
home();
