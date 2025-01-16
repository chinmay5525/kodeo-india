import './Home.css'
import SectorTwo from '../assets/sectors/SectorTwo.jpg'
import SectorThree from '../assets/sectors/SectorThree.jpg'
import WorkOne from '../assets/work/WorkOne.jpg'
import WorkTwo from '../assets/work/WorkTwo.jpg'
import WorkThree from '../assets/work/WorkThree.jpg'
import MainImage from '../assets/main.jpg'
import India from '../assets/flags/india.png'
import GB from '../assets/flags/uk.png'
import Singapore from '../assets/flags/Singapore.png'
import UAE from '../assets/flags/uae.png'
import Russia from '../assets/flags/russia.png'
import RSA from '../assets/flags/rsa.png'
import Kazakstan from '../assets/flags/kz.png'

import SourceCodeIcon from '../assets/services-icons/service.png';
import PeopleFillIcon from '../assets/services-icons/team.png';
import ShieldFillCheckIcon from '../assets/services-icons/cyber.png';
import CodeSlashIcon from '../assets/services-icons/dev.png';
import PhoneFillIcon from '../assets/services-icons/mobile.png';
import CloudFillIcon from '../assets/services-icons/cloud.png';
import EmailIcon from '../assets/services-icons/email.png'

import CostEffective from '../assets/services-icons/growth.png';
import InnovativeTechnology from '../assets/services-icons/mobile.png';
import IndustryExperts from '../assets/services-icons/technology.png';
import Scalability from '../assets/services-icons/scale.png'



// Define types for tab content
interface TabContent {
    title: string;
    description: string;
    image: string;
}

interface TabsContent {
    [key: string]: TabContent;
}


