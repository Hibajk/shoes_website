import { star } from '../../assets/icon'

const PopularProductCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
            src={imgURL} alt={name} className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
            <img src={star}
            width={20} height={15}
            />
            <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.2)</p>
        </div>
        <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-blue-900 leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductCard