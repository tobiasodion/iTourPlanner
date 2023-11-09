import './BlogArticleSummaryList.css';
import BlogArticleSummary from '../BlogArticleSummary/BlogArticleSummary';
import { BlogArticleSummaryListProp } from '../../types/PropTypes';

function BlogArticleSummaryList (props : BlogArticleSummaryListProp) {
  return (
    <div className="blog-article-summary-list">
      {props.blogArticleSummaryList.map((item) => (
        <BlogArticleSummary {...item} />
      ))}
    </div>
  );
}

export default BlogArticleSummaryList;
