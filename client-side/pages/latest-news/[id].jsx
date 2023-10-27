import NewsDetails from '@/src/component/app/LatestNews/NewsDetails';
import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    const router = useRouter();
    const id = router.query;
    return (
        <div>
            <NewsDetails id={id}/>
        </div>
    );
};

export default index;