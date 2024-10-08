// src/components/icons/HomeIcon.tsx
import React from 'react';

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            {...props}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12L12 3l9 9-9 9-9-9z" />
        </svg>
    );
};

export default HomeIcon;
