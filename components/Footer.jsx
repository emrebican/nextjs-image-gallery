import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex justify-center gap-x-4 my-4">
      <Image src="/favicon.ico" width={30} height={30} alt="icon" />
      <h2 className="text-lg text-slate-600 hover:text-emerald-600 duration-700 ease-in-out">
        @emrebican
      </h2>
    </footer>
  )
}

export default Footer
