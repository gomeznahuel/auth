import { FooterContainer, Paragraph } from '../../stylesheet/footer';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph> &copy; {currentYear} - All rights reserved</Paragraph>
    </FooterContainer>
  )
}