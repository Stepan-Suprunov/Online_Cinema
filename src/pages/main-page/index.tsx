import {MainPageLayout} from '../../components/layouts/index';
import {IContentUnit} from '../../types';
import {ContentTab} from '../../components/index';

type MainPagePropsType = {
    store: IContentUnit[]
};

export function MainPage(props: MainPagePropsType) {
    const {store} = props;

    return (
        <MainPageLayout>
            {store.map((unit: IContentUnit) => <ContentTab
                key={unit.id}
                contentUnit={unit}
            />)}
        </MainPageLayout>
    );
};