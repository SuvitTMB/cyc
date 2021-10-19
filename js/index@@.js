var stxtEmpID = "";
var stxtEmpName = "";
var stxtEmpPhone = "";
var stxtEmpGroup = "";
var scb1 = "";
var scb2 = "";
var scb3 = "";
var dbCYCProfile = "";
var CheckFoundData = 0;
var EidCYCProfile = "";
var dateString = "";
var sDateRegister = "";
var i = 0;
const x = document.querySelectorAll(`div.com[min="${i}"]`);



$(document).ready(function () {
 // main();
  //document.getElementById('myRegister').style.display='block';
  //document.getElementById('myTimer').style.display='none';

  var str = "";
  str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile"></div>';
  str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  $("#MyProfile").html(str);  
  Connect_DB();
  CheckData();
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
  //var str = "";
  //str += '<div><img src="'+ sessionStorage.getItem("LinePicture") +'" class="add-profile"></div>';
  //str += '<div class="NameLine">'+ sessionStorage.getItem("LineName")+'</div>';
  //$("#MyProfile").html(str);  
  //alert(profile.userId);
  CheckData();
}


function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true     
  })
}


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
  dbCYCProfile = firebase.firestore().collection("CYCProfile");
}



function CheckData() {
  console.log(sessionStorage.getItem("LineID"));
  dbCYCProfile.where('LineID','==',sessionStorage.getItem("LineID"))
  .get().then((snapshot)=> {
    snapshot.forEach(doc=> {
      EidCYCProfile = doc.id;
      sDateRegister = doc.data().DateRegister;
     //alert(EidCYCProfile);
      CheckFoundData = 1;
      sessionStorage.setItem("CYCStatus", doc.data().CYCStatus);
      sessionStorage.setItem("EmpID", doc.data().EmpID);
      sessionStorage.setItem("EmpName", doc.data().EmpName);
      sessionStorage.setItem("EmpPhone", doc.data().EmpPhone);
      sessionStorage.setItem("EmpGroup", doc.data().EmpGroup);
      if(doc.data().CYCStatus==1) {
        window.location.href = 'ttbdrive.html';
      }
      document.getElementById("txtEmpID").value = doc.data().EmpID;
      document.getElementById("txtEmpName").value = doc.data().EmpName;
      document.getElementById("txtEmpPhone").value = doc.data().EmpPhone;
      document.getElementById("txtEmpGroup").value = doc.data().EmpGroup;
      WaitingPage();


/*
      if(doc.data().Confirm_cb1==1) { document.getElementById("cb1").checked = true; }
      if(doc.data().Confirm_cb2==1) { document.getElementById("cb2").checked = true; }
      if(doc.data().Confirm_cb3==1) { document.getElementById("cb3").checked = true; }
*/
    });
    OpenForm();
  });
}


function OpenForm() {
  if(CheckFoundData==1) {
    document.getElementById('myRegister').style.display='none';
    document.getElementById('myTimer').style.display='block';
  } else {
    document.getElementById('myRegister').style.display='block';
    document.getElementById('myTimer').style.display='none';
  }
}



function EditData() {
    document.getElementById('myRegister').style.display='block';
    document.getElementById('myTimer').style.display='none';
}


function WaitingPage() {
  var str = "";
  str +='<center><div><img src="./img/timer.gif" width="250px;"></div>';
  str +='<div><div class="text-waiting">เรียน <font color="#f68b1f">คุณ'+sessionStorage.getItem("EmpName")+'</font><br>';
  str +='ลงทะเบียนไว้เมื่อ : <font color="#f68b1f">'+ sDateRegister +'</font><br>ซึ่งในขั้นตอนนี้จะใช้เวลาในการดำเนินการ';
  str +='<br>ภายใน 24 ชั่วโมงในระหว่างนี้ขอให้ท่านตรวจสอบ<br>ข้อมูลของท่านให้ถูกต้อง</div>';
  str +='<div class="btn-t1" onclick="EditData()">คลิกเพื่อตรวจสอบข้อมูล</div>';
  str +='</div></center>';
  $("#MyWating").html(str);  
}





