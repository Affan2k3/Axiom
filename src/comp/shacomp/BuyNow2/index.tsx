import { MdOutlineArrowRightAlt } from "react-icons/md";
import SizeUL from "./SizeUL";
import Table from "./Table";
import { BuyNowType, ImgSliderType } from "./types";
// import PortableText from "react-portable-text";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// export default function BuyNow2({TableData,ImgSliderData,UlPoints,details,price,title}:BuyNowType) {
export default function BuyNow2(props: { data: BuyNowType }) {
  const [accordion, setAccordion] = useState(false);
  function setTimeOutForDropdown() {
    setTimeout(() => {
      setAccordion(!accordion);
    }, 300);
  }

  const [imgSrc, setImgSrc] = useState<ImgSliderType>(
    props.data.ImgSliderData[0]
  );
  return (
    <section className="  mx-[40px] mb-[8rem] flex flex-col justify-center gap-5 min-[360px]:mx-[70px] min-[690px]:flex-row">
      <div className="slider_Div slider_img cc:min-w-[450px] p- top-0 flex h-full min-w-[250px] flex-1 pt-[80px] mm:min-w-[350px] min-[590px]:h-[50rem] lg:sticky">
        <div className="imgSidebarBtn order-none mr-4 flex flex-col gap-5 md:order-none ">
          {props.data.ImgSliderData.map((item, i) => {
            return (
              <div
                className={`cursor-pointer
                 ${item.active ? "ring-2 ring-gray-800" : ""}`}
                key={i}
                onClick={() => setImgSrc(item)}
                // onClick={() => setImgSrc({ ...item, active: true })}
              >
                {item.type === "photo" ? (
                  <img
                    src={item.imgUrl}
                    className="h-[4.688rem] w-[3.125rem] min-[450px]:h-[7rem] min-[450px]:w-[4.688rem]"
                    // width={75}
                    // height={75}
                    alt="shop item for sell"
                  />
                ) : item.type === "video" ? (
                  <img
                    src={item.thumbnail}
                    className="h-[4.688rem] w-[3.125rem] min-[450px]:h-[5.938rem] min-[450px]:w-[4.688rem]"
                    // width={75}
                    // height={75}
                    alt="shop item for sell"
                  />
                ) : (
                  <p>No Image found</p>
                )}
              </div>
            );
          })}
        </div>
        <div className="mainSlider slider_img mb-2 flex h-[380pxrem] w-[14rem] justify-center overflow-hidden ml:w-[18rem] min-[590px]:h-[750px] min-[590px]:w-[29.5625rem] ">
          {/*h-[70%] ml:h-[80%] md:h-[110%] */}
          {/* {props.data.ImgSliderData.map((item, i) => { */}
          {imgSrc.type === "photo" ? (
            <img
              className="slider_img cursor-zoom-in self-start"
              src={imgSrc.imgUrl}
              // width={70}
              // height={30}
              alt="shop item for sell"
            />
          ) : imgSrc.type === "video" ? (
            <video
              // width="450"
              // height="500"
              className="slider_img cursor-grab self-start"
              muted
              loop
              autoPlay
            >
              <source src={imgSrc.imgUrl} type="video/mp4" />
            </video>
          ) : (
            <p>No Image found</p>
          )}
        </div>
      </div>

      <div className="details mb-10 flex-1 pt-[80px] mm:min-w-[300px]">
        <h2 className="text-3xl font-extrabold">{props.data.title}</h2>
        <span className="block divide-y divide-gray-300  py-6 text-2xl font-light">
          ${props.data.price.m}
        </span>
        <h6 className="font-semibold tracking-widest">SIZE</h6>
        <SizeUL />
        {/*  */}
        <div className="flex flex-col gap-2">
          <button className="group flex h-12 items-center justify-around border-2 border-slate-800 bg-transparent text-lg font-bold text-slate-800 transition-all delay-300 duration-1000">
            <div className="cc:block hidden w-9"></div>
            <span className="transition-all duration-300 group-hover:-translate-x-3">
              Add to cart
            </span>
            <MdOutlineArrowRightAlt className="cc:block relative -right-8 -z-20 hidden text-4xl text-gray-800 transition-all duration-300 group-hover:right-7 group-hover:z-10 group-hover:translate-x-5 lg:-right-20" />
          </button>
          <button className="h-12 bg-gray-900 text-lg font-bold text-gray-100">
            Buy it now
          </button>
        </div>
        <div className="my-6 text-base font-normal text-slate-700">
          {/* {props.data.details} */}

          {/*     <PortableText
               // Pass in block content straight from Sanity.io
               content={props.data.details}
               // Optionally override marks, decorators, blocks, etc. in a flat
               // structure without doing any gymnastics
               serializers={{
                 h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                 li: ({ children }) => <li className="special-list-item">{children}</li>,
                 someCustomType: YourComponent,
               }}
    /> */}

          <p className="text-[17px] italic">
            This is a demonstration store. You can purchase products like this
            from{" "}
            <a
              className="S_Underline-black relative inline-block underline decoration-slate-300 underline-offset-[4.5px] hover:after:left-0 hover:after:w-full"
              href="https://unitedbyblue.com/"
            >
              United By Blue
            </a>
          </p>
          <br />
          <p className="">
            Like your well-worn pair of jeans in short-sleeve button down form.
            Features an understated plus-sign pattern.
          </p>
        </div>
        <ul className="list-inside list-disc py-2  px-8 font-light">
          {props.data.UlPoints.map((item, i) => (
            <li key={i}>{item.li}</li>
          ))}
        </ul>
        <div
          className={`${
            accordion ? "h-[4rem]" : "h-16"
          } transition-all duration-[3000ms]`}
        >
          <div
            onClick={() => {
              setAccordion(!accordion);
              setTimeOutForDropdown();
            }}
            className="group mt-8 flex w-full cursor-pointer items-center justify-between py-3 outline-none transition-all duration-[3000ms]"
          >
            <h6 className="text-sm font-semibold tracking-widest">
              SIZE CHART
            </h6>
            {/* <IoIosArrowDown className="transition-all duration-500 group-open:rotate-180" /> */}
            <IoIosArrowDown
              className={`transition-all duration-500
            ${accordion ? "rotate-0" : "rotate-180"}`}
            />
          </div>
        </div>
        <div
          className={`${
            accordion ? "visible" : "hidden"
          } accordion border-b-2 pb-4`}
        >
          <Table data={props.data.TableData} />
        </div>

        <details className="accordion group border-b-2  pb-4 ">
          <summary className="mt-3 flex cursor-pointer items-center justify-between py-3 outline-none">
            <h6 className="text-sm font-semibold tracking-widest">
              ASK A QUESTION
            </h6>
            <IoIosArrowDown className="transition-all duration-500 group-open:rotate-180" />
          </summary>

          <form className="mt-3 flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-1 flex-col gap-3">
                <label htmlFor="userName">Name</label>
                <input
                  id="userName"
                  type="text"
                  className="border p-2 outline-none focus:border-gray-900"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <label htmlFor="userEmail">Email</label>
                <input
                  id="userEmail"
                  type="email"
                  className="border p-2 outline-none focus:border-gray-900"
                />
              </div>
            </div>

            <label htmlFor="userMessage">Message</label>
            <textarea
              id="userMessage"
              rows={4}
              className="border p-2 outline-none focus:border-gray-900"
            />

            <button
              className="my-6 h-11 w-28  bg-gray-900 px-8 text-lg font-bold text-gray-100"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="text-gray-700">
            <p className="text-gray-700">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                className="S_Underline-black relative inline-block underline decoration-slate-300 underline-offset-[4.5px] hover:after:left-0 hover:after:w-full"
                href="https://policies.google.com/privacy"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className="S_Underline-black relative inline-block underline decoration-slate-300 underline-offset-[4.5px] hover:after:left-0 hover:after:w-full"
                href="https://policies.google.com/terms"
              >
                Terms of Service apply.
              </a>
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
