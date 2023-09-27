import { AppMenuListProp } from "../types/PropTypes";

export const appMenuListData: AppMenuListProp = {
    appMenuList: [
        {
            id: 1,
            name: "Tour Recommender",
            description: "Recommends five places to visit in a city based on your interest",
            link: "/tour-recommender"
        },
        {
            id: 2,
            name: "Book a Tour Guide",
            description: "Customize your Paris tour and book a tour guide",
            link: "/tour-guide"
        }
    ]
}