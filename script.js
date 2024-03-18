const questions = [
    {
        question: "날씨가 좋은 봄날! 혜주에게 문자가 왔다, '이따가 몇시에 만나서 뭐할래?' 뭐라고 대답해야 혜주가 좋아할까?",
        answers: [
            { text: "오늘 날이 좋으니까 1시에 연트럴파크에서 만나서 산책하자!", isCorrect: false },
            { text: "이따가 4시쯤 여의도에 벚꽃 보러 가는게 어때?", isCorrect: false },
            { text: "나 오늘 몸이 갑자기 안좋아서 ㅠㅠ 다음에 봐도 돼 ㅠㅠ?", isCorrect: false },
            { text: "우리 7시에 영화보러 가자!", isCorrect: true }
        ]
    },
    {
        question: "혜주와 식당에 갔는데, 먹고싶은 메뉴가 너무 많다…'뭐 시키지??' 라는 혜주의 말에 당신의 대답은?",
        answers: [
            { text: "음… 각자 땡기는거 하나씩 시키는거 어때?", isCorrect: false },
            { text: "몰라 ~ 일단 먹고싶은거 다 시키고 한입씩 먹어보자!", isCorrect: true },
            { text: "네이버 리뷰를 찾아보고 제일 평 좋은걸 주문하자!", isCorrect: false },
            { text: "내가 알아서 시킬게 ~~", isCorrect: false }
        ]
    },
    {
        question: "어느덧 다가온 혜주와 영화 약속, '오늘 영화 뭐볼까??' 라는 혜주의 카톡에 당신의 대답은?",
        answers: [
            { text: "영화는 당연히 액션이지! 액션 영화 보고 스트레스 풀자!", isCorrect: true },
            { text: "달달한 로맨스 영화 어때?? 이번에 재밌는거 나왔더라 ~", isCorrect: false },
            { text: "공포영화 보자!", isCorrect: false },
            { text: "난 영화 해석까지 찾아보는것도 영화의 일부라고 봐! 해석이 필요한 심오한 영화를 보자!", isCorrect: false }
        ]
    },
    {
        question: "영화관에 도착했는데, 이게 무슨 냄새지? 옆에서 들려오는 혜주의 '우리 팝콘 먹자!' 라는 말, 무슨 팝콘을 먹지?",
        answers: [
            { text: "기본에 충실해야지! 기본맛으로 하나 주세요!", isCorrect: false },
            { text: "달달한 카라멜 팝콘으로 주세요 ~~", isCorrect: false },
            { text: "난 특색있는 맛이 좋아! 어니언 맛 하나요!!", isCorrect: false },
            { text: "짭짤한 치즈 팝콘으로 주문할게요!", isCorrect: true }
        ]
    },
    {
        question: "혜주와 하루종일 잘 놀고, 이제는 헤어질 시간! 집 방향이 같은 혜주가 '집에 어떻게 갈거야?' 라고 물어볼때 당신의 대답은?",
        answers: [
            { text: "날씨도 좋고 얼마 안걸리는데 걸어가자!", isCorrect: false },
            { text: "제일 빨리 가는 지하철 탈까?", isCorrect: false },
            { text: "카카오택시 부르자!", isCorrect: true },
            { text: "앗! 곧 버스 오는데 저거 타면 되겠다!", isCorrect: false }
        ]
    },
    {
        question: "집에 가는 길, 혜주가 '오늘 재밌었어 ~~ 언제 또 놀까??' 라고 물어본다! 뭐라고 답을 하지?",
        answers: [
            { text: "내일 어때??", isCorrect: true },
            { text: "다음에 시간 맞을때 또 놀자 ~~", isCorrect: false },
            { text: "언제 언제 시간 돼? 이 날은 안돼? 저 날은??", isCorrect: false },
            { text: "글쎄?? 나 당분간은 시간이 안될듯 ㅠㅠ", isCorrect: false },
        ]
    },
    {
        question: "마지막",
        answers: [
            { text: "마지막", isCorrect: false },
        ]
    },
];

let correctCount = 0;

