document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".submit-btn")[0].addEventListener("click", function(){
        let un = document.getElementById("userName").value;
        let pw = document.getElementById("passWord").value;
        fetch("http://thongtindaotao.sgu.edu.vn/default.aspx?page=dangnhap",{
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryGNMArz3BadWmRmKh'
            },
            body: {ctl00$ContentPlaceHolder1$ctl00$txtTaiKhoa: un, ctl00$ContentPlaceHolder1$ctl00$txtMatKhau: pw}
        })
        .then(response => {
            if(response.status === 200){
                alert("login success");
                return response.text();
            }
            else {
                alert(response);
            }
        })
        .then(data => {
            document.getElementById("showTimeTable").textContent = data;
        })
        .catch(error => {
            alert(error);
        })
    })
})

//http://thongtindaotao.sgu.edu.vn/default.aspx?page=dangnhap
//multipart/form-data; boundary=----WebKitFormBoundaryGNMArz3BadWmRmKh
//ctl00$ContentPlaceHolder1$ctl00$txtMatKhau
