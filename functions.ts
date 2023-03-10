function add(n1: number, n2: number) {
  return n1 + n2;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function printResult(num: number): void {
  console.log(`Result:${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// function printResultUndef(num: number): undefined {
//   console.log(`Result:${num}`);
//   return undefined;
// }

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
printResult(add(5, 12));

// let someValue: undefined;

const combineValues: (a:number, b:number) => number = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (res) => {
  console.log(res);
  return res;
});