function ClickSaveProfile() {
  var sCheckBottom = 0;
  //alert($("input[type=checkbox][id=cb1]:checked").val());
  stxtEmpID = document.getElementById("txtEmpID").value;
  stxtEmpName = document.getElementById("txtEmpName").value;
  stxtEmpPhone = document.getElementById("txtEmpPhone").value;
  stxtEmpGroup = document.getElementById("txtEmpGroup").value;
  /*
  scb1 = $("input[type=checkbox][name=cb1]:checked").val();
  scb2 = $("input[type=checkbox][name=cb2]:checked").val();
  scb3 = $("input[type=checkbox][name=cb3]:checked").val();
  if(scb1 !== null && scb1 !== undefined) { sCheckBottom = sCheckBottom+1; }
  if(scb2 !== null && scb2 !== undefined) { sCheckBottom = sCheckBottom+1; }
  if(scb3 !== null && scb3 !== undefined) { sCheckBottom = sCheckBottom+1; }
  alert(document.getElementById("txtEmpID").value);
  */
  if(stxtEmpID !== null && stxtEmpID !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpName !== null && stxtEmpName !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpPhone !== null && stxtEmpPhone !== '') { sCheckBottom = sCheckBottom+1; }
  if(stxtEmpGroup !== null && stxtEmpGroup !== '') { sCheckBottom = sCheckBottom+1; }

  if(sCheckBottom==4) {
    alert(stxtEmpID+"\n"+stxtEmpName+"\n"+stxtEmpPhone+"\n"+stxtEmpGroup);
    SaveData();
  }
}




function SaveData() {
  NewDate();
  /*
  document.getElementById("txtEmpID").value = stxtEmpID;
  document.getElementById("txtEmpName").value = stxtEmpName;
  document.getElementById("txtEmpPhone").value = stxtEmpPhone;
  document.getElementById("txtEmpGroup").value = stxtEmpGroup;
  */
  //alert(document.getElementById("txtEmpID").value);
  //if(EidCYCProfile!="") {

  if(EidCYCProfile=="") {
    dbCYCProfile.add({
      LineID : sessionStorage.getItem("LineID"),
      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      EmpID : document.getElementById("txtEmpID").value,
      EmpName : document.getElementById("txtEmpName").value,
      EmpPhone : document.getElementById("txtEmpPhone").value,
      EmpGroup : document.getElementById("txtEmpGroup").value,
      DateRegister : dateString
    });
  } else {
    dbCYCProfile.doc(EidCYCProfile).update({
      LineID : sessionStorage.getItem("LineID"),
      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      EmpID : document.getElementById("txtEmpID").value,
      EmpName : document.getElementById("txtEmpName").value,
      EmpPhone : document.getElementById("txtEmpPhone").value,
      EmpGroup : document.getElementById("txtEmpGroup").value,
      DateRegister : dateString
    });
  }
  document.getElementById('myRegister').style.display='none';
  document.getElementById('myTimer').style.display='block';
}




/*
    dbCYCProfile.doc(EidCYCProfile).update({
      EmpID : document.getElementById("txtEmpID").value
      //DateRegister : dateString
    });

    dbCYCProfile.doc(EidCYCProfile).update({
      LineID : sessionStorage.getItem("LineID"),
      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      CYCStatus : 0,
      EmpID : stxtEmpID,
      EmpName : stxtEmpName,
      EmPhone: stxtEmpPhone,
      EmpName : stxtEmpName,
      EmpGroup : stxtEmpGroup,
      Confirm_cb1 : scb1,
      Confirm_cb2 : scb1,
      Confirm_cb3 : scb1,
      DateRegister : sDateRegister,
      DateConfirm : dateString
      EmpID : stxtEmpID
    });
*/

/*
  } else {
    dbCYCProfile.add({
      LineID : sessionStorage.getItem("LineID"),

      LineName : sessionStorage.getItem("LineName"),
      LinePicture : sessionStorage.getItem("LinePicture"),
      CYCStatus : 0,
      EmpID : stxtEmpID,
      EmpName : stxtEmpName,
      EmPhone: stxtEmpPhone,
      EmpName : stxtEmpName,
      EmpGroup : stxtEmpGroup,
      Confirm_cb1 : scb1,
      Confirm_cb2 : scb1,
      Confirm_cb3 : scb1,
      DateRegister : sDateRegister,
      DateConfirm : dateString
    });
  }
  CheckData();
*/
/*
  document.getElementById("txtEmpID").value = stxtEmpID;
  document.getElementById("txtEmpName").value = stxtEmpName;
  document.getElementById("txtEmpPhone").value = stxtEmpPhone;
  document.getElementById("txtEmpGroup").value = stxtEmpGroup;
  document.getElementById('myRegister').style.display='none';
  document.getElementById('myTimer').style.display='block';
*/


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
}


function checkZero(data){
  if(data.length == 1){
    data = "0" + data;
  }
  return data;
}


