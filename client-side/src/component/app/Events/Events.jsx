
import React from 'react';
import { EVENTS_INFO } from '@/src/constant/events';

import PageLayout from './PageLayout';
import EventItem from '../Home/NoticeEvents/EventItem';
const Events = () => {
   
    return (
        <PageLayout className="grid grid-cols-2 gap-4">
             {EVENTS_INFO.map(item => (
                                    <EventItem
                                        key={item.id}
                                        item={item}
                                    />
                                ))}
        </PageLayout>
    );
};

export default Events;