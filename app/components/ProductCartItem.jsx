import { Card } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function ProductCartItem({products}) {
  return (
    <div className='w-full max-w-sm mx-auto'>
      <Card className='p-4 shadow-md hover:shadow-lg transition-shadow rounded-lg'>
        <Image src={products?.image} alt={products.name} width={400} height={300} />
        <div className='mt-4'>
          <h2 className='font-bold text-lg md:text-xl text-gray-800'>{products.name}</h2>
          <h2 className='font-bold text-xl md:text-2xl text-yellow-500 mt-2'>${products.price}</h2>
          <div className='mt-4 flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex items-center gap-3'>
              <Image src={products?.user?.image} alt={products.user.name} width={30} height={30} className='rounded-full' />
              <h2 className='text-sm md:text-base text-gray-500'>{products?.user.name}</h2>
            </div>
            <Button size='sm' className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">Add to Cart</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default ProductCartItem
