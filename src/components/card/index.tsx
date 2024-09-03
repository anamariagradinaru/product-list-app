import { Button, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import { useState } from 'react';

interface Props {
    image: string;
    text: string;
    heading: string;
}
const Card = ({ image, text, heading }: Props) => {
    const [isFirstButton, setIsFirstButton] = useState(true);

    const toggleButton = () => {
        setIsFirstButton(!isFirstButton);
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
                        backgroundColor={'#fff'}
                        color={'#260F08'}
                        borderRadius={'50px '}
                        border={'1px solid #AD8A85'}
                        width={'160px'}
                        height={'40px'}
                    >
                        + 1 -
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
