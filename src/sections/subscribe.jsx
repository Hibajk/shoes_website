import Button from "../components/Button"


const Subscribe = () => {
  return (
    <section id='contact-us' className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl text-center leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up for <span className="text-blue-900">Updates</span> & News letter</h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-blue-900 rounded-full">
        <input type="text" placeholder="subscribe@adidas.com" className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe