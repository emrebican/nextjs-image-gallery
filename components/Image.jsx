import Image from 'next/image'
import { useState } from 'react'
import { formatText } from '../utilities/formatText'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BlurImage = ({ image }) => {
  const [loading, setLoading] = useState(true)

  return (
    <a href={image.imageSrc} target="_blank" className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt=""
          layout="fill"
          objectFit="cover"
          src={image.imageSrc}
          className={cn(
            'group-hover:opacity-70 duration-700 ease-in-out',
            loading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {formatText(image.href)}
      </p>
    </a>
  )
}

export default BlurImage
