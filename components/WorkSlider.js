// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Instagram",
          link: "https://ttsmaker.com/br",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          link: "https://ttsmaker.com/br",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          link: "https://ttsmaker.com/br",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          link: "https://ttsmaker.com/br",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "Teste",
          link: "https://ttsmaker.com/br",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          link: "https://ttsmaker.com/br",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          link: "https://ttsmaker.com/br",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          link: "https://ttsmaker.com/br",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justfy-center relative overflow-hidden group">
                      <Link href={"www.instagram.com"} target="_blank">
                        {/* Imagens */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                      </Link>

                      {/* Overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l
                      from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700"
                      ></div>
                      {/* titulo */}
                      <div
                        className="absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
                      >
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title parte 1 */}
                          {image.title}
                          <div className="delay-100"></div>
                          {/* title parte 2 */}
                          <div
                            className="translate-y-[500%] group-hover:translate-y-0
                            transition-all duration-300 delay-150"
                          >
                            Livres
                          </div>
                          {/* icon */}
                          <Link href={image.link} target="_blank">
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
