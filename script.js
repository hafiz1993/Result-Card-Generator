// subject input
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const sub3 = document.getElementById("sub3");
const sub4 = document.getElementById("sub4");
const sub5 = document.getElementById("sub5");
const sub6 = document.getElementById("sub6");
const sub7 = document.getElementById("sub7");
const sub8 = document.getElementById("sub8");

// number input
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");

// subject output
const subOutput1 = document.getElementById("subOutput1");
const subOutput2 = document.getElementById("subOutput2");
const subOutput3 = document.getElementById("subOutput3");
const subOutput4 = document.getElementById("subOutput4");
const subOutput5 = document.getElementById("subOutput5");
const subOutput6 = document.getElementById("subOutput6");
const subOutput7 = document.getElementById("subOutput7");
const subOutput8 = document.getElementById("subOutput8");

// number output

const numOutput1 = document.getElementById("numOutput1");
const numOutput2 = document.getElementById("numOutput2");
const numOutput3 = document.getElementById("numOutput3");
const numOutput4 = document.getElementById("numOutput4");
const numOutput5 = document.getElementById("numOutput5");
const numOutput6 = document.getElementById("numOutput6");
const numOutput7 = document.getElementById("numOutput7");
const numOutput8 = document.getElementById("numOutput8");

const submitBtn = document.getElementById("submit");

const userName = document.getElementById("name");
const classInfo = document.getElementById("classInfo");
const phone = document.getElementById("phone");

const nameOutput = document.getElementById("nameOutput");
const classOutput = document.getElementById("classOutput");
const mobileOutput = document.getElementById("mobileOutput");
const qrImg = document.getElementById("qr-img");
submitBtn.addEventListener("submit", (e) => {
  const nameFinal = userName.value;
  const classFinal = classInfo.value;
  const mobileFinal = phone.value;

  nameOutput.innerHTML = nameFinal;
  classOutput.innerHTML = classFinal;
  mobileOutput.innerHTML = mobileFinal;

  e.preventDefault();

  const partTwo = document.getElementById("partTwo");
  const partOne = document.getElementById("partOne");
  partTwo.style.display = "block";
  partOne.style.display = "none";
  const sub1Output = sub1.value;
  subOutput1.innerHTML = sub1Output;
  const sub2Output = sub2.value;
  subOutput2.innerHTML = sub2Output;
  const sub3Output = sub3.value;
  subOutput3.innerHTML = sub3Output;
  const sub4Output = sub4.value;
  subOutput4.innerHTML = sub4Output;
  const sub5Output = sub5.value;
  subOutput5.innerHTML = sub5Output;
  const sub6Output = sub6.value;
  subOutput6.innerHTML = sub6Output;
  const sub7Output = sub7.value;
  subOutput7.innerHTML = sub7Output;
  const sub8Output = sub8.value;
  subOutput8.innerHTML = sub8Output;

  const num11 = parseFloat(num1.value);
  const num12 = parseFloat(num2.value);
  const num13 = parseFloat(num3.value);
  const num14 = parseFloat(num4.value);
  const num15 = parseFloat(num5.value);
  const num16 = parseFloat(num6.value);
  const num17 = parseFloat(num7.value);
  const num18 = parseFloat(num8.value);

  const subTotal =
    num11 + num12 + num13 + num14 + num15 + num16 + num17 + num18;
  console.log(subTotal);

  const total = document.getElementById("total");

  const grade = document.getElementById("grade");
  const average = document.getElementById("average");

  if (
    num11 < 33 ||
    num12 < 33 ||
    num13 < 33 ||
    num14 < 33 ||
    num15 < 33 ||
    num16 < 33 ||
    num17 < 33 ||
    num18 < 33
  ) {
    total.innerHTML = subTotal;
    grade.innerHTML = "F";
    average.innerHTML = subTotal / 8;
  } else {
    if (subTotal / 8 >= 80 && subTotal / 8 <= 100) {
      total.innerHTML = subTotal;
      grade.innerHTML = "A+";
      average.innerHTML = `${(subTotal / 8).toFixed(2)}%`;
    } else if (subTotal / 8 >= 70) {
      total.innerHTML = subTotal;
      grade.innerHTML = "A";
      average.innerHTML = `${(subTotal / 8).toFixed(2)}%`;
    } else if (subTotal / 8 >= 60) {
      total.innerHTML = subTotal;
      grade.innerHTML = "A-";
      average.innerHTML = `${(subTotal / 8).toFixed(2)}%`;
    } else if (subTotal / 8 >= 50) {
      total.innerHTML = subTotal;
      grade.innerHTML = "B";
      average.innerHTML = `${(subTotal / 8).toFixed(2)}%`;
    } else if (subTotal / 8 >= 40) {
      total.innerHTML = subTotal;
      grade.innerHTML = "C";
      average.innerHTML = `${(subTotal / 8).toFixed(2)}%`;
    } else if (subTotal / 8 >= 40) {
      total.innerHTML = subTotal;
      grade.innerHTML = "D";
      average.innerHTML = `${(subTotal / 8).toFixed(2)}%`;
    }
  }

  numOutput1.innerHTML = num11;
  numOutput2.innerHTML = num12;
  numOutput3.innerHTML = num13;
  numOutput4.innerHTML = num14;
  numOutput5.innerHTML = num15;
  numOutput6.innerHTML = num16;
  numOutput7.innerHTML = num17;
  numOutput8.innerHTML = num18;

  const qrNumber =
    num11 +
    num12 +
    num13 +
    num14 +
    num15 +
    num16 +
    num17 +
    num18 +
    nameFinal +
    classFinal +
    mobileFinal;

  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrNumber}`;
  qrImg.src = url;
});
