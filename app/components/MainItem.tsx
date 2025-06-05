import React from 'react'
import Image from 'next/image';

interface MainItemProps {
    image: string;
    alt: string;
    title: string;
    isSoldOut: boolean;
    bgColor: string;
}

export default function MainItem({
    image,
    alt,
    title,
    isSoldOut,
    bgColor
}: MainItemProps) {
    return (
        <div className={`bg-${bgColor} h-screen flex flex-col items-center justify-center snap-start`}>
            <Image
                src={`/assets/${image}`}
                alt={alt}
                width={400}
                height={400} 
            />
            <h3 className="font-bold text-lg">{isSoldOut? `${title} is sold out`: title}</h3>
            {isSoldOut ? (
                <p>
                    If you are lucky, you may get the last pieces in <a href="#" className="text-white">selected stores.</a>
                </p>):
                <div className="flex flex-col items-center">
                    <a href="#" className="text-white">BUY HERE</a>
                    <p>or in in <a href="#" className="text-white">selected stores.</a></p>
                </div>
            }
        </div >
    )
}
