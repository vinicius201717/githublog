import { ProfilePostContainer, ProfilePostInfo } from "./styles";
import { ArrowLineUpRight, ArrowArcLeft, GithubLogo, Calendar, Chat } from "phosphor-react";

import { Link } from 'react-router-dom'
import { IssuesInterface } from "src/contexts/IssuesContext";

interface IssueProps {
    issue: IssuesInterface
}

export function ProfilePost ({issue}: IssueProps) {    
    return (
        <ProfilePostContainer>
            <div>
                <Link to="/">
                    <ArrowArcLeft />
                    voltar
                </Link>
                <a href="">
                    VER NO GITHUB 
                    <ArrowLineUpRight />
                </a>
            </div>
            <h1>{issue.title}</h1>
            <ProfilePostInfo>
                <div>
                    <GithubLogo />
                    <span>cameronwll</span>
                </div>  
                <div>
                    <Calendar />
                    <span>cameronwll</span>
                </div>               
                <div>
                    <Chat />
                    <span>cameronwll</span>
                </div> 
            </ProfilePostInfo>
        </ProfilePostContainer>
    )
}