import React, { useState, useEffect } from 'react';
import {
    MagnifyingGlassIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, BugAntIcon,
    EyeIcon, CheckCircleIcon, MapIcon
} from '@heroicons/react/24/outline';

const testingStepsData = [
    { id: 'recon', icon: MagnifyingGlassIcon, title: 'Data Protection', shortTitle: 'Data Protection', description: 'Securing data ensures its confidentiality, integrity, and availability, protecting it from unauthorized access, tampering, and disruptions.', bgColor: 'bg-blue-400' },
    { id: 'mitigation', icon: ShieldCheckIcon, title: 'Cost-Effective', shortTitle: 'Cost-Effective', description: 'Outsourcing AWS security services to CyberSapiens offers a cost-effective alternative to maintaining an in-house team.', bgColor: 'bg-blue-400' },
    { id: 'scoping', icon: AdjustmentsHorizontalIcon, title: 'Compliance and Regulatory Requirements', shortTitle: 'Compliance and Regulatory Requirements', description: 'Adhering to legal and industry standards avoids penalties and builds trust by demonstrating adherence to necessary security practices.', bgColor: 'bg-blue-400' },
    { id: 'post_exploitation', icon: BugAntIcon, title: 'Mitigating Risks', shortTitle: 'Mitigating Risks', description: 'Implementing security measures reduces the likelihood of data breaches and vulnerabilities that could be exploited by attackers.', bgColor: 'bg-blue-400' },
    { id: 'vuln_identification', icon: EyeIcon, title: 'Protecting Business Operations', shortTitle: 'Protecting Business Operations', description: 'Securing cloud environments ensures continuous availability of services and prevents incidents that could damage the organization’s reputation and operations.', bgColor: 'bg-blue-400' },
    { id: 'patch_verification', icon: CheckCircleIcon, title: 'Managing Costs', shortTitle: 'Managing Costs', description: 'Effective security prevents financial losses from breaches and optimizes the use of cloud resources, avoiding unnecessary expenses.', bgColor: 'bg-blue-400' },
    { id: 'mapping', icon: MapIcon, title: 'Ensuring Proper Configuration', shortTitle: 'Ensuring Proper Configuration', description: 'Properly configuring cloud resources with appropriate security settings prevents misconfigurations that could expose the environment to risks.', bgColor: 'bg-blue-400' },
];

const OrbitalDiagram2 = () => {
    const [activeStep, setActiveStep] = useState(testingStepsData[0]);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 680);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const diagramRadius = 260;
    const itemDiameter = 112;
    const centralCircleDiameter = 300;
    const diagramContainerSize = (diagramRadius * 2) + itemDiameter;

    if (isMobileView) {
        return (
            <div className="py-12 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Need of Securing AWS Cloud Environment</h2>
                    <p className="text-lg font-medium text-gray-700 mb-6">
                        As organizations increasingly migrate to the cloud, securing AWS environments becomes essential. It ensures data privacy, meets compliance standards, protects business operations, and reduces financial and reputational risks associated with security breaches.
                    </p>

                    <div className="mb-10 p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-center">
                        <div className="flex justify-center items-center mb-3">
                            {/* <activeStep.icon className={`h-10 w-10 ${activeStep.bgColor.replace('bg-', 'text-')} rounded-full p-2 mr-3`} /> */}
                            <h3 className="text-xl font-semibold text-gray-800">{activeStep.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{activeStep.description}</p>
                    </div>

                    <div className="space-y-4">
                        {testingStepsData.map((step) => (
                            <div
                                key={step.id}
                                onMouseEnter={() => setActiveStep(step)}
                                onTouchStart={() => setActiveStep(step)}
                                className={`w-full p-4 rounded-lg text-white flex items-center text-left transition-all duration-300 ease-in-out ${step.bgColor} ${activeStep.id === step.id ? 'ring-4 ring-offset-2 ring-white scale-105 shadow-xl' : 'shadow-md hover:shadow-lg hover:scale-[1.02]'}`}
                            >
                                <step.icon className="h-7 w-7 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-md font-semibold">{step.shortTitle}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
                <div className="lg:col-span-8 flex justify-center items-center min-h-[42rem]">
                    <div
                        className="relative"
                        style={{
                            width: diagramContainerSize + "px",
                            height: diagramContainerSize + "px",
                        }}
                    >
                        {/* Central info */}
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-slate-50 to-gray-100 shadow-2xl flex flex-col justify-center items-center text-center p-6 ring-8 ring-white ring-opacity-60"
                            style={{
                                width: centralCircleDiameter + "px",
                                height: centralCircleDiameter + "px",
                            }}
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{activeStep.title}</h3>
                            <p className="text-xs text-gray-600 px-2 leading-relaxed">{activeStep.description}</p>
                        </div>

                        {/* Orbit buttons */}
                        {testingStepsData.map((step, index) => {
                            const angleOffset = -(1 * (2 * Math.PI / testingStepsData.length));
                            const angle = (index / testingStepsData.length) * 2 * Math.PI - (Math.PI / 2) + angleOffset;
                            const x = Math.cos(angle) * diagramRadius;
                            const y = Math.sin(angle) * diagramRadius;
                            const isActive = activeStep.id === step.id;

                            return (
                                <div
                                    key={step.id}
                                    onMouseEnter={() => setActiveStep(step)}
                                    className={`absolute p-2 rounded-full text-white flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out ${step.bgColor} ${isActive ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-white' : 'shadow-lg hover:scale-110 hover:shadow-2xl hover:ring-2 hover:ring-white'}`}
                                    style={{
                                        width: itemDiameter + "px",
                                        height: itemDiameter + "px",
                                        top: '50%',
                                        left: '50%',
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                    }}
                                >
                                    <step.icon className="h-7 w-7 mb-1" />
                                    <span className="text-[10px] font-medium leading-tight px-1">
                                        {step.shortTitle}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right side text */}
                <div className="lg:col-span-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Need of Securing AWS Cloud Environment</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        As organizations increasingly migrate to the cloud, securing AWS environments becomes essential. It ensures data privacy, meets compliance standards, protects business operations, and reduces financial and reputational risks associated with security breaches.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrbitalDiagram2;
