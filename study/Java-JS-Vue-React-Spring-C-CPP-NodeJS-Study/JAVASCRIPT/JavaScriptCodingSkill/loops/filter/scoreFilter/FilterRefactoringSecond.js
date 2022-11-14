import { scores } from './Filter.js';

function getPerfectScores(scores) {
    const perfect = scores.filter((socore) => socore === 100);
    console.log('perfect : ', perfect);
    // perfect :  []

    console.log('perfect.length : ', perfect.length);
    // perfect.length :  0
    return perfect.length;
}
getPerfectScores(scores)