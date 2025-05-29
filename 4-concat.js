#!/usr/bin/node
if (process.argv[3]) {
  console.log(process.argv[2] + ' ' + 'is' + ' ' + process.argv[3]);
} else if (process.argv[2]) {
  console.log(process.argv[2] + ' ' + 'is' + ' ' + undefined);
} else {
  console.log(process.argv[2] + ' ' + 'is' + ' ' + process.argv[2]);
<<<<<<< HEAD
=======
}
>>>>>>> f77b075addebeda16472c93ec237f78ce230e567
