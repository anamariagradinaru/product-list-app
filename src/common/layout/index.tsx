import { ReactElement } from 'react';
import Container from './index.styled';

interface Props {
    children: ReactElement | Array<ReactElement>;
}

const Layout = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

export default Layout;
