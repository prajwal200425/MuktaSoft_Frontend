import React from "react";

const EstimatePage = ({ formData = {} }) => {
  const {
    estimateType = "N/A",
    projectId = "N/A",
    proposalDate = "N/A",
    projectName = "N/A",
    projectDescription = "N/A",
    fileRefNo = "N/A",
    projectType = "N/A",
    targetDemography = "N/A",
    estimatedCost = "N/A",
    geoLocation = "N/A",
    city = "N/A",
    ward = "N/A",
    locality = "N/A",
    headOfAccounts = "N/A",
  } = formData;

  return (
    <div className="bg-gray-100 min-h-screen p-6 text-sm">
      <h1 className="text-3xl font-bold mb-6">Create Estimate</h1>

      <div className="bg-white p-6 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="font-semibold">Estimate Type:</div>
          <div>{estimateType}</div>

          <div className="font-semibold">Project ID:</div>
          <div>{projectId}</div>

          <div className="font-semibold">Date of Proposal:</div>
          <div>{proposalDate}</div>

          <div className="font-semibold">Project Name:</div>
          <div>{projectName}</div>

          <div className="font-semibold">Project Description:</div>
          <div>{projectDescription}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-4 border-b pb-1">Project Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-semibold">File Reference Number:</div>
          <div>{fileRefNo}</div>

          <div className="font-semibold">Project Type:</div>
          <div>{projectType}</div>

          <div className="font-semibold">Target Demography:</div>
          <div>{targetDemography}</div>

          <div className="font-semibold">Estimated Cost:</div>
          <div>{estimatedCost}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-4 border-b pb-1">Location Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-semibold">Geo Location:</div>
          <div>{geoLocation}</div>

          <div className="font-semibold">City:</div>
          <div>{city}</div>

          <div className="font-semibold">Ward:</div>
          <div>{ward}</div>

          <div className="font-semibold">Locality:</div>
          <div>{locality}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-lg font-bold mb-4 border-b pb-1">Financial Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="font-semibold">Head of Accounts:</div>
          <div>{headOfAccounts}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4 border-b pb-1">Relevant Documents</h2>
        <div className="flex space-x-6">
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded text-2xl">📄</div>
            <div>Finalized Worklist</div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded text-2xl">📄</div>
            <div>Plan</div>
          </div>
          <div className="text-center">
            <div className="bg-gray-200 p-4 rounded text-2xl">📄</div>
            <div>Project Proposal</div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded">
          Create Estimate
        </button>
      </div>
    </div>
  );
};

export default EstimatePage;
