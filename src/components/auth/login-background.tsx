"use client"

import Orb from "../Orb"

export default function LoginBackground() {
    return (
        <>
            {/* Warstwa 2 — Orb: wycentrowany, za panelem */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] z-10 opacity-40">
                <Orb
                    hue={200}
                    hoverIntensity={0.3}
                    rotateOnHover={false}
                    forceHoverState={false}
                    backgroundColor="#ffffff"
                />
            </div>
        </>
    )
}
