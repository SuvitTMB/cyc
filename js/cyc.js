if(sessionStorage.getItem("CYCStatus")!=1) { window.location.href = 'index.html'; }
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
