import { BodyPost } from "./components/BodyPost";
import { ProfilePost } from "./components/ProfilePost";
import { ProfilePostContainer } from "./styles";

export function PostPage() {
    return (
        <ProfilePostContainer>
            <ProfilePost />
            <BodyPost />
        </ProfilePostContainer>
    )
}