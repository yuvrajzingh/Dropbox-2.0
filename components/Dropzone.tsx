"use client";

import { cn } from "@/lib/utils";
import DropzoneComponent from "react-dropzone";

function Dropzone() {

    // max file size 20MB
    const maxSize = 20971520;

    

  return (
    <DropzoneComponent onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps, isDragActive, isDragReject, fileRejections}) => {
    
    const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

    return (
    <section className="m-4">
      <div {...getRootProps()}
        className={cn("w-full h-52 flex justify-center items-center cursor-pointer p-5 order border-dashed rounded-lg text-center", isDragActive ? "bg-[#035FFE] text-white animate-pulse" : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400")}>
        <input {...getInputProps()} />
        {!isDragActive && "Click here or drop a file to upload!"}
        {isDragActive && !isDragReject && "Drop to upload this file!"}
        {isDragReject && "File type not accepted, sorry!"}
        {
            isFileTooLarge && (
                <div className="text-danger mt-2">File is too large.</div>
            )
        }
      </div>
    </section>
  )}}
    </DropzoneComponent>
  )
}

export default Dropzone