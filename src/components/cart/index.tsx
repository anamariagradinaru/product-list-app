import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';

interface Props {
    setProductList: React.Dispatch<
        React.SetStateAction<
            Array<{
                image: string;
                heading: string;
                text: number;
                id: number;
                amount: number;
            }>
        >
    >;
    productList: Array<{
        image: string;
        heading: string;
        text: number;
        id: number;
        amount: number;
    }>;
}

const Cart = ({ productList, setProductList }: Props) => {
    const calculateTotal = () => {
        let total = 0;
        for (let i = 0; i < productList.length; i++) {
            total += productList[i].text * productList[i].amount;
        }
        return total;
    };
    const handleDelete = (id: number) => {
        setProductList(productList.filter((product) => product.id !== id));
    };
    return (
        <Container>
            <Heading marginLeft={'20px'} marginTop={'20px'} color={'#C73B0F'}>
                Cosul tau
            </Heading>
            {productList ? (
                productList.map((product) => {
                    return (
                        <Flex
                            marginLeft={'15px'}
                            marginRight={'15px'}
                            direction={'column'}
                            gap={'6px'}
                        >
                            <Heading color={'#260F08'} fontSize={'18px'}>
                                {product.heading}
                            </Heading>
                            <Flex justifyContent={'space-between'}>
                                <Flex gap={'16px'}>
                                    <Heading color={'red'} fontSize={'15px'}>
                                        {product.amount}x
                                    </Heading>
                                    <Text color={'gray'}>{product.text}</Text>
                                </Flex>

                                <Button
                                    onClick={() => handleDelete(product.id)}
                                    width={'20px'}
                                    backgroundColor={'#fff'}
                                    border={'1px solid #AD8A85'}
                                    borderRadius={'50%'}
                                    color={'#AD8A85'}
                                >
                                    x
                                </Button>
                            </Flex>
                        </Flex>
                    );
                })
            ) : (
                <Flex direction={'column'} alignItems={'center'} gap={'10px'}>
                    <img src="./images/carts.png" />
                    <Text color={'#87635A'}>
                        Produsele tale vor fi adaugate aici
                    </Text>
                </Flex>
            )}
            <Flex
                marginLeft={'15px'}
                marginRight={'15px'}
                justifyContent={'space-between'}
            >
                <Text color={'#260F08'} fontSize={'18px'}>
                    TOTAL : ${calculateTotal()}
                </Text>
                <Heading fontSize={'24px'}></Heading>
            </Flex>
            <Button
                marginLeft={'15px'}
                marginRight={'15px'}
                color={'#fff'}
                height={'40px'}
                backgroundColor={'#C73B0F'}
                border={'1px solid #C73B0F'}
                borderRadius={'20px'}
            >
                Plaseaza comanda
            </Button>
        </Container>
    );
};

export default Cart;
