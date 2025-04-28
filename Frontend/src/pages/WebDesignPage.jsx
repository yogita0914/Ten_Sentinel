import React from 'react';
import DeliverSVG from "../assets/WebDesignPage/deliver.svg";
import HomeSVG from "../assets/WebDesignPage/home.svg";
import ServicesSVG from "../assets/WebDesignPage/services.svg";
import { SectionTitle } from '../components/WebDesign/SectionTitle';
import { LightParagraph } from '../components/WebDesign/LightParagraph';

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

    return (
        <div className="flex flex-col mt-16">

            <div
                className="w-full bg-cover bg-center bg-no-repeat py-8 flex justify-center items-center shadow md:py-12 lg:py-16"
                style={{ backgroundImage: "url('https://img.freepik.com/free-vector/cyber-security-concept_23-2148534852.jpg?semt=ais_hybrid&w=740')" }}
            >
                <div className="bg-opacity-50 px-4 py-2 rounded">
                    <h1 className="text-3xl text-white md:text-4xl lg:text-5xl text-center font-semibold">
                        Web Design
                    </h1>
                </div>
            </div>

            <div>
                {/* Home Page */}
                <section className='flex flex-col gap-6 py-12 px-6'>


                    <SectionTitle title={"Looking for Top-Tier Web Design Services?"} />

                    <LightParagraph>
                        Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business.

                        In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world.

                        At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
                    </LightParagraph>

                    <p>We deliver customized web design solutions tailored to your brand, ensuring a seamless user experience that stands out from the competition.</p>

                    <img src={HomeSVG} className='w-52 self-center' />

                    <button className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-fit px-4 py-2 rounded-md cursor-pointer self-center'>Get FREE Assessment Report!</button>

                </section>

                {/* Services */}
                <section className='flex flex-col bg-blue-50 gap-6 py-12 px-6'>

                    <SectionTitle title={"What Are Web Design Services?"} />

                    <LightParagraph>
                        Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business.

                        In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world.

                        At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
                    </LightParagraph>

                    <img src={ServicesSVG} className='w-full' />

                </section>

                {/* Importance */}

                <section className='flex flex-col gap-6 py-12 px-6'>

                    <SectionTitle title={"Why is Web Design Important?"} />

                    <LightParagraph>
                        A high-quality website is crucial for your business's success in the digital world. Here are some key benefits of investing in professional web design services.
                    </LightParagraph>

                    <ul className='flex flex-col gap-6'>
                        {
                            importanceListItems.map((item, key) => (
                                <li key={key} className='flex flex-col items-center justify-center border border-black rounded-md gap-2 px-6 py-2'>
                                    <img src={item.icon}  className='w-14'/>
                                    <h3 className='text-xl'>{item.title}</h3>
                                    <LightParagraph >{item.text}</LightParagraph>
                                </li>
                            ))
                        }

                    </ul>

                </section>

                {/* Deliver */}

                <section>

                    <SectionTitle title={"How We Deliver Exceptional Web Design"} />

                    <div>

                        <ul>
                            <li>
                                <img src="#" />
                                <div>
                                    <h3>STEP 1: Discovery & Strategy</h3>
                                    <p>Understand your brand, goals, and audience to craft a tailored design roadmap.</p>
                                </div>
                            </li>
                        </ul>

                        <img src={DeliverSVG} />

                    </div>

                    <button>Download Your FREE Web Design Sample Report</button>
                </section>

                {/* FAQ's */}

                <section>
                    <SectionTitle title={"FAQ's"} />

                    <ul>
                        <li>
                            <div>
                                <h3>How long does the web design process take?</h3>
                                <img src="#" />
                            </div>
                            <p>Typically 2-6 weeks, depending on complexity. We prioritize quality while meeting your deadlines.</p>
                        </li>
                    </ul>
                </section>
            </div>

        </div>
    )
}
