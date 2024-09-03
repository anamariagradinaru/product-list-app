import { Flex, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';

const Cart = () => {
    return (
        <Container>
            <Heading marginLeft={'20px'} marginTop={'20px'} color={'#C73B0F'}>
                Cosul tau
            </Heading>
            <Flex direction={'column'} alignItems={'center'} gap={'10px'}>
                <img src="./images/carts.png" />
                <Text color={'#87635A'}>
                    Produsele tale vor fi adaugate aici
                </Text>
            </Flex>
        </Container>
    );
};

export default Cart;
