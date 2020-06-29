import React from 'react';
import PostItem from '../PostItem';
import ProjectItem from '../ProjectItem';

const Hit = ({ hit }) => {
    if(hit.category === 'project') {
        return (
            <ProjectItem
                slug={hit.fields.slug}
                title={hit.title}
                description={hit.description}
                thumbnailImage={hit.thumbnailImage.relativePath}
            />
        )
    } else {
        return (
            <PostItem
                slug={hit.fields.slug}
                title={hit.title}
                date={hit.date}
                description={hit.description}
                category={hit.category}
                thumbnailImage={hit.thumbnailImage.relativePath}
                timeToRead={hit.timeToRead}
            />
        )
    }
}

export default Hit;