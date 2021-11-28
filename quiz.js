//第1問の問題・回答
const question_1 = '岩手県の県庁所在地は？';
const answers_1 = [
    '滝沢市',
    '盛岡市',
    '宮古市',
    '岩手市'
];

document.getElementById('question-1').textContent = question_1;

document.getElementsByClassName('ans-1')[0].textContent = answers_1[0];
document.getElementsByClassName('ans-1')[1].textContent = answers_1[1];
document.getElementsByClassName('ans-1')[2].textContent = answers_1[2];
document.getElementsByClassName('ans-1')[3].textContent = answers_1[3];

//第2問の問題・回答
const question_2 = '盛岡三大麺といえば盛岡冷麺、わんこそば、あと一つは？';
const answers_2 = [
    '盛岡ラーメン',
    '南部そば',
    '盛岡パスタ',
    'じゃじゃ麺'
];

document.getElementById('question-2').textContent = question_2;

document.getElementsByClassName('ans-2')[0].textContent = answers_2[0];
document.getElementsByClassName('ans-2')[1].textContent = answers_2[1];
document.getElementsByClassName('ans-2')[2].textContent = answers_2[2];
document.getElementsByClassName('ans-2')[3].textContent = answers_2[3];

//第3問の問題・回答
const question_3 = '「世界一の太鼓パレード」とも言われている岩手県を代表するお祭りといえば？';
const answers_3 = [
    'よさこい踊り',
    '阿波踊り',
    'さんさ踊り',
    '六魂祭'
];

document.getElementById('question-3').textContent = question_3;

document.getElementsByClassName('ans-3')[0].textContent = answers_3[0];
document.getElementsByClassName('ans-3')[1].textContent = answers_3[1];
document.getElementsByClassName('ans-3')[2].textContent = answers_3[2];
document.getElementsByClassName('ans-3')[3].textContent = answers_3[3];

//第4問の問題・回答
const question_4 = '2011年に世界遺産登録された「金色堂」があるお寺は？';
const answers_4 = [
    '中尊寺',
    '毛越寺',
    '東大寺',
    '清水寺'
];

document.getElementById('question-4').textContent = question_4;

document.getElementsByClassName('ans-4')[0].textContent = answers_4[0];
document.getElementsByClassName('ans-4')[1].textContent = answers_4[1];
document.getElementsByClassName('ans-4')[2].textContent = answers_4[2];
document.getElementsByClassName('ans-4')[3].textContent = answers_4[3];

//第5問の問題・回答
const question_5 = '爵位を持たない初の首相であり、「平民宰相」と呼ばれた岩手県盛岡市出身の内閣総理大臣といえば？';
const answers_5 = [
    '伊藤博文',
    '新渡戸稲造',
    '原敬',
    '大隈重信'
];

document.getElementById('question-5').textContent = question_5;

document.getElementsByClassName('ans-5')[0].textContent = answers_5[0];
document.getElementsByClassName('ans-5')[1].textContent = answers_5[1];
document.getElementsByClassName('ans-5')[2].textContent = answers_5[2];
document.getElementsByClassName('ans-5')[3].textContent = answers_5[3];

//結果処理
function result(){
    let score = 0;
    const totalScore = document.getElementById('score-message');

    //第1問の処理
    //空文(「;」)の時は何も処理を行わない
    const quiz1 = document.getElementById('quiz-1');

    if(quiz1.answer.value === 'a'){
        ;
    }else if(quiz1.answer.value === 'b'){
        score++;
    }else if(quiz1.answer.value === 'c'){
        ;
    }else if(quiz1.answer.value === 'd'){
        ;
    }else{
        alert('1問目の答えを選択してください。');
        return
    }

    //第2問の処理
    //空文(「;」)の時は何も処理を行わない
    const quiz2 = document.getElementById('quiz-2');

    if(quiz2.answer.value === 'a'){
        ;
    }else if(quiz2.answer.value === 'b'){
        ;
    }else if(quiz2.answer.value === 'c'){
        ;
    }else if(quiz2.answer.value === 'd'){
        score++;
    }else{
        alert('2問目の答えを選択してください。');
        return
    }

    //第3問の処理
    //空文(「;」)の時は何も処理を行わない
    const quiz3 = document.getElementById('quiz-3');

    if(quiz3.answer.value === 'a'){
        ;
    }else if(quiz3.answer.value === 'b'){
        ;
    }else if(quiz3.answer.value === 'c'){
        score++;
    }else if(quiz3.answer.value === 'd'){
        ;
    }else{
        alert('3問目の答えを選択してください。');
        return
    }

    //第4問の処理
    //空文(「;」)の時は何も処理を行わない
    const quiz4 = document.getElementById('quiz-4');

    if(quiz4.answer.value === 'a'){
        score++;
    }else if(quiz4.answer.value === 'b'){
        ;
    }else if(quiz4.answer.value === 'c'){
        ;
    }else if(quiz4.answer.value === 'd'){
        ;
    }else{
        alert('4問目の答えを選択してください。');
        return
    }

    //第5問の処理
    //空文(「;」)の時は何も処理を行わない
    const quiz5 = document.getElementById('quiz-5');

    if(quiz5.answer.value === 'a'){
        ;
    }else if(quiz5.answer.value === 'b'){
        ;
    }else if(quiz5.answer.value === 'c'){
        score++;
    }else if(quiz5.answer.value === 'd'){
        ;
    }else{
        alert('5問目の答えを選択してください。');
        return
    }

    //合計得点表示
    if(score === 5){
        alert('5問中' + score + '問正解 満点！');
    }else if(score === 4){
        alert('5問中' + score + '問正解 おしい！');
    }else if(score === 3){
        alert('5問中' + score + '問正解 あと一歩！');
    }else if(score === 2){
        alert('5問中' + score + '問正解 次は頑張ろう！');
    }else if(score === 1){
        alert('5問中' + score + '問正解 こんな日もある！');
    }else{
        alert('5問中' + score + '問正解 残念！');
    }

    //ラジオボタン解除
    for (const element of document.getElementsByName('answer')) {
        element.checked = false;
      }

}
