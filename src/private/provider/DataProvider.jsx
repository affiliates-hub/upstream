import React, { createContext, useEffect, useState } from 'react';
export const dataProvier = createContext(null)
const DataProvider = ({ children }) => {
    const [trending, setTrending] = useState([])
    const [featured, setFeatured] = useState([])
    const [forYou, setJustForyou] = useState([])
    const [loading, setLoading] = useState(true);
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [acountLoading, setAcountLoading] = useState(true)
    let loadCount = 0;

    const loadmore = () => {
        setLoadingBtn(true)
        loadCount = loadCount + 24;
        fetch(`https://ecomerce-backend-one.vercel.app/newphones/${loadCount}`).then(res => res.json()).then(data => {
            setJustForyou([...forYou, ...data])
            setLoadingBtn(false)
        })
    }

    useEffect(() => {
        fetch('https://ecomerce-backend-one.vercel.app/newphones/0').then(res => res.json()).then(data => {
            setJustForyou(data);
            setLoading(false);
        })
    }, [])
    const datas = { forYou, loadmore, loading, loadingBtn }
    return (
        <div>
            <dataProvier.Provider value={datas}>
                {children}
            </dataProvier.Provider>
        </div>
    );
};

export default DataProvider;