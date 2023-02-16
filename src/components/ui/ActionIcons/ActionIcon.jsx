import PropTypes from 'prop-types';
import {
  CgArrowsExpandLeft,
  CgCompressLeft,
  CgMenuBoxed,
} from 'react-icons/cg';
import { FiExternalLink } from 'react-icons/fi';
import { BiMessage } from 'react-icons/bi';
import { TfiShare } from 'react-icons/tfi';
import { IoBookmarkOutline } from 'react-icons/io5';
import { BsEyeSlash, BsFlag } from 'react-icons/bs';

export default function ActionIcon(props) {
  const { type } = props;
  switch (type) {
    case 'expand':
      return <CgArrowsExpandLeft className="icon" />;
    case 'compress':
      return <CgCompressLeft className="icon" />;
    case 'text':
      return <CgMenuBoxed className="icon" />;
    case 'external':
      return <FiExternalLink className="icon" />;
    case 'comment':
      return <BiMessage className="icon" />;
    case 'share':
      return <TfiShare className="icon" />;
    case 'save':
      return <IoBookmarkOutline className="icon" />;
    case 'hide':
      return <BsEyeSlash className="icon" />;
    case 'report':
      return <BsFlag className="icon" />;
    default:
      return null;
  }
}

ActionIcon.propTypes = {
  type: PropTypes.string.isRequired,
};
