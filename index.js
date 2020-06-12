// cek 2 buah array
const arr1 = ["Math", "English", "Programming"];
const arr2 = ["Geography", "Spanish", "Programming"];

arr1.forEach((item) => {
  arr2.forEach((item2) => {
    if (item2 === item) {
      console.log(item2 === item);
    }
  });
});
