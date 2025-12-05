"use client"
import { useImageContext } from "@/contextapi/GetImages"

function Content() {
  const {count}=useImageContext()
    return (
        <div className='w-full h-full py-1 flex justify-start items-center'>
            <div>
                <h1 className='text-white text-xl font-bold'>
                    Supper {count}
                </h1>
                <p className='text-white text-lg'>Moradabad, Uttar Pradesh</p>
            </div>
        </div>
    )
}

export default Content
