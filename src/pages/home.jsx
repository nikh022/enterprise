import Contacts from "../components/contacts";

export default function Home() {
    return (
        <div className="flex mx-8"> {/* Adds vertical space between elements */}
            <div className="w-1/2">
                <h2 className="text-4xl pt-9 pb-10 font-bold text-white leading-relaxed">
                    वर्षा एंटरप्राइज में हम किसानों से गेंहू, चना, मटर, और अन्य अनाज खरीदते हैं।
                    हमारा उद्देश्य है किसानों को उचित मूल्य और भरोसेमंद सेवा प्रदान करना।
                </h2>

            </div>
            <div className="mx-20">
            <img className="h-auto max-w-full " height={500} width={500} src="src/assets/farming.svg" alt="image description"/>

            </div>
        </div>
    )
}