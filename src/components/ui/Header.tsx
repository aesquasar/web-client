"use client";

import useThemeLogo from "@/hooks/useThemeLogo";
import Image from "next/image";

export default function Header() {
    const { src, mounted } = useThemeLogo();
    const loggedIn = true;

    return (
        <div className="fixed left-1/2 top-4 -translate-x-1/2 w-[480px] h-[var(--header-height)] flex justify-between items-center px-6 rounded-full bg-[var(--background)]/20 backdrop-blur-md z-10">
            {/* top */}
            <div className="relative left-0">
                {mounted && (
                    <div className="flex items-center gap-1 w-full">
                        <Image src={src} width={127} height={27} alt="logo" />
                    </div>
                )}
            </div>
            <div></div>

            {loggedIn ? (
                <div className="flex gap-2">
                    <div className="px-4 text-xs select-none hover:opacity-80 py-2 text-[#fafafa] bg-[var(--background)]/20 rounded-full ">
                        Dashboard
                    </div>
                    <div className="px-4 text-xs select-none hover:opacity-80 py-2 text-[#fafafa] bg-[var(--background)]/20 rounded-full ">
                        Logout
                    </div>
                </div>
            ) : (
                <div className="px-4 text-xs select-none hover:opacity-80 py-2 text-[#fafafa] bg-[var(--background)]/20 rounded-full ">
                    Login
                </div>
            )}
        </div>
    );
}
