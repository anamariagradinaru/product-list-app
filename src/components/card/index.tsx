import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import { useState } from 'react';

interface Props {
    image: string;
    text: number;
    heading: string;
    id: number;
    amount: number;
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
const Card = ({
    image,
    text,
    heading,
    id,
    amount,
    setProductList,
    productList,
}: Props) => {
    const [isFirstButton, setIsFirstButton] = useState(true);

    const handleClick = () => {
        setIsFirstButton(!isFirstButton);
        setProductList([...productList, { image, text, heading, id, amount }]);
    };

    const handleIncreaseClick = () => {
        const newProductList = productList.map((value) => {
            if (value.id === id) {
                return { ...value, amount: value.amount + 1 };
            }
            return value;
        });

        setProductList(newProductList);
    };
    const handleDecreaseClick = () => {
        const newProductList = productList.map((value) => {
            if (value.id === id) {
                return { ...value, amount: value.amount - 1 };
            }
            return value;
        });

        setProductList(newProductList);
    };

    return (
        <Container>
            <div>
                <img src={image} />
                {isFirstButton ? (
                    <Button
                        onClick={handleClick}
                        cursor={'pointer'}
                        backgroundColor={'#fff'}
                        color={'#260F08'}
                        borderRadius={'50px '}
                        border={'1px solid #AD8A85'}
                        width={'160px'}
                        height={'40px'}
                    >
                        Adauga in cos
                    </Button>
                ) : (
                    <Button
                        backgroundColor={'#C73B0F'}
                        color={'#260F08'}
                        borderRadius={'50px '}
                        border={'1px solid #AD8A85'}
                        width={'160px'}
                        height={'40px'}
                    >
                        <Flex gap={'50px'}>
                            <Button
                                width={'20px'}
                                backgroundColor={'#C73B0F'}
                                color={'white'}
                                border={'1px solid white'}
                                borderRadius={'50%'}
                                onClick={handleDecreaseClick}
                            >
                                -
                            </Button>
                            <Heading color={'#fff'}>
                                {productList.map((value) => {
                                    return value.amount;
                                })}
                            </Heading>
                            <Button
                                width={'20px'}
                                backgroundColor={'#C73B0F'}
                                color={'white'}
                                border={'1px solid white'}
                                borderRadius={'50%'}
                                onClick={handleIncreaseClick}
                            >
                                +
                            </Button>
                        </Flex>
                    </Button>
                )}

                <Heading fontSize={'21px'} color={'#260F08'}>
                    {heading}
                </Heading>
                <Text color={'#C73B0F'} fontSize={'18px'}>
                    {text}
                </Text>
            </div>
        </Container>
    );
};
export default Card;
