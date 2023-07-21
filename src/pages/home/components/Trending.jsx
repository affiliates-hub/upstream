import React from 'react';
import { register } from 'swiper/element/bundle';
import { useEffect } from 'react';
import TrendyCard from '../../../components/TrendyCard/TrendyCard';
register();
const Trending = ({ data }) => {
    useEffect(() => {
        const swiperEl = document.querySelector('swiper-container');
        // swiper parameters
        const swiperParams = {

            slidesPerView: 4,
            breakpoints: {
                180: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                }
            },
            spaceBetween: 20,
            navigation: true,
            injectStyles: [
                `
                .swiper-button-next,
          .swiper-button-prev {
            opacity:.7;
            background-position: center;
            background-size: 40px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 5px;
          }

          .swiper-button-prev {
            background-image: url("/arrow-left-circle-fill.svg");
          }

          .swiper-button-next {
            background-image: url("/arrow-right-circle-fill.svg");
          }
          
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
          .swiper-button-next > *{
            display:none;
          }
          .swiper-button-prev > *{
            display:none;
          }
      `,
            ],
            on: {
                init() {
                    // ...
                },
            },
        };
        // now we need to assign all parameters to Swiper element
        Object.assign(swiperEl, swiperParams);
        // and now initialize it
        swiperEl.initialize();
    }, [])


    return (
        <div className='py-3 bg-slate-50'>
            <swiper-container init="false">

                {
                    data.map(ele => <swiper-slide><TrendyCard></TrendyCard></swiper-slide>)
                }
            </swiper-container>
        </div>
    );
};

export default Trending;