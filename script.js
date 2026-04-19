// Hàm mở Modal
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang nền
}

// Hàm đóng Modal
function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Mở lại cuộn trang
}

// Đóng modal khi click ra ngoài vùng trắng
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Xử lý đóng thanh thông báo xanh
document.querySelector('.notice-close').addEventListener('click', function() {
    document.querySelector('.notice-bar').style.display = 'none';
});
