

import { offer } from "../../assets/images";
import { arrowRight } from "../../assets/icon";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain"/>
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          <span className='text-blue-900'> Special </span> Offer
        </h2>
        <h2 className="font-montserrat capitalize text-3xl lg:max-w-lg text-blue-900 pt-2">30% Off</h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" iconURL={arrowRight}/>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-blue-900'
            textColor='text-blue-900'
          />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer