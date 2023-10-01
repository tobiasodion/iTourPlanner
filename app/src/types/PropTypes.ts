import { ReactNode } from "react";

export type AppMenuCardProp = {
        id: number;
        name: string;
        description: string;
        link: string;
}

export type AppMenuListProp = {
        appMenuList: {
                id: number;
                name: string;
                description: string;
                link: string;
        }[];
}

export type LayoutProp = {
        children: ReactNode;
};

export type TourRecommendationCardProp = {
        name: string;
        description: string;
        address: string;
        entry: number;
        website: string;
}

export type TourRecommendationListProp = {
        tourRecommendationList: {
                name: string;
                description: string;
                address: string;
                entry: number;
                website: string;
        }[];
}

export type TourRecommendationFormProps = {
        onRecommendationsChange: (recommendations: TourRecommendationListProp) => void;
        onLoading: (isLoading: boolean) => void;
};

export type SpinnerProps = {
        size: number;
        message: string;
}