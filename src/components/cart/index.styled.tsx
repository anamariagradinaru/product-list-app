import styled from 'styled-components';

const Container = styled.div`
    margin-left: 60px;
    margin-right: 20px;
    background-color: white;
    width: 400px;
    height: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 20px;

    img {
        width: 100px;
    }
    button {
        cursor: pointer;
    }
`;
export default Container;
