import { useEffect } from "react";
import Trending from "./components/CardHome";
import { Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Featured from "./components/Featured";

const Home = () => {
    let datas = []
    for (let i = 0; i < 10; i++) {
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
            <h1 className="text-2xl font-semibold px-1  pt-5">Trending Gadgets 🔥</h1>
            <Featured data={datas}></Featured>
            <h1 className="text-2xl font-semibold px-1 pt-5 sm:px-10 md:px-14 ">T shirts👕</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto items-center justify-center flex-wrap gap-3 py-3  px-1 sm:px-10 md:px-14 lg:px-16 xl:px-10">
                {
                    datas.map(ele => <Trending key={ele.id} data={ele}></Trending>)
                }

            </div>
            {
                showAll
            }
            <h1 className="text-2xl font-semibold px-1 pt-5 sm:px-10 md:px-14 ">Jents 👖</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto  items-center justify-center flex-wrap gap-3 py-3  px-1 sm:px-10 md:px-14 lg:px-16 xl:px-10">
                {
                    datas.map(ele => <Trending key={ele.id} data={ele}></Trending>)
                }

            </div>
            {
                showAll
            }
            <h1 className="text-2xl font-semibold px-1 pt-5 sm:px-10 md:px-14 ">Shirts 👚</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mx-auto  items-center justify-center flex-wrap gap-3 py-3  px-1 sm:px-10 md:px-14 lg:px-16 xl:px-10">
                {
                    datas.map(ele => <Trending key={ele.id} data={ele}></Trending>)
                }

            </div>
            {
                showAll
            }
        </div>

    );
};

export default Home;