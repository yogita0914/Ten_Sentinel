import { useState, useEffect } from 'react';
import React from 'react';
import {
    MagnifyingGlassIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, BugAntIcon,
    EyeIcon, CheckCircleIcon, MapIcon, CpuChipIcon
} from '@heroicons/react/24/outline';

const testingStepsData = [
    { id: 'recon', icon: MagnifyingGlassIcon, title: 'Reconnaissance and Enumeration', shortTitle: 'Reconnaissance & Enumeration', description: 'Gather initial information about the Azure environment and identify active services and potential targets.', bgColor: 'bg-sky-500' },
    { id: 'mitigation', icon: ShieldCheckIcon, title: 'Strategic Mitigation', shortTitle: 'Strategic Mitigation', description: 'Provide recommendations and strategies to address and mitigate the identified vulnerabilities.', bgColor: 'bg-purple-500' },
    { id: 'scoping', icon: AdjustmentsHorizontalIcon, title: 'Azure Scoping', shortTitle: 'Azure Scoping', description: 'Define the scope of the penetration test, including the Azure resources and services to be tested.', bgColor: 'bg-indigo-600' },
    { id: 'post_exploitation', icon: BugAntIcon, title: 'Post Exploitation', shortTitle: 'Post Exploitation', description: 'Explore the extent of access gained and the potential for further exploitation.', bgColor: 'bg-green-500' },
    { id: 'vuln_identification', icon: EyeIcon, title: 'Vulnerability Identification', shortTitle: 'Vulnerability Identification', description: 'Utilize various techniques to identify security weaknesses and vulnerabilities in the Azure setup.', bgColor: 'bg-pink-500' },
    { id: 'patch_verification', icon: CheckCircleIcon, title: 'Patch Verification', shortTitle: 'Patch Verification', description: 'Verify that patches and remediation efforts have been effectively applied and are functioning as intended.', bgColor: 'bg-lime-500' },
    { id: 'mapping', icon: MapIcon, title: 'Mapping & Service Identification', shortTitle: 'Mapping & Service ID', description: 'Identify and map the services and components within the Azure environment.', bgColor: 'bg-orange-500' },
    { id: 'analysis', icon: CpuChipIcon, title: 'Vulnerability Analysis', shortTitle: 'Vulnerability Analysis', description: 'Analyze the identified vulnerabilities to assess their impact and exploitability.', bgColor: 'bg-violet-500' },
];

const OrbitalDiagram = () => {
    const [activeStep, setActiveStep] = useState(testingStepsData[1]);
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
    const diagramContainerSize = diagramRadius * 2 + itemDiameter;

    if (isMobileView) {
        return (
            <div className="py-12 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-700 mb-3">
                            Our Azure Penetration Testing Process
                        </h2>
                        <p className="text-md font-medium text-gray-700">
                            Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
                        </p>
                    </div>
                    <div className="mb-10 p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-center">
                        <div className="flex justify-center items-center mb-3">
                            <activeStep.icon className={`h-10 w-10 ${activeStep.bgColor.replace('bg-', 'text-')} rounded-full p-2 mr-3`} />
                            <h3 className="text-xl font-semibold text-gray-800">{activeStep.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{activeStep.description}</p>
                    </div>
                    <div className="space-y-4">
                        {testingStepsData.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(step)}
                                className={`
                                    w-full p-4 rounded-lg text-white
                                    flex items-center text-left
                                    focus:outline-none transition-all duration-300 ease-in-out
                                    ${step.bgColor}
                                    ${activeStep.id === step.id
                                        ? 'ring-4 ring-offset-2 ring-white scale-105 shadow-xl'
                                        : 'shadow-md hover:shadow-lg hover:scale-[1.02]'}
                                `}
                            >
                                <step.icon className="h-7 w-7 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="text-md font-semibold">{step.shortTitle}</h4>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
                <div className="lg:col-span-4 ml-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 whitespace-nowrap">
                        Our Azure Penetration Testing Process
                    </h2>
                    <p className="text-lg text-gray-700">
                        Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage across all critical components of your Azure environment, including virtual machines, storage accounts, key vaults, networking configurations, and identity and access management.
                    </p>
                </div>

                <div className="lg:col-span-8 flex justify-center items-center min-h-[36rem] sm:min-h-[42rem]">
                    <div className="relative" style={{ width: diagramContainerSize + "px", height: diagramContainerSize + "px" }}>
                        {/* Central Info Circle */}
                        <div
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                rounded-full bg-gradient-to-br from-slate-50 to-gray-100
                                shadow-2xl flex flex-col justify-center items-center text-center p-6
                                ring-8 ring-white ring-opacity-60`}
                            style={{ width: centralCircleDiameter + "px", height: centralCircleDiameter + "px" }}
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 px-2">
                                    {activeStep.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-3">
                                    {activeStep.description}
                                </p>
                            </div>
                        </div>

                        {/* Orbiting Buttons */}
                        {testingStepsData.map((step, index) => {
                            const angleOffset = - (1 * (2 * Math.PI / testingStepsData.length));
                            const angle = (index / testingStepsData.length) * 2 * Math.PI - (Math.PI / 2) + angleOffset;
                            const x = Math.cos(angle) * diagramRadius;
                            const y = Math.sin(angle) * diagramRadius;
                            const isActive = activeStep.id === step.id;

                            return (
                                <button
                                    key={step.id}
                                    onMouseEnter={() => setActiveStep(step)}
                                    className={`
                                        absolute p-2 rounded-full text-white
                                        flex flex-col items-center justify-center text-center
                                        focus:outline-none transition-all duration-300 ease-in-out
                                        ${step.bgColor}
                                        ${isActive
                                            ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-white'
                                            : 'shadow-lg hover:scale-110 hover:shadow-2xl'
                                        }
                                    `}
                                    style={{
                                        width: itemDiameter + "px",
                                        height: itemDiameter + "px",
                                        top: '50%',
                                        left: '50%',
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                                        opacity: 1
                                    }}
                                >
                                    <step.icon className="h-7 w-7 mb-1" />
                                    <span className="text-[10px] font-medium leading-tight px-1">
                                        {step.shortTitle}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrbitalDiagram;
