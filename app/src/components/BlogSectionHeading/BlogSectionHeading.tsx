import { BlogSectionHeadingProp } from "../../types/PropTypes";

function BlogSectionHeading(props: BlogSectionHeadingProp) {
    return (
        <h2>{props.sectionHeading}</h2>
    )
}

export default BlogSectionHeading;