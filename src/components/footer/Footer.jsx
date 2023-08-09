import { Link } from "react-router-dom";

const Footer = () => {

    const backtotop = () => {
        window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', () => {
        let backtotoper = document.getElementById('backtotoper');
        if (scrollY > 500) {
            backtotoper.classList.remove('hidden')
            backtotoper.classList.add('block')
        }
        if (scrollY < 500) {
            backtotoper.classList.add('hidden');
            backtotoper.classList.remove('block')
        }
    })
    const copyEmail = () => {
        let text = 'salmanhossain11222626@gmail.com'
        navigator.clipboard.writeText(text)
        let target = document.getElementById('copyEmailfooter');
        target.innerText = 'copied'
        target.title = 'email copied'
        setTimeout(() => {
            target.innerText = 'Copy Email'
        }, 2000)
    }
    return (
        <div className="bg-gray-300 w-full mt-4 overflow-x-hidden">
            <footer className=" flex p-10 bg-neutral items-center justify-evenly flex-col lg:flex-row gap-10 md:gap-0 text-neutral-content">
                <div className="flex gap-10 mb-10 lg:mb-0">
                    <div className="flex items-center flex-col justify-center">
                        <span className="footer-title">Links</span>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">login</a>
                    </div>
                    <div className="flex items-center flex-col justify-center">
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Blogging</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </div>

                <form className="flex flex-col gap-2 w-full md:w-96">
                    <input type="email" placeholder="Your email" className="input input-bordered w-full text-black" />
                    <textarea className="textarea textarea-bordered text-black" rows={4} placeholder="Bio"></textarea>
                    <button className="btn w-24">send</button>
                </form>
            </footer>

            <div id="backtotoper" onClick={backtotop} className="cursor-pointer text-4xl text-center text-white h-10 pb-2 w-10 fixed bottom-4 right-2 rounded-md bg-indigo-500 hidden z-50">
                ↑
            </div>

        </div>
    );
};

export default Footer;