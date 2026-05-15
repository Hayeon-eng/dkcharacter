const axes = ["impulse","planning","talk","silent","detail","launch","idea","stable","social","solo"];
const axisNames = {
  impulse:"즉흥", planning:"계획", talk:"말 많음", silent:"잠수", detail:"검수", launch:"일단함", idea:"아이디어", stable:"안정", social:"사회성", solo:"혼자함"
};
const state = { index:0, scores:Object.fromEntries(axes.map(a=>[a,0])), answers:[] };

const villains = {
  bomb:{
    name:"퇴근직전폭탄러", hash:"#급한건아닌데빌런", color:"#B8E986", mascot:"hamster", prop:"note bomb", quote:"급한 건 아닌데… 이거 하나만 더 가능할 듯?", desc:"남들 가방 드는 순간 뇌가 켜짐. 아이디어는 좋은데 타이밍이 범죄에 가까움.",
    traits:["퇴근 10분 전에 갑자기 말문이 트임","본인은 ‘도움’이라고 생각함","동기들은 조용히 노트북을 다시 엶","근데 또 들어보면 맞말이라 더 킹받음"],
    chats:["💬 급한 건 아닌데", "💬 지금 말 안 하면 까먹을 듯", "💬 5분이면 될 것 같아요"],
    lunch:["밥 먹다가도 ‘아 맞다’ 하고 업무 얘기 꺼냄","메뉴보다 갑자기 떠오른 수정안이 더 중요함"],
    dinner:["1차는 얌전한데 술 들어가면 회사 개선안 발표함","2차 가면 프로젝트 시즌2 열림"],
    good:"마감직전각성러", bad:"체크리스트수호자", formula:{impulse:2,talk:2,idea:2,launch:1}
  },
  ghost:{
    name:"읽씹잠수요정", hash:"#헉지금봤어요빌런", color:"#A9D7FF", mascot:"ghosty", prop:"phone", quote:"아 나 답한 줄 알았어.", desc:"읽음은 남기고 존재감은 지움. 악의는 없는데 주변 사람이 사람 찾기 게임을 하게 됨.",
    traits:["머릿속으로는 이미 답장 세 번 함","급하면 갑자기 나타남","단톡방에서는 조용한데 회의 때 ‘그거 봤는데’ 함","알림에 묻혔다는 말이 거의 자동완성"],
    chats:["💬 헉 지금 봤어요", "💬 알림에 묻혔어요 ㅠ", "💬 아 그거 진행되고 있었어요?"],
    lunch:["점심 메뉴 투표는 안 했는데 막상 따라감","‘아무거나’라고 하고 진짜 아무거나 먹음"],
    dinner:["2차 얘기 나오면 조용히 사라짐","다음날 ‘어제 재밌었어요?’라고 물어봄"],
    good:"혼자다해버림햄스터", bad:"회의증식문어", formula:{silent:2,stable:1,solo:1,planning:1}
  },
  checklist:{
    name:"체크리스트수호자", hash:"#진짜최종의심빌런", color:"#FFE18D", mascot:"rabbit angry", prop:"clip", quote:"잠깐만, 이거 하나만 더 확인하고.", desc:"오탈자와 어긋난 정렬을 보면 심장이 반응함. 사고는 막는데 사람도 같이 멈춤.",
    traits:["최종본을 믿지 않음","파일명에 ‘진짜최종’ 붙으면 더 의심함","덕분에 큰일은 안 나는데 마감이 울음","본인 눈에는 1px도 보임"],
    chats:["💬 혹시 이 부분만 다시 볼 수 있을까요?", "💬 오탈자 하나 있어요", "💬 진짜 마지막 확인입니다"],
    lunch:["식당 리뷰 별점 낮으면 못 감","메뉴판 오타도 발견함"],
    dinner:["예약 시간, 인원, 장소 다 다시 확인함","덕분에 회식은 안 망함. 대신 본인이 지침"],
    good:"일단보내고수정러", bad:"퇴근직전폭탄러", formula:{detail:2,planning:2,stable:1}
  },
  send:{
    name:"일단보내고수정러", hash:"#보냈는데수정가능하죠빌런", color:"#FFC3A0", mascot:"hamster", prop:"laptop", quote:"일단 올려봤습니다. 수정 가능하죠?", desc:"실행력은 빠른데 주변 백업이 필요함. 보내고 나서야 생각이 선명해지는 타입.",
    traits:["초안 공유가 빠름. 너무 빠름","수정 요청에도 멘탈이 좋음","완성도보다 흐름을 먼저 만듦","가끔 덕분에 일이 굴러가긴 함"],
    chats:["💬 일단 공유드립니다", "💬 보시고 편하게 의견 주세요", "💬 아 그 부분 바로 수정할게요"],
    lunch:["메뉴 정하기 전에 이미 주문 버튼 누름","실패해도 ‘다음에 안 먹으면 됨’"],
    dinner:["회식 장소도 빠르게 예약함","근데 날짜를 한 번 더 봐야 함"],
    good:"체크리스트수호자", bad:"메모장전략가", formula:{launch:2,impulse:2,talk:1,detail:-1}
  },
  meeting:{
    name:"회의증식문어", hash:"#싱크한번할까요빌런", color:"#C7B7FF", mascot:"octo", prop:"cup", quote:"이건 따로 싱크 한 번 할까요?", desc:"회의를 줄이기 위한 회의를 잡음. 말은 정리되는데 캘린더가 울고 있음.",
    traits:["15분 얘기가 다음 회의 3개를 낳음","회의록은 잘 씀","일단 사람들을 모아야 마음이 편함","동기들의 점심시간을 조용히 위협함"],
    chats:["💬 이거 짧게 싱크 가능하세요?", "💬 10분만 잡을게요", "💬 회의록 공유드립니다"],
    lunch:["점심 메뉴도 후보군 만들고 투표 올림","결국 제일 가까운 곳 감"],
    dinner:["회식 자리 배치까지 은근 신경 씀","2차 갈지 말지도 투표로 정함"],
    good:"말랑조율펭귄", bad:"읽씹잠수요정", formula:{talk:2,planning:2,social:1,stable:1}
  },
  tool:{
    name:"새툴전도사", hash:"#이AI써봄빌런", color:"#BFF4EA", mascot:"otter", prop:"laptop", quote:"님들 이거 쓰면 생산성 미쳤는데요?", desc:"새 서비스 보면 눈빛이 바뀜. 3일 뒤 본인도 까먹지만 가끔 진짜 보물을 물어옴.",
    traits:["노션, 피그마, AI, 자동화 다 건드림","세팅할 때 제일 신남","정착률은 낮지만 발견력은 높음","‘이거 무료래요’에 약함"],
    chats:["💬 이 툴 써봄?", "💬 자동화 가능할 듯", "💬 제가 테스트해봤는데요"],
    lunch:["새로 생긴 식당 먼저 가보고 싶어함","실패해도 경험치라고 함"],
    dinner:["회식 장소도 요즘 뜨는 데 찾음","예약 앱 새 기능 설명하다가 아무도 안 들음"],
    good:"퇴근직전폭탄러", bad:"체크리스트수호자", formula:{idea:2,impulse:1,launch:1,detail:-1}
  },
  hamster:{
    name:"혼자다해버림햄스터", hash:"#그냥제가했어요빌런", color:"#FFD6E8", mascot:"hamster", prop:"bag", quote:"그냥 제가 해놨어요.", desc:"답답하면 직접 해버림. 결과물은 나왔는데 과정은 실종돼서 동기들이 감사하면서도 약간 무서워함.",
    traits:["공유 전에 이미 끝내놓음","일은 빠른데 흔적이 없음","도와달라는 말보다 직접 하는 게 빠름","번아웃 오기 전까지 아무도 모름"],
    chats:["💬 제가 처리해둘게요", "💬 일단 해놨어요", "💬 공유가 늦었네요"],
    lunch:["메뉴 안 정해지면 조용히 예약함","계산도 어느새 해놓고 있음"],
    dinner:["뒤에서 조용히 챙기는 타입","택시 잡고 길 찾고 다 함"],
    good:"읽씹잠수요정", bad:"회의증식문어", formula:{solo:2,launch:1,stable:1,silent:1}
  },
  face:{
    name:"표정관리실패러", hash:"#얼굴이퇴사함빌런", color:"#D9E2FF", mascot:"ice", prop:"phone", quote:"아니 괜찮아요. 진짜 괜찮아요.", desc:"말은 둥글게 하는데 얼굴이 네모남. 회의실에서 표정으로 이미 의견 제출 완료.",
    traits:["괜찮다고 하는데 안 괜찮음","카메라 꺼도 분위기가 느껴짐","입보다 눈썹이 먼저 말함","동기들이 눈치 보다가 슬랙이 조용해짐"],
    chats:["💬 네 괜찮습니다", "💬 저는 좋아요", "💬 ...", "💬 아뇨 진짜 괜찮아요"],
    lunch:["‘아무거나’라고 했지만 표정은 이미 메뉴 평가 중","맛없으면 조용해짐"],
    dinner:["회식 중 사회생활 미소 유지","집 가는 길에 동기한테만 진심 토크함"],
    good:"말랑조율펭귄", bad:"퇴근직전폭탄러", formula:{silent:1,detail:1,stable:1,social:-1}
  },
  planner:{
    name:"메모장전략가", hash:"#세계관만유니콘빌런", color:"#CDEBFF", mascot:"rabbit", prop:"clip", quote:"큰 그림은 이렇거든요.", desc:"머릿속에는 이미 시즌3까지 있음. 시작은 느린데 듣다 보면 이상하게 설득됨.",
    traits:["맥락 설명하다가 세계관이 열림","시작 전 구조가 먼저 필요함","아이디어가 작게 시작하지 않음","정리되면 꽤 강력함"],
    chats:["💬 일단 배경부터 설명드리면", "💬 이게 결국은 구조 문제라", "💬 제가 한 번 정리해볼게요"],
    lunch:["식당 하나 고르는데 동선과 분위기까지 봄","결정은 느리지만 실패율 낮음"],
    dinner:["술 들어가면 회사 비전 얘기함","다들 웃다가 갑자기 납득함"],
    good:"새툴전도사", bad:"일단보내고수정러", formula:{planning:2,idea:1,detail:1,launch:-1}
  },
  penguin:{
    name:"말랑조율펭귄", hash:"#다들맞말이에요빌런", color:"#BDE7D9", mascot:"penguin", prop:"cup", quote:"아 근데 둘 다 맞는 말 같아요.", desc:"사람 사이 공기를 제일 빨리 읽음. 팀 평화는 지키는데 본인 멘탈은 조용히 닳음.",
    traits:["싸움 나기 전에 쿠션어 뿌림","단톡방 온도 조절 담당","누구 편도 아닌데 모두를 챙김","회의 끝나고 혼자 기빨림"],
    chats:["💬 아 근데 이것도 맞고", "💬 제가 중간안 한번 써볼게요", "💬 다들 너무 고생했어요"],
    lunch:["메뉴 취향 다 물어보다가 본인 취향 사라짐","마지막엔 ‘저도 좋아요’"],
    dinner:["테이블 분위기 살피느라 밥이 늦음","취한 사람 물 챙겨줌"],
    good:"표정관리실패러", bad:"새툴전도사", formula:{social:2,stable:2,talk:1,solo:-1}
  }
};

