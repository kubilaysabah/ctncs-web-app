import { useQuery } from '@apollo/client';
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import { GET_TESTIMONIAL } from '~/api/queries/testimonial';
import type { Testimonial } from '~/api/types/testimonial';

export default function Testimonials() {
    const { data, error, loading } = useQuery<{ testimonials: Testimonial[] }>(GET_TESTIMONIAL, {
        variables: {
            first: 100,
            locales: ['tr_TR']
        }
    });

    const testimonials: Testimonial[] = data?.testimonials || [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const settings: SwiperProps = {
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    }

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <Swiper {...settings}>
                    {testimonials.map(testimonial => (
                        <SwiperSlide key={testimonial.id} className="mb-6">
                            <p>{testimonial.comment}</p>
                            <p className="text-sm text-gray-500 mt-2">{testimonial.title} - {testimonial.fullName}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}