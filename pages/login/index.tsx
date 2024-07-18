import { themeState } from '@/recoil/theme';
import Theme from '@/theme/types/theme';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import styled, { keyframes } from 'styled-components';

const Home: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  return (
    <>
      <Head>
        <title>나봄치즈 - Login</title>
      </Head>
      <Container>
        <ThemeToggle
          src={currentTheme === Theme.dark ? '/svg/sun.svg' : '/svg/moon.svg'}
          height={80}
          width={80}
          alt="theme toggle"
          onClick={() => setCurrentTheme(currentTheme === Theme.dark ? Theme.light : Theme.dark)}
        />
        <TitleWrapper>
          <TitleContainer>
            <Title>안녕하세요</Title>
            <SubTitle>
              비공식 <ChzzkColor>치지직</ChzzkColor> 플랫폼 도구
              <ChzzkColorPoint>나봄치즈</ChzzkColorPoint>입니다.
            </SubTitle>
            <TitleDescription>
              검색, 채널 정보 조회, 방송 상태, 채팅 등 다양한 서비스를 제공합니다.
            </TitleDescription>
          </TitleContainer>
          <TitleFooter>
            <LoginButton>로그인</LoginButton>
            <NonLoginButton>비로그인</NonLoginButton>
          </TitleFooter>
        </TitleWrapper>
      </Container>
    </>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const themeTransition = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.bg._01};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s ease;
  animation: ${themeTransition} 0.5s ease;
`;

const ThemeToggle = styled(Image)`
  cursor: pointer;
  position: fixed;
  top: 2%;
  right: 1%;
  animation: ${fadeIn} 0.8s ease-out;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 560px) {
    width: 65px;
    height: 65px;
  }

  @media screen and (max-width: 440px) {
    width: 55px;
    height: 55px;
  }
`;

const TitleWrapper = styled.div`
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 560px) {
    gap: 30px;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.content._01};
  transition: color 0.5s ease;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: bold;
  animation: ${fadeIn} 0.8s ease-out;

  @media screen and (max-width: 684px) {
    font-size: 54px;
  }

  @media screen and (max-width: 560px) {
    font-size: 42px;
  }

  @media screen and (max-width: 440px) {
    font-size: 38px;
  }
`;

const SubTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  animation: ${fadeIn} 0.8s ease-out 0.2s;
  animation-fill-mode: backwards;

  @media screen and (max-width: 684px) {
    font-size: 28px;
  }

  @media screen and (max-width: 560px) {
    font-size: 22px;
  }

  @media screen and (max-width: 440px) {
    font-size: 18px;
  }
`;

const TitleDescription = styled.p`
  color: ${({ theme }) => theme.colors.content._02};
  font-weight: 400;
  font-size: 24px;
  margin-top: 10px;
  animation: ${fadeIn} 0.8s ease-out 0.4s;
  animation-fill-mode: backwards;

  @media screen and (max-width: 684px) {
    font-size: 18px;
  }

  @media screen and (max-width: 560px) {
    font-size: 16px;
  }

  @media screen and (max-width: 440px) {
    font-size: 12px;
  }
`;

const ChzzkColor = styled.span`
  color: ${({ theme }) => theme.colors.content.chzzk01};
`;

const ChzzkColorPoint = styled(ChzzkColor)`
  font-size: 40px;
  padding: 0 15px;

  @media screen and (max-width: 560px) {
    font-size: 28px;
  }
`;

const TitleFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn} 0.8s ease-out 0.6s;
  animation-fill-mode: backwards;
`;

const NonLoginButton = styled.div`
  width: 160px;
  height: 52px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.content._09};
  background-color: ${({ theme }) => theme.colors.bg.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;

  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px ${({ theme }) => theme.colors.bg.overlay01};
  }

  @media screen and (max-width: 560px) {
    width: 140px;
    height: 48px;

    font-size: 21px;
  }
  @media screen and (max-width: 440px) {
    width: 130px;
    height: 44px;

    font-size: 19px;
  }
`;

const LoginButton = styled.div`
  width: 160px;
  height: 52px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.content._09};
  background-color: ${({ theme }) => theme.colors.bg.chzzk01};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px ${({ theme }) => theme.colors.bg.chzzk05};
  }

  @media screen and (max-width: 560px) {
    width: 140px;
    height: 48px;

    font-size: 21px;
  }

  @media screen and (max-width: 440px) {
    width: 130px;
    height: 44px;

    font-size: 19px;
  }
`;

export default Home;
