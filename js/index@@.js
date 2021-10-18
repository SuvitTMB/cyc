var stxtEmpID = "";
var stxtEmpName = "";
var stxtEmpPhone = "";
var stxtGroup = "";
var scb1 = "";
var scb2 = "";
var scb3 = "";




$(document).ready(function () {
  document.getElementById('myRegister').style.display='block';
  document.getElementById('myTimer').style.display='none';
  var str = "";
  main();
  //alert(sessionStorage.getItem("LineID"));
  //Connect_DB();
});



async function main() {
  await liff.init({ liffId: "1655966947-YLaLJK8V" });
  document.getElementById("isLoggedIn").append(liff.isLoggedIn());
  if(liff.isLoggedIn()) {
    getUserProfile();
  } else {
    liff.login();
  }
}


async function getUserProfile() {
  const profile = await liff.getProfile();
  sessionStorage.setItem("LineID", profile.userId);
  sessionStorage.setItem("LineName", profile.displayName);
  sessionStorage.setItem("LinePicture", profile.pictureUrl);
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  //alert(profile.userId);
  CheckData();
}


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}


function CheckData() {
  alert("Check Data");
}


function ClickSaveProfile() {
  var sCheckBottom = 0;
  //alert($("input[type=checkbox][id=cb1]:checked").val());
  stxtEmpID = document.getElementById("txtEmpID").value;
  stxtEmpName = document.getElementById("txtEmpName").value;
  stxtEmpPhone = document.getElementById("txtEmpPhone").value;
  stxtGroup = document.getElementById("txtGroup").value;
  scb1 = $("input[type=checkbox][name=cb1]:checked").val();
  scb2 = $("input[type=checkbox][name=cb2]:checked").val();
  scb3 = $("input[type=checkbox][name=cb3]:checked").val();
  if(stxtEmpID !== null && stxtEmpID !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpName !== null && stxtEmpName !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpPhone !== null && stxtEmpPhone !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtGroup !== null && stxtGroup !== '') { sCheckBottom = sCheckBottom+1; }
  if(scb1 !== null && scb1 !== undefined) { sCheckBottom = sCheckBottom+1; }
  if(scb2 !== null && scb2 !== undefined) { sCheckBottom = sCheckBottom+1; }
  if(scb3 !== null && scb3 !== undefined) { sCheckBottom = sCheckBottom+1; }
  //alert(sCheckBottom);
  //alert(stxtEmpID+"\n\n"+stxtEmpName+"\n\n"+ stxtEmpPhone +"\n\n"+ stxtGroup+"\n\n"+scb1+"\n\n"+scb2+"\n\n"+ scb3);

  if(sCheckBottom==7) {
    SaveData();
  }
}


function SaveData() {
  document.getElementById('myRegister').style.display='none';
  document.getElementById('myTimer').style.display='block';
}








/*
  alert("Click");
  var GotoPage = 0;
  var CheckReq = 0;
  var inpObj = document.getElementById("fname");
  //var inpObj1 = document.getElementById("fname");
  //var inpObj2 = document.getElementById("memo");

  if (!inpObj.checkValidity()) {
    document.getElementById("fname_req").innerHTML = inpObj.validationMessage;
  } else {
    CheckReq = CheckReq+1;
    document.getElementById("fname_req").innerHTML = inpObj1.validationMessage;
  } 
*/





/*

document.getElementById('EmpPhone').onkeyup = function(e) {
  phone_number_check(this,e);
}


function phone_formatting(ele,restore) {
  var new_number,
      selection_start = ele.selectionStart,
      selection_end = ele.selectionEnd,
      number = ele.value.replace(/\D/g,'');
  if (number.length > 2) {
    new_number = number.substring(0,3) + '-';
    if (number.length === 4 || number.length === 5) {
      new_number += number.substr(3);
    }
    else if (number.length > 5) {
      new_number += number.substring(3,6) + '-';
    }
    if (number.length > 6) {
      new_number += number.substring(6);
    }
  }
  else {
    new_number = number;
  }
  ele.value =  (new_number.length > 12) ? new_number.substring(12,0) : new_number;
  document.getElementById('msg').innerHTML='<p>Selection is: ' + selection_end + ' and length is: ' + new_number.length + '</p>';
  if (new_number.slice(-1) === '-' && restore === false
      && (new_number.length === 8 && selection_end === 7)
          || (new_number.length === 4 && selection_end === 3)) {
      selection_start = new_number.length;
      selection_end = new_number.length;
  }
  else if (restore === 'revert') {
    selection_start--;
    selection_end--;
  }
  ele.setSelectionRange(selection_start, selection_end);
}
  

function phone_number_check(field,e) {
  var key_code = e.keyCode,
      key_string = String.fromCharCode(key_code),
      press_delete = false,
      dash_key = 189,
      delete_key = [8,46],
      direction_key = [33,34,35,36,37,38,39,40],
      selection_end = field.selectionEnd;
  if (delete_key.indexOf(key_code) > -1) {
    press_delete = true;
  }
  if (key_string.match(/^\d+$/) || press_delete) {
    phone_formatting(field,press_delete);
  }
  else if(direction_key.indexOf(key_code) > -1) {
  }
  else if(dash_key === key_code) {
    if (selection_end === field.value.length) {
      field.value = field.value.slice(0,-1)
    }
    else {
      field.value = field.value.substring(0,(selection_end - 1)) + field.value.substr(selection_end)
      field.selectionEnd = selection_end - 1;
    }
  }
  else {
    e.preventDefault();
    phone_formatting(field,'revert');
  }
}
*/

