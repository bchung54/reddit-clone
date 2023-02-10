import { FaBold, FaItalic, FaStrikethrough } from 'react-icons/fa';
import { TfiLink, TfiQuoteRight } from 'react-icons/tfi';
import { VscCode } from 'react-icons/vsc';
import { RiSuperscript, RiCodeBoxLine } from 'react-icons/ri';
import { BsExclamationDiamond } from 'react-icons/bs';
import { TbHeading } from 'react-icons/tb';
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
} from 'react-icons/md';
import { RxTable } from 'react-icons/rx';
import { Button } from 'components/ui/Button';
import './style.css';

export default function TextFormattingBar() {
  return (
    <div className="text-formatting">
      <Button>
        <FaBold />
      </Button>
      <Button>
        <FaItalic />
      </Button>
      <Button>
        <TfiLink />
      </Button>
      <Button>
        <FaStrikethrough />
      </Button>
      <Button>
        <VscCode />
      </Button>
      <Button>
        <RiSuperscript />
      </Button>
      <Button>
        <BsExclamationDiamond />
      </Button>
      <Button>
        <TbHeading />
      </Button>
      <Button>
        <MdOutlineFormatListBulleted />
      </Button>
      <Button>
        <MdOutlineFormatListNumbered />
      </Button>
      <Button>
        <TfiQuoteRight />
      </Button>
      <Button>
        <RiCodeBoxLine />
      </Button>
      <Button>
        <RxTable />
      </Button>
      <Button className="markdown">Markdown Mode</Button>
    </div>
  );
}
