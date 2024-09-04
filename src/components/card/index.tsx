import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import { useState } from 'react';

interface Props {
    image: string;
    text: string;
    heading: string;
    setProductList: React.Dispatch<
        React.SetStateAction<
            Array<{ image: string; heading: string; text: string }>
        >
    >;
    productList: Array<{ image: string; heading: string; text: string }>;
}
const Card = ({ image, text, heading, setProductList, productList }: Props) => {
    const [isFirstButton, setIsFirstButton] = useState(true);

    const toggleButton = () => {
        setIsFirstButton(!isFirstButton);
        setProductList([...productList, { image, text, heading }]);
    };

    return (
        <Container>
            <div>
                <img src={image} />
                {isFirstButton ? (
                    <Button
                        onClick={toggleButton}
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
                        onClick={toggleButton}
                        cursor={'pointer'}
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
                            >
                                +
                            </Button>
                            <Heading color={'#fff'}> 1 </Heading>
                            <Button
                                width={'20px'}
                                backgroundColor={'#C73B0F'}
                                color={'white'}
                                border={'1px solid white'}
                                borderRadius={'50%'}
                            >
                                -
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