/*
var dbCYCDocument = "";
var dbCYCLog = "";
var EidCYCDocument = "";
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear()+543;
today = dd + '/' + mm + '/' + yyyy;



$(document).ready(function () {
  //alert(sessionStorage.getItem("LineID"));
  Connect_DB();
});
 

function Connect_DB() {
  var firebaseConfig = {
    apiKey: "AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE",
    authDomain: "retailproject-6f4fc.firebaseapp.com",
    projectId: "retailproject-6f4fc",
    storageBucket: "retailproject-6f4fc.appspot.com",
    messagingSenderId: "653667385625",
    appId: "1:653667385625:web:a5aed08500de80839f0588",
    measurementId: "G-9SKTRHHSW9"
  };
  firebase.initializeApp(firebaseConfig);
  dbCYCDocument = firebase.firestore().collection("CYCDocument");
  dbCYCLog = firebase.firestore().collection("CYCLog");
}


function OpenBook(x) {
  var str = "";
  var sHead = "";
  if(x=="G1") { sHead = "หลักเกณฑ์สินเชื่อเงื่อนไขรถยนต์";
  } if(x=="G2") { sHead = "ขั้นตอนการคีย์งานลงในระบบ";
  } if(x=="G3") { sHead = "การประเมินรายได้";
  } if(x=="G4") { sHead = "แบบประเมินสภาพรถยนต์มือ 2";
  } if(x=="G5") { sHead = "ระบบ AS400";
  } if(x=="G6") { sHead = "Contact Point";
  }

  str += '<div class="header-line" style="margin-top:10px; margin-bottom: 20px; color:#0056ff;font-weight: 600;font-size: 13px;">'+ sHead +'</div>';
  dbCYCDocument.where('CYCgroup','==',x)
  .where('CYCStatus','==',1)
  .orderBy('CYCRanking','asc')
  .get().then((snapshot)=> {
  snapshot.forEach(doc=> {
    //EidStockList = doc.id;
    str += '<div class="box-listuser" onclick="OpenLink(\''+ doc.id +'\')">'+ doc.data().CYCName +'</div>';
    });
    $("#DisplayList").html(str);  
  });
  document.getElementById('id01').style.display='block';
}


var sCYCRead = 0;
var sCYCgroup = "";
var sCYCName = "";
var sCYCLinkURL = "";
function OpenLink(x) {
  EidCYCDocument = "";
  dbCYCDocument.where(firebase.firestore.FieldPath.documentId(), "==", x)
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidCYCDocument = doc.id;
      sCYCgroup = doc.data().CYCgroup;
      sCYCName = doc.data().CYCName;
      sCYCLinkURL = doc.data().CYCLinkURL;
      sCYCRead = doc.data().CYCRead;
      UpdateView();
    });
  });
}



var dateString = "";
function UpdateView() {
  NewDate();
  if(EidCYCDocument!="") {
    dbCYCDocument.doc(EidCYCDocument).update({
      CYCRead : parseFloat(sCYCRead+1)
    });
    dbCYCLog.add({
      LineID : sessionStorage.getItem("LineID"),
      EmpID : sessionStorage.getItem("EmpID"),
      EmpName : sessionStorage.getItem("EmpName"),
      CYCgroup : sCYCgroup,
      CYCName : sCYCName,
      //CYCLinkURL : sCYCLinkURL,
      DateClick : dateString
    });
    window.open(sCYCLinkURL);
  }
}



function CloseAll() {
  document.getElementById('id01').style.display='none';
}




function NewDate() {
  var today = new Date();
  var day = today.getDate() + "";
  var month = (today.getMonth() + 1) + "";
  var year = today.getFullYear() + "";
  var hour = today.getHours() + "";
  var minutes = today.getMinutes() + "";
  var seconds = today.getSeconds() + "";
  var ampm = hour >= 12 ? 'PM' : 'AM';

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  dateString = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm;
  //alert(GetNewDate);
  //console.log(day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds +" "+ ampm);
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}
*/