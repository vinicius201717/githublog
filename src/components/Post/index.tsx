import { PostCardContainer } from "./styles";
import { IssuesInterface } from "../../contexts/IssuesContext";
import { formatDate } from "../../utils/formatData";


interface IssueProps {
    issue: IssuesInterface
}

export function Post({ issue }: IssueProps) {
    
    const id = issue.url.replace(/^.*\//g, '');

    return (
        <PostCardContainer to={`post/${id}`}>
            <h2>{issue.title}</h2>
            <span>{formatDate(issue.created_at)}</span>
            <div>
                <p>{issue.body}</p>
            </div>
        </PostCardContainer>
    )
}