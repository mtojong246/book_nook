import ReadingChallenge from "./components/ReadingChallenge";
import Bookshelves from "./components/Bookshelves";
import Updates from "./components/Updates";

export default function Home() {
    return (
        <div className='w-full bg-primary-color min-h-screen'>
            <div className='w-full p-4 max-w-[1440px] mx-auto flex justify-between items-start gap-4 md:gap-8'>
                <div className='max-w-[300px] hidden md:block'>
                    <ReadingChallenge />
                    <Bookshelves />
                </div>
                <div className='flex flex-col justify-start items-center gap-4 grow'>
                    <div className='mt-2 md:mt-4 relative w-full bg-white border-secondary-color border py-4 px-8 text-center'>
                        <p className='font-semibold mb-2 mt-5'>Welcome to BookNook</p>
                        <p>Meet your favorite book, find your reading community, and manage your reading life.</p>
                        <div className='w-full absolute flex justify-center items-center right-[0px] bottom-[80%]'>
                            <div className='rounded-full w-[44px] h-[44px] flex justify-center items-center bg-primary-color border border-secondary-color'>
                                <p className='text-secondary-color text-[28px]'>B</p>
                            </div>
                        </div>
                    </div>
                    <Updates />
                </div>
            </div>
        </div>
    )
}