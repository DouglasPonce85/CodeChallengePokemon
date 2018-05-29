import styled from 'styled-components';
import { ThemeColors } from '../styles/themes';

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AlbumListContainer = styled.div`
    display: flex;
    flex-basis: 55%;
    flex-wrap: wrap;
    align-content: flex-start;
    clear: both;
    margin: 3% 5% auto;
`;

export const AlbumCard = styled.div`
    flex-direction: column;
    flex-basis: calc(50%- 20px);
    background-color: ${ThemeColors.lightGray};
    color: ${ThemeColors.labelColor};
    font-size: 13px;
    margin: 10px 13px;
    text-align: center;
    font-weight: 500;
    height: 100px;
    max-width: 140px;
    text-transform: capitalize;
`;

export const DetailContainer = styled.div`
    flex-grow: 1;
    top: 0;
    position: sticky;
    background-color: ${ThemeColors.lightGray};
`;

export const DetailContainerList = styled.ul`
    max-height: 35vh;
    overflow-y: auto;
`;

export const DetailContainerLabel = styled.span`
    font-weight: 600;
    font-size: 28px;
    text-align: center;
`;

export const DetailContainerWrapper = styled.div`
    color: ${ThemeColors.labelColor};
    font-size: 13px;
    margin-top: 25px;
`;

export const DetailContainerImg = styled.div`
    clear: both;
    margin: 0 auto;
    padding: 11px;
    width: 206px;
    flex-direction: row;
    display: flex;
`;

export const CodeChallengeLabel = styled.div`
    color: ${ThemeColors.white};
    margin-top: 1.2em;
    font-weight: 600;
    font-size: 30px;
    background-color: ${ThemeColors.green};
    height: 65px;
    clear: both;
    margin: 2% 0% auto;
    width: 100%;
    text-align: center;
    padding-top: 2%;
    text-transform: uppercase;
`;

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${ThemeColors.green};
  border: 2px solid ${ThemeColors.green};
`;

