import { product } from "./prodata";

export default function Product() {
  return (
    <section className="p-5 ml:p-8">
      <div className="flex flex-col flex-wrap items-center gap-2 min-[916px]:flex-row">
        {product.map((item) => (
          <div className=" flex-1" key={item.name}>
            <a href={item.name} className={``}>
              <div className="flex justify-center overflow-hidden ">
                <img
                  className=" duration-[1500ms] hover:scale-110 hover:brightness-75"
                  src={item.ImageURL}
                  alt= 'Image'
                />
              </div>
            </a>

            <br />
            <span className="text-sm font-light tracking-widest">
              {item.name}
            </span>
            <br />

          </div>
        ))}
      </div>
      
      <div className="h-screen"></div>
    </section>
  );
}