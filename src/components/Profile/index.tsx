import { ProfileContainer, ProfilePhoto, ProfileInfo } from "./styles";

import avatar from '../../assets/avatar.png'
import { GithubLogo, ArrowLineUpRight, Buildings, UsersThree } from "phosphor-react";

export function Profile() {
    return (
        <ProfileContainer>
            <ProfilePhoto>
                <img src={avatar} alt="" />
            </ProfilePhoto>
            <ProfileInfo>
                <a href="">GITHUB <ArrowLineUpRight /></a>
                <h4>Cameron Willianmson</h4>
                <span>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                    Eu viverra massa quam dignissim aenean malesuada suscipit. 
                    Nunc, volutpat pulvinar vel mass.
                </span>
                <div>
                    <div>
                         <GithubLogo />
                        <span>cameronwll</span>
                    </div> 
                    <div>
                         <Buildings />
                        <span>Rocketseat</span>
                    </div>                   
                    <div>
                         <UsersThree />
                        <span>32 seguidores</span>
                    </div> 
                </div>
            </ProfileInfo>
        </ProfileContainer>
    )
}