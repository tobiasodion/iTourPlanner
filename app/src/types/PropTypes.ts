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