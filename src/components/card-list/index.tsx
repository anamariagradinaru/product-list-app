import Container from './index.styled';
import CONSTANTS from '../../common/constants';
import Card from '../card';

const CardList = () => {
    return (
        <Container>
            {CONSTANTS.CARDS.map((value) => {
                return (
                    <Card
                        image={value.IMAGE_URL}
                        text={value.PRICE}
                        heading={value.NAME}
                    />
                );
            })}
        </Container>
    );
};

export default CardList;
