/*
한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.

교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
*/
/*
입력
복잡한 세상 편하게 살자

출력
복세편살
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function 줄임말(str) {
    let answer = str[0]
    for (let i = 1; i< str.length; i++) {
        if (str[i] == ' ') 
            answer += str[i+1];
    }
    return answer;
}

rl.question("문자열을 입력하세요: ", (input) => {
    console.log(줄임말(input));
    rl.close();
});

const user_input = prompt('문자열을 입력하세요').split(' ');
let result = '';

for (let s of user_input){
  result += s.slice(0, 1);
}

console.log(result);
