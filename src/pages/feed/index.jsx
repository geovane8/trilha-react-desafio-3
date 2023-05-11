import React from 'react';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './styles';

const cardsData = Array.from({ length: 10 }, (_, index) => <Card key={index} />);

const rankingData = [
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 25 },
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 65 },
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 45 },
  { nome: 'Pablo Henrique', image: 'https://avatars.githubusercontent.com/u/45184516?v=', percentual: 72 },
];

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          {cardsData}
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          {rankingData.map(({ nome, image, percentual }, index) => (
            <UserInfo key={index} nome={nome} image={image} percentual={percentual} />
          ))}
        </Column>
      </Container>
    </>
  );
};

export { Feed };
