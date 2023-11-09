import { ReactNode } from "react";

export enum BlogArticleSummaryType {
        Header,
        Top,
        Latest,
}

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

export type UUID = string;

export type TourRecommendationListProp = {
        tourRecommendationList: {
                name: string;
                description: string;
                address: string;
                entry: number;
                website: string;
        }[];
        key: UUID
}

export type TourRecommendationFormProps = {
        onRecommendationsChange: (recommendations: TourRecommendationListProp) => void;
        onLoading: (isLoading: boolean) => void;
};

export type SpinnerProps = {
        spinnerDiameter: number;
        loadingMessages: string[];
}

export type BlogArticleSummaryProp = {
        id: number;
        category: string;
        title: string;
        author: string;
        time: string;
        date: string;
        blogArticleSummaryType: BlogArticleSummaryType;
}

export type BlogArticleSummaryListProp = {
        blogArticleSummaryList: {
                id: number;
                category: string;
                title: string;
                author: string;
                time: string;
                date: string;
                blogArticleSummaryType: BlogArticleSummaryType;
        }[];
}

export type BlogSectionHeadingProp = {
        sectionHeading: string
}