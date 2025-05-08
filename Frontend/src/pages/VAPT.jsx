import React from 'react'

export const VAPT = () => {
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

            {/* Home */}
            <section>
                <img src="https://img.freepik.com/free-photo/metaverse-avatar-collage-concept_52683-96426.jpg?t=st=1746717179~exp=1746720779~hmac=ec69305cae6b1d83cc8fbe5954009b397b8637ea89d3cf529e4e4d5496904ad9&w=996" />

                <div>
                    <h2>About Our VAPT Service</h2>

                    <p>VAPT(Vulnerability Assessment and Penetration Testing) helps identify vulnerabilities in your systems, applications, networks, etc., and analyze the risk of potential loss that would occur due to the exploitation of these vulnerabilities and penetration by the attackers.</p>

                    <p>We don't just identify and report, but we also assist in the remediation and re-validation of the vulnerability.</p>
                </div>

            </section>

            {/* Reviews */}
            <section>
                <h2>Our Reviews</h2>

                <ul>
                    <li>
                        <img src="#" />

                        <div>
                            {/* STARS */}
                            <ul>
                                <li>
                                    <img src="#" alt="" />
                                </li>
                            </ul>

                            <h3>Name</h3>
                            <h4>Working title</h4>

                            <p>Text...</p>
                        </div>
                    </li>
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
    )
}
