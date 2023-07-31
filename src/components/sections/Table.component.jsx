import React, { useState } from "react";

const TableComponent = () => {
  const [th, setTh] = useState(["Parameter", "Type", "Description"]);
  const [td, setTd] = useState([
    { parameter: "api_key-1", type: "string", description: "Your API Key" },
    { parameter: "api_key-2", type: "string2", description: "Your API Key 2" },
    { parameter: "api_key-3", type: "string3", description: "Your API Key 3" },
  ]);
  return (
    <div className="border border-neutral-400 border-dashed p-2 mb-4">
      <table className="table-auto border-collapse border-neutral-500">
        <thead>
          <tr>
            {th.map((th) => {
              return <th className="border border-neutral-400 px-14">{th}</th>;
            })}
          </tr>
        </thead>
        <tbody>
            {td.map((td) => {
              return (
                <tr>
                  <td className="border border-neutral-400 px-14 text-neutral-400">{td.parameter}</td>
                  <td className="border border-neutral-400 px-14 text-neutral-400">{td.type}</td>
                  <td className="border border-neutral-400 px-14 text-neutral-400">{td.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
