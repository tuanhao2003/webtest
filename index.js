document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".submit-btn")[0].addEventListener("click", function(){
        let un = document.getElementById("userName").value;
        let pw = document.getElementById("passWord").value;
        fetch("http://hao-nguyen-huynh-tuan.zonexion.com/j_spring_security_check",{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {j_username: 'nguyenhuynhtuanhao@gmail.com', j_password: '123456789'}
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