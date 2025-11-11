import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    const email = "bokhtierelius19@gmail.com";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <button onClick={handleCopy} className="flex items-center gap-2 px-4 py-2 bg-primary hover:cursor-pointer rounded-lg">
            {copied ? <TiTick className="w-5 h-5" /> : <MdContentCopy className="w-5 h-5" />}
        </button>
    );
}
