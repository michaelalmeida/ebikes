import { Header } from '../../Components/Header';

interface PublicLayoutProps {
    children: JSX.Element;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => (
    <>
        <Header />
        {children}
    </>
);
