import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full">
            <video 
                className="w-full object-cover"
                src={"/videos/landing-video.mp4"}
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    );
}
