import Container from './index.styled';
import CONSTANTS from '../../common/constants';
import Card from '../card';

interface Props {
    setProductList: React.Dispatch<
        React.SetStateAction<
            Array<{ image: string; heading: string; text: number; id: number }>
        >
    >;
    productList: Array<{
        image: string;
        heading: string;
        text: number;
        id: number;
    }>;
}
const CardList = ({ setProductList, productList }: Props) => {
    return (
        <Container>
            {CONSTANTS.CARDS.map((value) => {
                return (
                    <Card
                        image={value.IMAGE_URL}
                        text={value.PRICE}
                        heading={value.NAME}
                        id={value.ID}
                        setProductList={setProductList}
                        productList={productList}
                    />
                );
            })}
        </Container>
    );
};

export default CardList;
