import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/banner.png";

import { Button } from "../../components/Button";

import { Header } from "../../components/Header";

import {
Container,
Title,
TitleHighlight,
TextContent,
LeftColumn,
RightColumn,
BannerImage,
} from "./styles";

const Home = () => {
const navigate = useNavigate();

const handleClickSignIn = () => {
navigate("/login");
};

return (
<>
<Header />
<Container>
<LeftColumn>
<Title>
<TitleHighlight>Implemente</TitleHighlight>
<br />
o seu futuro global agora!
</Title>
<TextContent>
Domine as tecnologias utilizadas pelas empresas mais inovadoras do
mundo e encare seu novo desafio profissional, evoluindo em
comunidade com os melhores experts.
</TextContent>
<Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
</LeftColumn>
<RightColumn>
<BannerImage src={bannerImage} alt="Imagem principal do site." />
</RightColumn>
</Container>
</>
);
};

export { Home };

// styles.js

import styled from "styled-components";

export const Container = styled.main width: 100%; max-width: 80%; margin: 0 auto; margin-top: 120px; display: flex; flex-direction: row; justify-content: space-between;;

export const LeftColumn = styled.div display: flex; flex-direction: column; justify-content: center;;

export const RightColumn = styled.div display: flex; justify-content: flex-end;;

export const Title = styled.h3 font-family: "Open Sans"; font-style: normal; font-weight: 700; font-size: 18px; line-height: 25px; color: #ffffff; margin-bottom: 24px;;

export const TitleHighlight = styled.span color: #04d361;;

export const TextContent = styled.p font-family: "Open Sans"; font-style: normal; font-weight: 400; font-size: 16px; line-height: 26px; color: #ffffff90; margin-bottom: 32px;;

export const BannerImage = styled.img width: 400px; height: 400px; object-fit: cover;;
