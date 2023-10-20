import { LatestNewsData } from "@/src/constant/LatestNewsData";
import LatestNewsCards from "./LatestNewsCards";
import Categories from "./Categories";

const LatestNews = () => {
    return (
        <div>
            <div className="bg-[#01A2A6] py-5 flex items-center justify-between">
                <h1 className="md:px-24 text-3xl text-white">Category: Latest News</h1>
                <h1 className="md:px-24 text-sm text-white">Home/advice</h1>
            </div>

            <div className="contain">
                <div className='grid grid-cols-3 gap-20 mt-11 mb-11'>

                    {/* news cards */}
                    <div className="col-span-2">
                        {
                            LatestNewsData?.map(news => <LatestNewsCards key={news?.id} news={news} />)
                        }
                    </div>


                    {/* categories */}
                    <div className="">
                        <p className="mb-10">CATEGORIES</p>

                        <div className="mb-5">
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;