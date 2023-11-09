import AppMenuList from "../components/AppMenuList/AppMenuList";
import BlogArticleSummaryList from "../components/BlogArticleSummaryList/BlogArticleSummaryList";
import BlogSectionHeading from "../components/BlogSectionHeading/BlogSectionHeading";
import { appMenuListData, headerBlogArticleSummaryListData, latestBlogArticleSummaryListData, topBlogArticleSummaryListData } from "../data/PropData";

function Blog() {
    return (
        <>
            <div style={{ padding: "20px 20px 0px 20px" }}>
                <BlogArticleSummaryList {...headerBlogArticleSummaryListData}></BlogArticleSummaryList>
                <BlogSectionHeading sectionHeading="Top"></BlogSectionHeading>
                <div style={{ padding: "0 20px 0 20px" }}>
                    <BlogArticleSummaryList {...topBlogArticleSummaryListData}></BlogArticleSummaryList>
                </div>
                <BlogSectionHeading sectionHeading="Latest"></BlogSectionHeading>
                <BlogArticleSummaryList {...latestBlogArticleSummaryListData}></BlogArticleSummaryList>
                <BlogSectionHeading sectionHeading="Planning a Trip?"></BlogSectionHeading>
                <AppMenuList {...appMenuListData}></AppMenuList>
            </div>
        </>
    )
}

export default Blog;