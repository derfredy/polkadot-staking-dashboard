import { motion } from 'framer-motion';
import { ItemWrapper as Wrapper } from '../Wrappers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt as faExt } from '@fortawesome/free-solid-svg-icons';

export const External = (props: any) => {

  let { width, height, subtitle, label, title, url } = props;

  const handleClick = () => {
    window.open(url, '_blank');
  }

  return (
    <Wrapper
      width={`${width}%`}
      height={height}
      border={undefined}
    >
      <motion.button
        className='item'
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{
          duration: 0.5,
          type: "spring",
          bounce: 0.4,
        }}
        onClick={handleClick}
      >
        <h4>{label}</h4>
        <h3>{title}</h3>
        {width > 50 && <p>{subtitle}</p>}
        <FontAwesomeIcon icon={faExt} className='ext' />
      </motion.button>
    </Wrapper>
  );
}

export default External;