function showQuestion(index) {
    const questionContainer = document.getElementById("question-container");
    const question = questions[index];

    // 문제 표시
    questionContainer.innerHTML = `<p>${question.question}</p>`;

    // 답변 옵션 표시
    const answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML = "";
    question.answers.forEach((answer, idx) => {
        const button = document.createElement("button");
        button.textContent = `${idx + 1}. ${answer.text}`;
        button.onclick = () => selectAnswer(index, idx, answer.isCorrect);
        answersContainer.appendChild(button);
    });

    // 마지막 문제일 경우 '결과 표시' 함수 호출
    if (index === questions.length - 7) {
        const startButton = document.getElementById("start-button");
        startButton.style.display = "none"; // '테스트 시작하기' 버튼 숨기기
    }
    if (index === questions.length - 1) {
        questionContainer.style.display = "none";
        answersContainer.style.display = "none";
        showResult();
    }
}

// 답변을 선택했을 때 실행되는 함수
function selectAnswer(questionIndex, answerIndex, isCorrect) {
    // 정답인 경우에만 변수 correctCount를 증가시킴
    if (isCorrect) {
        correctCount++;
    }

    // 다음 문제로 넘어가거나 결과를 표시
    if (questionIndex < questions.length - 1) {
        showQuestion(questionIndex + 1);
    } else {
        showResult();
    }
}

