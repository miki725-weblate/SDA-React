import React from 'react';
import GroupActivity, { Activity } from './groupActivity';

interface GroupProps {
    title: string;
    activities: Activity[];
    img: string;
    imgAlt: string;
}

const Group: React.FunctionComponent<GroupProps> = ({ title, activities, img, imgAlt }) => (
    <div className='col-md-12'>
        <div className='card flex-md-row mb-4 box-shadow h-md-250'>
            <div className='card-body d-flex flex-column'>
                <h3 className='mb-2'>{title}</h3>
                { activities.map(act => <GroupActivity {...act} key={act.time} />) }
            </div>
            <img
                className='card-img-right img-groups flex-auto d-md-block'
                alt={imgAlt}
                src={img}
                data-holder-rendered='true'
            />
        </div>
    </div>
);

export default Group;
