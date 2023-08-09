import React, { useState } from 'react';
import LazyManCopyPast from './LazyManCopyPast';
import Swal from 'sweetalert2';

const Updatedata = () => {
    const [allLinks, setAllLinks] = useState([]);
    const [detaillData, setDetaillData] = useState([])
    var monthMap = {
        "January": "01",
        "February": "02",
        "March": "03",
        "April": "04",
        "May": "05",
        "June": "06",
        "July": "07",
        "August": "08",
        "September": "09",
        "October": "10",
        "November": "11",
        "December": "12"
    };
    // ===== fetches the item by id =====
    const lazymansLoad = (id) => {
        fetch(`https://ecomerce-backend-one.vercel.app/phone/${id}`).then(res => res.json()).then(data => {
            const lowerCase = (para) => {
                let brand = data[para];
                brand = brand.toLowerCase();
                data[para] = brand;
            }
            lowerCase('Brand');
            const firstElemet = (para) => {
                let newPrice = data[para];
                newPrice = newPrice.split(' ');
                data[para] = newPrice[0];
            }
            firstElemet('Price');
            firstElemet('Body Weight');
            lowerCase('Sensors')

            data['Sensors'].includes('finger') ? data['fingerprint'] = true : data['fingerprint'] = false;
            if (data['fingerprint']) {
                let finger = data['Sensors'];
                finger = finger.split(')');
                let sense = finger.slice(1, finger.length)
                sense = sense.join('')
                sense = sense.slice('2')
                data['Sensors'] = sense;
                finger = finger[0] + ')';
                data['fingerprint'] = finger;
            }
            let launchData = data['Launch Date'];
            let year;
            launchData.includes('2023') ? year = 2023 : launchData.includes('2022') ? year = 2022 : launchData.includes('2021') ? year = 2021 : launchData.includes('2020') ? year = 2020 : launchData.includes('2019') ? year = 2019 : launchData.includes('2018') ? year = 2018 : year = 2017
            let month = launchData.split(' ');
            month = month.slice(month.length - 1).join('')
            month = monthMap[month]
            let date = `${year}-${month}-01`
            data['Launch Date'] = date;
            let catagory = data['Category'];
            catagory = catagory.toLowerCase();
            data['Category'] = catagory;
            console.table(data);
            setDetaillData(data)
        })
    }

    // ===== gets data by brand=====
    const brandPhonesAll = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.link.value;
        fetch(`https://ecomerce-backend-one.vercel.app/brand/${value}`).then(res => res.json()).then(data => {
            setAllLinks(data);
        })
    }
    //   ===== adds all the items to db =====
    const addToDB = () => {
        const buffer = {}
        const datas = document.getElementsByClassName('field');
        for (let data of datas) {
            const name = data.name;
            const value = data.value;
            buffer[name] = value
        }
        console.table(buffer);
        fetch('https://ecomerce-backend-one.vercel.app/newaddata', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(buffer)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire(
                    'Succes',
                    'Data added to Database',
                    'success'
                )
            }
        }).catch(error => {
            if (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            }
        })
    }

    return (
        <div className='p-5'>
            <form onSubmit={(e) => brandPhonesAll(e)} className='flex gap-5'>
                <input type="text" name='link' placeholder='enter link to get data' className='w-full input input-bordered input-info' />
                <button type='submit' className='btn btn-info'>fetch</button>
            </form>
            <div className='flex gap-2 flex-wrap my-4 overflow-hidden h-[20rem] overflow-y-scroll bg-gray-100 rounded'>
                {
                    allLinks.map(ele => <LazyManCopyPast key={ele._id} addToDB={addToDB} lazymansLoad={lazymansLoad} id={ele._id} name={ele['Name']}></LazyManCopyPast>)
                }
            </div>
            <div className='flex gap-2 flex-wrap my-4 h-[30rem] overflow-y-scroll overflow-hidden bg-gray-100 rounded'>
                <form className='w-full p-3 flex gap-5 flex-col'>

                    <div className=''>
                        <label >{detaillData['Name']}  == (model)</label>
                        <input type='text' name='model' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Name']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Launch Announcement']}  == (launchAnnounce)</label>
                        <input type='text' name='launchAnnounce' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Launch Announcement']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Launch Date']}  == (launch)</label>
                        <input type='text' name='launch' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Launch Date']} />
                    </div>
                    <div className=''>
                        <label >(img)</label>
                        <input type='text' name='img' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={'https://images.samsung.com/is/image/samsung/p6pim/bd/2208/gallery/bd-galaxy-z-fold4-f936-sm-f936bzadbkd-thumb-533076596?$172_172_PNG$'} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Brand']}  == (brand)</label>
                        <input type='text' name='brand' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Brand']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Price']}  == (price)</label>
                        <input type='text' name='price' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Price']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Category']}  == (catagory)</label>
                        <input type='text' name='catagory' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Category']} />
                    </div>
                    <div className=''>
                        <label >{detaillData[`Network 5G`] ? detaillData[`Network 5G`] : detaillData[`Network 4G`] ? detaillData[`Network 4G`] : detaillData[`Network 3G`] ? detaillData[`Network 3G`] : detaillData[`Network 2G`]}  == (network)</label>
                        <input type='text' name='network' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData[`Network 5G`] ? detaillData[`Network 5G`] : detaillData[`Network 4G`] ? detaillData[`Network 4G`] : detaillData[`Network 3G`] ? detaillData[`Network 3G`] : detaillData[`Network 2G`]} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Speed']}  == (speed)</label>
                        <input type='text' name='speed' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Speed']} />
                    </div>

                    <div className=''>
                        <label >{detaillData['Body Weight']}  == (weight)</label>
                        <input type='text' name='weight' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Body Weight']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Body Dimensions']}  == (bodyDimenson)</label>
                        <input type='text' name='bodyDimenson' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Body Dimensions']} />
                    </div>
                    <div className=''>
                        <label > == (build)</label>
                        <input type='text' name='build' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={'unspecified'} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Network Sim']}  == (sim)</label>
                        <input type='text' name='sim' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Network Sim']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Memory External']}  == (sdCard)</label>
                        <input type='text' name='sdCard' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Memory External']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Display Type']}  == (dispaly)</label>
                        <input type='text' name='display' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Display Type']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Display Size']}  == (displaySize)</label>
                        <input type='text' name='displaySize' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Display Size']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Display Resolution']}  == (displayRez)</label>
                        <input type='text' name='displayRez' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Display Resolution']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Display Density']}  == (displayDesity)</label>
                        <input type='text' name='displayDesity' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Display Density']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['']}  == (displayProtection)</label>
                        <input type='text' name='displayProtection' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={'unspecified'} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Operating System']}  == (os)</label>
                        <input type='text' name='os' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Operating System']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['OS Version']}  == (osv)</label>
                        <input type='text' name='osv' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['OS Version']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['User Interface (ui)']}  == (UI)</label>
                        <input type='text' name='UI' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['User Interface (ui)']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Chipset']}  == (chip)</label>
                        <input type='text' name='chip' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Chipset']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['CPU']}  == (chipDetaill)</label>
                        <input type='text' name='chipDetaill' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['CPU']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['GPU']}  == (gpu)</label>
                        <input type='text' name='gpu' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['GPU']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Ram']}  == (ram)</label>
                        <input type='text' name='ram' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Ram']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Memory Internal']}  == (storage)</label>
                        <input type='text' name='storage' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Memory Internal']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Primary Camera']}  == (camera)</label>
                        <input type='text' name='camera' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Primary Camera']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['extra']}  == (cameraExtra)</label>
                        <input type='text' name='cameraExtra' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['extra']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Secondary Camera']}  == (secondCamera)</label>
                        <input type='text' name='secondCamera' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Secondary Camera']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Camera Features']}  == (camFeature)</label>
                        <input type='text' name='camFeature' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Camera Features']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['3.5mm Jack']}  == (microphone)</label>
                        <input type='text' name='microphone' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['3.5mm Jack']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['WiFi']}  == (wifi)</label>
                        <input type='text' name='wifi' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['WiFi']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Bluetooth']}  == (bluetooth)</label>
                        <input type='text' name='bluetooth' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Bluetooth']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['NFC']}  == (nfc)</label>
                        <input type='text' name='nfc' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['NFC']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['GPS']}  == (gps)</label>
                        <input type='text' name='gps' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['GPS']} />
                    </div>
                    <div className=''>
                        <label > (fingreprint)</label>
                        <input type='text' name='fingerprint' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['fingerprint']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Sensors']}  == (sensors)</label>
                        <input type='text' name='sensors' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Sensors']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Battery Type']}  == (battery)</label>
                        <input type='text' name='battery' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Battery Type']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Battery Capacity']}  == (batteryCapacity)</label>
                        <input type='text' name='batteryCapacity' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Battery Capacity']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Charging']}  == (charging)</label>
                        <input type='text' name='charging' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Charging']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['USB']}  == (usb)</label>
                        <input type='text' name='usb' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['USB']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Body Color']}  == (color)</label>
                        <input type='text' name='color' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Body Color']} />
                    </div>
                    <div className=''>
                        <label >{detaillData['Other Features']}  == (Other)</label>
                        <input type='text' name='otherFeature' className='w-full input input-bordered input-info field' placeholder='enter value' defaultValue={detaillData['Other Features'] || 'unspecified'} />
                    </div>


                </form>
            </div>
            <button onClick={addToDB} className='bg-green-600 w-full p-3 rounded text-white font-semibold my-5 scale-100 active:scale-95 duration-100'>Add to database</button>
        </div>
    );
};

export default Updatedata;