function showResult() {
    const resultContainer = document.getElementById("result-container");

    // 결과를 기반으로 음식 유형과 설명을 결정하여 표시
    const foodTypes = {
        6: {
            type: "마라탕",
            imageUrl: "https://i.namu.wiki/i/lA-K2CWVuLc6IJQ-mCRyR2hAzhNAgiIGXqup1bxOKWgJmrfvvxZKM3-nXsodLzfbcGJunJDIMjfPGJ4dSAJ_XQihPlfDHhI82dGWsGtQRoZiioGH_mv7hLAB1bzhJ4iMZFZBclP7qTTZw9KwAHaOqg.webp",
            description: "축하드려요! 마라탕은 혜주가 가장 좋아하는 음식이에요. <br> 당신은 혜주와 궁합이 매우 뛰어난 사람이에요! <br> 이미 혜주의 모든 것을 알고 있으니, 어서 다음 약속을 잡으세요 ㅎㅎ"
        },
        5: {
            type: "파스타",
            imageUrl: "https://i.namu.wiki/i/imaH-c9xYnUoNgb7qO9zVq8JSf5IW7n2SQ42b4MXXuz5xSbWm8M_qapLJtfYtg-2R3PIyPOikbPtv3yx_75h8-V3OAhAuSLYjDpx12I_dXaSi77wlqu6P9ZVmcTRhNDKtkJ_138j75nQZ47_0gwtxw.webp",
            description: "파스타는 혜주의 최애 음식 중 하나에요! <br> 당신은 혜주에 대해 많은 것을 알고 있고 <br> 궁합이 매우 좋기 때문에 자주 만나 시간을 보내도 좋을 것 같아요 ㅎㅎ <br> "
        },
        4: {
            type: "떡볶이",
            imageUrl: "https://i.namu.wiki/i/Tdfm4mrtKFnCsD2y59U0-u8JU0Qr6MOsXzFzngrimgoRScl10LJ9HyHauV-k6-iQbYycczFxxzS-m9ZFi9SDFmNUskQdhtF3ih8xwhwBc4vrf0N534J9j7dbrncnKb3eQeqxu_Rd008ssKGrZEXM8g.webp",
            description: "혜주는 떡볶이를 매우 좋아하지만, 매일 좋아하는 것이 아닌 확 땡기는 날이 가끔씩 찾아와요. <br> 궁합을 보니 나쁜 편은 아니지만 아무래도 혜주와 자주 만나는 것보다 가끔씩 만나는게 더 좋을 것 같아요!"
        },
        3: {
            type: "닭발",
            imageUrl: "https://i.namu.wiki/i/pUjipLN-aY1jCHi1bzxPP78nU1wt9Jk2AR2cD5I5XpE32YvVdVAk67t3cYRvhPRzukpljyiTAag3tJZRTI3Gco9-9NCKyWA0kgHfVsyL4a318soZ-mMXarv_B8FjHn_9BGKaFe_9wSVYJT75da7YhA.webp",
            description: "혜주는 닭발을 전반적으로 좋아하는 편이에요. <br> 그러나 자주 먹고싶어하지 않고, 당신과의 궁합을 보니 혜주에 대해 절반만 알고 계시는군요 ㅠㅠ <br> 궁합을 더 좋게 만들기 위해서 혜주에 대한 공부가 필요해 보여요! "
        },
        2: {
            type: "돈까스",
            imageUrl: "https://i.namu.wiki/i/BkgfpCBK_5NLIHCLNlCe-quaV2kXolT6YG0YSv0WErvg8uDlSXdjvboy3O-dYrhivXOV-H_ikz1iac47NH3PJR2H7Z-a20oluvtch4qomBio4Q7aZyObNWd8n9PZJLpS-qKXH_mmuWDxpk87_SdnEA.webp",
            description: "혜주는 돈까스를 그다지 좋아하지 않아요 ㅠㅠ <br> 당신과의 궁합도 썩 좋은 것으로 나오지는 않았지만, <br> 가끔 돈까스를 먹고싶어하는 혜주의 성격 상 가끔씩 만나 혜주에 대해 더 알아가도 좋을 것 같아요."
        },
        1: {
            type: "대창",
            imageUrl: "https://i.namu.wiki/i/SM3kLvp-M4-F1SV9jeLa2FNL-kkodKFPwcx0VerGpK3YcmCg9NjcAkAoBEcEuypQk0vEJ7Xy3xN8t0uEu1w45Qtpc7hJihbh81il4Frw7cENnt5yjET8IL3rUkZpOToH1y42pip0ygw75KkEdwcCew.webp",
            description: "혜주는 기름기 많은 대창을 싫어해요 ㅠㅠ 당신은 혜주와 잘 맞지 않는 것 같으니 혜주에 대해 더 많은 것을 알아가야해요!"
        },
        0: {
            type: "가지",
            imageUrl: "https://i.namu.wiki/i/gTjGkdxtEkSlW0r31cuPBjskwvcdp4gdZq7PYy7lRpRQZ7n4pJ3TzliVILL4PYgfdk1oWIBfAe7LZH_YGT7AW9Ju1ER95qWv8w-LkFbnnhCQIH26n6dHUkje-dfGph1Wl0IXpq20J0BO6R5I355Tkg.webp",
            description: "가지는 혜주가 아주 싫어하는 음식이에요 ㅠㅠ 당신은 혜주를 몰라도 너무 모르는군요! 혜주에게 조심스럽게 접근해 친해질 필요가 있어보여요!"
        }
    };

    const userFoodType = foodTypes[correctCount];
    resultContainer.innerHTML = `
        <p>당신은 ${userFoodType.type}입니다!</p>
        <br>
        <div style="text-align: center;">
            <img src="${userFoodType.imageUrl}" alt="${userFoodType.type}" style="max-width: 100%; height: auto; display: inline-block;">
        </div>
        <br>
        <div class="food-ex">
        <p>${userFoodType.description}</p>
        </div>
        <br>
        <button id="retry-button">테스트 다시하기</button>
    `;
    
    // '테스트 다시하기' 버튼에 클릭 이벤트 추가
    document.getElementById("retry-button").addEventListener("click", () => {
        correctCount = 0;
        showQuestion(0);
        resultContainer.innerHTML = ""; // 결과를 지움
        // 문제를 표시하는 컨테이너와 답변을 표시하는 컨테이너를 보임
        document.getElementById("question-container").style.display = "block";
        document.getElementById("answers-container").style.display = "block";
    });
}


document.getElementById("start-button").addEventListener("click", () => {
    correctCount = 0;
    const questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "block"; 
    showQuestion(0);
    document.getElementById("start-info").style.display = "none";
});
