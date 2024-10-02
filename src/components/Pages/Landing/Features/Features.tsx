import {
    FaRocket,
    FaPaintBrush,
    FaKeyboard,
    FaCheckCircle,
    FaCloudUploadAlt,
    FaBolt,
} from "react-icons/fa";
import type { featureProp } from "@/types";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    const features: featureProp[] = [
        {
            icon: <FaRocket className="h-4 w-4 bg-transparent" />,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            icon: <FaPaintBrush className="h-4 w-4 bg-transparent" />,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            icon: <FaBolt className="h-4 w-4 bg-transparent" />,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            icon: <FaKeyboard className="h-4 w-4 bg-transparent" />,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            icon: <FaCheckCircle className="h-4 w-4 bg-transparent" />,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            icon: <FaCloudUploadAlt className="h-4 w-4 bg-transparent" />,
            title: "Lorem ipsum dolor sit amet.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];

    return (
        <section id="features">
            <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12">
                <div className="mx-auto max-w-xl text-center">
                    <div>
                        <p
                            className="text-4xl tracking-tight font-medium text-neutral-200 md:text-5xl font-display"
                            data-aos="fade-up"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <p
                            className="mt-4 text-lg text-na mx-auto tracking-tight text-neutral-400"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="mx-auto max-w-7xl pt-12">
                        <h2
                            className="sr-only"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Features.
                        </h2>
                        <div>
                            <div className="grid gap-12 grid-cols-1 lg:space-y-0 lg:text-center md:grid-cols-3">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={(index + 3) * 100}
                                        className=" group grou-hover:-translate-y-1 duration-150 transition-transform"
                                    >
                                        <div className="items-center justify-center text-white bg-bg-bg2 rounded-xl flex h-10 w-10 lg:mx-auto">
                                            {feature.icon}
                                        </div>
                                        <p className="mt-4 text-lg font-semibold leading-6 text-neutral-200 font-display tracking-tight">
                                            {feature.title}
                                        </p>
                                        <div className="mt-4 text-neutral-400 text-sm">
                                            {feature.description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
