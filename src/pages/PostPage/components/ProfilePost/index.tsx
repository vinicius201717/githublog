import { ProfilePostContainer, ProfilePostInfo } from "./styles";
import { ArrowLineUpRight, ArrowArcLeft, GithubLogo, Calendar, Chat } from "phosphor-react";


export function ProfilePost () {
    return (
        <ProfilePostContainer>
            <div>
                <a href="">
                    <ArrowArcLeft />
                    voltar
                </a>
                <a href="">
                    VER NO GITHUB 
                    <ArrowLineUpRight />
                </a>
            </div>
            <h1>JavaScript data types and data structures</h1>
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