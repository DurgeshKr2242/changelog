import React, { useEffect, useState } from "react";
import SelectComponent from "/components/UI/SelectComponent";
import Input from "/components/UI/Input";
import dynamic from "next/dynamic";
import { useGlobalManageContext } from "/context/ManageContext";
const TextEditor = dynamic(() => import("/components/TextEditor"), {
  ssr: false,
});
// import TextEditor from "/components/TextEditor";

const BodyComponent = () => {
  // const [selectedType, setSelectedType] = useState("New Feature");
  const [value, setValue] = useState("");
  const { title, setTitle, body, setBody, version, setVersion, type, setType } =
    useGlobalManageContext();

  return (
    <div className="w-full border-[1px] border-gray-200 rounded-standard/2 shadow-lg flex flex-col items-start justify-start gap-4 shadow-slate-100 p-8">
      <div className="flex items-center justify-center w-full gap-8">
        <SelectComponent
          selected={type}
          onSelect={(type) => setType(type)}
          label="Type"
          options={["FEATURE", "BUGFIX", "SECURITY", "PERFORMANCE"]}
        />
        <div>
          <Input
            label="Version"
            placeholder="v.2.2"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          />
        </div>

        <div className="w-full">
          <Input
            label="Title"
            placeholder="Enter your label"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start w-full ">
        <p className="">Body</p>
        <div className="flex items-start justify-start w-full min-h-[50vh]">
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

export default BodyComponent;
