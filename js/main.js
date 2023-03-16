//////////////////// 共用
// 「按我~免費加入會員」的泡泡視窗
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) { return new bootstrap.Popover(popoverTriggerEl) })


//////////////////// 首頁
$(document).ready(function () {
    var date = new Date();
    
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    var today = year + "-" + month + "-" + day;
    console.log(today);
    $("#bookingStart_home").attr("value", today);
});


//////////////////// 園區地圖
// 帶入日期
$(document).ready(function () {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#bookingStart_home").attr("value", today);
});

$(document).ready(function () {
    var date = new Date();

    var day = date.getDate() + 1;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#bookingEnd_home").attr("value", today);
});


//////////////////// 訂位專區
// 帶入日期
$(document).ready(function () {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#bookingStart").attr("value", today);
});

$(document).ready(function () {
    var date = new Date();

    var day = date.getDate() + 1;
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    $("#bookingEnd").attr("value", today);
});


//////////////////// 會員權益
// 確認是否勾選服務及隱私權政策
function nextForm() {
    if (checkPolicy.checkGOGO.checked == "") {
        swal({ title: "未勾選 同意會員優惠訊息通知", button: "確認" });
    }
}


//////////////////// 會員註冊
// 確認會員資料是否填寫，完成跳出完成註冊
function finishClick() {
    var finishForm = "親愛的會員您好！完成註冊！";
    // console.log(finishForm);
    if (profile.account.value == "" || profile.password_1.value == "" || profile.password_2.value == "") {
        swal({ title: "未完成 申請帳號步驟", button: "確認" });
    }
    else if (profile.userName.value == "" || profile.mailAdd.value == "" || profile.phoneNumber.value == "") {
        swal({ title: "未填寫 基本資料步驟", button: "確認" });
    }
    else if (profile.couponMail.checked == "") {
        swal({ title: "未勾選 同意會員優惠訊息通知", button: "確認" });
    }
    else { swal({ title: finishForm, icon: "success", button: "確認" }); }
}