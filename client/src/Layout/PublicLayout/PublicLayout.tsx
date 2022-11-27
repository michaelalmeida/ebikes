import { Header } from '../../Components/Header';
import { Content, PublicLayoutWrapper } from './PublicLayout.style';

interface PublicLayoutProps {
    children: JSX.Element;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => (
    <PublicLayoutWrapper>
        <Header />
        <Content>{children}</Content>
    </PublicLayoutWrapper>
);