const questions = [
  {tag:"💬 메신저", title:"퇴근 10분 전, 갑자기 생각난 게 있다.", sub:"지금 말하면 다들 가방 다시 내려놓을 수도 있음.", options:[
    ["“아 맞다, 이것도 가능할 듯” 하고 일단 공유한다","동기들 노트북 다시 열리는 소리",{impulse:2,talk:2,idea:2}],
    ["메모장에 적어둔다. 내일의 내가 알아서 하겠지","내일의 나: 모름",{planning:1,stable:1,silent:1}],
    ["혼자 초안까지 만들어놓고 갑자기 던진다","놀랍게도 이미 80% 완성",{solo:2,launch:1,idea:1}],
    ["말하려다 참는다. 근데 표정에서 다 티난다","얼굴: 지금 말하고 싶음",{silent:1,detail:1,stable:1}]
  ]},
  {tag:"💬 메신저", title:"동기 단톡에 질문이 올라왔다.", sub:"‘이거 누가 알고 있어?’ 모두가 조용해지는 순간.", options:[
    ["알면 바로 답한다. 모르면 아는 척 안 함","깔끔한 사람인 척",{talk:1,social:1,stable:1}],
    ["읽고 ‘나중에 답해야지’ 하다가 진짜 잊는다","악의 없음. 문제도 있음",{silent:2,stable:1}],
    ["답장 대신 자료를 찾아서 길게 보낸다","갑자기 미니 리포트",{detail:1,planning:2}],
    ["‘제가 해볼게요’ 하고 조용히 처리한다","공유는 조금 늦음",{solo:2,launch:1}]
  ]},
  {tag:"🧊 회의", title:"회의하다가 누가 갑자기 정색했다.", sub:"공기 온도 3도 내려감.", options:[
    ["“아 근데 그 말도 맞긴 함…” 하고 수습한다","평화 비둘기 출근",{social:2,stable:2,talk:1}],
    ["아무 말 안 하는데 얼굴이 이미 퇴사했다","표정이 먼저 발언",{silent:1,detail:1}],
    ["“근데 애초에 방향 자체가…” 하고 본론을 더 세게 간다","회의 시즌2 오픈",{talk:2,idea:2,impulse:1}],
    ["회의록 정리하면서 다음 액션을 만든다","감정은 모르겠고 액션아이템",{planning:2,detail:1,stable:1}]
  ]},
  {tag:"🍚 점심", title:"점심 메뉴 정할 때 너는?", sub:"‘아무거나’라는 가장 어려운 단어가 등장했다.", options:[
    ["“아무거나 좋아요”라고 한다. 진짜 아무거나 먹는다","희귀한 아무거나 인간",{stable:2,social:1}],
    ["맛집 저장해둔 거 갑자기 꺼낸다","지도 앱에 진심",{idea:1,talk:1,planning:1}],
    ["결정 안 나면 그냥 예약하거나 주문한다","배고픔이 리더십을 만듦",{launch:2,solo:1}],
    ["리뷰, 거리, 웨이팅 다 확인한다","점심도 프로젝트처럼",{detail:2,planning:2}]
  ]},
  {tag:"🍻 회식", title:"회식 2차 얘기가 나왔다.", sub:"누군가는 눈이 빛나고 누군가는 계산서를 찾는다.", options:[
    ["“앗 저 내일 아침 일정이…” 하고 퇴장 각을 본다","이미 집 가는 동선 검색",{silent:1,stable:2}],
    ["갑자기 텐션 올라가서 옆팀이랑 친해진다","사회성 풀충전",{talk:2,social:2}],
    ["조용히 있다가 술 들어가면 회사 얘기 진지하게 한다","갑자기 프로세스 개편",{idea:2,talk:1}],
    ["취한 사람 챙기고 택시까지 확인한다","회식 안전요원",{social:2,stable:1,detail:1}]
  ]},
  {tag:"📎 업무", title:"초안 공유 타이밍은?", sub:"완벽과 속도 사이에서 늘 갈림.", options:[
    ["70%쯤 됐을 때 공유한다. 피드백 받으면서 고침","속도는 생명",{launch:2,talk:1}],
    ["95%는 돼야 마음이 편하다","최종본도 아직 불안",{detail:2,planning:1}],
    ["혼자 거의 끝내고 ‘이렇게 했어요’ 한다","과정은 증발",{solo:2,launch:1}],
    ["방향부터 맞춘 뒤 시작한다","시작 전에 지도부터",{planning:2,stable:1}]
  ]},
  {tag:"💬 메신저", title:"슬랙 답장이 늦어지는 이유는?", sub:"읽음과 답장은 별개의 세계다.", options:[
    ["읽고 답한 줄 알았다","진짜 그렇게 믿고 있음",{silent:2}],
    ["뭐라고 답할지 고민하다가 시간이 지났다","신중함과 방치 사이",{planning:1,silent:1,detail:1}],
    ["바로 답하면 일이 생길 것 같아서 잠깐 멈췄다","현명한 생존 본능",{stable:2,silent:1}],
    ["답장 대신 결과물을 들고 온다","말보다 파일",{solo:2,launch:1}]
  ]},
  {tag:"🧃 동기방", title:"동기들이 ‘오늘 힘들다’고 할 때", sub:"공감, 해결, 회피 중 하나는 튀어나옴.", options:[
    ["“ㅇㅈ 오늘 좀 에바” 하고 같이 눕는다","공감형 동지",{social:2,stable:1}],
    ["왜 힘든지 원인을 분석하기 시작한다","위로가 보고서가 됨",{planning:2,detail:1}],
    ["웃긴 짤 하나 보낸다","분위기 응급처치",{talk:1,social:1,impulse:1}],
    ["말은 안 하지만 간식 링크를 보낸다","조용한 케어",{silent:1,social:1,stable:1}]
  ]},
  {tag:"🔥 마감", title:"마감 1시간 전 너는?", sub:"이때부터 진짜 성격 나옴.", options:[
    ["갑자기 집중력 미쳐서 속도 붙는다","왜 이제 켜짐",{launch:2,impulse:1}],
    ["마지막 검수하다가 끝이 안 난다","수정의 늪",{detail:2,planning:1}],
    ["문제 생기면 바로 사람 불러 모은다","긴급 싱크 ON",{talk:2,social:1}],
    ["조용히 다 처리하고 공유한다","뒤에서 불탐",{solo:2,stable:1}]
  ]},
  {tag:"🧊 회의", title:"회의가 끝나가는데 결론이 없다.", sub:"다들 노트북 닫을 타이밍만 보고 있음.", options:[
    ["“그럼 제가 정리해서 공유할게요” 한다","또 내가 하네",{solo:1,planning:2}],
    ["“한 번만 더 얘기해보죠” 한다","회의 생명 연장",{talk:2,planning:1}],
    ["“일단 해보고 판단하죠” 한다","생각보다 행동파",{launch:2,impulse:1}],
    ["조용히 있다가 끝나고 DM으로 의견 보낸다","회의 후 등장",{silent:2,detail:1}]
  ]},
  {tag:"📱 단톡", title:"동기방에 갑자기 회사 얘기가 시작됐다.", sub:"퇴근 후에도 회사는 따라온다.", options:[
    ["읽다가 조용히 사라진다","내 시간 지키기",{silent:2,stable:1}],
    ["“근데 그거 진짜 문제긴 함” 하고 불붙인다","퇴근 후 토론회",{talk:2,idea:1}],
    ["팩트 정리해서 보낸다","감정 사이에 엑셀",{detail:1,planning:2}],
    ["웃긴 말로 방향을 바꾼다","살기 위한 드립",{social:2,impulse:1}]
  ]},
  {tag:"🍚 점심", title:"밥 먹는 중 업무 얘기가 나왔다.", sub:"숟가락이 멈추는 순간.", options:[
    ["“밥 먹을 땐 밥 얘기하자” 모드","생존권 주장",{stable:2,silent:1}],
    ["듣다가 갑자기 좋은 아이디어를 낸다","밥상 기획자",{idea:2,impulse:1,talk:1}],
    ["문제 해결 방법을 적기 시작한다","국밥 옆 액션아이템",{planning:2,detail:1}],
    ["조용히 듣다가 나중에 혼자 처리한다","밥 먹을 땐 조용히",{solo:2,silent:1}]
  ]},
  {tag:"🧪 새것", title:"새로운 툴을 발견했다.", sub:"무료 체험 버튼이 너를 부른다.", options:[
    ["바로 써보고 동기방에 공유한다","이거 진짜 괜찮은데?",{idea:2,impulse:1,talk:1}],
    ["기존 방식이랑 비교해보고 결정한다","도입 전 검증",{planning:2,detail:1}],
    ["좋아 보여도 일단 귀찮아서 나중에 본다","나중 = 미정",{stable:1,silent:1}],
    ["혼자 자동화까지 만들어본다","조용한 실험실",{solo:1,idea:2,launch:1}]
  ]},
  {tag:"📂 파일", title:"파일명 ‘최종_진짜최종_v3’ 발견.", sub:"믿음이 흔들리는 순간.", options:[
    ["열자마자 버전 히스토리부터 본다","불신의 시작",{detail:2,planning:1}],
    ["일단 최신 거 같으면 쓴다","빠른 판단. 가끔 사고",{launch:2,impulse:1}],
    ["만든 사람에게 바로 물어본다","확인은 사람에게",{talk:1,social:1}],
    ["조용히 새로 정리해서 공유한다","질서 회복",{solo:1,detail:2}]
  ]},
  {tag:"🍻 회식", title:"회식 자리에서 갑자기 조용해졌다.", sub:"누군가 말실수한 것 같음.", options:[
    ["급하게 다른 얘기로 돌린다","분위기 소방관",{social:2,talk:1}],
    ["아무 말 안 하고 물만 마신다","생존 모드",{silent:2,stable:1}],
    ["‘근데 방금 그건 좀…’ 하고 짚는다","정면 돌파",{talk:2,detail:1}],
    ["옆사람 챙기면서 공기를 본다","눈치 레이더",{social:2,stable:1}]
  ]},
  {tag:"🧊 회의", title:"누가 ‘의견 있으세요?’라고 물었다.", sub:"방금까지 조용했던 사람들이 눈을 피함.", options:[
    ["짧게 말하려다 길어진다","배경 설명 추가요",{talk:2,idea:1}],
    ["괜찮다고 했는데 끝나고 생각난다","회의 후 깨달음",{silent:1,detail:1}],
    ["핵심만 말하고 정리한다","차분한 결론충",{planning:2,stable:1}],
    ["‘일단 해보면 알 듯’ 한다","실행으로 도망",{launch:2,impulse:1}]
  ]},
  {tag:"💬 메신저", title:"상대가 ‘급한 건 아닌데’라고 보냈다.", sub:"대부분 급하다.", options:[
    ["바로 본다. 불안해서 못 참음","알림 노예",{detail:1,social:1}],
    ["진짜 급한지 먼저 판단한다","에너지 절약",{stable:2,planning:1}],
    ["‘넵!’ 하고 받았는데 시작은 나중에 한다","답장은 빠름",{talk:1,launch:1}],
    ["일단 처리해서 결과만 보낸다","말보다 결과",{solo:2,launch:1}]
  ]},
  {tag:"🧃 동기방", title:"누가 실수해서 분위기가 애매하다.", sub:"놀릴지 감쌀지 판단해야 함.", options:[
    ["가볍게 웃기고 넘어가게 해준다","살짝 살려줌",{social:2,impulse:1}],
    ["실수 원인과 재발 방지를 정리한다","분위기보다 시스템",{planning:2,detail:1}],
    ["조용히 도와서 티 안 나게 막는다","뒤처리 장인",{solo:2,social:1}],
    ["괜찮다고 하는데 표정이 놀람","얼굴 로그아웃 실패",{silent:1,detail:1}]
  ]},
  {tag:"📎 업무", title:"갑자기 ‘이거 오늘 가능?’이 왔다.", sub:"오늘은 이미 오늘인데요.", options:[
    ["가능한 범위를 바로 쪼갠다","현실적 생존",{planning:2,stable:1}],
    ["일단 된다고 하고 뛰어든다","미래의 나 미안",{launch:2,impulse:1}],
    ["왜 오늘이어야 하는지 묻는다","근거 없으면 못 감",{detail:2,planning:1}],
    ["말없이 처리하다가 늦게 공유한다","혼자 전쟁",{solo:2,silent:1}]
  ]},
  {tag:"🍚 점심", title:"동기가 ‘여기 맛없대’라고 했다.", sub:"이미 가는 길이었다.", options:[
    ["바로 다른 곳 찾는다","실패 회피",{planning:1,stable:2}],
    ["그래도 한 번 먹어보자고 한다","경험치 수집",{idea:1,impulse:1}],
    ["리뷰를 직접 다시 확인한다","검증 없인 못 믿음",{detail:2}],
    ["그냥 가까운 데 가자고 한다","배고픔이 우선",{launch:2,stable:1}]
  ]},
  {tag:"🔥 마감", title:"마감 직전에 오류를 발견했다.", sub:"못 본 척하면 잠은 잘 수 있음.", options:[
    ["바로 말한다. 다 같이 죽더라도 고쳐야 함","양심이 너무 큼",{detail:2,talk:1}],
    ["영향도 보고 조용히 고친다","혼자 수습",{solo:2,detail:1}],
    ["일단 보내고 수정 가능성부터 본다","회수 가능한가요",{launch:2,impulse:1}],
    ["내일 고쳐도 되는지 계산한다","현실적 판단",{planning:2,stable:1}]
  ]},
  {tag:"🍻 회식", title:"회식 끝나고 동기랑 집 가는 길.", sub:"이때 진짜 리뷰가 시작된다.", options:[
    ["방금 있었던 일 조용히 복기한다","퇴근길 회의록",{detail:1,planning:1}],
    ["그냥 웃긴 포인트만 말한다","살아남는 방식",{social:2,impulse:1}],
    ["회사 얘기 안 하고 딴 얘기한다","퇴근 후 회사 차단",{stable:2,silent:1}],
    ["갑자기 진심 상담 모드 들어간다","밤 되면 깊어짐",{social:2,talk:1}]
  ]},
  {tag:"🧪 새것", title:"누가 ‘이 방식 너무 구식 아닌가?’ 했다.", sub:"바꿀 것인가, 지킬 것인가.", options:[
    ["바로 새 방식 찾아본다","변화 못 참음",{idea:2,impulse:1}],
    ["일단 왜 구식인지부터 본다","근거 필요",{planning:2,detail:1}],
    ["바꿔도 팀이 따라올지 걱정한다","사람 먼저",{social:2,stable:1}],
    ["혼자 테스트해보고 괜찮으면 공유한다","조용한 베타테스터",{solo:1,idea:2}]
  ]},
  {tag:"🧊 회의", title:"회의 시간이 10분 남았는데 안건이 3개 남았다.", sub:"누군가는 시간을 봐야 한다.", options:[
    ["우선순위 정해서 자른다","현실 관리자",{planning:2,stable:1}],
    ["‘이건 따로 잡죠’ 한다","캘린더 증식",{talk:2,planning:1}],
    ["빠르게 결정하고 넘어가자고 한다","속도 중시",{launch:2,impulse:1}],
    ["조용히 있다가 끝나고 정리본 보낸다","회의 후 처리반",{solo:1,silent:1,detail:1}]
  ]},
  {tag:"📱 단톡", title:"주말에 회사 관련 알림이 왔다.", sub:"핸드폰이 울렸고 마음도 울림.", options:[
    ["내용만 확인하고 월요일의 나에게 넘긴다","선 지킴",{stable:2,silent:1}],
    ["찝찝해서 바로 처리한다","쉬는 중에도 업무 모드",{solo:1,detail:1,launch:1}],
    ["단톡에 ‘이거 월요일에 보죠’라고 말한다","평화 선언",{social:1,stable:2}],
    ["보다가 새 아이디어 떠올라서 메모한다","주말 뇌가 더 위험",{idea:2,impulse:1}]
  ]},
  {tag:"📂 파일", title:"공유 문서에 누가 이상한 수정 남겼다.", sub:"이름은 안 보이는데 누군지 알 것 같음.", options:[
    ["수정 히스토리부터 확인한다","범인 찾기 아님. 맞음",{detail:2,planning:1}],
    ["그냥 내가 고친다","말하면 길어짐",{solo:2,stable:1}],
    ["단톡에 부드럽게 물어본다","사회적 쿠션 장착",{social:2,talk:1}],
    ["방향 자체를 다시 제안한다","문서 하나가 판을 키움",{idea:2,talk:1}]
  ]},
  {tag:"🍚 점심", title:"점심 먹고 자리로 돌아왔는데 할 일이 산더미다.", sub:"식곤증과 현실이 동시에 옴.", options:[
    ["작은 것부터 체크하면서 시작한다","체크가 나를 살림",{detail:1,planning:2}],
    ["일단 제일 급한 거부터 친다","불 끄기 전문",{launch:2,stable:1}],
    ["커피 사러 가면서 머릿속 정리한다","카페인 전략가",{planning:1,idea:1}],
    ["조용히 이어폰 끼고 사라진다","말 걸지 마세요",{solo:2,silent:1}]
  ]},
  {tag:"💬 메신저", title:"동기가 ‘이거 어떻게 생각해?’라고 물었다.", sub:"진짜 의견을 원하는 걸까, 위로를 원하는 걸까.", options:[
    ["좋은 점 먼저 말하고 조심스럽게 의견 준다","말랑 포장",{social:2,stable:1}],
    ["바로 핵심 문제를 말한다","팩트가 먼저 나감",{detail:2,talk:1}],
    ["비슷한 레퍼런스를 찾아서 보낸다","자료로 말함",{planning:1,idea:1}],
    ["직접 수정 예시를 만들어준다","손이 먼저 움직임",{solo:2,launch:1}]
  ]},
  {tag:"🔥 마감", title:"팀원이 ‘거의 다 됐어요’라고 했다.", sub:"거의 다 됐다는 말만큼 애매한 말도 없음.", options:[
    ["어디까지 됐는지 구체적으로 물어본다","불안해서 확인",{detail:2,planning:1}],
    ["믿고 기다린다","생각보다 너그러움",{stable:2,social:1}],
    ["혹시 몰라 백업안을 만든다","혼자 보험 들기",{solo:2,planning:1}],
    ["‘필요하면 같이 볼게요’ 하고 회의를 잡는다","도움과 회의 사이",{talk:2,social:1}]
  ]},
  {tag:"🧃 동기방", title:"퇴근 후 동기방에 ‘오늘 ㄹㅈㄷ’가 올라왔다.", sub:"무슨 일인지 안 봐도 대충 알 것 같음.", options:[
    ["바로 ‘왜왜’ 하고 들어간다","소식 못 참음",{talk:2,social:1}],
    ["읽고 웃고 리액션만 누른다","조용한 참여",{silent:1,social:1}],
    ["상황 정리해달라고 한다","맥락 없으면 못 웃음",{planning:1,detail:1}],
    ["내일 봐도 되는 얘기면 핸드폰 내려놓는다","퇴근 후 방어막",{stable:2,silent:1}]
  ]},
  {tag:"🎯 마지막", title:"이 테스트 결과를 동기방에 보낼 때", sub:"자기 객관화와 놀림 사이.", options:[
    ["캡쳐해서 ‘나 이거 아닌데?’라고 보낸다","대부분 맞음",{talk:1,social:1}],
    ["맞는 것 같아서 조용히 저장만 한다","내적 인정",{silent:1,detail:1}],
    ["동기들 결과까지 분석할 준비가 된다","이제부터 진짜 시작",{planning:1,idea:1}],
    ["결과 보고 바로 다시 한다","다른 유형도 궁금함",{impulse:1,launch:1}]
  ]}
];

