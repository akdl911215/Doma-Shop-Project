import { scores } from './Filter.js';

function getNumberOfPassingScores(scores) {
    const passing = scores.filter((score) => score > 59);
    console.log('passing :: ', passing);
    // passing ::  [ 82, 70 ]

    console.log('passing.length : ', passing.length);
    // passing.length :  2
    return passing.length;
}
getNumberOfPassingScores(scores);
