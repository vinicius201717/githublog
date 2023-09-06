import { ProfileContainer, ProfilePhoto, ProfileInfo } from "./styles";

// import avatar from '../../assets/avatar.png'
import { GithubLogo, ArrowLineUpRight, Buildings, UsersThree } from "phosphor-react";
import { useContext } from "react";
import { IssuesContext } from "../../contexts/IssuesContext";

export function Profile() {

    const { user } = useContext(IssuesContext)    

    return (
        <ProfileContainer>
            <ProfilePhoto>
                {
                    user && <img src={user.avatar} alt="" />        
                }               
            </ProfilePhoto>
            <ProfileInfo>
                <a href={user && user.url}>GITHUB <ArrowLineUpRight /></a>
                <h4>{user && user.name}</h4>
                <span>
                    {user && user.bio}
                </span>
                <div>
                    <div>
                         <GithubLogo />
                        <span>{user && user.login}</span>
                    </div> 
                    <div>
                         <Buildings />
                        <span>{user &&  user.company}</span>
                    </div>                   
                    <div>
                         <UsersThree />
                        <span>{user && user.followers}</span>
                    </div> 
                </div>
            </ProfileInfo>
        </ProfileContainer>
    )
}