import { useEffect, useState } from 'react'
const Home = () => {
    const solutions = [
        {
            icon: SourceCodeIcon,
            title: "Managed Services",
            description: "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT."
        },
        {
            icon: PeopleFillIcon,
            title: "IT Consulting & Advisory",
            description: "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth"
        },
        {
            icon: ShieldFillCheckIcon,
            title: "Cyber Security",
            description: "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data."
        },
        {
            icon: CodeSlashIcon,
            title: "Web Development",
            description: "Our web development services can help you establish an impactful online presence and reach your target audience effectively."
        },
        {
            icon: PhoneFillIcon,
            title: "Mobile Development",
            description: "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms."
        },
        {
            icon: CloudFillIcon,
            title: "Cloud Services",
            description: "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals."
        }
    ];


    const industries = [
        {
            name: 'Industry & Manufacturing',
            icon: '/path/to/industry-icon.jpg'  // Replace with actual image path
        },
        {
            name: 'Transportation & Logistics',
            icon: '/path/to/transport-icon.jpg'  // Replace with actual image path
        },
        {
            name: 'Healthcare',
            icon: '/path/to/healthcare-icon.jpg'  // Replace with actual image path
        },
        {
            name: 'Banks & Insurance',
            icon: '/path/to/bank-icon.jpg'  // Replace with actual image path
        },
        {
            name: 'Consulting Providers',
            icon: '/path/to/consulting-icon.jpg'  // Replace with actual image path
        },
        {
            name: 'Non-Profit',
            icon: '/path/to/nonprofit-icon.jpg'  // Replace with actual image path
        }
    ];

    const stats = [
        { number: "1B+", label: "Lives Touched" },
        { number: "322+", label: "Delivered Projects" },
        { number: "300+", label: "Clients" },
        { number: "30+", label: "Global Awards" },
    ];
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: ''
    });
    const announcements = [
        {
            logos: [
                {
                    src: "/api/placeholder/120/40",
                    alt: "Mothercare"
                },
                {
                    src: "/api/placeholder/120/40",
                    alt: "RBL"
                }
            ],
            title: "Mothercare plc and Reliance Brands Holding UK Limited announce strategic Joint Venture for South Asia",
            type: "RIL COMMUNICATION",
            date: "17 OCT, 2024"
        },
        {
            logos: [
                {
                    src: "/api/placeholder/120/40",
                    alt: "Reliance Industries"
                }
            ],
            title: "RIL Q2 FY2025 Financial and Operational Performance",
            type: "RIL COMMUNICATION",
            date: "14 OCT, 2024"
        },
        {
            logos: [
                {
                    src: "/api/placeholder/120/40",
                    alt: "Delta Galil"
                },
                {
                    src: "/api/placeholder/120/40",
                    alt: "Reliance Retail"
                }
            ],
            title: "Reliance Retail Ventures and Delta Galil Announce Strategic Partnership in India",
            type: "RIL COMMUNICATION",
            date: "10 SEP, 2024"
        },
        {
            logos: [
                {
                    src: "/api/placeholder/120/40",
                    alt: "Sample Logo 4"
                }
            ],
            title: "Fourth Announcement Title Goes Here",
            type: "RIL COMMUNICATION",
            date: "05 SEP, 2024"
        },
        {
            logos: [
                {
                    src: "/api/placeholder/120/40",
                    alt: "Sample Logo 5"
                }
            ],
            title: "Fifth Announcement Title Goes Here",
            type: "RIL COMMUNICATION",
            date: "01 SEP, 2024"
        }
    ];
    const [, setCharacterCount] = useState(0);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'project') {
            setCharacterCount(value.length);
        }
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const blogs = [
        {
            id: 1,
            title: "The Power of First Impressions: Why UI/UX Design Matters for Your Brand",
            description: "First impressions can make or break a brand's connection with its audience. This blog explores how thoughtful UI/UX design can create a seamless and engaging experience, build trust, and influence users' decisions. Learn why design is more than just aesthetics—it's about functionality too.",
            image: "src/assets/articles/mv.png",
            date: "December 26, 2024"
        },
        {
            id: 2,
            title: "Building a Brand Identity: Beyond the Logo",
            description: "A strong brand is more than a memorable logo; it’s an experience. Dive into the essential elements of brand identity, including typography, color schemes, imagery, and voice. Discover how these components come together to tell your brand's story and set you apart from competitors.",
            image: "src/assets/articles/mv.png",
            date: "December 25, 2024"
        }
    ];

    const smallerBlogs = [
        {
            id: 3,
            title: "Top 5 UI/UX Trends to Watch in 2025",
            description: "Stay ahead of the curve with the latest trends shaping the UI/UX industry. From AI-driven personalization to immersive animations and minimalist aesthetics.",
            image: "src/assets/articles/mv.png",
        },
        {
            id: 4,
            title: "How to Create a Seamless User Journey Through UX Design",
            description: "An exceptional user journey is key to a successful product. ",
            image: "src/assets/articles/mv.png",
        },
        {
            id: 5,
            title: "Branding for Startups: Tips to Stand Out in a Crowded Market",
            description: "In a competitive world, startups need a unique identity to thrive. Learn practical tips to build a memorable brand, even with limited resources.",
            image: "src/assets/articles/mv.png",
        }
    ];



    const tabsContent: TabsContent = {
        sustainability: {
            title: "Sustainability",
            description: "Your sustainability description here",
            image: "/path/to/sustainability-image.jpg"
        },
        innovation: {
            title: "Innovation",
            description: "Your innovation description here",
            image: "/path/to/innovation-image.jpg"
        },
        digital: {
            title: "Digital Services",
            description: "Your impact description here",
            image: "/path/to/impact-image.jpg"
        },
        energy: {
            title: "Energy",
            description: "Your Energy description here",
            image: "/path/to/impact-image.jpg"
        },
        media: {
            title: "Media & Entertainment",
            description: "Your Media description here",
            image: "/path/to/impact-image.jpg"
        },
        sports: {
            title: "Sports",
            description: "Your Media description here",
            image: "/path/to/impact-image.jpg"
        }
    };

    const [activeTab, setActiveTab] = useState<keyof typeof tabsContent>('sustainability');

    const [dots, setDots] = useState<Dot[]>([]);
    interface Dot {
        id: number;
        left: number;
        delay: number;
        size: number;
    }

    useEffect(() => {
        const createDot = () => ({
            id: Math.random(),
            left: Math.random() * 100,
            delay: Math.random() * 5,
            size: 5 + Math.random() * 3
        });

        const generateDots = () => {
            const newDots = Array.from({ length: 40 }, createDot);
            setDots(newDots);
        };

        generateDots();
        const interval = setInterval(generateDots, 8000);
        return () => clearInterval(interval);
    }, []);



    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024); // Adjusted breakpoint for tablets and smaller devices
        };

        // Check screen size on load and resize
        handleResize();
        window.addEventListener("resize", handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            const carouselElement = document.querySelector("#workCarousel");
            if (carouselElement) {
                new window.bootstrap.Carousel(carouselElement, {
                    interval: 3000, // Auto-slide every 3 seconds
                    ride: "carousel",
                    touch: true, // Enable swipe gestures
                });
            }
        }
    }, [isMobile]);

    return (
        <div>
            <section className="landing-section">
                <div className="dots-container">
                    {dots.map((dot) => (
                        <div
                            key={dot.id}
                            className="animated-dot"
                            style={{
                                left: `${dot.left}%`,
                                width: `${dot.size}px`,
                                height: `${dot.size}px`,
                                animationDelay: `${dot.delay}s`
                            }}
                        />
                    ))}
                </div>

                <div className="container-fluid p-0 main-content">
                    <div className="row g-0">
                        <div className="col-md-6 d-flex align-items-center bg-white p-5">
                            <div className="">
                                <h1 className="headline text-dark mb-4">
                                    FAST, FRESH,<br />
                                    AND FUTURE—<br />
                                    PROOF
                                </h1>
                                <button className="btn btn-danger rounded-pill px-4 py-2">
                                    Take Forward Now
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="image-container">
                                <img
                                    src={MainImage}
                                    alt="Team meeting"
                                    className="main-image"
                                />
                            </div>
                        </div>

                        <div className="col-12 bg-white">
                            <div className="container py-4">
                                <div className="row justify-content-between px-md-5">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="col-6 col-md-3 text-center mb-3 mb-md-0">
                                            <p className="fw-bold stats-number mb-0">{stat.number}</p>
                                            <p className="text-muted mb-0">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='services-section-full'>
                <div className="container service-section">
                    <div className="row">
                        <div className="col-12 p-0">
                            <h1 className="main-heading mb-4">
                                At KODEO, we offer expert digital services from platform consulting to digital management, designed to refine and elevate your <br></br>online presence.
                            </h1>

                            <p className="sub-heading mb-4">
                                Interact with your users on the platforms they prefer. Web and mobile -<br /> we have you covered.
                            </p>

                            <div className="services-container">
                                {serviceRows.map((row, rowIndex) => (
                                    <div key={rowIndex} className="service-row">
                                        {row.map((service, index) => (
                                            <div
                                                key={`${rowIndex}-${index}`}
                                                className="service-pill"
                                            >
                                                {service}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="solutions-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="title">Solutions</h2>
                    </div>

                    <div className="row g-4">
                        {solutions.map((solution, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="solution-card">
                                    <div className="icon-wrapper">
                                        <img src={solution.icon} alt={`${solution.title} icon`} className="solution-icon" />
                                    </div>
                                    <p className="card-title">{solution.title}</p>
                                    <p className="card-description">{solution.description}</p>
                                    <a href="#" className="learn-more-2">Learn more</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <button className="subscribe-btn">View All Solutions</button>
                    </div>
                </div>
            </section>

            <section className="industry-section py-5">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="main-title">
                            Solving IT challenges in every<br />industry, every day.
                        </h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="industry-tags d-flex flex-wrap justify-content-center gap-3">
                                {industries.map((industry, index) => (
                                    <div key={index} className="industry-tag">
                                        <img
                                            src={industry.icon}
                                            alt={industry.name}
                                            className="industry-icon"
                                        />
                                        <span>{industry.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <a href="#" className="view-all-link">View All Industries</a>
                    </div>
                </div>
            </section>

            {/* 
            <section className='industries-color'>
                <div className='d-flex industries-wrapper'>
                    <div className='heading-container' style={{ flex: '1 1 50%', backgroundColor: '#F7F4F2' }}>
                        <h1 className='industries-heading'>Reimagine Industries <br /> through Designs</h1>
                        <p className='industries-para'>From agriculture, e-commerce, edtech and enterprise <br />solutions to fintech, healthcare, hospitality, IOT and HR solutions, <br />we have designed it all.</p>
                    </div>
                    <div className='grid-container' style={{ flex: '1 1 50%', backgroundColor: 'white', padding: '4rem' }}>
                        <div className='container'>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Fintech</h5>
                                    <p className='text-muted'>Revolutionizing financial services through technology by enabling seamless transactions, improved user experiences, and secure solutions for global financial operations.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Health Tech</h5>
                                    <p className='text-muted'>Empowering healthcare with innovative solutions, from patient monitoring wearables to telemedicine, and streamlined electronic health records for better patient outcomes.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Sports</h5>
                                    <p className='text-muted'>Enhancing athletic performance and fan experiences with data analytics, wearable technology, and immersive digital solutions for the sports industry.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Enterprise</h5>
                                    <p className='text-muted'>Driving enterprise growth with tailored digital solutions, optimizing workflows, and enabling smart business operations for large organizations.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>E-Commerce/Marketplace</h5>
                                    <p className='text-muted'>Transforming online shopping experiences through scalable platforms, secure payment systems, and personalized customer engagement strategies.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>IT/Consulting</h5>
                                    <p className='text-muted'>Providing expertise in technology integration, infrastructure development, and strategic consulting to help businesses thrive in the digital age.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Media and Entertainment</h5>
                                    <p className='text-muted'>Innovating content delivery, enhancing user engagement, and driving new revenue streams in the media and entertainment industry.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Internet of Things</h5>
                                    <p className='text-muted'>Connecting devices and systems to create smart environments, improving efficiency, and offering new levels of convenience in everyday life.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                            </div>
                            <div className='row grid-row'>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>Venture Capitalists</h5>
                                    <p className='text-muted'>Supporting startups and innovation with strategic investments, fostering growth in diverse industries through financial backing.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                                <div className='col-sm grid-col'>
                                    <h5 className='industries-subhead'>For a Cause</h5>
                                    <p className='text-muted'>Leveraging technology to promote social good and empower communities, and address pressing global challenges effectively.</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 */}



            <section className='sustain'>
                <div className="container px-0">
                    {/* Added px-0 to remove padding */}
                    <div className="sustain-cot">
                        <ul className="nav nav-tabs border-0">
                            {Object.keys(tabsContent).map((key) => (
                                <li className="nav-item" key={key}>
                                    <button
                                        className={`nav-link ${activeTab === key ? "active-tab" : ""}`}
                                        onClick={() => setActiveTab(key)}
                                    >
                                        {tabsContent[key].title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="tab-content mt-4">
                            {/* Changed row class to have no gutters */}
                            <div className="row g-0 align-items-center">
                                <div className="col-md-6 pe-md-4">
                                    {/* Added pe-md-4 for spacing between columns on md+ screens */}
                                    <h2>{tabsContent[activeTab].title}</h2>
                                    <p>{tabsContent[activeTab].description}</p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>

                                </div>
                                <div className="col-md-6 text-center">
                                    <img
                                        src={tabsContent[activeTab].image}
                                        alt={tabsContent[activeTab].title}
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container features-container">
                    <div className="row">

                        <div className="col-sm">
                            <img className='features-icons' src={CostEffective} />
                            <p className='features-heading'>Cost Effective</p>
                            <p className='features-subheading text-muted'>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</p>

                        </div>
                        <div className="col-sm">
                            <img className='features-icons' src={InnovativeTechnology} />
                            <p className='features-heading'>Innovative Technology
                            </p>
                            <p className='features-subheading text-muted'>We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.

                            </p>
                        </div>
                        <div className="col-sm">
                            <img className='features-icons' src={IndustryExperts} />
                            <p className='features-heading'>Industry Expertise</p>
                            <p className='features-subheading text-muted'>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.

                            </p>                        </div>
                        <div className="col-sm">
                            <img className='features-icons' src={Scalability} />
                            <p className='features-heading'>Scalability</p>
                            <p className='features-subheading text-muted'>Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.</p>
                        </div>
                        <hr style={{ borderColor: '#00000026' }} />



                        <a href="#" className="view-all-link-2">About Kodeo</a>
                    </div>
                </div>
            </section>
            <section className="location-section">
                <div className='container'>
                    <h1 className="locations">
                        Culture-Driven UI/UX <br />
                        & Development Excellence
                    </h1>
                    <p className="location-subheading">
                        We're a group of 180+ creative minds spread <br />
                        across 4 countries touching billions of lives <br />
                        through design.
                    </p>
                    <div className="countries-container">
                        <div className="countries-grid">
                            <div>
                                <img className='me-2' src={India} alt="Singapore" width="40" height="40" />
                                India
                                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                            <div><img className='me-2' src={GB} alt="Singapore" width="40" height="40" />Great Britian <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                            <div><img className='me-2' src={UAE} alt="Singapore" width="40" height="40" />UAE <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                            <div><img className='me-2' src={Singapore} alt="Singapore" width="40" height="40" />Singapore <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                            <div> <img className='me-2' src={Russia} alt="Singapore" width="40" height="40" />Russia <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                            <div> <img className='me-2' src={RSA} alt="Singapore" width="40" height="40" />South Africa <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                            <div> <img className='me-2' src={Kazakstan} alt="Singapore" width="40" height="40" />Kazakhstan <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                        </div>
                    </div>
                    <div className="pt-3 pb-3">
                        {isMobile ? (
                            // Carousel for Mobile
                            <div
                                id="workCarousel"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={WorkOne}
                                            alt="Work One"
                                            className="d-block w-100 work-image"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={WorkTwo}
                                            alt="Work Two"
                                            className="d-block w-100 work-image"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={WorkThree}
                                            alt="Work Three"
                                            className="d-block w-100 work-image"
                                        />
                                    </div>
                                </div>

                                {/* Hide arrows */}
                                <style>
                                    {`
                  #workCarousel .carousel-control-prev,
                  #workCarousel .carousel-control-next {
                    display: none;
                  }
                `}
                                </style>
                            </div>
                        ) : (
                            // Grid for Desktop/Web
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm">
                                        <img
                                            src={WorkOne}
                                            alt="Work One"
                                            loading="lazy"
                                            className="work-image"
                                        />
                                    </div>
                                    <div className="col-sm">
                                        <img
                                            src={WorkTwo}
                                            alt="Work Two"
                                            loading="lazy"
                                            className="work-image"
                                        />
                                    </div>
                                    <div className="col-sm">
                                        <img
                                            src={WorkThree}
                                            alt="Work Three"
                                            loading="lazy"
                                            className="work-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="blogs-heading">Must Read Articles</h1>
                            <button className="btn btn-danger   rounded-pill mt-3">View Blogs</button>
                        </div>

                        <div className="col-md-8 mobile-rs4">
                            {/* Featured articles */}
                            {blogs.map(blog => (
                                <div key={blog.id} className="card mb-4 border-0">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img
                                                src={blog.image}
                                                className="img-fluid "
                                                alt={blog.title}
                                                style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title-blog" style={{ fontWeight: '600', fontSize: '20px', marginBottom: '1rem' }}>{blog.title}</h5>
                                                <p className="card-text text-muted">{blog.description}</p>
                                                <p className="card-text">
                                                    <small className="text-muted">Posted on {blog.date}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Bottom row articles */}
                            <div className="row">
                                {smallerBlogs.map(blog => (
                                    <div key={blog.id} className="col-md-4 mb-4">
                                        <div className="card border-0 h-100">
                                            <img
                                                src={blog.image}

                                                alt={blog.title}
                                                style={{ height: '200px', objectFit: 'cover' }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title-blog" style={{ fontWeight: '600', fontSize: '20px', marginBottom: '1rem' }}>{blog.title}</h5>
                                                <p className="card-text text-muted">{blog.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='companies-section'>
                <div className='container companies-container'>
                    <div className='content-wrapper'>
                        <div className='text-content'>
                            <img className='email-icon' src={EmailIcon} />
                            <h1 className='headline-2'>
                                Tailored to deliver the best for your <br></br>business
                            </h1>
                            <p className='description'>A flexible and adaptive process that helps<br /> businesses launch and scale quickly.</p>
                        </div>
                        <div className='subscription-area'>

                            <input
                                type='email'
                                className='email-field'
                                placeholder='Enter your email'
                                aria-label='Email Address'
                            />
                            <button className='subscribe-btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>


            <section className='sectors-section'>
                <div>
                    <div>
                        <h1 className='sectors'>Blogs</h1>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row sectors-row">

                                <div className="col-sm mobile-rs">
                                    <img src={SectorTwo} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Public Sectors</h5>
                                    <p className='text-muted'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>

                                </div>

                                <div className="col-sm mobile-rs">
                                    <img src={SectorThree} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Industries</h5>
                                    <p className='text-muted'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>

                                </div>

                                <div className="col-sm mobile-rs">
                                    <img src={SectorThree} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Industries</h5>
                                    <p className='text-muted'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-section'>
                <div className='container contact-section-flex'>
                    <div>
                        <h1 className='contact'>Let's make cool products <br /> together</h1>
                        <p className='contact-subheading'>We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.</p>

                    </div>
                    <div className="contact-form-wrapper">
                        <div className="container py-5">


                            <form onSubmit={handleSubmit}>
                                <div className="row mb-5 g-4">
                                    <div className="col-md-4 mobile-rs2">
                                        <input
                                            type="text"
                                            className="form-control custom-input"
                                            placeholder="Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mobile-rs2">
                                        <input
                                            type="email"
                                            className="form-control custom-input"
                                            placeholder="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mobile-rs2">
                                        <input
                                            type="tel"
                                            className="form-control custom-input"
                                            placeholder="Phone Number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <textarea
                                        className="form-control custom-input"
                                        placeholder="Tell us about your project"
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        rows={1}
                                        maxLength={225}
                                        required
                                    />

                                </div>


                                <div className="mb-4">
                                    <div className="form-check custom-checkbox mb-3">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="privacy"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="privacy">
                                            I agree to the processing of personal data under the terms of the Policy on the processing of personal data of Kodeo Technologies LLC
                                        </label>
                                    </div>

                                    <div className="form-check custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="promotional"
                                        />
                                        <label className="form-check-label" htmlFor="promotional">
                                            I agree to receive promotional emails from Kodeo Technologies LLC
                                        </label>
                                    </div>
                                </div>

                                <div className="text-end">
                                    <button type="submit" className="btn btn-danger rounded-pill px-4">
                                        Forward
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="container-fluid announcement-tab">
                    <h1 className='announcement-title-3'>Announcements</h1>
                    <div className="row g-4">
                        {announcements.map((announcement, index) => (
                            <div key={index} className="five-col-grid">
                                <div className="announcement-item">
                                    <div className="logo-container">
                                        {announcement.logos.map((logo, logoIndex) => (
                                            <img
                                                key={logoIndex}
                                                src={logo.src}
                                                alt={logo.alt}
                                            />
                                        ))}
                                    </div>
                                    <h5 className="announcement-title">
                                        {announcement.title}
                                    </h5>

                                </div>
                                <div className="announcement-meta">
                                    <span>{announcement.type}</span>
                                    <span>|</span>
                                    <span>{announcement.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <button className="btn learn-more-2">
                            More Announcements →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
