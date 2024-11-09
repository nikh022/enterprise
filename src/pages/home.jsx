import Contacts from "../components/contacts";
import FarmImage from "../assets/farming.svg";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start mx-4 md:mx-8"> {/* Responsive flex direction */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl pt-20 font-bold text-white leading-relaxed md:leading-snug">
                    वर्षा एंटरप्राइज में हम किसानों से गेंहू, चना, मटर, और अन्य अनाज खरीदते हैं।
                    हमारा उद्देश्य है किसानों को उचित मूल्य और भरोसेमंद सेवा प्रदान करना।
                </h2>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-6 md:mt-0">
                <img
                    className="h-auto max-w-xs sm:max-w-sm md:max-w-full mx-auto"
                    height={500}
                    width={500}
                    src={FarmImage}
                    alt="image description"
                />
            </div>
        </div>
    );
}
