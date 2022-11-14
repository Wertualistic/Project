import React, {useRef} from 'react';

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
    return (
        <header>
            <nav>
                <div className="nav-brand">
                    <svg width="117" height="25" viewBox="0 0 117 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="2" width="117" height="22.3214" fill="#8D1A52" />
                        <path d="M16.712 16.318C16.556 16.45 16.352 16.558 16.1 16.642C15.86 16.714 15.578 16.75 15.254 16.75C14.822 16.75 14.462 16.696 14.174 16.588C13.898 16.48 13.718 16.294 13.634 16.03C13.298 14.974 13.022 14.122 12.806 13.474C12.59 12.814 12.422 12.238 12.302 11.746H12.212C12.176 12.454 12.146 13.102 12.122 13.69C12.11 14.266 12.098 14.83 12.086 15.382C12.086 15.934 12.074 16.492 12.05 17.056C12.038 17.62 12.014 18.244 11.978 18.928C11.822 18.988 11.618 19.036 11.366 19.072C11.114 19.12 10.862 19.144 10.61 19.144C10.082 19.144 9.668 19.06 9.368 18.892C9.08 18.724 8.936 18.418 8.936 17.974L9.458 8.794C9.554 8.638 9.764 8.47 10.088 8.29C10.412 8.11 10.868 8.02 11.456 8.02C12.092 8.02 12.59 8.122 12.95 8.326C13.31 8.518 13.574 8.836 13.742 9.28C13.85 9.568 13.964 9.898 14.084 10.27C14.216 10.642 14.342 11.026 14.462 11.422C14.594 11.818 14.72 12.214 14.84 12.61C14.96 12.994 15.068 13.342 15.164 13.654H15.254C15.542 12.646 15.83 11.674 16.118 10.738C16.406 9.79 16.67 8.998 16.91 8.362C17.09 8.266 17.318 8.188 17.594 8.128C17.882 8.056 18.2 8.02 18.548 8.02C19.136 8.02 19.616 8.11 19.988 8.29C20.36 8.458 20.576 8.704 20.636 9.028C20.684 9.268 20.732 9.64 20.78 10.144C20.84 10.636 20.9 11.194 20.96 11.818C21.02 12.442 21.08 13.102 21.14 13.798C21.2 14.494 21.254 15.166 21.302 15.814C21.362 16.45 21.41 17.038 21.446 17.578C21.482 18.106 21.506 18.514 21.518 18.802C21.314 18.922 21.098 19.006 20.87 19.054C20.654 19.114 20.372 19.144 20.024 19.144C19.568 19.144 19.184 19.066 18.872 18.91C18.56 18.754 18.392 18.448 18.368 17.992C18.296 16.684 18.248 15.508 18.224 14.464C18.212 13.42 18.188 12.544 18.152 11.836H18.062C17.942 12.304 17.768 12.892 17.54 13.6C17.312 14.308 17.036 15.214 16.712 16.318ZM26.6098 14.662C26.0818 14.482 25.6018 14.302 25.1698 14.122C24.7378 13.93 24.3658 13.702 24.0538 13.438C23.7418 13.174 23.4958 12.862 23.3158 12.502C23.1478 12.13 23.0638 11.68 23.0638 11.152C23.0638 10.132 23.4538 9.316 24.2338 8.704C25.0258 8.092 26.1298 7.786 27.5458 7.786C28.0618 7.786 28.5418 7.822 28.9858 7.894C29.4298 7.966 29.8078 8.08 30.1198 8.236C30.4438 8.38 30.6958 8.572 30.8758 8.812C31.0558 9.04 31.1458 9.31 31.1458 9.622C31.1458 9.934 31.0738 10.204 30.9298 10.432C30.7858 10.648 30.6118 10.834 30.4078 10.99C30.1438 10.822 29.7898 10.678 29.3458 10.558C28.9018 10.426 28.4158 10.36 27.8878 10.36C27.3478 10.36 26.9518 10.438 26.6998 10.594C26.4478 10.738 26.3218 10.924 26.3218 11.152C26.3218 11.332 26.3998 11.482 26.5558 11.602C26.7118 11.71 26.9458 11.812 27.2578 11.908L28.2118 12.214C29.3398 12.574 30.2038 13.036 30.8038 13.6C31.4158 14.152 31.7218 14.908 31.7218 15.868C31.7218 16.888 31.3198 17.716 30.5158 18.352C29.7118 18.976 28.5298 19.288 26.9697 19.288C26.4178 19.288 25.9018 19.24 25.4218 19.144C24.9538 19.06 24.5398 18.934 24.1798 18.766C23.8318 18.586 23.5558 18.37 23.3518 18.118C23.1598 17.854 23.0638 17.554 23.0638 17.218C23.0638 16.87 23.1658 16.576 23.3698 16.336C23.5738 16.084 23.7958 15.892 24.0358 15.76C24.3718 16.024 24.7798 16.252 25.2598 16.444C25.7518 16.636 26.2858 16.732 26.8618 16.732C27.4498 16.732 27.8638 16.642 28.1038 16.462C28.3438 16.282 28.4638 16.072 28.4638 15.832C28.4638 15.592 28.3678 15.412 28.1758 15.292C27.9838 15.16 27.7138 15.034 27.3658 14.914L26.6098 14.662ZM39.0601 10.288C38.1361 10.288 37.4281 10.57 36.9361 11.134C36.4441 11.698 36.1981 12.496 36.1981 13.528C36.1981 14.572 36.4681 15.376 37.0081 15.94C37.5601 16.504 38.2981 16.786 39.2221 16.786C39.7141 16.786 40.1281 16.72 40.4641 16.588C40.8121 16.456 41.1421 16.306 41.4541 16.138C41.6581 16.306 41.8141 16.51 41.9221 16.75C42.0421 16.978 42.1021 17.248 42.1021 17.56C42.1021 18.052 41.8261 18.472 41.2741 18.82C40.7341 19.156 39.9061 19.324 38.7901 19.324C37.9861 19.324 37.2301 19.21 36.5221 18.982C35.8141 18.754 35.1961 18.406 34.6681 17.938C34.1401 17.458 33.7201 16.858 33.4081 16.138C33.1081 15.406 32.9581 14.536 32.9581 13.528C32.9581 12.592 33.1021 11.77 33.3901 11.062C33.6901 10.342 34.0921 9.736 34.5961 9.244C35.1121 8.752 35.7121 8.38 36.3961 8.128C37.0801 7.876 37.8121 7.75 38.5921 7.75C39.6961 7.75 40.5481 7.93 41.1481 8.29C41.7601 8.65 42.0661 9.112 42.0661 9.676C42.0661 9.988 41.9881 10.258 41.8321 10.486C41.6761 10.714 41.4961 10.894 41.2921 11.026C40.9801 10.822 40.6441 10.648 40.2841 10.504C39.9361 10.36 39.5281 10.288 39.0601 10.288ZM52.9468 10.288C52.0228 10.288 51.3148 10.57 50.8228 11.134C50.3308 11.698 50.0848 12.496 50.0848 13.528C50.0848 14.572 50.3548 15.376 50.8948 15.94C51.4468 16.504 52.1848 16.786 53.1088 16.786C53.6008 16.786 54.0148 16.72 54.3508 16.588C54.6988 16.456 55.0288 16.306 55.3408 16.138C55.5448 16.306 55.7008 16.51 55.8088 16.75C55.9288 16.978 55.9888 17.248 55.9888 17.56C55.9888 18.052 55.7128 18.472 55.1608 18.82C54.6208 19.156 53.7928 19.324 52.6768 19.324C51.8728 19.324 51.1168 19.21 50.4088 18.982C49.7008 18.754 49.0828 18.406 48.5548 17.938C48.0268 17.458 47.6068 16.858 47.2948 16.138C46.9948 15.406 46.8448 14.536 46.8448 13.528C46.8448 12.592 46.9888 11.77 47.2768 11.062C47.5768 10.342 47.9788 9.736 48.4828 9.244C48.9988 8.752 49.5988 8.38 50.2828 8.128C50.9668 7.876 51.6988 7.75 52.4788 7.75C53.5828 7.75 54.4348 7.93 55.0348 8.29C55.6468 8.65 55.9528 9.112 55.9528 9.676C55.9528 9.988 55.8748 10.258 55.7188 10.486C55.5628 10.714 55.3828 10.894 55.1788 11.026C54.8668 10.822 54.5308 10.648 54.1708 10.504C53.8228 10.36 53.4148 10.288 52.9468 10.288ZM57.668 9.766C57.668 9.25 57.818 8.842 58.118 8.542C58.418 8.242 58.826 8.092 59.342 8.092H65.282C65.366 8.224 65.438 8.398 65.498 8.614C65.57 8.83 65.606 9.058 65.606 9.298C65.606 9.754 65.504 10.078 65.3 10.27C65.108 10.462 64.85 10.558 64.526 10.558H60.728V12.232H64.778C64.862 12.364 64.934 12.538 64.994 12.754C65.066 12.958 65.102 13.18 65.102 13.42C65.102 13.876 65.006 14.2 64.814 14.392C64.622 14.584 64.364 14.68 64.04 14.68H60.728V16.57H65.354C65.438 16.702 65.51 16.876 65.57 17.092C65.642 17.308 65.678 17.536 65.678 17.776C65.678 18.232 65.576 18.562 65.372 18.766C65.18 18.958 64.922 19.054 64.598 19.054H59.342C58.826 19.054 58.418 18.904 58.118 18.604C57.818 18.304 57.668 17.896 57.668 17.38V9.766ZM77.4114 18.622C77.2434 18.79 76.9974 18.916 76.6734 19C76.3614 19.096 75.9834 19.144 75.5394 19.144C75.0954 19.144 74.6754 19.078 74.2794 18.946C73.8834 18.814 73.5594 18.496 73.3074 17.992L71.5254 14.356C71.3454 13.984 71.1834 13.636 71.0394 13.312C70.8954 12.976 70.7394 12.592 70.5714 12.16L70.4634 12.178C70.5114 12.826 70.5354 13.486 70.5354 14.158C70.5474 14.83 70.5534 15.49 70.5534 16.138V18.928C70.4214 18.964 70.2174 19 69.9414 19.036C69.6774 19.072 69.4134 19.09 69.1494 19.09C68.8854 19.09 68.6514 19.072 68.4474 19.036C68.2434 19 68.0754 18.928 67.9434 18.82C67.8114 18.712 67.7094 18.568 67.6374 18.388C67.5654 18.196 67.5294 17.95 67.5294 17.65V8.65C67.6974 8.41 67.9554 8.23 68.3034 8.11C68.6514 7.99 69.0234 7.93 69.4194 7.93C69.8634 7.93 70.2834 8.002 70.6794 8.146C71.0874 8.278 71.4114 8.59 71.6514 9.082L73.4514 12.718C73.6314 13.09 73.7934 13.444 73.9374 13.78C74.0814 14.104 74.2374 14.482 74.4054 14.914L74.4954 14.896C74.4474 14.248 74.4174 13.6 74.4054 12.952C74.3934 12.304 74.3874 11.656 74.3874 11.008V8.092C74.5194 8.056 74.7174 8.02 74.9814 7.984C75.2574 7.948 75.5274 7.93 75.7914 7.93C76.3194 7.93 76.7214 8.026 76.9974 8.218C77.2734 8.398 77.4114 8.782 77.4114 9.37V18.622ZM79.2422 10.612C79.1582 10.48 79.0802 10.3 79.0082 10.072C78.9362 9.844 78.9002 9.604 78.9002 9.352C78.9002 8.884 79.0022 8.548 79.2062 8.344C79.4222 8.14 79.6982 8.038 80.0342 8.038H87.8822C87.9662 8.17 88.0442 8.35 88.1162 8.578C88.1882 8.806 88.2242 9.046 88.2242 9.298C88.2242 9.766 88.1162 10.102 87.9002 10.306C87.6962 10.51 87.4262 10.612 87.0902 10.612H85.0922V18.928C84.9602 18.964 84.7502 19 84.4622 19.036C84.1862 19.072 83.9102 19.09 83.6342 19.09C83.3582 19.09 83.1122 19.066 82.8962 19.018C82.6922 18.982 82.5182 18.91 82.3742 18.802C82.2302 18.694 82.1222 18.544 82.0502 18.352C81.9782 18.16 81.9422 17.908 81.9422 17.596V10.612H79.2422ZM92.8801 15.472V18.928C92.7481 18.964 92.5381 19 92.2501 19.036C91.9741 19.072 91.6981 19.09 91.4221 19.09C91.1461 19.09 90.9001 19.066 90.6841 19.018C90.4801 18.982 90.3061 18.91 90.1621 18.802C90.0301 18.694 89.9281 18.544 89.8561 18.352C89.7841 18.16 89.7481 17.908 89.7481 17.596V9.118C89.7481 8.866 89.8141 8.674 89.9461 8.542C90.0901 8.398 90.2821 8.284 90.5221 8.2C90.9301 8.056 91.4041 7.954 91.9441 7.894C92.4841 7.822 93.0601 7.786 93.6721 7.786C95.3281 7.786 96.5761 8.134 97.4161 8.83C98.2561 9.526 98.6761 10.468 98.6761 11.656C98.6761 12.4 98.4841 13.036 98.1001 13.564C97.7161 14.092 97.2601 14.5 96.7321 14.788C97.1641 15.376 97.5901 15.928 98.0101 16.444C98.4301 16.96 98.7601 17.428 99.0001 17.848C98.8801 18.268 98.6581 18.592 98.3341 18.82C98.0221 19.036 97.6681 19.144 97.2721 19.144C97.0081 19.144 96.7801 19.114 96.5881 19.054C96.3961 18.994 96.2281 18.91 96.0841 18.802C95.9401 18.694 95.8081 18.562 95.6881 18.406C95.5681 18.25 95.4541 18.082 95.3461 17.902L93.8341 15.472H92.8801ZM94.0141 13.078C94.4701 13.078 94.8301 12.964 95.0941 12.736C95.3581 12.496 95.4901 12.148 95.4901 11.692C95.4901 11.236 95.3401 10.894 95.0401 10.666C94.7521 10.426 94.2901 10.306 93.6541 10.306C93.4741 10.306 93.3301 10.312 93.2221 10.324C93.1141 10.336 92.9941 10.354 92.8621 10.378V13.078H94.0141ZM100.717 9.766C100.717 9.25 100.867 8.842 101.167 8.542C101.467 8.242 101.875 8.092 102.391 8.092H108.331C108.415 8.224 108.487 8.398 108.547 8.614C108.619 8.83 108.655 9.058 108.655 9.298C108.655 9.754 108.553 10.078 108.349 10.27C108.157 10.462 107.899 10.558 107.575 10.558H103.777V12.232H107.827C107.911 12.364 107.983 12.538 108.043 12.754C108.115 12.958 108.151 13.18 108.151 13.42C108.151 13.876 108.055 14.2 107.863 14.392C107.671 14.584 107.413 14.68 107.089 14.68H103.777V16.57H108.403C108.487 16.702 108.559 16.876 108.619 17.092C108.691 17.308 108.727 17.536 108.727 17.776C108.727 18.232 108.625 18.562 108.421 18.766C108.229 18.958 107.971 19.054 107.647 19.054H102.391C101.875 19.054 101.467 18.904 101.167 18.604C100.867 18.304 100.717 17.896 100.717 17.38V9.766Z" fill="white" />
                    </svg>
                </div>
                <div className="mobile" onClick={showNavbar}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66667 7C9.11438 7 8.66667 6.55228 8.66667 6V5C8.66667 4.44772 9.11438 4 9.66667 4H25C25.5523 4 26 4.44772 26 5V6C26 6.55228 25.5523 7 25 7H9.66667Z" fill="#8B2860" /><path d="M0 13.5C0 14.0523 0.447716 14.5 1 14.5H25C25.5523 14.5 26 14.0523 26 13.5V12.5C26 11.9477 25.5523 11.5 25 11.5H1C0.447715 11.5 0 11.9477 0 12.5V13.5Z" fill="#8B2860" /><path d="M8.66667 21C8.66667 21.5523 9.11438 22 9.66667 22H25C25.5523 22 26 21.5523 26 21V20C26 19.4477 25.5523 19 25 19H9.66667C9.11438 19 8.66667 19.4477 8.66667 20V21Z" fill="#8B2860" /></svg>
                </div>
                    <div className="menu" ref={navRef}>
                        <a href="#sec1">Магазины и услуги</a>
                        <a href="/#">Покушать</a>
                        <a href="/#">Отдых и развлечение</a>
                        <a href="#sec2">Новости и акции</a>
                        <a href="#sec3">Для арендаторов</a>
                        <a href="/#">Контакты</a>
                    </div>
            </nav>
            <center>
                <div className="play">
                    <svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1_649)"><g filter="url(#filter1_d_1_649)"><circle cx="72" cy="68" r="45" fill="#AEC60B" /></g><path d="M85.5 66.634C86.1667 67.0189 86.1667 67.9811 85.5 68.366L65.25 80.0574C64.5833 80.4423 63.75 79.9611 63.75 79.1913L63.75 55.8087C63.75 55.0389 64.5833 54.5577 65.25 54.9426L85.5 66.634Z" fill="white" /></g><defs><filter id="filter0_d_1_649" x="0" y="0" width="144" height="144" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="4" /><feGaussianBlur stdDeviation="13.5" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_649" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_649" result="shape" /></filter><filter id="filter1_d_1_649" x="23" y="23" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" /><feOffset dy="4" /><feGaussianBlur stdDeviation="2" /><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" /><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_649" /><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_649" result="shape" /></filter></defs></svg>
                </div>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </center>
        </header>
    )
}

export default Header;