import { useNavigate } from "react-router-dom";

export const tools = [
    {
      name: "Base64 Encoder/Decoder",
      description: "Encode your strings to Base64 or decode strings encoded with Base64",
      svg: "https://img.icons8.com/?size=100&id=R18j5SiSPwR8&format=png&color=000000",
      link: "/tools/base64-encoder-decoder",
      available: true
    },
    {
      name: "Code to Image Converter",
      description: "Convert your codes to fancy images and share with your friends or colleagues",
      svg: "https://img.icons8.com/?size=100&id=N3wRcSUFuct_&format=png&color=000000",
      link: "/tools/code-to-image-converter",
      available: false
    },
    {
      name: "URL Slug Generator",
      description: "Generate SEO-friendly slugs from titles or any other strings for your webpages or blog posts",
      svg: "https://img.icons8.com/?size=100&id=0GU4b5gZ4PdA&format=png&color=000000",
      link: "/tools/url-slug-generator",
      available: false
    },
    {
      name: "React Native Shadow Generator",
      description: "Generate fancy box shadows in React Native both for iOS and Android",
      svg: "https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=000000",
      link: "/tools/react-native-shadow-generator",
      available: false
    },
    {
      name: "HTML Encoder/Decoder",
      description: "Encode or decode your HTML by replacing special characters into equivalent escape forms",
      svg: "https://img.icons8.com/?size=100&id=7hA5Ny9rDAmV&format=png&color=000000",
      link: "/tools/html-encoder-decoder",
      available: false
    },
    {
      name: "URL Encoder/Decoder",
      description: "Encode your URL by escaping characters that may break your navigation and decode it",
      svg: "https://img.icons8.com/?size=100&id=68406&format=png&color=000000",
      link: "/tools/url-encoder-decoder",
      available: false
    },
    {
      name: "HTML Minifier",
      description: "Minify your HTML code and copy the minified code to your clipboard or download as .html file",
      svg: "https://img.icons8.com/?size=100&id=9tbgg9HybO31&format=png&color=000000",
      link: "/tools/html-minifier",
      available: false
    },
    {
      name: "CSS Minifier",
      description: "Minify your CSS code and copy the minified code to your clipboard or download as style.min.css file",
      svg: "https://img.icons8.com/?size=100&id=d9mtzrk5gad4&format=png&color=000000",
      link: "/tools/css-minifier",
      available: false
    },
    {
      name: "JavaScript Minifier",
      description: "Minify your JavaScript code and copy the minified code to your clipboard or download as .min.js file",
      svg: "https://img.icons8.com/?size=100&id=39853&format=png&color=000000",
      link: "/tools/javascript-minifier",
      available: false
    },
    {
      name: "HTML Formatter",
      description: "Format your HTML code with HTML beautifier and either copy the formatted HTML or download it",
      svg: "https://img.icons8.com/?size=100&id=11240&format=png&color=000000",
      link: "/tools/html-formatter",
      available: false
    },
    {
      name: "CSS Formatter",
      description: "Format your CSS code and copy the beautified code to your clipboard or download as style.css file",
      svg: "https://img.icons8.com/?size=100&id=GKah7zoOyUcP&format=png&color=000000",
      link: "/tools/css-formatter",
      available: false
    },
    {
      name: "JavaScript Formatter",
      description: "Format/beautify your JavaScript code and copy the formatted code to your clipboard or download as a file",
      svg: "https://img.icons8.com/?size=100&id=106036&format=png&color=000000",
      link: "/tools/javascript-formatter",
      available: false
    },
    {
      name: "MD5 Encrypt/Decrypt",
      description: "Encrypt strings to MD5 hashes or decrypt MD5 hashes to strings by iterating combinations",
      svg: "https://img.icons8.com/?size=100&id=114075&format=png&color=000000",
      link: "/tools/md5-encrypt-decrypt",
      available: false
    },
    {
      name: "SHA1 Encrypt/Decrypt",
      description: "Encrypt strings to SHA1 hashes or decrypt SHA1 hashes to strings by iterating combinations",
      svg: "https://img.icons8.com/?size=100&id=4L4YQevFJaeC&format=png&color=000000",
      link: "/tools/sha1-encrypt-decrypt",
      available: false
    },
    {
      name: "SHA224 Encrypt/Decrypt",
      description: "Encrypt strings to SHA224 hashes or decrypt SHA224 hashes to strings by iterating combinations",
      svg: "https://img.icons8.com/?size=100&id=bTIXCwD2qLeC&format=png&color=000000",
      link: "/tools/sha224-encrypt-decrypt",
      available: false
    },
    {
      name: "SHA256 Encrypt/Decrypt",
      description: "Encrypt strings to SHA256 hashes or decrypt SHA256 hashes to strings by iterating combinations",
      svg: "https://img.icons8.com/?size=100&id=LfI2l5lWbWZi&format=png&color=000000",
      link: "/tools/sha256-encrypt-decrypt",
      available: false
    },
    {
      name: "SHA384 Encrypt/Decrypt",
      description: "Encrypt strings to SHA384 hashes or decrypt SHA384 hashes to strings by iterating combinations",
      svg: "sha384-icon.svg",
      link: "/tools/sha384-encrypt-decrypt",
      available: false
    },
    {
      name: "SHA512 Encrypt/Decrypt",
      description: "Encrypt strings to SHA512 hashes or decrypt SHA512 hashes to strings by iterating combinations",
      svg: "sha512-icon.svg",
      link: "/tools/sha512-encrypt-decrypt",
      available: false
    },
    {
      name: "JWT Encoder/Decoder",
      description: "Encode, decode, verify or debug JWT (JSON Web Token) for HSxxx, RSxxx & ESxxx algorithms",
      svg: "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000",
      link: "/tools/jwt-encoder-decoder",
      available: false
    },
    {
      name: "JSON Tree Viewer",
      description: "View your JSON data in tree view, walk through all branches and update nodes if you need to",
      svg: "https://img.icons8.com/?size=100&id=111953&format=png&color=000000",
      link: "/tools/json-tree-viewer",
      available: false
    }
  ];
  
export default function Tools() {
    const navigateto = useNavigate();
    return <div className="flex flex-col mt-10 mx-4">
        
        <div className="font-bold text-[40px] pl-10 ">
            <h1><span className="text-[#5D5FEF]">T</span>ools <span className="text-[#5D5FEF]">C</span>ollection</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  p-10">
            {tools.map((tool) => (
                <button onClick={()=>{
                    if (tool.available) navigateto(tool.link)
                }
                } className={ `${ tool.available ? "bg-blue-100 border-blue-400 hover:ring-4 ring-blue-200 ": "bg-white  border-slate-200 "} border-[1px] shadow-sm flex flex-col justify-center p-4 items-center rounded-xl cursor-pointer transition-all `}>
                    <img src={tool.svg} alt="icon" className="h-15 w-15" />
                    <h1 className="font-bold">{tool.name}</h1>
                    <p className="text-[12px] text-gray-500 italic">{tool.description}</p>
                </button>
            ))}
        </div>
    </div>
}
