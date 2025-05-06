import { useState } from "react"

export default function Base64() {
    const [encoder, setEncoder] = useState(true);
    const [text, setText] = useState("");
    const [coded, setCoded] = useState("");
    const [alert, setAlert] = useState("");
    const handleclick = () => {
        if (!text.trim()) {
            setAlert('Please enter some text to encode/decode.')
            return;
        }
        if (typeof text !== "string") {
            setAlert("Input must be a string.");
            return;
        }
        if (encoder) {
            try {
                const encoded = btoa(text);
                setCoded(encoded)
                setAlert("")
            } catch (err) {
                setAlert("Encoding failed: invalid characters in input.");
            }
        } else {
            try {
                const decoded = atob(text);
                setCoded(decoded)
                setAlert("")
            } catch (err) {
                setAlert("Decoding failed: invalid characters in input.");
            }
        }

    }

    return <div className="flex flex-col justify-center items-center h-screen"> 
                <div class="absolute -z-10 inset-0 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="flex flex-col justify-center items-center bg-white">
        <div className="flex flex-col items-center justify-center border border-slate-300 rounded-3xl md:w-2xl lg:w-3xl shadow-2xl shadow-blue-300 inset-shadow-sm inset-shadow-white">
            <div className="font-bold text-2xl p-2 italic font-mono ">
                Base<span className="text-blue-600">64</span> Encoder<span className="text-blue-600">/</span>Decoder
            </div>
            <div className="border-t border-slate-300 w-full flex flex-col justify-center">
                <div className="flex justify-center my-2">
                    <div className="bg-gray-400  p-1 rounded-2xl ">
                        <button onClick={() => {
                            if (!encoder) setEncoder(true);
                        }} className={`py-1 px-8 mr-1 rounded-2xl font-medium text-white text-lg ease-in-out transition-all   ${encoder ? "bg-blue-600 inset-shadow-sm inset-shadow-white  shadow-lg shadow-blue-500/50" : ""}`}>
                            Encoder
                        </button>
                        <button onClick={() => {
                            if (encoder) setEncoder(false);
                        }} className={`py-1 px-8 ml-1 rounded-2xl text-white font-medium text-lg ease-in-out transition-all ${!encoder ? "bg-blue-600 inset-shadow-sm inset-shadow-white  shadow-lg shadow-blue-500/50" : ""}`}>
                            Decoder
                        </button>
                    </div>
                </div>
                <div className="flex  w-full">
                    <textarea value={text} onChange={(e) => setText(e.target.value)}
                        placeholder={encoder ? "Text" : "Base64"}
                        className=" overflow-y-auto border border-blue-200 focus:outline-none focus:shadow-sm focus:shadow-blue-300 p-2 w-full h-45 rounded m-3" name="" id=""></textarea>
                    <textarea value={coded} disabled
                        placeholder={!encoder ? "Text" : "Base64"}
                        className=" border-blue-200 overflow-y-auto border p-2 w-full h-45 rounded m-3" name="" id=""></textarea>

                </div>
                {
                    alert !== "" && (
                        <div className="flex flex-row items-center justify-center border border-red-200 text-sm text-center p-1 rounded-md text-red-500 mx-3 mb-2 bg-orange-100"><img className="h-4 mx-2" src="https://img.icons8.com/?size=100&id=12226&format=png&color=000000" alt="" />{alert}</div>
                    )
                }

                <div className=" flex justify-between px-5">
                    <button onClick={() => {
                        setCoded("")
                        setText("")
                        setAlert("")
                    }
                    } className="p-2 mb-2 border rounded-3xl w-20 border-blue-300 text-blue-800 hover:bg-blue-200 font-bold italic cursor-pointer">reset</button>
                    <button className="p-2 mb-2 border rounded-3xl w-20  bg-blue-600 hover:bg-blue-900 cursor-pointer text-white font-bold italic" onClick={handleclick}>{encoder ? "Encode" : "Decode"}</button>
                    <button onClick={() => {
                        navigator.clipboard.writeText(coded)
                            .then(() => { })
                    }} className="p-2 mb-2 border rounded-3xl w-20  border-blue-300 hover:bg-blue-200 text-blue-800 font-bold italic cursor-pointer">copy</button>
                </div>
            </div>
        </div>
    </div>
    </div>
} 