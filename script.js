// By: xLemonVN 
// LH: 0867441128 Settup Website

// 1. Hàm khởi tạo hệ thống
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    if (!splash) {
        if (mainContent) {
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
            mainContent.classList.add('show-content');
        }
        document.body.style.overflowY = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }

    // Hiệu ứng hoa đào rơi
    setInterval(createPetal, 500); 
});

// 2. Hàm xử lý khi chạm vào Màn hình chào
function startWeb() {
    const audio = document.getElementById('myAudio');
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    if (audio) {
        audio.play().catch(() => console.log("Cần chạm màn hình để phát nhạc"));
    }

    if (splash) {
        splash.style.opacity = '0';
        splash.style.transition = 'opacity 0.8s ease';
        setTimeout(() => {
            splash.style.display = 'none';
            document.body.style.overflowY = 'auto'; 
        }, 800);
    }

    if (mainContent) {
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.classList.add('show-content');
            mainContent.style.opacity = '1';
        }, 10);
    }
}

// 3. Hiệu ứng cánh hoa đào rơi
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'cherry-blossom'; 
    
    const randomLeft = Math.random() * 100;
    petal.style.left = randomLeft + 'vw';
    
    const size = (Math.random() * 8 + 8) + 'px';
    petal.style.width = size;
    petal.style.height = size;
    
    const colors = ['#ffb7c5', '#ffc0cb', '#ffd1dc', '#ff91a4'];
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    const randomRotation = Math.random() * 360;
    petal.style.transform = `rotate(${randomRotation}deg)`;
    petal.style.opacity = Math.random() * 0.5 + 0.5;
    
    const fallDuration = (Math.random() * 5 + 8) + 's';
    const shakeDuration = (Math.random() * 2 + 2) + 's';
    
    petal.style.animationDuration = `${fallDuration}, ${shakeDuration}`;

    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 12000);
}

// ---------------------------------------------------------
// 4. CHỨC NĂNG MỚI: XỬ LÝ MODAL (BẢNG GIÁ/CHI TIẾT)
// ---------------------------------------------------------

// Hàm mở Modal (Bảng giá)
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Khóa cuộn trang chính khi đang xem bảng giá
    }
}

// Hàm đóng Modal
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        // Chỉ mở lại cuộn trang nếu màn hình chào đã tắt
        if (!document.getElementById('splash-screen') || document.getElementById('splash-screen').style.display === 'none') {
            document.body.style.overflowY = "auto";
        }
    }
}

// Đóng modal khi nhấn ra ngoài vùng bảng giá (vùng đen mờ)
window.onclick = function(event) {
    if (event.target.classList.contains('modal-custom')) {
        event.target.style.display = "none";
        document.body.style.overflowY = "auto";
    }
}
