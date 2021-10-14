var dbCYCDocument = "";



$(document).ready(function () {
  Connect_DB();
});
 

function Connect_DB() {
  var _0x8a2ed0=_0x510b;function _0x510b(_0x3e16a0,_0x240e7c){var _0x45c299=_0x45c2();return _0x510b=function(_0x510bcb,_0x2ce06d){_0x510bcb=_0x510bcb-0x1d4;var _0x491bb8=_0x45c299[_0x510bcb];return _0x491bb8;},_0x510b(_0x3e16a0,_0x240e7c);}(function(_0x4b5adf,_0x12ec89){var _0x90f58f=_0x510b,_0x1d6137=_0x4b5adf();while(!![]){try{var _0x14b269=parseInt(_0x90f58f(0x1d7))/0x1+parseInt(_0x90f58f(0x1dc))/0x2*(parseInt(_0x90f58f(0x1de))/0x3)+-parseInt(_0x90f58f(0x1db))/0x4*(-parseInt(_0x90f58f(0x1d6))/0x5)+-parseInt(_0x90f58f(0x1e0))/0x6+-parseInt(_0x90f58f(0x1d9))/0x7+parseInt(_0x90f58f(0x1d4))/0x8+parseInt(_0x90f58f(0x1e1))/0x9*(-parseInt(_0x90f58f(0x1dd))/0xa);if(_0x14b269===_0x12ec89)break;else _0x1d6137['push'](_0x1d6137['shift']());}catch(_0x3b57b9){_0x1d6137['push'](_0x1d6137['shift']());}}}(_0x45c2,0xe91ee));var firebaseConfig={'apiKey':'AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','authDomain':_0x8a2ed0(0x1df),'projectId':'retailproject-6f4fc','storageBucket':'retailproject-6f4fc.appspot.com','messagingSenderId':_0x8a2ed0(0x1d8),'appId':_0x8a2ed0(0x1da),'measurementId':_0x8a2ed0(0x1d5)};function _0x45c2(){var _0x316295=['retailproject-6f4fc.firebaseapp.com','5110332PCzTjC','153geXzuh','6682896xHuylj','G-9SKTRHHSW9','252995JPPNQp','1744759ldnBnc','653667385625','4188331dEARNq','1:653667385625:web:a5aed08500de80839f0588','12qNvHsm','2hRUzpB','1165510bmGOXI','4963098zwWjCn'];_0x45c2=function(){return _0x316295;};return _0x45c2();}  firebase.initializeApp(firebaseConfig);
  dbCYCDocument = firebase.firestore().collection("CYCDocument");
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
    str += '<div class="box-listuser">'+ doc.data().CYCName +'</div>';
    });
    $("#DisplayList").html(str);  
  });

/*
  var str = "";
  str += '<div class="header-line" style="margin-top:10px; margin-bottom: 20px; color:#0056ff;font-weight: 600;font-size: 13px;">'+ sHead +'</div>';
  str += '<div class="box-listuser">CYC Normal</div>';
  str += '<div class="box-listuser">CYC โครงการพิเศษ</div>';
  str += '<div class="box-listuser">CYC Normal</div>';
  str += '<div class="box-listuser">CYC Normal</div>';
  str += '<div class="box-listuser">CYC Normal</div>';
  str += '<div class="box-listuser">CYC Normal</div>';
  $("#DisplayList").html(str);  
*/

  document.getElementById('id01').style.display='block';
}


function CloseAll() {
  document.getElementById('id01').style.display='none';
}
