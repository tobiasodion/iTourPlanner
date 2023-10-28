import { BlogSectionHeadingProp } from "../../types/PropTypes";

function BlogSectionHeading(props: BlogSectionHeadingProp) {
    return (
        <h3>{props.sectionHeading}</h3>
    )
}

export default BlogSectionHeading;