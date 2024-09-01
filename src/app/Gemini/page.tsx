"use client";
import TypewriterEffect from "../components/ui/Typewriter";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Input } from "../components/ui/input";
import React from 'react'
import axios from "axios";

const GeminiAi = () => {

    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string>("");
    const [noOfResponses, setNoOfResponses] = useState(0);
    const [disable, setDisable] = useState(false);

    const word = [
        {
          text: {response},
          className:"text-[50px] sm:text-[55px] lg:text-[65px] 2xl:text-[70px]"
        }
    ]

    async function getResponse(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!prompt) {
            setResponse("");
            return;
        }
        setLoading(true);
        setResponse("");
        setDisable(true);

        try {
            const result = await axios.post(
                process.env.NEXT_PUBLIC_BASE_API_URL + "/api/MakeadreamAI",
                {
                    prompt: prompt,
                }
            );

            setResponse(result.data.response);
            setNoOfResponses(noOfResponses + 1);
        } catch (e: any) {
            console.error(e);
            setNoOfResponses(0);
            setDisable(false);
        } finally {
            setLoading(false);
        }
    }
  return (
    <div className="h-screen">
        <section className="font-lato bg-white size-full flex justify-center items-center">
                    <div className="">
                        <form
                            onSubmit={(e) => getResponse(e)}
                            className="flex flex-col brk-3:flex-row gap-5 brk-3:gap-0 items-center mb-10 w-[80vw] justify-center border-2 border-black"
                        >
                            <Input
                                value={prompt}
                                onChange={
                                    (e) => setPrompt(e.target.value)
                                }
                                placeholder="Start Asking..."
                                id="webwizAI"
                                name="prompt"
                                className="border-2 border-black"
                            />
                            {/* <loading
                                text={"Ask Webwiz AI"}
                                loadingText={"Thinking..."}
                                loading={loading}
                                disable={disable}
                            /> */}
                        </form>

                        {noOfResponses > 0 && (
                            <div
                                className="bg-[#D4E2D4] bg-opacity-60 rounded-xl py-10  px-6 sm:p-8 brk-3:p-10 lg:p-12 w-full"
                            >
                                {/* {loading && <TextLoader />} */}
                                {response && (
                                    <TypewriterEffect
                                        text={response}
                                        setDisable={setDisable}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </section>
    </div>
  )
}

export default GeminiAi
