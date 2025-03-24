import React from 'react';
import { FileText, Download, Upload, FolderPlus } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: 'Employee Handbook 2025',
      type: 'PDF',
      size: '2.4 MB',
      lastModified: 'Mar 10, 2025',
      category: 'Policies',
    },
    {
      id: 2,
      name: 'Benefits Package Overview',
      type: 'PDF',
      size: '1.8 MB',
      lastModified: 'Mar 8, 2025',
      category: 'Benefits',
    },
    {
      id: 3,
      name: 'Onboarding Checklist',
      type: 'DOCX',
      size: '524 KB',
      lastModified: 'Mar 5, 2025',
      category: 'Onboarding',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-black">Documents</h2>
          <p className="text-gray-600 mt-2">Manage company documents and policies</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center px-4 py-2 border-2 border-black rounded-lg hover:bg-gray-100">
            <Upload size={20} className="mr-2" />
            Upload
          </button>
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            <FolderPlus size={20} className="mr-2" />
            New Folder
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white border-2 border-black p-6 rounded-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <FileText size={24} className="text-black mr-3" />
                <div>
                  <h3 className="font-medium">{doc.name}</h3>
                  <p className="text-sm text-gray-600">{doc.category}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Download size={20} />
              </button>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{doc.type} • {doc.size}</span>
              <span>{doc.lastModified}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;