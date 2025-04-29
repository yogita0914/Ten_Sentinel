import React, { useState } from 'react';
import DeliverSVG from "../assets/WebDesignPage/deliver.svg";
import HomeSVG from "../assets/WebDesignPage/home.svg";
import ServicesSVG from "../assets/WebDesignPage/services.svg";
import { SectionTitle } from '../components/WebDesign/SectionTitle';
import { LightParagraph } from '../components/WebDesign/LightParagraph';
import { Button } from '../components/WebDesign/Button';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const WebDesignPage = () => {

    const importanceListItems = [
        {
            icon: './importanceIcons/crown.png',
            title: 'Strong First Impressions',
            text: 'Your website is often the first interaction customers have with your brand. A polished, modern design builds immediate credibility.'
        },
        {
            icon: './importanceIcons/rocket.png',
            title: 'Enhanced User Experience',
            text: 'Intuitive navigation and responsive layouts keep visitors engaged and reduce bounce rates.'
        },
        {
            icon: './importanceIcons/phone.png',
            title: 'Mobile Optimization',
            text: 'Ensures your site looks and functions perfectly on all devices, reaching a wider audience.'
        },
        {
            icon: './importanceIcons/bolt.png',
            title: 'Faster Loading Speeds',
            text: 'Optimized design improves performance, keeping users happy and boosting SEO rankings.'
        },
        {
            icon: './importanceIcons/trophy.png',
            title: 'Competitive Edge',
            text: 'Stand out from competitors with a unique, visually appealing, and functional website.'
        },
        {
            icon: './importanceIcons/search.png',
            title: 'SEO-Friendly Structure',
            text: 'Clean code + SEO-optimized architecture to rank higher and attract organic traffic.'
        },
    ]

    const deliverListItems = [
        {
            icon: '/deliverListItems/analysis.svg',
            title: 'STEP 1: Discovery & Strategy',
            text: 'Understand your brand, goals, and audience to craft a tailored design roadmap.'
        },
        {
            icon: '/deliverListItems/pencil.svg',
            title: 'STEP 2: Wireframing & UX Planning',
            text: 'Map intuitive user journeys and structure with low-fidelity wireframes.'
        },
        {
            icon: '/deliverListItems/pallete.svg',
            title: 'STEP 3: Visual Design & Branding',
            text: 'Create stunning, on-brand interfaces that captivate users (mobile-first!).'
        },
        {
            icon: '/deliverListItems/code.svg',
            title: 'STEP 4: Development & Testing',
            text: 'Transform designs into fast, responsive code—tested across devices/browsers.'
        },
        {
            icon: '/deliverListItems/rocket.svg',
            title: 'STEP 5: Launch & Optimization',
            text: 'Deploy with SEO best practices, analytics, and performance tuning.'
        },
        {
            icon: '/deliverListItems/sync.svg',
            title: 'STEP 6: Post-Launch Support',
            text: 'Continuous updates, A/B testing, and scalability enhancements.'
        },
    ]

    const [faqs, setFaqs] = useState([
        {
            question: "Why is professional web design critical for my business?",
            response: "Your website is your digital storefront. A well-designed site builds trust, improves user experience, and directly impacts conversions. Poor design can drive potential customers away.",
            isOpen: false
        },
        {
            question: "How long does the web design process take?",
            response: "Typically 2-6 weeks, depending on complexity. We prioritize quality while meeting your deadlines.",
            isOpen: false
        },
        {
            question: "Do you design mobile-friendly websites?",
            response: "Absolutely. Every site we build is fully responsive, ensuring seamless performance on all devices (60%+ traffic comes from mobile!).",
            isOpen: false
        },
        {
            question: "Will my website be optimized for search engines (SEO)?",
            response: "Yes. Our designs include SEO best practices (clean code, speed optimization, and metadata structuring) to help you rank higher.",
            isOpen: false
        },
        {
            question: "What ongoing support do you offer after launch?",
            response: "We provide post-launch updates, security patches, and performance tweaks to keep your site ahead of competitors.",
            isOpen: false
        },
    ])

    const handleSetFaqs = (e, key) => {
        e.preventDefault();
        setFaqs(prevFaqs =>
            prevFaqs.map((faq, index) =>
                index === key
                    ? { ...faq, isOpen: !faq.isOpen }
                    : faq
            )
        );
    }

    const [isPopUpOpen, setIsPopUpOpen] = useState(false)

    return (
        <div className="flex flex-col mt-16">

            {
                isPopUpOpen &&
                <div className='min-h-screen bg-black/50 fixed w-full flex justify-center items-center'>

                    <div className='flex flex-col justify-center items-center bg-blue-100 p-6 mx-4 gap-10 rounded-sm shadow-md shadow-indigo-100'>

                        <div className='flex flex-row justify-between text-lg font-semibold gap-2'>
                            <h2>
                                Get your Free Web Design Sample Report
                            </h2>

                            <IoClose onClick={() => setIsPopUpOpen(false)} className="text-2xl" />
                        </div>

                        <form className='flex flex-col gap-10 w-full'>

                            <div className='flex flex-col gap-6'>
                                <input type="text" placeholder='Name' className='border-b border-gray-600 px-2 outline-0' />
                                <input type="email" placeholder='Email' className='border-b border-gray-600 px-2 outline-0' />
                            </div>

                            {/* <button className='bg-gradient-to-r from-blue-600 to-indigo-600 text-lg text-white rounded-md py-2 cursor-pointer'>Download it Now!</button> */}

                            <Button text={"Download it Now!"}/>

                        </form>

                    </div>

                </div>
            }


            <div
                className="w-full bg-cover bg-center bg-no-repeat py-8 flex justify-center items-center shadow md:py-12 lg:py-16"
                style={{ backgroundImage: "url('https://img.freepik.com/free-photo/technology-venture-workspace-using-machine-learning-streamline-coding-process_482257-119816.jpg?t=st=1745940081~exp=1745943681~hmac=e79724a12d70f6a40ebfd31a41002c49f88e770aeceaba4580190e270fcaba67&w=1380')" }}
            >
                <div className="bg-opacity-50 px-4 py-2 rounded">
                    <h1 className="text-3xl text-white md:text-4xl lg:text-5xl text-center font-semibold">
                        Web Design
                    </h1>
                </div>
            </div>

            <div>


                {/* Home Page */}
                <section className='flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40'>


                    <SectionTitle title={"Looking for Top-Tier Web Design Services?"} />

                    <LightParagraph>
                        Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business.

                        In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world.

                        At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
                    </LightParagraph>

                    <p className='text-lg md:text-xl'>We deliver customized web design solutions tailored to your brand, ensuring a seamless user experience that stands out from the competition.</p>

                    <img src={HomeSVG} className='w-52 self-center md:w-80' />

                    <Button onClick={() => setIsPopUpOpen(true)} text={"Get FREE Assessment Report!"} />

                </section>

                {/* Services */}
                <section className='flex flex-col bg-blue-50 gap-4 py-12 px-6 md:gap-8 lg:px-40'>

                    <SectionTitle title={"What Are Web Design Services?"} />

                    <div className='flex flex-col gap-8 md:flex-row md:gap-10'>

                        <LightParagraph>
                            Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business.

                            In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world.

                            At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
                        </LightParagraph>

                        <img src={ServicesSVG} className='w-full max-w-96 self-center md:w-2/5 lg:max-w-full' />
                    </div>

                </section>

                {/* Importance */}
                <section className='flex flex-col gap-6 py-12 px-6 lg:gap-12 lg:px-40'>

                    <SectionTitle title={"Why is Web Design Important?"} />

                    <LightParagraph>
                        A high-quality website is crucial for your business's success in the digital world. Here are some key benefits of investing in professional web design services.
                    </LightParagraph>

                    <ul className='flex flex-col gap-6 md:grid grid-cols-2 lg:gap-12 xl:grid-cols-3'>
                        {
                            importanceListItems.map((item, key) => (
                                <li key={key} className='flex flex-col items-center justify-center border border-black rounded-md gap-2 px-6 py-2'>
                                    <img src={item.icon} className='w-14' />
                                    <h3 className='text-xl'>{item.title}</h3>
                                    <LightParagraph >{item.text}</LightParagraph>
                                </li>
                            ))
                        }

                    </ul>

                </section>


                {/* Deliver */}
                <section className='flex flex-col bg-blue-50 gap-8 py-12 px-6 md:gap-12 lg:px-40 lg:items-center'>

                    <SectionTitle title={"How We Deliver Exceptional Web Design"} />

                    <div className='flex flex-col md:flex-row md:gap-6 lg:justify-center'>

                        <ul className='flex flex-col gap-6'>

                            {
                                deliverListItems.map((item, key) => (
                                    <li key={key} className='flex flex-row gap-4 items-center'>

                                        <img className='w-14 h-14' src={item.icon} />

                                        <div className='flex flex-col md:gap-1'>
                                            <h3 className='text-lg font-semibold md:text-xl'>{item.title}</h3>
                                            <LightParagraph>{item.text}</LightParagraph>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>

                        <img className='hidden md:block w-2/6' src={DeliverSVG} />

                    </div>

                    <Button onClick={() => setIsPopUpOpen(true)} text={"Download Your FREE Web Design Sample Report"} />

                </section>

                {/* FAQ's */}
                <section className='flex flex-col gap-6 py-12 px-6 lg:justify-self-center'>
                    <SectionTitle title={"FAQ's"} />

                    <ul className='flex flex-col gap-8'>
                        {
                            faqs.map((faq, key) => (
                                <li key={key} className='flex flex-col gap-2 bg-gray-100 rounded-lg shadow-xl px-4 py-2 md:px-8 md:py-6 lg:w-[800px]'>
                                    <div className='flex flex-row items-center justify-between gap-4 text-base md:text-xl'>
                                        <h3>{faq.question}</h3>

                                        <button className='w-6 cursor-pointer'
                                            onClick={(e) => handleSetFaqs(e, key)}>
                                            {
                                                faq.isOpen ?
                                                    <FaArrowUp />
                                                    :
                                                    <FaArrowDown />

                                            }
                                        </button>
                                    </div>

                                    {faq.isOpen && (
                                        <p className='text-sm text-gray-800 md:text-lg'>{faq.response}</p>
                                    )}

                                </li>
                            ))
                        }

                    </ul>
                </section>

            </div>

        </div>
    )
}
