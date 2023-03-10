import { product } from "./prodata";

export default function Product() {
  return (
    <section className="flex  items-center justify-center">
      <div className="mx-6 mt-12 flex cursor-pointer flex-col items-center gap-8  min-[590px]:flex-row">
        {product.map((item) => (
          <div className=" h-[100vh] w-full flex-1" key={item.name}>
            <a href={item.name} className={``}>
              <div className="animation_triggering_class h-auto w-auto cursor-pointer justify-center overflow-hidden">
                <img
                  className="hover scale_triggering_class overflow-hidden duration-[3000ms] ease-in-out hover:scale-110 hover:brightness-75 lg:h-[13.5rem] lg:w-[24rem]"
                  src={item.ImageURL}
                  alt="product"
                />
              </div>
            </a>
            <div>
              <h3 className="my-4 text-xl font-bold">{item.name}</h3>
            </div>
            <div className="max-w-xs">
              <p className="my-4 text-[17px]  text-gray-600">{item.details}</p>
            </div>
            <button className="border px-[14px] py-2 text-[14px] font-bold ">
              {item.button}
            </button>
          </div>
        ))}
      </div>

      <div className="h-screen"></div>
    </section>
  );
}
