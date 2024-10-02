/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

export default function () {
    return (
        <div>
            <section>
                <div className="mx-auto w-full max-w-7xl items-center px-8 py-24 md:px-12 lg:px-24">
                    <div>
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="sm:flex sm:justify-center">
                                <div
                                    className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-100/10 hover:ring-gray-100/20"
                                    data-aos="fade-up"
                                    data-aos-delay=""
                                >
                                    <a className="text-accent-300 cursor-pointer font-semibold">
                                        <span className="text-accent-300 block lg:inline">
                                            Join our new discord{" "}
                                            <span
                                                aria-hidden="true"
                                                className="text-accent-300"
                                            >
                                                &rarr;
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="100"
                                className="font-display mt-8 text-4xl font-medium tracking-tight text-white md:text-5xl"
                            >
                                A streamlined biolink experience
                            </p>
                            <p
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="text-netural-500 mx-auto mt-4 max-w-2xl text-base lg:text-xl"
                            >
                                Streamline your online presence by linking all
                                your preferred social media platforms to a
                                single URL. Our platform provides the best
                                experience for your audience to find you online.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                            <a
                                className="bg-bg-bg2 inline-flex h-12 w-full items-center justify-center rounded-xl px-6 py-3 text-center font-medium text-white duration-200 focus:outline-none focus-visible:outline-black lg:w-auto"
                                href="https://github.com/kars1996"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                GitHub
                            </a>
                            <a
                                className="bg-bg-bg2 inline-flex h-12 w-full items-center justify-center rounded-xl px-6 py-3 text-center font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
                                href="https://kars.bio"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                More from me &nbsp; &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
