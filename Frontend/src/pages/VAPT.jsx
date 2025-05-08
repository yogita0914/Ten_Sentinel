import React from 'react'
import { SectionTitle } from '../components/VAPT/SectionTitle'
import { FaStar } from 'react-icons/fa'

export const VAPT = () => {

    const reviews = [
        {
            img: "https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?t=st=1746739713~exp=1746743313~hmac=8ffc43466e3196893fbd57d995876f813a7bcf7e37c661469b5e3ba37e398fe0&w=996",
            name: "Girish Bhatia",
            title: "Director/Lead Consultant - Compass Consult",
            text: "Ever since 2021, CyberSapiens has been our top choice for all things Cyber Security. They've truly become our trusted partners, offering expert guidance and services to protect our digital assets."
        },
        {
            img: "https://img.freepik.com/free-photo/vertical-shot-happy-dark-skinned-female-with-curly-hair_273609-15519.jpg?t=st=1746739106~exp=1746742706~hmac=187d330466139f0661549b6d756f0a69ca33e910721e328c3f35e75f6755f2d9&w=740",
            name: "Girish Bhatia",
            title: "Director/Lead Consultant - Compass Consult",
            text: "Ever since 2021, CyberSapiens has been our top choice for all things Cyber Security. They've truly become our trusted partners, offering expert guidance and services to protect our digital assets."
        },
        {
            img: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?t=st=1746738748~exp=1746742348~hmac=d33c7f6a90b2266a86bd6e4b3e8e6d42745a6674c31e3ee1a95006e295ff9e1c&w=996",
            name: "Girish Bhatia",
            title: "Director/Lead Consultant - Compass Consult",
            text: "Ever since 2021, CyberSapiens has been our top choice for all things Cyber Security. They've truly become our trusted partners, offering expert guidance and services to protect our digital assets."
        }
    ]

    return (
        <div className="flex flex-col gap-8 mt-16">

            {/* Header */}
            <div
                className="w-full bg-cover bg-center bg-no-repeat py-8 flex justify-center items-center shadow md:py-12 lg:py-16"
                style={{ backgroundImage: "url('https://img.freepik.com/free-vector/data-security-technology-background-vector-blue-tone_53876-112201.jpg?t=st=1746717209~exp=1746720809~hmac=5669fc6f468c6e1c3bed81076c8ea80d9d751a15032c6748dac41e890c0a9228&w=996')" }}
            >
                <div className="bg-opacity-50 px-4 py-2 rounded">
                    <h1 className="text-xl text-white md:text-4xl lg:text-5xl text-center font-semibold">
                        Vulnerability Assessment and Penetration Testing
                    </h1>
                </div>
            </div>

            <div className='px-6 flex flex-col gap-6'>

                {/* Home */}
                <section className='flex flex-col gap-6' >

                    <img src="https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96426.jpg?t=st=1746717179~exp=1746720779~hmac=ec69305cae6b1d83cc8fbe5954009b397b8637ea89d3cf529e4e4d5496904ad9&w=996" />

                    <div className='flex flex-col gap-4'>

                        <SectionTitle title={"About Our VAPT Services"} />

                        <p className='text-base font-light'>VAPT(Vulnerability Assessment and Penetration Testing) helps identify vulnerabilities in your systems, applications, networks, etc., and analyze the risk of potential loss that would occur due to the exploitation of these vulnerabilities and penetration by the attackers.</p>

                        <p className='text-base'>We don't just identify and report, but we also assist in the remediation and re-validation of the vulnerability.</p>
                    </div>

                </section>

                {/* Reviews */}
                <section className='flex flex-col gap-4'>
                    <SectionTitle title={"Our Reviews"} />

                    <ul className='flex flex-col gap-4'>
                        {
                            reviews.map((review, key) => (
                                <li key={key} className='flex flex-row px-2 py-4 gap-2 rounded-md border border-gray-400'>
                                    <div
                                        className='min-w-32 bg-cover bg-center rounded-md'
                                        style={{ backgroundImage: `url(${review.img})` }}
                                    >

                                    </div>
                                    {/* <img src={review.img} className='rounded-sm w-20' /> */}

                                    <div className='flex flex-col gap-2'>
                                        {/* STARS */}
                                        <ul>
                                            <li className='text-yellow-300 flex flex-row gap-2 text-xl'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </li>
                                        </ul>

                                        <h3 className='text-base font-semibold'>{review.name}</h3>
                                        <h4 className='text-xs font-light'>{review.title}</h4>

                                        <p className='text-xs'>{review.text}</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </section>

                {/* Platforms */}
                <section>
                    <h2>We peform VAPT on the below platforms</h2>

                    <ul>
                        <li>
                            <img src="#" />
                            <h3>A NAME</h3>
                        </li>
                    </ul>

                </section>

                {/* Methodology */}
                <section>
                    <h2>VAPT Methodoloy</h2>
                    <p>TEXT...</p>

                    <ul>
                        <li>
                            <img src="#" />

                            <div>
                                <h3>Card title</h3>
                                <p>Card text...</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Benefits */}
                <section>
                    <h2>Our Key Benefits!</h2>
                    <ul>
                        <li>

                            <div>
                                <img src="#" />
                                <h3>Card title</h3>
                            </div>

                            <p>Card text...</p>
                        </li>
                    </ul>
                </section>

                {/* FAQ's */}
                <section>
                    <h2>FAQ's</h2>
                    <ul>
                        <li>
                            <div>
                                <h3>FAQ question?</h3>
                                <img src="#" />
                            </div>

                            <p>FAQ response</p>

                        </li>
                    </ul>
                </section>
            </div>


        </div>
    )
}
