'use client'
import React from 'react'

import ReactQuill from 'react-quill'; // Import the Quill editor
import 'react-quill/dist/quill.snow.css';

export const Editor = ({ value }: { value: string }) => {
    
    return (
        <ReactQuill
            theme="snow"
            value={value}
            className="h-52 lg:h-96 py-7 rounded-md"
        />
    
    );
}


