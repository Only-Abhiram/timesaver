
const tools = [
    {
        "name": "Code to Image Converter",
        "description": "Convert your codes to fancy images and share with your friends or colleagues",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "URL Slug Generator",
        "description": "Generate SEO-friendly slugs from titles or any other strings for your webpages or blog posts",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "React Native Shadow Generator",
        "description": "Generate fancy box shadows in React Native both for iOS and Android",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "Base64 Encoder/Decoder",
        "description": "Encode your strings to Base64 or decode strings encoded with Base64",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "HTML Encoder/Decoder",
        "description": "Encode or decode your HTML by replacing special characters into equivalent escape forms",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "URL Encoder/Decoder",
        "description": "Encode your URL by escaping characters that may break your navigation and decode it",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "HTML Minifier",
        "description": "Minify your HTML code and copy the minified code to your clipboard or download as .html file",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "CSS Minifier",
        "description": "Minify your CSS code and copy the minified code to your clipboard or download as style.min.css file",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "JavaScript Minifier",
        "description": "Minify your JavaScript code and copy the minified code to your clipboard or download as .min.js file",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "HTML Formatter",
        "description": "Format your HTML code with HTML beautifier and either copy the formatted HTML or download it",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "CSS Formatter",
        "description": "Format your CSS code and copy the beautified code to your clipboard or download as style.css file",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "JavaScript Formatter",
        "description": "Format/beautify your JavaScript code and copy the formatted code to your clipboard or download as a file",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "MD5 Encrypt/Decrypt",
        "description": "Encrypt strings to MD5 hashes or decrypt MD5 hashes to strings by iterating combinations",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "SHA1 Encrypt/Decrypt",
        "description": "Encrypt strings to SHA1 hashes or decrypt SHA1 hashes to strings by iterating combinations",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "SHA224 Encrypt/Decrypt",
        "description": "Encrypt strings to SHA224 hashes or decrypt SHA224 hashes to strings by iterating combinations",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "SHA256 Encrypt/Decrypt",
        "description": "Encrypt strings to SHA256 hashes or decrypt SHA256 hashes to strings by iterating combinations",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "SHA384 Encrypt/Decrypt",
        "description": "Encrypt strings to SHA384 hashes or decrypt SHA384 hashes to strings by iterating combinations",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "SHA512 Encrypt/Decrypt",
        "description": "Encrypt strings to SHA512 hashes or decrypt SHA512 hashes to strings by iterating combinations",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "JWT Encoder/Decoder",
        "description": "Encode, decode, verify or debug JWT (JSON Web Token) for HSxxx, RSxxx & ESxxx algorithms",
        "actions": ["Open", "Add to Favs"]
    },
    {
        "name": "JSON Tree Viewer",
        "description": "View your JSON data in tree view, walk through all branches and update nodes if you need to",
        "actions": ["Open"]
    }
]
export default function Tools() {
    return <div className="flex flex-col mt-10">
        <div className="font-bold text-[40px] pl-10 ">
            <h1><span className="text-[#5D5FEF]">T</span>ools <span className="text-[#5D5FEF]">C</span>ollection</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  p-10 ">
            {tools.map((tool) => (
                <button className="flex flex-col justify-center p-4 items-center rounded-xl cursor-pointer transition-all border-[1px] border-slate-200  hover:shadow-sm hover:shadow-[#5D5FEF]">
                    <h1 className="font-bold">{tool.name}</h1>
                    <p>{tool.description}</p>
                </button>
            ))}
        </div>
    </div>
}
