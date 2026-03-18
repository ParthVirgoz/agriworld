import React from 'react';
// import { AlertCircle } from 'lucide-react';
import { IoAlertCircleOutline } from "react-icons/io5";

export default function VisitorRegistration() {
    // const GOOGLE_FORM_ID = '';

    // const googleFormUrl = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/viewform?embedded=true`;
    // const googleFormUrl = `https://docs.google.com/forms/d/1VXy_a6MPXYOuDCEZAt1Y27sm2y6smKuZoZKoyDRAbA0/edit`;
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLScLsCE7OjwXFQSWoyW_-ABPsozIiU3BKsU-8YCRIqqMw7eOeA/viewform?embedded=true`;


    return (
        <div className="min-h-screen bg-white pt-44">
            {/* Main Container */}
            {/* <div className="max-w-2xl mx-auto py-5"> */}

                {/* Header Section */}
                <div className="text-center mb-12 font-khand">
                    <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
                        Visitor Registration
                    </h1>
                    <div className="w-96 h-[1px] bg-[#2F3840] mx-auto mb-2"></div>
                </div>

                {/* Google Form Container */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <iframe
                        src={googleFormUrl}
                        width="100%"
                        height="1200"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        style={{ border: 'none' }}
                        title="AGRI WORLD EXPO 2025 Visitor Registration"
                    >
                        Loading…
                    </iframe>
                </div>

            {/* </div> */}
        </div>
    );
}