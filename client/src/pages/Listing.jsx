import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { list } from 'firebase/storage';

export default function Listing() {
    SwiperCore.use([Navigation]);
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const params = useParams();

    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${params.listingId}`);

                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    loading(false);
                    return;
                }
                setListing(data);
                setLoading(false);

            } catch (error) {
                setError(true);
                setLoading(false);
                setError(false);
            }
        };
        fetchListing();

    }, [params.listingId]);

    return (
        <main>
            {loading && <p className='text-center text-2xl my-7'> Loading... </p>}

            {error && <p className='text-center my-7 text-2xl'>Something Went Wrong!</p>}

            {listing && !loading && !error && 
            <> 
            <Swiper navigation>
            {listing.imageUrls.map((url) => <SwiperSlide key={url}>
                <div className='h-[500px]' style={{background : `url(${url}) center no-repeat` , backgroundSize:'cover'}}></div>
            </SwiperSlide>)}
            </Swiper>
            </>
            }

        </main>
    )
}