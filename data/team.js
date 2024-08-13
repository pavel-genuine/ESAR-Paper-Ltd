const data = [
    {
        id: 1,
        name: "Fuzael Ibne Elius",
        position: 'Founder / CEO',
        src: '/img/team/1.jpg',
        social: [
            { title: "FB", url: "#0" },
            { title: "TW", url: "#0" },
            { title: "LN", url: "#0" }
        ]
    }, {
        id: 2,
        name: "Anas Ahmad",
        position: 'Chief Consultant',
        src: '/img/team/2.jpg',
        social: [
            { title: "FB", url: "#0" },
            { title: "TW", url: "#0" },
            { title: "LN", url: "#0" }
        ]
    }, {
        id: 3,
        name: "Jeremy Smith",
        position: 'Creative Studio Head',
        src: '/img/team/3.jpg',
        social: [
            { title: "FB", url: "#0" },
            { title: "TW", url: "#0" },
            { title: "LN", url: "#0" }
        ]
    }, {
        id: 4,
        name: "Bill Gardner",
        position: 'Chief Planner',
        src: '/img/team/2.jpg',
        social: [
            { title: "FB", url: "#0" },
            { title: "TW", url: "#0" },
            { title: "LN", url: "#0" }
        ]
    }, {
        id: 5,
        name: "Jeremy Dupont",
        position: 'Creative Director',
        src: '/img/team/3.jpg',
        social: [
            { title: "FB", url: "#0" },
            { title: "TW", url: "#0" },
            { title: "LN", url: "#0" }
        ]
    }, {
        id: 6,
        name: "Angelo Walking",
        position: 'Developer Lead',
        src: '/img/team/1.jpg',
        social: [
            { title: "FB", url: "#0" },
            { title: "TW", url: "#0" },
            { title: "LN", url: "#0" }
        ]
    },

]

export const getTeamData = () => data;

export const getTeamItem = (value, whereName = "id") => {
    return data.find(item => item[whereName] === value);
};
