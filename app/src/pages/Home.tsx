import AppMenuList from '../components/AppMenuList/AppMenuList';
import { appMenuListData } from '../data/PropData';

function Home() {
    return <>
        <AppMenuList {...appMenuListData}></AppMenuList>
    </>
}

export default Home;
