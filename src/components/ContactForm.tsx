"use client";
import { useState } from "react";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "52fc427e-eae0-4467-84b2-d6bb3550dc58");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setResult(data.success ? "Thank You for your valuable feedback!" : "Sorry, an error occurred.Please Email me directly.");
    };

    return (
        <form onSubmit={onSubmit} className="w-[90%]  md:w-[60%] mx-auto mt-10 p-6 border-primary rounded-2xl shadow-lg border flex flex-col gap-4 ">
            <h2 className="text-2xl font-semibold text-center mb-2">Feedback Form</h2>

            <input type="text" name="name" placeholder="Your Name" required />

            <input type="email" name="email" placeholder="Your Email" required />

            <textarea name="message" placeholder="Your Valuable Feedback" required rows={4}></textarea>

            <button type="submit" className="bg-primary hover:cursor-pointer text-navy font-semibold py-3 rounded-md hover:bg-white hover:text-primary transition">
                Send Message
            </button>

            <p className="text-center text-sm mt-2">{result}</p>
        </form>
    );
}
