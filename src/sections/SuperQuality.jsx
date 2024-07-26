import { shoe9 } from "../../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-blue-900'> Super </span>
          <span className='text-blue-900'>Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Our team of shoe enthusiasts is dedicated to crafting high-quality, comfortable shoes that keep up with your active lifestyle. From running trails to running errands, we've got you covered. Our shoes are designed to support your every move, whether you're a fitness fanatic or just a fan of living life to the fullest.</p>
        <p className="mt-6 lg:max-w-lg info-text">At Adidas what matters is your comfort and satisfaction</p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe9} 
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality