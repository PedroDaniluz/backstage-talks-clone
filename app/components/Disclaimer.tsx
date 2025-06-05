import React from 'react'

export default function Disclaimer() {
    return (
        <div className="absolute bottom-0 left-0 w-1/5">
            <div className="flex flex-col items-start p-6 gap-5">
                <p className="color-black font-semibold">
                    Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
                </p>
                <a href="#" className="text-black text-sm underline">© 2025 Published by Büro Milk</a>
                <a href="#" className="text-black underline">Privacy Policy</a>
            </div>
        </div>
    )
}
