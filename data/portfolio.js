

const data = [
    {
        id: 5,
        title: "Secure the career",
        slug: 'countries-list',
        src: '/img/hero/5.avif',

        category: ['World Class', 'Lifestyle'],
        description: 'Cal was first. The first public university in the great state of California.',
        overlay: 5
    },
    {
        id: 1,
        title: "Craft Your Future",
        slug: 'countries-list',
        category: ['Education', 'Career'],
        description: 'Vin tries to reflect Diesel’s vision and combines.',
        src: '/img/hero/1.jpg',
        overlay: 6
    },
    {
        id: 2,
        title: "Explore The Opportunity",
        slug: 'countries-list',
        src: '/img/hero/2.jpg',

        category: ['Scholarship, Research'],
        description: 'symbols through which express themselves.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Tap the Untouched",
        slug: 'countries-list',
        src: '/img/hero/3.jpg',

        category: ['Growth, Future'],
        description: 'Huggl is an induction charging.',
        overlay: 6
    },
    {
        id: 4,
        title: "Rename the boundaries ",
        slug: 'countries-list',
        category: ['Higher Education'],
        src: '/img/hero/4.jpg',
        description: 'We are thrilled to share our new reel with you all.',
        overlay: 2
    },

    {
        id: 6,
        title: "Target the epic destination",
        slug: 'countries-list',
        category: ['Education'],
        src: '/img/hero/1.jpg',
        description: 'Sometimes, we need to check the time.',
        overlay: 4
    }
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/' + item.slug;

    return '';
};