import { Link } from 'react-router'
import * as Apollo from "@apollo/client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { GET_SLIDES } from '~/api/queries/slide'
import type { Slide } from '~/api/types/slide'

const settings = {
    autoplay: {
        delay: 3000,
    }
}

export default function Slider() {
    const { data, error, loading } = Apollo.useQuery<{ slides: Slide[] }>(GET_SLIDES);

    return (
        <Swiper {...settings}>
            {data?.slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="bg-black/15 absolute top-0 left-0 w-full h-full"></div>
                    <article className="absolute top-1/2 left-1/2 -translate-1/2 z-10">
                        <h2 className="font-bold lg:text-6xl">{slide.title}</h2>
                        <p className="mt-2 font-medium lg:text-2xl">{slide.description}</p>
                        {slide.buttonText ? (
                            <Link className="inline-flex text-center py-2 px-4 rounded text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 mt-3 " to={slide.url}>
                                {slide.buttonText}
                            </Link>
                        ) : null}
                    </article>
                    <picture className="h-screen block relative">
                        <source media="(min-width: 1024px)" srcSet={slide.desktopBanner.url} />
                        <img className="block max-w-full w-full h-full absolute inset-0 mx-auto object-cover" src={slide.mobileBanner.url} alt={slide.title} />
                    </picture>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}