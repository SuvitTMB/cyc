var vLineID = "";
var vLineName = "";
var vLinePicture = "";
var vstatusconfirm = 0;
//document.getElementById('gotopage').style.display='none';

/*
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
var db = firebase.firestore().collection("CheckProfile");
*/

async function main() {
	await liff.init({ liffId: "1655966947-YLaLJK8V" });
	document.getElementById("isLoggedIn").append(liff.isLoggedIn());
	if(liff.isLoggedIn()) {
		getUserProfile();
	} else {
		liff.login();
	}
}
main();


function openWindow() {
	liff.openWindow({
		url: "https://line.me",
		external: true     
	})
}


async function getUserProfile() {
	const profile = await liff.getProfile();
	vLineID = profile.userId;
	vLineName = profile.displayName;
	vLinePicture = profile.pictureUrl;
	sessionStorage.setItem("LineID", profile.userId);
	sessionStorage.setItem("LineName", profile.displayName);
	sessionStorage.setItem("LinePicture", profile.pictureUrl);
	//alert(vLineID);
	//alert("LineID = "+sessionStorage.getItem("LineID"));
	//FindID(profile.userId);
}


/*
function FindID(gLineID) {
    db.where('lineID','==',gLineID).get().then((snapshot)=> {
      	snapshot.forEach(doc=> {
        	vstatusconfirm = doc.data().statusconfirm;
	        if(doc.data().statusconfirm==9) {
	    		document.getElementById('gotopage').style.display='none';
		        //alert("กรุณารอการตรวจสอบข้อมูล/ทำการตรวจสอบความถูกต้องของข้อมูลอีกครั้ง");
	        	localStorage.removeItem("LineLogin");
	        	window.location = "checkprofile.html";
	        } 
	        sessionStorage.setItem("LineLogin", doc.data().statuspass);
			sessionStorage.setItem("EmpName", doc.data().empName);
			sessionStorage.setItem("EmpID", doc.data().empID);
			sessionStorage.setItem("EmpBR", doc.data().empBr);
		});
	});

	db.where('lineID','==',gLineID).get().then(function(doc) {
	    if (!doc.empty) {
	    	//alert("มีข้อมูลอยู่แล้ว");
			//alert(sessionStorage.getItem("EmpName")+"----"+gLineID+"7777");
			if(vstatusconfirm!=9) {
		    	document.getElementById('gotopage').style.display='block';
			}
	        //console.log("Document data:", doc[0].data());
	    } else {
			//alert("ยังไม่มีข้อมูล");
			//alert("333"+sessionStorage.getItem("LineID"));
	        console.log("No such document!");
	        window.location = "adddata.html";
			//SaveProfile();
	    }
	}).catch(function(error) {
	    console.log("Error getting document:", error);
	});
}

*/




