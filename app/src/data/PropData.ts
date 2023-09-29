import { AppMenuListProp, TourRecommendationListProp } from "../types/PropTypes";

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

export const tourRecommendationListData: TourRecommendationListProp = {
    tourRecommendationList: [
        {
            name: "Le Village des Livres",
            description: "Le Village des Livres is a great spot for book lovers. Located at the heart of Paris, it is home to a plethora of independent bookstores, with literature ranging from French to English. It also has a cafe and a restaurant.",
            address: "3 Place Léon Jouhaux,75001 Paris, France",
            entry: 0,
            website: "http: //www.levillagedeslivres.com/"
        },
        {
            name: "Shakespeare and Company",
            description: "Shakespeare and Company is a legendary bookstore, opened in the 1920s. It's located near the Notre Dame Cathedral, and its shelves are overflowing with English books and international books. It's also a great spot to relax with a cup of coffee.",
            address: "37 Rue de la Bûcherie, 75005 Paris, France",
            entry: 0,
            website: "http://www.shakespeareandcompany.com/"
        },
        {
            name: "The American Library in Paris",
            description: "The American Library in Paris houses a huge selection of English-language books, making it a great spot for expats and English-speaking people. Besides a book cafeteria and a great selection of magazines, it also offers literary classes throughout the year.",
            address: "10 Rue du Général Camou, 75007 Paris, France",
            entry: 5,
            website: "http://www.americanlibraryinparis.org/"
        },
        {
            name: "Librairie Galignani",
            description: "Librairie Galignani is the oldest bookstore in Paris, founded in 1801. Its collection of English books is especially expansive, and also has a cafe where you can indulge in a coffee and snack while reading a book.",
            address: "224 Rue de Rivoli, 75001 Paris, France",
            entry: 0,
            website: "https://www.galignani.com/en-eng/home.aspx"
        },
        {
            name: "Paris Librairie International",
            description: "Paris Librairie International is a perfect spot for travelers looking for books in their native languages. It houses a wide selection of books in various languages, from French to German, Spanish and much more.",
            address: "28 Rue St Jacques, 75005 Paris, France",
            entry: 0,
            website: "https://parislibrairie.fr/"
        }
    ]
}