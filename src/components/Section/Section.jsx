import PropTypes from "prop-types";
import { SectionTitle } from './Section.styled';

const Section = ({title, children}) => ( 
  <section>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Section;