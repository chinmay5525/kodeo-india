import './Home.css'
import ImageOne from '../assets/image.png'
import SectorOne from '../assets/sectors/SectorOne.jpg'
import SectorTwo from '../assets/sectors/SectorTwo.jpg'
import SectorThree from '../assets/sectors/SectorThree.jpg'
import WorkOne from '../assets/work/WorkOne.jpg'
import WorkTwo from '../assets/work/WorkTwo.jpg'
import WorkThree from '../assets/work/WorkThree.jpg'
import MainImage from '../assets/main.jpg'
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
    const serviceRows = [
        ['UI/UX Design', 'Mobile Applications Development', 'Paid Social', 'Branding', 'Design Audit'],
        ['Website Design and Development', 'Digital Management', 'Platform Consulting'],
        ['Explainer Videos', 'Mobile App Design', '3D Illustrations', 'Motion Design System'],
        ['Illustrations and Iconography']
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
    const [characterCount, setCharacterCount] = useState(0);

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
                            <div className="py-5">
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
            <section className='services-section-full'>
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
            </section>

            <section className='case-study-section'>
                <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 15px" }} className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className='case-heading'>Case Studies</h2>
                    <button className="btn btn-danger rounded-pill">See All</button>
                </div>

                <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 15px" }}>
                    {/* Header Section */}

                    {/* First Row */}
                    <div className="row g-4 align-items-center">
                        {/* Left: Two Boxes Side by Side */}
                        <div className="col-md-8">
                            <div className="d-flex gap-4">
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                            </div>
                        </div>
                        {/* Right: Two Headings with Text */}
                        <div className="col-md-4">
                            <div className="mb-5">
                                <h5 className='case-studies-heading'>Transforming the Smart City Vision: Lucknow AI City</h5>

                                <p className='text-muted'>
                                    Kodeo partnered with Lucknow AI City to design an intuitive digital platform that reflects the city's forward-thinking vision. Our team crafted a clean, user-centric interface that makes complex data easily accessible for residents and stakeholders.
                                </p>
                            </div>
                            <div>
                                <h5 className='case-studies-heading'>Innovating for Social Impact: Kumbathon’s Digital Transformation</h5>

                                < p className='text-muted'>
                                    For Kumbathon, an initiative focused on solving social challenges, Kodeo created a vibrant and engaging online presence. By aligning the branding with the spirit of innovation, we developed a platform that effectively communicates Kumbathon’s mission, showcases its projects, and attracts collaborators.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="row g-4 pt-5 align-items-center">
                        {/* Left: Two Headings with Text */}
                        <div className="col-md-4 ">
                            <div className="mb-5">
                                <h5 className='case-studies-heading'>Revolutionizing Banking Experiences: Utkarsh Small Finance Bank</h5>

                                <p className='text-muted'>
                                    Kodeo collaborated with Utkarsh Small Finance Bank to enhance their digital banking platforms. Through user research, we identified key pain points and reimagined the user journey for their mobile app and website.
                                </p>
                            </div>
                            <div>
                                <h5 className='case-studies-heading'>Transforming Healthcare Access: Fortis Mobile App Revamp</h5>

                                <p className='text-muted'>
                                    Kodeo redesigned the Fortis Hospitals mobile app to provide a more user-friendly and comprehensive patient experience. From online appointment scheduling to accessing medical records and teleconsultations, the revamped app prioritized patient convenience.
                                </p>
                            </div>
                        </div>
                        {/* Right: Two Boxes Side by Side */}
                        <div className="col-md-8">
                            <div className="d-flex gap-4">
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                                <div className="bg-light flex-fill" style={{ height: "450px" }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="row g-4  pt-5">
                        {/* Three Boxes */}
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>
                            <h5 className='case-studies-heading'>Optimizing Logistics: Adani Group’s Supply Chain Dashboard</h5>
                            <p className='text-muted'>Kodeo developed a cutting-edge supply chain management dashboard for the Adani Group. By providing real-time insights, predictive analytics, and intuitive navigation, we enabled the Adani team to optimize logistics and enhance operational efficiency.

                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>
                            <h5 className='case-studies-heading'>Designing for the Metaverse</h5>

                            <p className='text-muted'>
                                Creating intuitive and engaging interfaces for the metaverse
                                requires innovation.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-light mb-3" style={{ height: "250px" }}></div>

                            <h5 className='case-studies-heading'>Inclusive Digital Spaces</h5>
                            <p className='text-muted'>
                                Designing digital spaces that are accessible to everyone fosters
                                inclusivity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <img src={ImageOne} alt="fireSpot" loading="lazy" className="responsive-image" />
            </section>

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


            <section className='location-section'>
                <div>
                    <div>
                        <h1 className="locations">
                            Culture-Driven UI/UX <br />
                            & Development Excellence
                        </h1>
                        <p className='location-subheading'>We're a group of 180+ creative minds spread <br /> across 4 countries touching billions of lives <br />through design.</p>
                        <div className="countries-container">
                            <div className="countries-grid">
                                <div>India <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                                <div>United Kingdom <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                                <div>UAE <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                                <div>Singapore <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                                <div>Russia <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                                <div>South Africa <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                                <div>Kazakhstan <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368"><path d="M215.39-180 180-215.39l474.36-474.35H361.9V-740H740v378.1h-50.26v-292.46L215.39-180Z" /></svg></div>
                            </div>
                        </div>
                        <div className='pt-5 pb-3'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm">
                                        <img src={WorkOne} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={WorkTwo} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                    <div className="col-sm">
                                        <img src={WorkThree} alt="fireSpot" loading="lazy" className="work-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
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

                        <div className="col-md-8">
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
                        <h1 className='sectors'>Helping Governments, Industries and Public Sectors</h1>
                    </div>
                    <div>
                        <div className="container">
                            <div className="row sectors-row">
                                <div className="col-sm">
                                    <img src={SectorOne} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Governments</h5>
                                    <p className='text-muted'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>

                                </div>
                                <div className="col-sm">
                                    <img src={SectorTwo} alt="fireSpot" loading="lazy" className="sector-image" />
                                    <h5 className='sectors-subhead'>Public Sectors</h5>
                                    <p className='text-muted'>The metaverse is a virtual world where users interact with each other as avatars in a 3D space. We also help the governments to have the same. </p>
                                    <button className="learn-more-2">Learn More <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="M222.15-180 180-222.15 637.85-680H360v-60h380v380h-60v-277.85L222.15-180Z" /></svg></button>

                                </div>
                                <div className="col-sm">
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
                <div className='contact-section-flex'>
                    <div>
                        <h1 className='contact'>Let's make cool products <br /> together</h1>
                    </div>
                    <div className="contact-form-wrapper">
                        <div className="container py-5">


                            <form onSubmit={handleSubmit}>
                                <div className="row mb-5 g-4">
                                    <div className="col-md-4">
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
                                    <div className="col-md-4">
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
                                    <div className="col-md-4">
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
                                </div>

                                <div className="mb-5">
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
                                    <small className="text-muted mt-2 d-block">
                                        {characterCount}/225
                                    </small>
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