const app = document.getElementById("app");
function shell(content){ app.innerHTML = `<div class="app"><header class="topbar"><div class="topbar-inner"><div class="brand"><span class="brand-badge">😈</span><span>오피스 빌런 테스트</span></div><button class="ghost" onclick="renderHome()">처음</button></div></header><div class="page">${content}</div></div><div id="toast" class="toast"></div>`; }
function mascotHTML(typeKey="bomb", small=false){
  const t = villains[typeKey] || typeKey;
  const classes = ["mascot", small?"small":"", t.mascot].filter(Boolean).join(" ");
  const props = (t.prop||"").split(" ").filter(Boolean).map(p=>`<i class="prop ${p}"></i>`).join("");
  return `<div class="${classes}" style="--type:${t.color}"><i class="ear l"></i><i class="ear r"></i><i class="body"></i><i class="eye l"></i><i class="eye r"></i><i class="cheek l"></i><i class="cheek r"></i><i class="mouth"></i><i class="paw l"></i><i class="paw r"></i><i class="foot l"></i><i class="foot r"></i>${props}</div>`;
}
function renderHome(){
  shell(`<section class="hero"><div class="hero-card"><span class="kicker">동기방 투척용 · 3분 컷</span><h1>나는 어떤<br>오피스 빌런일까?</h1><p class="lead">회사 동기들이랑 하면 더 재밌는 현실고증 테스트. 착한 척 안 하고, 은근히 찔리게 나옵니다.</p><div class="mascot-stage">${mascotHTML("bomb")}<div class="bubble-note">“급한 건 아닌데…”</div><div class="mini-note">결과 캡쳐각</div></div><div class="home-points"><div class="point"><b>30</b><span>현실 문항</span></div><div class="point"><b>10</b><span>빌런 유형</span></div><div class="point"><b>0</b><span>회원가입</span></div></div><button class="primary" onclick="startTest()">테스트 시작하기</button></div></section>`);
}
function startTest(){ state.index=0; state.answers=[]; axes.forEach(a=>state.scores[a]=0); renderQuestion(); }
function renderQuestion(){
  const q = questions[state.index];
  const pct = Math.round((state.index/questions.length)*100);
  shell(`<section><div class="progress-wrap"><div class="progress-head"><span>${state.index+1} / ${questions.length}</span><span>${pct}%</span></div><div class="progress"><div style="width:${pct}%"></div></div></div><div class="question-card"><span class="tag">${q.tag}</span><h1 class="question-title">${q.title}</h1><p class="question-sub">${q.sub}</p><div class="options">${q.options.map((o,i)=>`<button class="option" onclick="answer(${i})"><span class="letter">${String.fromCharCode(65+i)}</span><span class="opt-main"><span class="opt-text">${o[0]}</span><span class="opt-caption">${o[1]}</span></span></button>`).join("")}</div><div class="nav-row">${state.index>0?`<button class="ghost" onclick="goBack()">이전으로</button>`:""}</div></div></section>`);
}
function answer(i){
  const q = questions[state.index]; const scores = q.options[i][2];
  state.answers.push({q:state.index, i, scores}); Object.entries(scores).forEach(([k,v])=>state.scores[k]+=v);
  state.index++; if(state.index>=questions.length) renderResult(); else renderQuestion();
}
function goBack(){
  const last = state.answers.pop(); if(!last) return; Object.entries(last.scores).forEach(([k,v])=>state.scores[k]-=v); state.index = last.q; renderQuestion();
}
function resultType(){
  let best = null, bestScore = -999;
  for(const [key,t] of Object.entries(villains)){
    let s = 0; for(const [axis,w] of Object.entries(t.formula)) s += (state.scores[axis]||0)*w;
    if(s>bestScore){bestScore=s; best=key;}
  }
  return best;
}
function topAxes(){ return Object.entries(state.scores).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([k])=>axisNames[k]); }
function renderResult(){
  const key = resultType(); const t = villains[key]; const top = topAxes(); const villainPower = Math.min(98, Math.max(72, 74 + Math.round((state.scores[top[0]]||15)*1.2) + key.length%7));
  shell(`<section class="result-card" id="result-card" style="--type:${t.color}"><div class="result-head"><span class="result-kicker">${t.hash}</span><h1 class="result-title">${t.name}</h1><p class="result-quote">“${t.quote}”</p></div><div class="result-mascot">${mascotHTML(key)}</div><div class="score-card"><div class="meter-row"><span>빌런력</span><strong class="meter-num">${villainPower}%</strong></div><div class="meter"><div style="width:${villainPower}%"></div></div><p class="question-sub" style="margin:10px 0 0">주요 성향: ${top.join(" · ")}</p></div><div class="section"><h3>한줄 요약</h3><div class="line">${t.desc}</div></div><div class="section"><h3>주요 범행 패턴</h3><div class="lines">${t.traits.map(x=>`<div class="line"><span>•</span><span>${x}</span></div>`).join("")}</div></div><div class="section"><h3>동기방 출몰 멘트</h3><div class="chat-list">${t.chats.map((x,i)=>`<div class="chat ${i%2?"me":""}">${x}</div>`).join("")}</div></div><div class="section"><h3>🍚 점심 / 🍻 회식 모드</h3><div class="lines">${t.lunch.map(x=>`<div class="line"><span>🍚</span><span>${x}</span></div>`).join("")}${t.dinner.map(x=>`<div class="line"><span>🍻</span><span>${x}</span></div>`).join("")}</div></div><div class="section"><h3>궁합</h3><div class="match-grid"><div class="match"><small>잘 맞는 공범</small><b>${t.good}</b></div><div class="match"><small>상극 피해자</small><b>${t.bad}</b></div></div></div><div class="actions"><button class="primary save" onclick="saveResult()">결과 이미지 저장</button><button class="primary restart" onclick="startTest()">다시 하기</button></div></section>`);
}
function toast(msg){ const el=document.getElementById("toast"); if(!el) return; el.textContent=msg; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),1800); }
async function saveResult(){
  const target=document.getElementById("result-card");
  if(!window.html2canvas){ toast("캡쳐 라이브러리 로딩 중이에요. 잠깐 뒤 다시 눌러주세요."); return; }
  const canvas=await html2canvas(target,{backgroundColor:"#f7f8fb",scale:2,useCORS:true});
  const a=document.createElement("a"); a.download="office-villain-result.png"; a.href=canvas.toDataURL("image/png"); a.click(); toast("이미지 저장 완료");
}
window.renderHome=renderHome; window.startTest=startTest; window.answer=answer; window.goBack=goBack; window.saveResult=saveResult;
renderHome();
