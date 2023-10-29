import { LatestNewsData } from "@/src/constant/LatestNewsData";
import LatestNewsCards from "./LatestNewsCards";
import Categories from "./Categories";
import PageHeader from "../../share/UI/PageHeader";

const LatestNews = () => {
    return (
        <div>
            <div>
                <PageHeader pageName={"Latest News"} />
            </div>

            <div className="contain">
                <div className='grid md:grid-cols-3 gap-20 mt-11 mb-11 px-3 lg:px-0'>

                    {/* news cards */}
                    <div className="md:col-span-2">
                        {
                            LatestNewsData?.map(news => <LatestNewsCards key={news?.id} news={news} />)
                        }
                    </div>


                    {/* categories */}
                    <div className="">
                        <p className="mb-10">CATEGORIES</p>

                        <div className="mb-5 px-0">
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;