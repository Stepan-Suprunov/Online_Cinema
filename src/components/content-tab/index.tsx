import styles from './style.module.scss'
import {IContentUnit} from '../../types';

type ContentTabPropsType = {
    contentUnit: IContentUnit;
};

export function ContentTab(props: ContentTabPropsType) {
    const {contentUnit} = props;

    return (
        <div className={styles.tabFrame}>
            <img src={contentUnit.previewUrl} alt={'Movie cover...'}/>
        </div>
    );
};