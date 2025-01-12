import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const industriesList = [
        'Telecom',
        'Fintech',
        'EdTech',
        'Healthcare',
        'Agriculture',
        'Enterprise',
        'GovTech'
    ];

    const navigationLinks = [
        { title: 'Home', path: '/', isRed: true },
        { title: 'About Us', path: '/about' },
        { title: 'Vacancies', path: '/vacancies' },
        { title: 'Careers', path: '/careers' },
        { title: 'Projects', path: '/projects' }
    ];

    const locations = [
        'India', 'Ukraine', 'Russia', 'United Kingdom',
        'Singapore', 'Shri Lanka', 'Estonia', 'Republic of South Africa'
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    return (
        <>
            {/* Regular Navbar */}
            <nav className="navbar fixed-top">
                <div className="container-fluid px-4">
                    <div className="logo-container">
                        <svg className='kodeo_icon' width="100" height="43" viewBox="0 0 100 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.8 7H10.16L8.44 19.32L17.92 7H23.36L12.4 21L19.44 35H14L7.96 22.72L6.24 35H1.88L5.8 7ZM22.0884 26.8C22.0884 26.2133 22.1018 25.6133 22.1284 25C22.1818 24.36 22.2618 23.6933 22.3684 23C22.6884 20.68 23.1818 18.72 23.8484 17.12C24.5151 15.52 25.3018 14.2267 26.2084 13.24C27.1418 12.2267 28.1551 11.5067 29.2484 11.08C30.3418 10.6267 31.4884 10.4 32.6884 10.4C33.6751 10.4 34.5951 10.56 35.4484 10.88C36.3284 11.2 37.0884 11.72 37.7284 12.44C38.3684 13.16 38.8751 14.0933 39.2484 15.24C39.6218 16.3867 39.8084 17.7733 39.8084 19.4C39.8084 19.9333 39.7818 20.5067 39.7284 21.12C39.6751 21.7067 39.6084 22.3333 39.5284 23C39.2084 25.32 38.7018 27.28 38.0084 28.88C37.3151 30.48 36.5018 31.7867 35.5684 32.8C34.6351 33.7867 33.6084 34.5067 32.4884 34.96C31.3951 35.3867 30.2751 35.6 29.1284 35.6C28.1151 35.6 27.1818 35.44 26.3284 35.12C25.4751 34.8 24.7284 34.2933 24.0884 33.6C23.4751 32.9067 22.9818 32 22.6084 30.88C22.2618 29.76 22.0884 28.4 22.0884 26.8ZM29.7684 31.08C30.3818 31.08 30.9818 30.9467 31.5684 30.68C32.1551 30.4133 32.6884 29.9733 33.1684 29.36C33.6751 28.7467 34.1151 27.92 34.4884 26.88C34.8884 25.84 35.1951 24.5467 35.4084 23C35.4884 22.4667 35.5418 21.96 35.5684 21.48C35.5951 21 35.6084 20.5467 35.6084 20.12C35.6084 19.1333 35.5151 18.3067 35.3284 17.64C35.1684 16.9733 34.9284 16.44 34.6084 16.04C34.2884 15.64 33.9018 15.36 33.4484 15.2C33.0218 15.0133 32.5551 14.92 32.0484 14.92C31.4084 14.92 30.7951 15.0533 30.2084 15.32C29.6218 15.5867 29.0751 16.0267 28.5684 16.64C28.0884 17.2533 27.6618 18.08 27.2884 19.12C26.9151 20.16 26.6218 21.4533 26.4084 23C26.2484 24.12 26.1684 25.1067 26.1684 25.96C26.1684 26.92 26.2484 27.7333 26.4084 28.4C26.5951 29.04 26.8484 29.56 27.1684 29.96C27.4884 30.36 27.8618 30.6533 28.2884 30.84C28.7418 31 29.2351 31.08 29.7684 31.08ZM41.2672 26.84C41.2672 26.2533 41.2939 25.6533 41.3472 25.04C41.4005 24.4 41.4805 23.72 41.5872 23C41.9072 20.76 42.3605 18.88 42.9472 17.36C43.5605 15.84 44.2805 14.6133 45.1072 13.68C45.9339 12.72 46.8272 12.04 47.7872 11.64C48.7739 11.2133 49.7872 11 50.8272 11H55.3472L56.4672 3H60.5472L56.0672 35H47.4672C46.5872 35 45.7605 34.8533 44.9872 34.56C44.2405 34.2667 43.5872 33.8 43.0272 33.16C42.4939 32.52 42.0672 31.68 41.7472 30.64C41.4272 29.6 41.2672 28.3333 41.2672 26.84ZM52.5872 30.48L54.7072 15.52H50.7072C50.1472 15.52 49.6005 15.64 49.0672 15.88C48.5605 16.12 48.0805 16.5333 47.6272 17.12C47.1739 17.68 46.7739 18.44 46.4272 19.4C46.0805 20.36 45.8139 21.56 45.6272 23C45.4672 24.0933 45.3872 25.04 45.3872 25.84C45.3872 26.72 45.4672 27.4667 45.6272 28.08C45.7872 28.6667 46.0005 29.1467 46.2672 29.52C46.5605 29.8667 46.9072 30.12 47.3072 30.28C47.7072 30.4133 48.1339 30.48 48.5872 30.48H52.5872ZM60.3297 26.84C60.3297 26.2533 60.3564 25.6533 60.4097 25.04C60.463 24.4 60.543 23.72 60.6497 23C60.9697 20.76 61.423 18.88 62.0097 17.36C62.623 15.84 63.343 14.6133 64.1697 13.68C64.9964 12.72 65.8897 12.04 66.8497 11.64C67.8364 11.2133 68.8497 11 69.8897 11H73.7697C74.383 11 74.9564 11.0933 75.4897 11.28C76.023 11.4667 76.4897 11.7733 76.8897 12.2C77.2897 12.6267 77.5964 13.1867 77.8097 13.88C78.0497 14.5467 78.1697 15.3733 78.1697 16.36C78.1697 16.68 78.1564 17.0267 78.1297 17.4C78.103 17.7467 78.063 18.1067 78.0097 18.48C77.7964 19.8933 77.4764 21.08 77.0497 22.04C76.6497 23 76.1697 23.7733 75.6097 24.36C75.0497 24.9467 74.423 25.36 73.7297 25.6C73.063 25.84 72.3697 25.96 71.6497 25.96H64.4897C64.543 27.56 64.863 28.72 65.4497 29.44C66.063 30.1333 66.7964 30.48 67.6497 30.48H75.1297L74.5297 35H66.5297C65.6497 35 64.823 34.8533 64.0497 34.56C63.303 34.2667 62.6497 33.8 62.0897 33.16C61.5564 32.52 61.1297 31.68 60.8097 30.64C60.4897 29.6 60.3297 28.3333 60.3297 26.84ZM71.4897 21.48C71.7564 21.48 72.0364 21.4267 72.3297 21.32C72.623 21.1867 72.8897 20.9733 73.1297 20.68C73.3697 20.3867 73.5697 20 73.7297 19.52C73.8897 19.0133 73.9697 18.4 73.9697 17.68C73.9697 16.9067 73.8097 16.36 73.4897 16.04C73.1697 15.6933 72.783 15.52 72.3297 15.52H69.7697C68.7564 15.52 67.8097 15.9867 66.9297 16.92C66.0764 17.8267 65.4097 19.3467 64.9297 21.48H71.4897ZM79.1588 26.8C79.1588 26.2133 79.1721 25.6133 79.1988 25C79.2521 24.36 79.3321 23.6933 79.4388 23C79.7588 20.68 80.2521 18.72 80.9188 17.12C81.5854 15.52 82.3721 14.2267 83.2788 13.24C84.2121 12.2267 85.2254 11.5067 86.3188 11.08C87.4121 10.6267 88.5588 10.4 89.7588 10.4C90.7454 10.4 91.6654 10.56 92.5188 10.88C93.3988 11.2 94.1588 11.72 94.7988 12.44C95.4388 13.16 95.9454 14.0933 96.3188 15.24C96.6921 16.3867 96.8788 17.7733 96.8788 19.4C96.8788 19.9333 96.8521 20.5067 96.7988 21.12C96.7454 21.7067 96.6788 22.3333 96.5988 23C96.2788 25.32 95.7721 27.28 95.0788 28.88C94.3854 30.48 93.5721 31.7867 92.6388 32.8C91.7054 33.7867 90.6788 34.5067 89.5588 34.96C88.4654 35.3867 87.3454 35.6 86.1988 35.6C85.1854 35.6 84.2521 35.44 83.3988 35.12C82.5454 34.8 81.7988 34.2933 81.1588 33.6C80.5454 32.9067 80.0521 32 79.6788 30.88C79.3321 29.76 79.1588 28.4 79.1588 26.8ZM86.8388 31.08C87.4521 31.08 88.0521 30.9467 88.6388 30.68C89.2254 30.4133 89.7588 29.9733 90.2388 29.36C90.7454 28.7467 91.1854 27.92 91.5588 26.88C91.9588 25.84 92.2654 24.5467 92.4788 23C92.5588 22.4667 92.6121 21.96 92.6388 21.48C92.6654 21 92.6788 20.5467 92.6788 20.12C92.6788 19.1333 92.5854 18.3067 92.3988 17.64C92.2388 16.9733 91.9988 16.44 91.6788 16.04C91.3588 15.64 90.9721 15.36 90.5188 15.2C90.0921 15.0133 89.6254 14.92 89.1188 14.92C88.4788 14.92 87.8654 15.0533 87.2787 15.32C86.6921 15.5867 86.1454 16.0267 85.6388 16.64C85.1588 17.2533 84.7321 18.08 84.3588 19.12C83.9854 20.16 83.6921 21.4533 83.4788 23C83.3188 24.12 83.2388 25.1067 83.2388 25.96C83.2388 26.92 83.3188 27.7333 83.4788 28.4C83.6654 29.04 83.9188 29.56 84.2388 29.96C84.5588 30.36 84.9321 30.6533 85.3588 30.84C85.8121 31 86.3054 31.08 86.8388 31.08Z" fill="#F6320B" />
                            <rect x="82" width="18" height="5" fill="#F6320B" />
                        </svg>
                        <span className="hiring-badge">Hiring!</span>
                    </div>


                    <button
                        className="border-0 bg-transparent"
                        onClick={toggleMenu}

                        aria-label="Toggle navigation"
                    >
                        <div className="d-flex flex-column gap-2 ">
                            <div className='hamburger-lines'></div>
                            <div className='hamburger-lines'></div>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Split Screen Navigation Menu */}
            <div className={`split-nav-menu ${isMenuOpen ? 'open' : ''}`}>
                {/* Left Side - Empty with Menu Background */}
                <div className="left-side">
                    <div className="industries-list">
                        {industriesList.map((industry, index) => (
                            <div
                                key={index}
                                className="industry-item"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >

                                {industry}
                                <svg style={{marginLeft:'13px'}} xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg>

                            </div>
                        ))}
                    </div>
                    <div className='icons-container'>
                        <p className='icons-heading'>We are available on</p>
                        <div className='social-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="40px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 26.173828 11 C 22.039828 11 22 21.271 22 21.375 C 22 22.583 21.999078 23.375 22.080078 24.375 C 21.511078 24.178 20.849953 24.052734 20.126953 24.052734 C 15.880953 24.052734 14 28.376875 14 32.046875 C 14 35.507875 16.055391 39 20.650391 39 C 22.817391 39 24.650047 37.659203 26.123047 35.658203 C 27.429047 36.938203 28.796312 36.980469 29.820312 36.980469 C 33.036312 36.980469 35.165641 31.17775 35.931641 28.84375 C 36.175641 28.09675 35.743844 27.300453 34.964844 27.064453 C 34.192844 26.832453 33.355328 27.243234 33.111328 27.990234 C 32.206328 30.746234 31.254 33.28 29.75 34 C 29.225 34.251 28.418 33.924 27.625 32.875 C 29.468 29.148 30 24.621 30 21.5 C 30 12.774 28.135828 11 26.173828 11 z M 26.291016 14.046875 C 26.757016 14.711875 27.044922 16.736047 27.044922 21.498047 C 27.043922 24.026047 26.924234 27.018797 25.990234 29.591797 C 25.374234 27.590797 24.957031 24.892047 24.957031 21.373047 C 24.957031 18.129047 25.682016 15.087875 26.291016 14.046875 z M 20.125 27 C 21.384 27 22.349609 27.808547 22.349609 27.810547 C 22.421609 27.882547 22.500031 27.945 22.582031 28 C 22.995031 29.973 23.630734 31.926734 24.302734 33.177734 C 23.200734 34.979734 21.896 36 20.625 36 C 17.29 36 17 33.362 17 32.125 C 17 31.93 16.939 27 20.125 27 z" /></svg>
                        </div>
                    </div>
                </div>

                {/* Right Side - Navigation */}
                <div className="right-side">


                    {/* Navigation Links */}
                    <div className="nav-links">
                        {navigationLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.path}
                                className={`nav-link ${link.isRed ? 'red-text' : ''}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                    {/* Locations */}
                    <div className="locations-grid">
                        {locations.map((location, index) => (
                            <span key={index} className="location">
                                {location}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;