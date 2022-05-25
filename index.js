"use strict";

function getResult() {
  const getObject = document.getElementById("object").value;
  const userID = document.getElementById("userID").value;
  const premiumChannel = +document.getElementById("premiumChannel").value;
  const connectionNum = document.getElementById("connectionNum").value;

  const objectBill1 = calcObject1(4.5, 20.5, premiumChannel);
  const getBasicService = calcBasicService(connectionNum);
  const objectBill2 = calcObject2(15, getBasicService, premiumChannel);

  if (getObject === "A") {
    document.getElementById("showMess").style.display = "block";
    document.getElementById(
      "showResult"
    ).innerHTML = `Khách hàng : ${userID} , Tổng Bill của bạn là ${objectBill1}$`;
  }
  if (getObject === "B") {
    document.getElementById("showMess").style.display = "block";
    document.getElementById(
      "showResult"
    ).innerHTML = `Doanh Nghiệp : ${userID} , Tổng Bill của bạn là $${objectBill2}`;
  }
}

function calcObject1(bill, basicService, premiumChannel) {
  return bill + basicService + premiumChannel * 7.5;
}

function calcBasicService(connectionNum) {
  let sum = 0;
  if (connectionNum <= 10) {
    return (sum = 75);
  }
  if (connectionNum > 10) {
    return (sum = 75 + (connectionNum - 10) * 5);
  }
}
function calcObject2(billCost, basicService, premiumChannel) {
  return billCost + basicService + premiumChannel * 50;
}
function toggleObject() {
  const getObject = document.getElementById("object").value;
  if (getObject === "B") {
    return (document.getElementById("connectionNum").style.display = "block");
  }
}
