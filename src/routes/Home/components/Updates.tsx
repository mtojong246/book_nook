export default function Updates() {
    return (
        <div className='w-full'>
            <p className='font-semibold text-left mb-4 text-lg'>Updates</p>
            <div className='flex flex-col gap-4 justify-start items-center text-left'>
                <div className='w-full bg-white border-secondary-color border p-4 mb-4'>
                    <p className='mb-4'>Reading is better together! Add friends to see what they're reading.</p>
                    <div className='relative'>
                        <img src='https://cdn.create.vista.com/api/media/medium/319556552/stock-photo-friends-talking-reading-books-while?token=' alt='friends-reading'
                         className='w-full md:w-2/3 object-contain object-center blur-sm' />
                         <div className='bg-black opacity-50 absolute top-0 right-0 left-0 bottom-0 w-full md:w-2/3'></div>
                         <div className='absolute top-0 right-0 left-0 bottom-0 w-full md:w-2/3 flex justify-center items-center'>
                            <button className='bg-[#439bd6] text-white text-lg font-semibold px-4 py-3 rounded'>+ Add Friends</button>
                         </div>
                    </div>
                </div>
            </div>
            <p className='text-center font-semibold'>No More Updates</p>
        </div>
    )
}