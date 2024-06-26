/*
첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 
두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let keys = '';
let values = '';

rl.question('이름을 입력하세요: ', (inputKeys) => {
    keys = inputKeys.split(' ');
    
    rl.question('점수를 입력하세요: ', (inputValues) => {
        values = inputValues.split(' ');

        const obj = {};
        for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = parseInt(values[i], 10);
        }

        console.log(obj);
        rl.close();
    });
});
