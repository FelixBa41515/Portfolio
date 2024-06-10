import {CSSProperties, FunctionComponent} from 'react'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildIcon from '@mui/icons-material/Build';
interface SkillCarouselContentProps {
    title: string;
    items: string[];
}
const titleStyle: CSSProperties = {
    textAlign:'center',
};

const itemStyle: CSSProperties = {
    alignItems:'center',
    display:'flex',
    marginBlock:'.5rem',
};

const SkillCarouselContent: FunctionComponent<SkillCarouselContentProps> = ({
                                                                                title,
                                                                     items,
                                                                            }) => {
    return (
        <div>
            <h2 style={titleStyle}>{title}</h2>

                {items.map((item) => (
                    <div key={item} style={itemStyle}>  {title === "Personal" && <EmojiObjectsIcon sx={{marginRight:'1rem'}} color={'primary'} />}{title === "Technical" && <BuildIcon color={'primary'} sx={{marginRight:'1rem'}}/>} <div>{item}</div></div>
                ))}
        </div>
    );
};

export default SkillCarouselContent;
