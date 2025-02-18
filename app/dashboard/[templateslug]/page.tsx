"use client"
import Sideee from '@/components/Sideee'
import React, { useState } from 'react'
import { gigboosterservices } from '@/data/data'
import { Editor } from '@/components/Editor'
import { chatSession } from '@/lib/gemini-ai'
import axios from 'axios'




const Page = ({params} : {params : { templateslug: string}}) => {
    const selectedTemplate = gigboosterservices.find((template) => template.slug === params.templateslug)
    
    const [aiOutput, setAiOutput] = useState<any>('')
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = async (formdata: FormData) => {
        generateContent(formdata)
    }
    
    const generateContent = async (formdata: FormData) => {
        setLoading(true);
        try {
            const dataSet = {
                servicename: formdata.get('packagenumber') as string,
                servicedescription: formdata.get('servicedescription') as string,
            };
            const SelectedPrompt = selectedTemplate?.prompt;
            const AiPrompt = JSON.stringify(dataSet) + ',' + SelectedPrompt;
    
            const results = await chatSession.sendMessage(AiPrompt);
            const formattedOutput = results.response.text().replace(/\n/g, "<br>");
    
            const response = await axios.post('/api/', {
                title: dataSet.servicename,
                outputcontent: formattedOutput,
                templateUsed: selectedTemplate?.name, 
            });
    
            setAiOutput(formattedOutput);
            setLoading(false);
        } catch (err) {
            console.error("Error generating content", err);
            setLoading(false);
        }
    };
    
    return (
        <main className="bg-bgdark h-screen">
            <Sideee />
            <div className='p-6 bg-bgdark  sm:ml-72 text-white'>
                <div className='pb-10 pt-5 flex flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold text-center pb-3'>{selectedTemplate?.name}</h1>
                    <p className='text-gray-400 max-w-2xl text-center'>{selectedTemplate?.description}</p>
                </div>

                <form className='' action={onSubmit}>
                    <div className='grid grid-cols-1 lg:grid-cols-3 '>
                        <div className='col-span-1 bg-slategrey container-color2 p-4 rounded-lg text-2xl font-bold m-2'>
                            {selectedTemplate?.form?.map((form) => (
                                <div className='py-3' key={selectedTemplate.slug}> 
                                    <label htmlFor="inputname" className=" text-white font-semibold text-sm">{form.label} :</label>
                                    
                                    {form.field === 'input' ? (
                                        <div className='mt-2'>
                                            <input
                                                type="text"
                                                name="packagenumber" // This matches now
                                                className="block w-full rounded-md bg-hovergrey border border-[#414141] focus:border-purple focus:ring-purple focus:outline-none text-white focus:text-gray-200 font-normal py-2 px-2 text-sm "
                                            />
                                        </div>
                                    ) : (
                                        <div className='mt-2 '>
                                            <textarea
                                                name="servicedescription"
                                                id="textarea"
                                                rows={10}
                                                cols={10}
                                                required
                                                className="block w-full rounded-md bg-hovergrey border border-[#414141] focus:border-purple focus:ring-purple focus:outline-none text-white focus:text-gray-200 font-normal py-2 px-2 text-sm"
                                            ></textarea>
                                        </div>
                                    )
                                    
                                }
                                </div>
                            ))}
                            
                        
                            <button className=" flex items-center justify-end w-34 h-11 bg-transparent text-white border-2 border-purple rounded-lg px-3 py-2 transition-all duration-600 ease-in-out hover:bg-purple cursor-pointer group">
                                {loading ? (
                                    <>
                                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span className="text-sm font-medium">Loading...</span>
                                </>
                                ) : (
                                    <>
                                    <svg height="18" width="18" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="w-5 h-6 mr-3 transition-transform duration-600 ease-in-out group-hover:translate-x-1 ">
                                        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
                                    </svg>
                                    <span className="text-sm  font-medium">
                                        Generate
                                    </span>
                                </>
                                )}
                                
                            </button>

                        </div>
                        <div className='col-span-2 bg-slategrey px-4 rounded-lg h-[calc(100vh-490px)] md:h-[calc(100vh-270px)] m-2'>
                            <Editor value={ loading ? 'Generating...': aiOutput} /> 
                            
                        </div>
                    </div>
                </form>
            
            
            
            
            
            
            </div>
        </main>
    )
}

export default Page
