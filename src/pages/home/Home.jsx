import { Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Trending from "./components/Trending";
import SmallCard from "../../components/small-card/SmallCard";
import FeaturedItems from "./components/FeaturedItems";


const Home = () => {
    let datas = []
    for (let i = 0; i < 6; i++) {
        let data = {
            id: i,
            name: 'title random',
            price: 50,
            ratings: 5,
            quality: 'premium',
            tranding: true,
            img: "img"

        }
        datas.push(data)
    }
    const showAll = <>
        <div className="mt-8 text-center "><Link className="bg-indigo-200 px-3 py-2 rounded cursor-pointer active:bg-indigo-500 hover:bg-indigo-500  hover:text-white  duration-100">show all</Link></div>

    </>

    return (
        <div className="container mx-auto mt-5 px-2">
            <Welcome></Welcome>
            <h1 className="text-2xl font-semibold px-1  pt-5 underline decoration-gray-400 decoration-4 underline-offset-[10px]">Trending Gadgets 🔥</h1>
            <Trending data={datas}></Trending>
            <div className="text-center py-7 md:py-16">
                <h1 className="text-3xl ">Featured Items</h1>
                <p className="max-w-lg mx-auto text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero maiores quaerat quisquam officia deleniti animi rerum repellat tempore </p>
            </div>
            <FeaturedItems data={datas} ></FeaturedItems>
            <h1 className="text-2xl font-semibold px-1 pt-5 sm:px-10 md:px-14 ">T shirts👕</h1>

        </div >

    );
};

export default Home;