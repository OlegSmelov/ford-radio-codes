'use strict';

function generateSerial(serial) {
  const lookup = [
    [9, 5, 3, 4, 8, 7, 2, 6, 1, 0],
    [2, 1, 5, 6, 9, 3, 7, 0, 4, 8],
    [0, 4, 7, 3, 1, 9, 6, 5, 8, 2],
    [5, 6, 4, 1, 2, 8, 0, 9, 3, 7],
    [6, 3, 1, 2, 0, 5, 4, 8, 7, 9],
    [4, 0, 8, 7, 6, 1, 9, 3, 2, 5],
    [7, 8, 0, 5, 3, 2, 1, 4, 9, 6],
    [1, 9, 6, 8, 7, 4, 5, 2, 0, 3],
    [3, 2, 9, 0, 4, 6, 8, 7, 5, 1],
    [8, 7, 2, 9, 5, 0, 3, 1, 6, 4],
  ];

  let n = serial.slice(1).split('').map(s => parseInt(s)).reverse();

  let n1 = n[0];
  let n2 = n[1];
  let n3 = n[2];
  let n4 = n[3];
  let n5 = n[4];
  let n6 = n[5];
  let n7 = 0;

  let r1 = lookup[n1][5];
  let r2 = lookup[n2][3];
  let r3 = lookup[n3][8];
  let r4 = lookup[n4][2];
  let r5 = lookup[n5][1];
  let r6 = lookup[n6][6];
  let r7 = lookup[n7][9];

  let res1 = ((lookup[r2][r1] + 1) * (lookup[r6][r2] + 1) + (lookup[r4][r3] + 1) * (lookup[r7][r5] + 1) + (lookup[r1][r4])) % 10;
  let res2 = ((lookup[r2][r1] + 1) * (lookup[r5][r4] + 1) + (lookup[r5][r2] + 1) * (lookup[r7][r3] + 1) + (lookup[r1][r6])) % 10;
  let res3 = ((lookup[r2][r1] + 1) * (lookup[r4][r2] + 1) + (lookup[r3][r6] + 1) * (lookup[r7][r4] + 1) + (lookup[r1][r5])) % 10;
  let res4 = ((lookup[r2][r1] + 1) * (lookup[r6][r3] + 1) + (lookup[r3][r7] + 1) * (lookup[r2][r5] + 1) + (lookup[r4][r1])) % 10;

  let xres1 = (lookup[res1][5] + 1) * (lookup[res2][1] + 1) + 105;
  let xres2 = (lookup[res2][1] + 1) * (lookup[res4][0] + 1) + 102;
  let xres3 = (lookup[res1][5] + 1) * (lookup[res3][8] + 1) + 103;
  let xres4 = (lookup[res3][8] + 1) * (lookup[res4][0] + 1) + 108;

  let xres11 = Math.trunc(xres1 / 10) % 10;
  let xres10 = xres1 % 10;

  let xres21 = Math.trunc(xres2 / 10) % 10;
  let xres20 = xres2 % 10;

  let xres31 = Math.trunc(xres3 / 10) % 10;
  let xres30 = xres3 % 10;

  let xres41 = Math.trunc(xres4 / 10) % 10;
  let xres40 = xres4 % 10;

  let code3 = (xres11 + xres10 + r1) % 10;
  let code2 = (xres21 + xres20 + r1) % 10;
  let code1 = (xres31 + xres30 + r1) % 10;
  let code0 = (xres41 + xres40 + r1) % 10;

  return code0.toString() + code1.toString() + code2.toString() + code3.toString();
}

for (let s = 0; s <= 999999; s++) {
  let serial = 'M' + String(s).padStart(6, '0');
  console.log(serial + ',' + generateSerial(serial));
}
