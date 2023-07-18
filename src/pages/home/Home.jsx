import { useEffect } from "react";
import Trending from "./components/Trending";

const Home = () => {
    let datas = []
    for (let i = 0; i < 4; i++) {
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

    return (
        <div>
            <h1 className="text-2xl font-semibold px-1 sm:px-10 md:px-14 ">Trending🔥</h1>
            <div className="flex items-center justify-center flex-wrap gap-3   px-1 sm:px-10">
                {
                    datas.map(ele => <Trending key={ele.id} data={ele}></Trending>)
                }

            </div>
        </div>

    );
};

export default Home;