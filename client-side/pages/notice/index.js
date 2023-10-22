import PageLayout from '@/src/component/app/Events/PageLayout';
import React from 'react';
import { NOTICE_INFO } from '@/src/constant/notice';
import NoticeItem from '@/src/component/app/Home/NoticeEvents/NoticeItem';
const Notice = () => {
    return (
        
            <PageLayout >
                {
                    NOTICE_INFO.map(item =><NoticeItem item={item}/>)
                }
            </PageLayout>
        
    );
};

export default Notice;