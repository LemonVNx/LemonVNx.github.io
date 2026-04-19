// By: xLemonVN 
// LH: 0867441128 Settup Website

// Dữ liệu 13 chứng chỉ ESign của bạn
const esignData = [
    { name: "Ksign✅", info: "XL AXIATA, PT TBK", link: "https://api.khoindvn.io.vn/JnAsbd" },
    { name: "Esign", info: "BOC International (China) Limited", link: "https://api.khoindvn.io.vn/XHJQcD" },
    { name: "Esign", info: "National Oilwell Varco, Inc", link: "https://api.khoindvn.io.vn/l5zzBs" },
    { name: "Esign", info: "VIETNAM AIRLINES JSC", link: "https://api.khoindvn.io.vn/l0drnJ" },
    { name: "Esign", info: "PowerChina International Group Limited", link: "https://api.khoindvn.io.vn/HdZnCj" },
    { name: "Esign", info: "Qingdao Rural Commercail Bank Co.,Ltd", link: "https://api.khoindvn.io.vn/U7fGrl" },
    { name: "Esign", info: "Commission on Elections", link: "https://api.khoindvn.io.vn/PnrQnK" },
    { name: "Esign", info: "Luoyang Postal Administration", link: "https://api.khoindvn.io.vn/j7ugho" },
    { name: "Esign", info: "China National Heavy Duty Truck Group", link: "https://api.khoindvn.io.vn/bYA0i6" },
    { name: "Esign", info: "China Telecommunications Corpration", link: "https://api.khoindvn.io.vn/cTiFFB" },
    { name: "Esign", info: "CHIBA INSTITUTE OF TECHNOLOGY", link: "https://api.khoindvn.io.vn/TPaVIt" },
    { name: "Esign", info: "VIETCOMBANK JSC", link: "https://api.khoindvn.io.vn/4h9whC" },
    { name: "Esign", info: "GLOBAL TAKEOFF, INC", link: "https://api.khoindvn.io.vn/aKk6vi" }
];

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

    // Hiệu ứng hoa đào
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

// 3. Xử lý Bảng chọn (Modal) chung
function openHackModal(type) {
    const modal = document.getElementById('hack-modal');
    const title = document.getElementById('modal-game-name');
    const modalBody = document.getElementById('modal-body-list'); // Đã sửa ID cho khớp HTML của bạn
    
    if (!modal || !title || !modalBody) return;

    let htmlContent = "";

    // Xử lý mục Crossfire Legends (CFL)
    if (type === 'cfl') {
        title.innerText = "Crossfire Legends";
        htmlContent = `
            <div class="alert-info">Vui lòng chọn bản phù hợp</div>
            <div class="hack-list">
                <div class="hack-item">
                    <div class="hack-info">
                        <span class="hack-name">Raven Crack Free</span>
                        <span class="hack-version">Bản miễn phí ổn định</span>
                    </div>
                    <button class="btn-download" onclick="window.open('https://tumadam.io.vn/autoup/cfmravencrackios', '_blank')">INSTALL</button>
                </div>
                <div class="hack-item">
                    <div class="hack-info">
                        <span class="hack-name">SKYCHEAT Antiban</span>
                        <span class="hack-version">Antiban cực mạnh - Acc chính</span>
                    </div>
                    <button class="btn-download" onclick="window.open('https://drive.google.com/file/d/1mvMDZh4w3oPfddrcOW08IxLVvhaWF-x9/view?usp=drivesdk', '_blank')">INSTALL</button>
                </div>
            </div>`;
    } 
    // Xử lý mục ESign (Gom 13 cái)
    else if (type === 'esign') {
        title.innerText = "ESign Bypass Revoke";
        htmlContent = `<div class="alert-info">Chọn chứng chỉ để cài đặt</div>
                       <div class="hack-list">`;
        
        esignData.forEach(item => {
            htmlContent += `
                <div class="hack-item">
                    <div class="hack-info">
                        <span class="hack-name">${item.name}</span>
                        <span class="hack-version">${item.info}</span>
                    </div>
                    <button class="btn-download" onclick="window.open('${item.link}', '_blank')">INSTALL</button>
                </div>`;
        });
        htmlContent += `</div>`;
    }

    modalBody.innerHTML = htmlContent;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Hàm đóng bảng
function closeHackModal() {
    const modal = document.getElementById('hack-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }
}

// Đóng bảng khi nhấn ra ngoài vùng bảng
window.onclick = function(event) {
    const modal = document.getElementById('hack-modal');
    if (event.target === modal) {
        closeHackModal();
    }
};

// 4. Hiệu ứng cánh hoa đào rơi
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
    setTimeout(() => { petal.remove(); }, 12000);
}
