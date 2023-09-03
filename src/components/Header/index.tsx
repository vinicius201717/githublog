import { HeaderContainer } from "./styles";
import cover from '../../assets/Cover.png';

export function Header() {
    return (
        <HeaderContainer>
            <img src={cover} alt="" />
        </HeaderContainer>
    )
}