'use client';

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useToast } from "@/components/ui/use-toast"


function RenameModal() {

    const { toast } = useToast()
    const {user} = useUser();
    const [input, setInput] = useState("");

    const [isRenameModalOpen, setIsRenameModalOpen, fileId, filename] = useAppStore((state)=>[
        state.isRenameModalOpen,
        state.setIsRenameModalOpen,
        state.fileId,
        state.filename,
    ]); 

    const renameFile = async() => {
        if(!user || !fileId) return;

        await updateDoc(doc(db, "users", user.id, "files", fileId),{
            filename: input,
        })

        setInput("");
        setIsRenameModalOpen(false);

        toast({
            description: "✅ File Renamed Successfully!",
        })
    }

  return (
    <Dialog
        open={isRenameModalOpen}
        onOpenChange={(isOpen)=>{
            setIsRenameModalOpen(isOpen);
        }}
    >
      <DialogContent>
        <DialogHeader>
         <DialogTitle className="pb-2">Rename the File</DialogTitle>
         <Input 
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)} 
            onKeyDownCapture={(e)=>{
                if(e.key==="Enter"){
                    renameFile();
                }
            }}
         />
        </DialogHeader>   
        <div className="flex justify-end space-x-2 py-3">
            <Button
                size="sm"
                className="px-3"
                variant={"ghost"}
                onClick={()=> setIsRenameModalOpen(false)}
            >
                <span className="sr-only">Cancel</span>
                <span>Cancel</span>
            </Button>
            <Button
                type="submit"
                size="sm"
                className="px-3"
                onClick={()=>renameFile()}
            >  
                <span className="sr-only">Rename</span>
                <span>Rename</span>
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RenameModal