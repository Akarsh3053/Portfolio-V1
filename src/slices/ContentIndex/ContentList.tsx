import { Content } from "@prismicio/client"

type ContentListProps = {
    items: Content.BlogPostDocument[] | Content.ProjectDocument[];
    contentType: Content.ContentIndexSlice["primary"]["content_type"];
    fallbackItemImage: Content.ContentIndexSlice["primary"]["fallback_item_image"];
    viewMoreText: Content.ContentIndexSlice["primary"]["view_more_text"];
};



const ContentList = ({ items, contentType, fallbackItemImage, viewMoreText = "Read More" }: ContentListProps) => {
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li>
                        <a href="">
                            <div>
                                <span>{item.data.title}</span>
                                <div>
                                    {item.tags.map(() => ())}
                                </div>
                                <span>{viewMoreText}</span>
                            </div>

                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContentList