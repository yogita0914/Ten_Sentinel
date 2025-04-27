import React from 'react';
import DeliverSVG from "../assets/WebDesignPage/deliver.svg";
import HomeSVG from "../assets/WebDesignPage/home.svg";
import ServicesSVG from "../assets/WebDesignPage/services.svg";


export const WebDesignPage = () => {
    return (
        <div className="flex flex-col gap-8 mt-16">

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

            {/* Home Page */}
            <section>

                <h2>Looking for Top-Tier Web Design Services?</h2>

                <p>Our Web Design Services are crafted to elevate your online presence with stunning, high-performance websites that captivate your audience.</p>

                <p>We deliver customized web design solutions tailored to your brand, ensuring a seamless user experience that stands out from the competition.</p>

                <img src={HomeSVG} />

                <button>Get FREE Assessment Report!</button>

            </section>

            {/* Services */}

            <section>

                <h2>What Are Web Design Services?</h2>

                <p>
                    Web Design Services are essential for creating a powerful, visually appealing, and functional online presence for your business.

                    In simple terms, it's like having a skilled team that crafts an engaging, user-friendly website tailored to your brand—helping you attract customers and stand out in the digital world.

                    At its core, professional web design is your gateway to a strong online identity, ensuring your business not only looks great but also delivers a seamless experience that builds trust and drives growth.
                </p>

                <img src={ServicesSVG} />

            </section>

            {/* Importance */}

            <section>

                <h2>Why is <strong>Web Design</strong> Important?</h2>

                <p>A high-quality website is crucial for your business's success in the digital world. Here are some key benefits of investing in professional web design services.</p>

                <ul>
                    <li>
                        <img src='#' />
                        <h3>Strong First Impressions</h3>
                        <p>Your website is often the first interaction customers have with your brand. A polished, modern design builds immediate credibility.</p>
                    </li>
                </ul>

            </section>

            {/* Deliver */}

            <section>
                <h2>How We Deliver Exceptional Web Design</h2>


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
                <h2>FAQ's</h2>

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
    )
}
