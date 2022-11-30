import { CardWrapper } from './Card.style';

interface CardProps {
    children: JSX.Element;
}

export const Card = ({ children }: CardProps) => <CardWrapper>{children}</CardWrapper>;
