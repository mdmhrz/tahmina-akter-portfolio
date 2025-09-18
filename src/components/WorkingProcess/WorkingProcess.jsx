import React from 'react';

const workingSteps = [
    {
        number: '01',
        title: 'Negotiation About Project',
        description: 'Quisque pellentesque tincidunt felis ac fermentum odio. Duis non convallis sem finibus egestas sceleris.'
    },
    {
        number: '02',
        title: 'Estimate Budget',
        description: 'Quisque pellentesque tincidunt felis ac fermentum odio. Duis non convallis sem finibus egestas sceleris.'
    },
    {
        number: '03',
        title: 'Deliver Project',
        description: 'Quisque pellentesque tincidunt felis ac fermentum odio. Duis non convallis sem finibus egestas sceleris.'
    }
];

export default function WorkingProcess() {
    const getNumberOpacity = (index) => {
        switch (index) {
            case 0:
                return 'opacity-25';
            case 1:
                return 'opacity-50';
            case 2:
                return 'opacity-80';
            default:
                return 'opacity-30';
        }
    };

    return (
        <section className="py-20 lg:py-32 px-4 md:px-8 bg-background">
            <div className="w-full max-w-6xl mx-auto text-center">
                <p className="text-primary font-medium uppercase mb-2">Working Step</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-12">
                    How Tahmina works behind the scenes
                </h2>
            </div>

            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
                {/* Left Side: Steps */}
                <div className="flex flex-col gap-8 text-center lg:text-left">
                    {workingSteps.map((step, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center  gap-6 justify-center">
                            <span className={`text-[7rem] sm:text-[9rem] md:text-[8rem] font-bold text-primary text-center sm:text-left leading-none ${getNumberOpacity(index)}`}>
                                {step.number}
                            </span>
                            <div className="flex flex-col justify-center text-center sm:text-left">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Illustration */}
                <div className="flex justify-center items-center p-8">
                    <img className="w-full h-auto max-w-lg" src="/work_process.png" alt="" />
                </div>
            </div>
        </section>
    );
}
