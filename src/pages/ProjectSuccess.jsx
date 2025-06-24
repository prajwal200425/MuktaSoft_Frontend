import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectSuccess = () => {

    const navigate = useNavigate()

    const handleGoHome = ()=>{
        navigate("/")
    }

    return (
        <div className="min-h-screen bg-[#e2e2e2] p-4 relative">

            <div className="max-w-5xl mx-auto bg-white rounded-md shadow-md p-4">

                <p className="text-gray-500 text-sm mb-4">WMS / Project</p>


                <div className="bg-green-700 text-white rounded-md p-6 text-center">
                    <h2 className="text-2xl font-bold mb-2">Project Created Successfully</h2>

                    <div className="flex flex-col items-center mt-4">
                        <div className="bg-white rounded-full p-3">
                            <svg
                                className="w-8 h-8 text-green-700"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={3}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <p className="text-md font-semibold mt-3">Project ID</p>
                        <p className="text-lg font-bold">PR/2022-23/03/000252</p>
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row sm:justify-start items-start gap-4 mt-6">
                    <button className="text-orange-600 font-medium hover:underline">
                        Go to Search Project
                    </button>
                    <button className="text-orange-600 font-medium hover:underline">
                        Create Estimate
                    </button>
                </div>
            </div>


            <div className="fixed bottom-4 right-4 z-50">
                <button onClick={handleGoHome} className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-1 rounded-md shadow-md">
                    Go Back To Home
                </button>
            </div>
        </div>
    );
};

export default ProjectSuccess;