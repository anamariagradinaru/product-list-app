import { Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import CONSTANTS from '../../common/constants';
import Layout from '../../common/layout';

const Card = () => {
    return (
        <Layout>
            <Container>
                {CONSTANTS.CARDS.map((value) => (
                    <div>
                        <img src={value.IMAGE_URL} />
                        <Heading fontSize={'21px'} color={'#260F08'}>
                            {value.NAME}
                        </Heading>
                        <Text color={'#C73B0F'} fontSize={'18px'}>
                            {value.PRICE}
                        </Text>
                    </div>
                ))}
            </Container>
        </Layout>
    );
};
export default Card;
