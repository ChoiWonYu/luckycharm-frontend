import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Rabbit from '../components/MainRabbit';
import background from '../asset/texture.svg';
import { LongButton } from '../components/button';
import { defaultTheme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';
import { SelectedIngredientImgKey } from '../consts/LocalStorageKey';

const SubmitPage = () => {
  const navigate = useNavigate();
  const img = localStorage.getItem(SelectedIngredientImgKey);

  useEffect(() => {
    const preventGoBack = () => {
      history.pushState(null, '', location.href);
    };
    history.pushState(null, '', location.href);
    window.addEventListener('popstate', preventGoBack);
    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);

  const goHome = () => {
    localStorage.removeItem(SelectedIngredientImgKey);
    navigate('/');
  };
  return (
    <ThemeProvider theme={defaultTheme.colors}>
      <Container>
        <TextWrapper>
          <Title>THANK YOU!</Title>
          <SmallGray>
            떡국 재료와 메시지를 보내주어 고마워요!
            <br /> 새해 복 가득 받으세요 :)
          </SmallGray>
        </TextWrapper>
        <Rabbit emotion='laugh' text='보내줘서 고마워!' />
        <IngredientWrapper>
          <img src={img} alt='ingred' />
        </IngredientWrapper>
        <ButtonWrapper>
          <LouteButton type='button' onClick={goHome}>
            내 페이지로 가기
          </LouteButton>
        </ButtonWrapper>
      </Container>
    </ThemeProvider>
  );
};
export default SubmitPage;

const Container = styled.div`
  margin: 0 auto;
  height: 844px;
  width: 390px;
  background-image: url('${background}');
  background-blend-mode: multiply;
  background-color: ${({ theme }) => theme.colors.ivory};
  position: relative;
`;

const Title = styled.h1`
  margin-top: 80px;
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 18px;
`;

const SmallGray = styled.h2`
  position: relative;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

const TextWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  bottom: 50px;
  justify-content: center;
  cursor: pointer !important;
  display: flex;
  justify-content: center;
`;

const IngredientWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 120px;
`;

const LouteButton = styled(LongButton)`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  &:hover {
    color: ${({ theme }) => theme.colors.beige};
  }
`;
