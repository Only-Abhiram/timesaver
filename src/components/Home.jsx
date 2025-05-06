import Navbar from "./navbar"
import Hero from "./hero"
import Tools from "./toolscollection"
import Footer from "./footer"
export default function Home(){
    return <div className="">
        <div class="absolute -z-10 inset-0 h-475 w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:30px_30px]" />
        <Navbar/>
        <Hero/>
        <Tools/>
        <Footer/>
    </div>
}