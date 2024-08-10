import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px;
    img {
        border-radius: 8px;
        width: 250px;
        height: 250px;
    }
`;

export default Container;
