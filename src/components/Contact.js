const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-16">

            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold text-gray-900">
                    Contact Us
                </h1>

                <div className="w-16 h-1 bg-orange-500 mt-3 mb-6"></div>

                <p className="text-gray-600 text-lg mb-10">
                    Welcome to FastBites! We're happy to help you.
                    Get in touch with us for any questions or assistance.
                </p>

                <div className="space-y-6">

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">
                            Email
                        </h2>

                        <a
                            href="mailto:fastbitesindia@gmail.com"
                            className="text-gray-600 hover:text-orange-500 transition"
                        >
                            fastbitesindia@gmail.com
                        </a>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">
                            Phone
                        </h2>

                        <p className="text-gray-600">
                            +91 82428242821 
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;