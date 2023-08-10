import { Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Trending from "./components/Trending";
import FeaturedItems from "./components/FeaturedItems";
import JustForyou from "./components/JustForyou";
import { useContext } from "react";
import { dataProvier } from "../../private/provider/DataProvider";


const Home = () => {
    const { loadmore, loading, loadingBtn } = useContext(dataProvier)
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
        <div className="container mx-auto mt-5 px-2 relative ">
            <Welcome></Welcome>
            <h1 className="text-2xl font-semibold px-1 py-3  pt-5 underline decoration-gray-400 decoration-4 underline-offset-[10px]">Trending Gadgets 🔥</h1>
            <Trending data={datas}></Trending>
            <div className="text-center py-7 md:py-16">
                <h1 className="text-3xl ">Featured Items</h1>
                <p className="max-w-lg mx-auto text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero maiores quaerat quisquam officia deleniti animi rerum repellat tempore </p>
            </div>
            <FeaturedItems data={datas} ></FeaturedItems>
            <div className="grid grid-cols-5 gap-3 mt-12 " >
                <div className="xl:col-span-1 bg-gray-100 rounded-md h-full hidden xl:block">

                </div>
                {
                    loading ? <div className="col-span-4 flex-col h-[15rem] flex items-center justify-center bg-gray-200 gap-2">
                        <span className=" loading loading-spinner loading-lg"></span>
                    </div> : <JustForyou></JustForyou>
                }
            </div>







            <div className="w-full flex justify-center my-4">
                {
                    loadingBtn ? <div className="bg-gray-300 px-9 py-2 flex items-center justify-center rounded"> <span className=" loading loading-spinner loading-md"></span></div> : <button onClick={loadmore} className="bg-gray-300 p-3  rounded font-semibold active:scale-90 duration-100 hover:bg-gray-200">
                        Load more
                    </button>
                }

            </div>

        </div >

    );
};

export default Home;