import './BlogArticleSummary.css'
import logo from '../../itourparis-logo.svg';
import { BlogArticleSummaryProp, BlogArticleSummaryType } from '../../types/PropTypes';

function BlogArticleSummary(props: BlogArticleSummaryProp) {
    return (
        <div className={(props.blogArticleSummaryType === BlogArticleSummaryType.Latest) ? "blog-article-summary blog-article-summary-flex" : "blog-article-summary"}>
            <div className="blog-article-summary-description">
                {props.blogArticleSummaryType !== BlogArticleSummaryType.Header ?
                    (<>
                        <div className="blog-article-summary-category">Category</div>
                        <h3 className="blog-article-summary-title">
                            {props.title}
                        </h3>
                    </>) :
                    (<h1 className="blog-article-summary-title">
                        {props.title}
                    </h1>)
                }
                <div className="blog-article-summary-authorname">
                    {props.author}
                </div>
                {(props.blogArticleSummaryType === BlogArticleSummaryType.Latest) && (<div className="blog-article-time-date">
                    <span>{props.time}</span><span>.</span><span>{props.date}</span>
                </div>)}
            </div>
            <div className="blog-article-summary-image" style={(props.blogArticleSummaryType === BlogArticleSummaryType.Header) ? {width:"100%"} : {}}>
                {(props.blogArticleSummaryType !== BlogArticleSummaryType.Top) &&
                    (<img src={logo} className="fit-image" alt="iTourParis Logo" />)}
            </div>
        </div>
    );
}

export default BlogArticleSummary;