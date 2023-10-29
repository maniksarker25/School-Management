import { useRouter } from "next/router";

const LatestNewsCards = ({ news }) => {
    const router = useRouter();
    const {id, image, title, description, postOwner, postDate } = news;

    return (
        <div className="flex gap-5 mb-5">
            <div>
                <img className='w-[600px]' src={image} alt="" />
            </div>
            <div className='cursor-pointer'>
                <h1 onClick={()=>router.push(`latest-news/${id}`)} className="text-2xl mb-2 hover:text-[#01A2A6] duration-500">{title}</h1>
                <p className="text-sm mb-2">{description.slice(0,310)}...</p>
                <hr />
                <div className="flex items-center justify-between">
                    <p className="text-sm mt-2">by <span className="text-[#01A2A6]">{postOwner}</span></p>
                    <p className="text-sm mt-2 text-[#C2CEDE]">{postDate}</p>
                </div>
            </div>
        </div>
    );
};

export default LatestNewsCards;