if(sessionStorage.getItem("CYCStatus")!=1) { window.location.href = 'index.html'; }
//var sReportDate = "05/08/2021";
var sGroupReport = "CYC";
var sReportDate = "";
var data = "";
var str1 = "";
var LimitData = 15;


var _0x2223a8=_0x4a06;function _0x4a06(_0x58d05f,_0x37522b){var _0x51897b=_0x5189();return _0x4a06=function(_0x4a065c,_0x574a38){_0x4a065c=_0x4a065c-0xa6;var _0x5ad908=_0x51897b[_0x4a065c];return _0x5ad908;},_0x4a06(_0x58d05f,_0x37522b);}function _0x5189(){var _0x4c9d9a=['1193208OLbmRR','retailproject-6f4fc.firebaseapp.com','793537bcfEnc','1029280khHJRm','AIzaSyDfTJJ425U4OY0xac6jdhtSxDeuJ-OF-lE','3048VLbdVv','retailproject-6f4fc','653667385625','15090327YLbHCA','3241BeunWp','20392sIqUAD','retailproject-6f4fc.appspot.com','380qTLowL','1133772GbhIaw','G-9SKTRHHSW9'];_0x5189=function(){return _0x4c9d9a;};return _0x5189();}(function(_0xd95154,_0xe1abc4){var _0xb84bf7=_0x4a06,_0x110b75=_0xd95154();while(!![]){try{var _0x27bd57=-parseInt(_0xb84bf7(0xab))/0x1+-parseInt(_0xb84bf7(0xa9))/0x2+-parseInt(_0xb84bf7(0xa7))/0x3+-parseInt(_0xb84bf7(0xb3))/0x4*(-parseInt(_0xb84bf7(0xa6))/0x5)+parseInt(_0xb84bf7(0xae))/0x6*(parseInt(_0xb84bf7(0xb2))/0x7)+-parseInt(_0xb84bf7(0xac))/0x8+parseInt(_0xb84bf7(0xb1))/0x9;if(_0x27bd57===_0xe1abc4)break;else _0x110b75['push'](_0x110b75['shift']());}catch(_0x436a60){_0x110b75['push'](_0x110b75['shift']());}}}(_0x5189,0x624c6));var firebaseConfig={'apiKey':_0x2223a8(0xad),'authDomain':_0x2223a8(0xaa),'projectId':_0x2223a8(0xaf),'storageBucket':_0x2223a8(0xb4),'messagingSenderId':_0x2223a8(0xb0),'appId':'1:653667385625:web:a5aed08500de80839f0588','measurementId':_0x2223a8(0xa8)};
var _0x2de511=_0x1926;function _0x1926(_0x30734a,_0x5b3bbd){var _0x73f665=_0x73f6();return _0x1926=function(_0x192674,_0x14d42e){_0x192674=_0x192674-0xdd;var _0x597ecc=_0x73f665[_0x192674];return _0x597ecc;},_0x1926(_0x30734a,_0x5b3bbd);}(function(_0x47b941,_0x21d585){var _0x99722d=_0x1926,_0x5afd7d=_0x47b941();while(!![]){try{var _0x9b5d92=parseInt(_0x99722d(0xe1))/0x1*(parseInt(_0x99722d(0xe9))/0x2)+-parseInt(_0x99722d(0xe6))/0x3+-parseInt(_0x99722d(0xe3))/0x4+parseInt(_0x99722d(0xe2))/0x5*(-parseInt(_0x99722d(0xe4))/0x6)+parseInt(_0x99722d(0xe7))/0x7+-parseInt(_0x99722d(0xe5))/0x8*(parseInt(_0x99722d(0xdf))/0x9)+parseInt(_0x99722d(0xde))/0xa*(parseInt(_0x99722d(0xe8))/0xb);if(_0x9b5d92===_0x21d585)break;else _0x5afd7d['push'](_0x5afd7d['shift']());}catch(_0x452ee7){_0x5afd7d['push'](_0x5afd7d['shift']());}}}(_0x73f6,0x7772b),firebase[_0x2de511(0xea)](firebaseConfig));function _0x73f6(){var _0x5162a4=['33YHxiSJ','726230iHTRcS','initializeApp','firestore','5402910hvuKti','9bbneWQ','collection','1YcZXNZ','110560keMpou','1350632PwZPuc','24NBBjSR','4999744QlSEDg','2005383pBWdXK','1573642FrTUWr'];_0x73f6=function(){return _0x5162a4;};return _0x73f6();}var db=firebase[_0x2de511(0xdd)]()[_0x2de511(0xe0)]('Report');


$(document).ready(function() {
    DropDownDisplay();
    LastData();
} );


function LastData() {
    db.where('GroupReport','==',sGroupReport)
    .orderBy('ReportNo','desc').limit(1).get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        sReportDate = doc.data().ReportDate;
        data = doc.data().DataJson;
        sReportImg = doc.data().ReportImg;
        getData(sReportDate,doc.id);
        //getData(doc.id);
        //alert(sReportDate);
      });
    });
}



