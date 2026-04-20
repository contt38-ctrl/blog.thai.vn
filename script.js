// Hiệu ứng Typewriter cho tiêu đề
const text = "Chào mọi người! Mình là Thái Học";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Chạy hiệu ứng khi trang load xong
window.onload = typeWriter;

// Hàm cho nút kết nối
function connectAlert() {
    alert("Cảm ơn bạn đã quan tâm! Hãy gửi email cho mình qua địa chỉ: hocpt@fpt.edu.vn (Ví dụ) nhé!");
}