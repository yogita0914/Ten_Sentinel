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

    const platforms = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Zm-90 160h180q13 0 21.5-8.5T600-350v-140q0-13-8.5-21.5T570-520h-10v-40q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560v40h-10q-13 0-21.5 8.5T360-490v140q0 13 8.5 21.5T390-320Zm40-200v-40q0-20 15-33.5t35-13.5q20 0 35 13.5t15 33.5v40H430Z" /></svg>
            ),
            title: "Web Application VAPT"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18H260Zm0-150v90h440v-90H260Zm220.18 75q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM260-250h440v-520H260v520Zm0-580h440v-30H260v30Zm0 640v90-90Zm0-640v-30 30Z" /></svg>
            ),
            title: "Mobile Application VAPT"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M197-197q-54-54-85.5-126.5T80-480q0-84 31.5-156.5T197-763l43 43q-46 46-73 107.5T140-480q0 71 26.5 132T240-240l-43 43Zm113-113q-32-32-51-75.5T240-480q0-51 19-94.5t51-75.5l43 43q-24 24-38.5 56.5T300-480q0 38 14 70t39 57l-43 43Zm170-90q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm170 90-43-43q24-24 38.5-56.5T660-480q0-38-14-70t-39-57l43-43q32 32 51 75.5t19 94.5q0 50-19 93.5T650-310Zm113 113-43-43q46-46 73-107.5T820-480q0-71-26.5-132T720-720l43-43q54 55 85.5 127.5T880-480q0 83-31.5 155.5T763-197Z" /></svg>
            ),
            title: "Network VAPT"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="m384-335 43-43-101-102 101-101-43-43-144 144.5L384-335Zm192 0 145-145-144-144-43 43 101 101-102 102 43 43ZM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm0-60h600v-600H180v600Zm300-617q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM180-180v-600 600Z" /></svg>
            ),
            title: "API VAPT"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M251-160q-88 0-149.5-61.5T40-371q0-78 50-137t127-71q20-97 94-158.5T482-799q112 0 189 81.5T748-522v24q72-2 122 46.5T920-329q0 69-50 119t-119 50H251Zm0-60h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-91-61-154t-149-63q-88 0-149.5 63T267-522h-19q-62 0-105 43.5T100-371q0 63 44 107t107 44Zm229-260Z" /></svg>
            ),
            title: "Cloud VAPT"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M80-160v-90h80v-490q0-24.75 17.63-42.38Q195.25-800 220-800h620v60H220v490h240v90H80Zm470 0q-12.75 0-21.37-8.63Q520-177.25 520-190v-460q0-12.75 8.63-21.38Q537.25-680 550-680h300q12.75 0 21.38 8.62Q880-662.75 880-650v460q0 12.75-8.62 21.37Q862.75-160 850-160H550Zm30-90h240v-370H580v370Zm0 0h240-240Z" /></svg>
            ),
            title: "IOT Devices VAPT"
        },
    ]

    const benefits = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M480-281q14 0 24.5-10.5T515-316q0-14-10.5-24.5T480-351q-14 0-24.5 10.5T445-316q0 14 10.5 24.5T480-281Zm-30-144h60v-263h-60v263ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm25-60h250l175-175v-250L605-780H355L180-605v250l175 175Zm125-300Z" /></svg>
            ),
            title: "Assessment Report",
            text: "The VAPT audit is accompanied by an evaluation report. We provide a brief summary of the detected vulnerabilities, their nature, their impact, and how they can be used by the attacker to exploit data. The report indicates proactive measures to resolve those security issues as well."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M140-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h240q24 0 42 18t18 42v600q0 24-18 42t-42 18H140Zm440 0q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h240q24 0 42 18t18 42v600q0 24-18 42t-42 18H580Zm-440-60h240v-600H140v600Zm440 0h240v-600H580v600ZM200-367h120v-60H200v60Zm440 0h120v-60H640v60ZM200-491h120v-60H200v60Zm440 0h120v-60H640v60ZM200-615h120v-60H200v60Zm440 0h120v-60H640v60ZM140-180h240-240Zm440 0h240-240Z" /></svg>
            ),
            title: "Safe-to-Host Certificate",
            text: "We offer a safe to host certificate to validate that your network infrastructure is secured. We comply with ISO 27001: 2013, HIPAA, and GDPR to mandate continuous monitoring. With a security certificate, you can ensure your customers that their information is under surveillance and well protected."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M680-330q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-60q25.5 0 42.75-17.25T740-450q0-25.5-17.25-42.75T680-510q-25.5 0-42.75 17.25T620-450q0 25.5 17.25 42.75T680-390ZM440-50v-116q0-21 10-39.5t28-29.5q28-17 58-29.5t62-20.5l82 106 82-106q32 8 61.5 20.5T881-235q18 11 28.5 29.5T920-166v116H440Zm60-60h157l-82-106q-20 8-39 17.5T500-178v68Zm203 0h157v-68q-17-11-35.5-20.5T786-216l-83 106Zm-46 0Zm46 0Zm-523-10q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v247q-11-20-26-37t-34-30v-180H180v600h200v60H180Zm100-500h341q14-5 28.84-7.5T680-630v-50H280v60Zm0 170h220q0-15 2.5-30.5T510-510H280v60Zm0 170h158q17-13 36-21.5t39-16.5v-22H280v60ZM180-180v-600 180-30 450Zm500-270Z" /></svg>
            ),
            title: "Consult from the Best",
            text: "The VAPT audits are undertaken by our team of proficient cybersecurity experts. They utilize the latest tools as well as perform manual testing for finding configuration accuracies and potential vulnerabilities. Manual testing makes us capable of finding security errors that are mostly missed by automated tools."
        },
    ]

    const methodoloy = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M796-121 533-384q-30 26-69.96 40.5Q423.08-329 378-329q-108.16 0-183.08-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.13-57.5Q572-504 572-585t-56.87-138.5Q458.25-781 377-781q-82.08 0-139.54 57.5Q180-666 180-585t57.46 138.5Q294.92-389 377-389Z" /></svg>
            ),
            title: "Information Gathering",
            text: "We develop a detailed understanding of the design, architecture, functionality, and security systems of the target which will help in the further process."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M480-80q-140-35-230-162.5T160-522v-238l320-120 320 120v238q0 152-90 279.5T480-80Zm0-62q106-35 175.5-128.5T737-480H480v-335l-260 97v196q0 12 .5 20.5T223-480h257v338Z" /></svg>
            ),
            title: "Identify Vulnerabilities",
            text: "The next step is to Identify Vulnerabilities, where we use a complete manual approach. Once the vulnerabilities are identified, they are then sent to the next stage."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M284-277h60v-205h-60v205Zm332 0h60v-420h-60v420Zm-166 0h60v-118h-60v118Zm0-205h60v-60h-60v60ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z" /></svg>
            ),
            title: "Vulnerability Assessment",
            text: "The identified vulnerabilities from the previous steps are assessed here to validate them and further try out with multiple methods to understand the attack vectors."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M480-180q72 0 123-50.5T654-353v-167q0-72-51-122.5T480-693q-72 0-123 50.5T306-520v167q0 72 51 122.5T480-180Zm-80-140h160v-60H400v60Zm0-173h160v-60H400v60Zm80 57h.5-.5.5-.5.5-.5.5-.5Zm0 316q-65 0-121-31t-83-89H160v-60h92q-7-26-7-52.5V-406h-85v-60h85q0-29 .5-57.5T254-580h-94v-60h120q14-28 37-49t51-35l-77-76 40-40 94 94q28-10 56.5-10t56.5 10l94-94 40 40-76 76q28 14 49.5 35.5T683-640h117v60h-94q9 28 8.5 56.5T714-466h86v60h-86q0 27 .5 53.5T708-300h92v60H685q-26 59-82.5 89.5T480-120Z" /></svg>
            ),
            title: "Penetration Testing",
            text: "At this stage, we run exploits and dummy attacks to evaluate the Impact and Risk of the vulnerability. To achieve a high degree of penetration, we use advanced tools and open-source scripts."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="M480-280q14 0 24.5-10.5T515-315q0-14-10.5-24.5T480-350q-14 0-24.5 10.5T445-315q0 14 10.5 24.5T480-280Zm-31-132h60v-268h-60v268ZM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h205q5-35 32-57.5t63-22.5q36 0 63 22.5t32 57.5h205q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm0-60h600v-600H180v600Zm300-617q14 0 24.5-10.5T515-832q0-14-10.5-24.5T480-867q-14 0-24.5 10.5T445-832q0 14 10.5 24.5T480-797ZM180-180v-600 600Z" /></svg>
            ),
            title: "Reporting",
            text: "As a conclusion to our VAPT audit, we submit an evaluation report. We accumulate the gathered information and brief out the findings. The report contains an elaborate analysis of the vulnerabilities. The vulnerabilities are divided into categories of Critical, High, Medium, and Low."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#2563EB"><path d="m436-347 228-228-42-41-183 183-101-101-44 44 142 143Zm44 266q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81Zm0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143Zm0-337Z" /></svg>
            ),
            title: "Revalidation",
            text: "After successfully completing the process of audit, our experts suggests solutions to fix and eliminate the identified vulnerabilities. We also ensure that the changes are implemented and the vulnerabilities are patched. In our final assessment, we reflect on the security status of the network."
        },
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

            <div className='px-6 flex flex-col gap-12'>

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
                <section className='flex flex-col gap-6'>
                    <SectionTitle title={"We peform VAPT on the below platforms"} />

                    <ul className='grid grid-cols-2 gap-4'>
                        {
                            platforms.map((platform, key) => (
                                <li key={key} className='flex flex-col gap-2 justify-center items-center bg-blue-50 p-4 rounded-md shadow-sm'>
                                    {platform.icon}
                                    <h3 className='text-base font-semibold text-center'>{platform.title}</h3>
                                </li>
                            ))
                        }

                    </ul>

                </section>

                {/* Methodology */}
                <section className='flex flex-col gap-8'>
                    <SectionTitle title={"VAPT Methodology"} />
                    <p className='text-sm'>We pursue a holistic approach to execute VAPT audits. A complete analysis of the existing security posture and suggestions for reducing the exposure to currently recognized vulnerabilities adds to the client's benefits. We facilitate the clients to make informed decisions and manage the exposure of dangers in a better manner.</p>

                    <ul className='flex flex-col gap-4'>
                        {
                            methodoloy.map((method, key) => (
                                <li key={key} className="flex flex-row items-center gap-4 justify-start border border-gray-400 py-4 px-2 rounded-md shadow-sm">
                                    <div className="flex-shrink-0">
                                        {React.cloneElement(method.icon, { className: 'w-16 h-16 text-blue-500' })}
                                    </div>

                                    <div className="max-w-prose flex flex-col gap-2">
                                        <h3 className="font-semibold text-base">{method.title}</h3>
                                        <p className="text-sm">{method.text}</p>
                                    </div>
                                </li>

                            ))
                        }

                    </ul>
                </section>

                {/* Benefits */}
                <section className='bg-blue-100 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col items-center py-4'>

                    <SectionTitle title={"Our Key Benefits!"} />

                    <ul className='flex flex-col gap-8 p-6'>
                        {
                            benefits.map((benefit, key) => (
                                <li key={key} className='flex flex-col justify-center items-center bg-white p-4 gap-4 border border-gray-400 rounded-sm shadow-sm'>
                                    <div className='flex flex-col justify-center items-center'>
                                        {benefit.icon}
                                        <h3 className='text-lg font-semibold'>{benefit.title}</h3>
                                    </div>

                                    <p className='font-light text-sm'>{benefit.text}</p>
                                </li>
                            ))
                        }

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
