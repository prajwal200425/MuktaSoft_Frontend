import React, { useState } from 'react';

const ProjectForm = () => {
  const [activeTab, setActiveTab] = useState('project');
  const [hasSubProjects, setHasSubProjects] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen overflow-auto p-4">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Create Project</h2>

        <form className="space-y-6 text-sm">
          {/* Top Section */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Date of Proposal:</label>
              <input type="date" className="w-full border border-gray-300 p-2 rounded bg-gray-100" defaultValue="2022-06-05" readOnly />
            </div>
            <div>
              <label className="block mb-1 font-medium">Project Name*</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-medium">This project has Sub Projects</label>
              <div className="flex items-center space-x-6 mt-2">
                <label className="inline-flex items-center">
                  <input type="radio" name="subproject" className="mr-2" onChange={() => setHasSubProjects(true)} /> Yes
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="subproject" className="mr-2" defaultChecked onChange={() => setHasSubProjects(false)} /> No
                </label>
              </div>
              {hasSubProjects && (
                <div className="bg-orange-100 text-orange-700 p-3 mt-3 rounded">
                  <strong className="block mb-1">Info</strong>
                  <span>Please enter details of project breakdown in the sub-projects section</span>
                </div>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-300">
            <div className="flex space-x-8 text-sm font-medium cursor-pointer">
              <span
                className={`pb-1 ${activeTab === 'project' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('project')}
              >
                Project Details
              </span>
              <span
                className={`pb-1 ${activeTab === 'financial' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('financial')}
              >
                Financial Details
              </span>
              {hasSubProjects && (
                <span
                  className={`pb-1 ${activeTab === 'subproject' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('subproject')}
                >
                  Sub-project Details
                </span>
              )}
            </div>
          </div>

          {/* Tab Contents */}
          {activeTab === 'project' && (
            <div className="space-y-4">
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Owning Department</option>
              </select>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Executing Department</option>
              </select>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Beneficiary</option>
              </select>
              <input type="text" placeholder="Letter Reference / Requirement Number" className="w-full border border-gray-300 p-2 rounded" />
              <input type="text" placeholder="Estimated Cost" className="w-full border border-gray-300 p-2 rounded" />
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Type of Work*</option>
              </select>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Sub Type of Work</option>
              </select>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Nature of Work*</option>
              </select>
              <input type="date" className="w-full border border-gray-300 p-2 rounded" placeholder="Start Date" />
              <input type="date" className="w-full border border-gray-300 p-2 rounded" placeholder="End Date" />
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Recommended mode of entitlements</option>
              </select>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Locality*</option>
              </select>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>Ward*</option>
              </select>
              <select className="w-full border border-gray-300 p-2 rounded">
                <option>ULB</option>
              </select>
              <input type="text" placeholder="Geo Location" className="w-full border border-gray-300 p-2 rounded" />
            </div>
          )}

{activeTab === 'financial' && (
  <div className="space-y-4">
    <div>
      <label className="block mb-1 font-medium">Fund*</label>
      <input type="text" className="w-full border border-gray-300 p-2 rounded" />
    </div>
    <div>
      <label className="block mb-1 font-medium">Function*</label>
      <input type="text" className="w-full border border-gray-300 p-2 rounded" />
    </div>
    <div>
      <label className="block mb-1 font-medium">Budget Head*</label>
      <input type="text" className="w-full border border-gray-300 p-2 rounded" />
    </div>
    <div>
      <label className="block mb-1 font-medium">Scheme*</label>
      <input type="text" className="w-full border border-gray-300 p-2 rounded" />
    </div>
    <div>
      <label className="block mb-1 font-medium">Sub Scheme*</label>
      <input type="text" className="w-full border border-gray-300 p-2 rounded" />
    </div>
  </div>
)}


          {hasSubProjects && activeTab === 'subproject' && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-3 py-2 text-left">S.No</th>
                      <th className="border px-3 py-2 text-left">Name of the Work</th>
                      <th className="border px-3 py-2 text-left">Estimated Amount (in ₹)</th>
                      <th className="border px-3 py-2 text-left">Type of Work</th>
                      <th className="border px-3 py-2 text-left">Sub-Type of Work</th>
                      <th className="border px-3 py-2 text-left">Nature of Work</th>
                      <th className="border px-3 py-2 text-left">Project</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-3 py-2">1</td>
                      <td className="border px-3 py-2">
                        <input type="text" className="w-full p-1 border border-gray-300 rounded" />
                      </td>
                      <td className="border px-3 py-2">
                        <input type="text" className="w-full p-1 border border-gray-300 rounded" />
                      </td>
                      <td className="border px-3 py-2">
                        <select className="w-full p-1 border border-gray-300 rounded">
                          <option>Select</option>
                        </select>
                      </td>
                      <td className="border px-3 py-2">
                        <select className="w-full p-1 border border-gray-300 rounded">
                          <option>Select</option>
                        </select>
                      </td>
                      <td className="border px-3 py-2">
                        <select className="w-full p-1 border border-gray-300 rounded">
                          <option>Select</option>
                        </select>
                      </td>
                      <td className="border px-3 py-2">
                        <select className="w-full p-1 border border-gray-300 rounded">
                          <option>Select</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <button className="text-orange-500 hover:underline text-sm flex items-center mt-2">
                  ➕ Add Line Item
                </button>
              </div>
            </div>
          )}

          {/* Upload + Button */}
          <div>
            <label className="block mb-1 font-medium">Upload Files</label>
            <input type="file" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          <div className="flex justify-end">
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Create Estimate</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
