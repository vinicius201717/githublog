import { IssuesInterface } from "../../../../contexts/IssuesContext";
import { BodyPostContainer } from "./styles";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface IssueProps {
    issue: IssuesInterface
}

export function BodyPost ({issue}: IssueProps) {

    return (
        <BodyPostContainer>
            {/* <p>
                {issue.body}
                <br />
                <a href="">Dynamic typing </a>
                <br />
                JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly 
                associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
            </p> */}
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {issue.body}
            </SyntaxHighlighter>
        </BodyPostContainer>
    )
}