function getData(x,id) {
    db.where(firebase.firestore.FieldPath.documentId(), "==", id)
    .get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        //$("#DisplayDate").html('Report Date : '+doc.data().ReportDate);
        $("#DisplayDate").html('ข้อมูล ณ วันที่ : '+doc.data().ReportDate);
        data = doc.data().DataJson;
        if(doc.data().ReportImg!="") {
            $("#DisplayReport").html('<div style="margin-top:15px;"><div style="padding:8px;color:#000;"><u>ประกาศรายชื่อผู้ได้รับรางวัลประจำวัน</u></div><div><img src="'+doc.data().ReportImg+'" style="width:100%; max-width: 370px;"></div></div>');
        } else {
            $("#DisplayReport").html('');
        }
        load();
      });
    });
}


//var table = document.querySelector(#example);
var table="";
var rowData = "";
function load() {
    //document.getElementById('loading').style.display = 'none';
    //document.getElementById('OpenData').style.display = 'block';
    //$("#DisplayDate").html('Report Date : '+sReportDate);
    //var data ='[{"Rank": 248,"Bank": "<img class=a src=./img/up.png>","Branch Name": "สาขาบางนา","Zone": "บางนา","Region": "RH1","Score": "81.08%"},{"Rank": 758,"Bank": "TBANK","Branch Name": "สาขาบิ๊กซี บางพลี","Zone": "บางนา","Region": "RH1","Score": "62.61%"},{"Rank": 641,"Bank": "TBANK","Branch Name": "สาขาบิ๊กซี บางนา","Zone": "บางนา","Region": "RH1","Score": "69.08%"},{"Rank": 645,"Bank": "TBANK","Branch Name": "สาขาวัน-โอ-วัน เดอะเทิร์ดเพลส","Zone": "บางนา","Region": "RH1","Score": "68.88%"},{"Rank": 537,"Bank": "TBANK","Branch Name": "สาขาบางนา-ตราด กม. 4","Zone": "บางนา","Region": "RH1","Score": "72.40%"},{"Rank": 349,"Bank": "TBANK","Branch Name": "สาขาถนนพัฒนาการ 22","Zone": "บางนา","Region": "RH1","Score": "78.32%"},{"Rank": 316,"Bank": "TBANK","Branch Name": "สาขามหาวิทยาลัยหัวเฉียวเฉลิมพระเกียรติ","Zone": "บางนา","Region": "RH1","Score": "79.10%"},{"Rank": 796,"Bank": "TBANK","Branch Name": "สาขาเซ็นทรัล บางนา","Zone": "บางนา","Region": "RH1","Score": "57.42%"},{"Rank": 681,"Bank": "TBANK","Branch Name": "สาขาเมืองใหม่-บางพลี","Zone": "บางนา","Region": "RH1","Score": "67.43%"},{"Rank": 495,"Bank": "<img class=a src=./img/down.png>","Branch Name": "สาขาปู่เจ้าสมิงพราย","Zone": "บางนา","Region": "RH1","Score": "73.78%"},{"Rank": 775,"Bank": "TBANK","Branch Name": "สาขามาร์เก็ตวิลเลจ สุวรรณภูมิ","Zone": "บางนา","Region": "RH1","Score": "60.39%"},{"Rank": 788,"Bank": "TBANK","Branch Name": "สำนักชิดลม","Zone": "ปทุมวัน","Region": "RH1","Score": "58.47%"},{"Rank": 453,"Bank": "TBANK","Branch Name": "สาขามาบุญครอง","Zone": "ปทุมวัน","Region": "RH1","Score": "75.15%"},{"Rank": 786,"Bank": "TBANK","Branch Name": "สาขาสยามพารากอน [T-Next]","Zone": "ปทุมวัน","Region": "RH1","Score": "59.15%"},{"Rank": 715,"Bank": "TBANK","Branch Name": "สาขาเซ็นทรัลเวิลด์","Zone": "ปทุมวัน","Region": "RH1","Score": "65.11%"}]';
    var mydata = JSON.parse(data);
    $('#example').DataTable( {
        pageLength :25,
        data: mydata,
        columns: [
            { data: "Group" },
            { data: "Question" }
        ],
        "bDestroy": true
    } );

    table = "";
    rowData="";
    table = $('#example').DataTable();
    $('#example tbody').on( 'click', 'tr', function () {
        rowData = table.row( this ).data();
        //console.log(rowData);
    } );
}


function DropDownDisplay() {
    var i = 0;
    var str = '';
    db.where('GroupReport','==',sGroupReport)
    .orderBy('ReportNo','desc')
    .limit(LimitData)
    .get().then((snapshot)=> {
      snapshot.forEach(doc=> {
        getDropDown(doc);
      });
    $("#DisplayDropDown").html('<ul>'+str1+'</ul>');
    });
}



//var getJSON = "";
var iii = 0;
var myArray = [];

function getDropDown(doc) {
    //console.log(doc);
    myArray = JSON.parse(doc.data().DataJson);
    //console.log(myArray);
    str1 += "<li onclick='Linkweb(\""+ doc.data().ReportDate +"\",\""+ doc.id +"\")'><a href='#'>ประจำวันที่ "+ doc.data().ReportDate +"</a></li>";
    iii = iii+1;
}


function Linkweb(n,id) {
    //alert("Check ID = "+id);
    getData(n,id);
}