import { averageScore } from './averageScore.js';

process.stdin.on('data', input => {
  const scores = input.toString().split(',').map(scoreString => Number(scoreString));
  console.log(averageScore(scores[0], scores[1]));
  process.exit();
});
