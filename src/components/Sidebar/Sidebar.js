import { SidebarContainer, PlayList } from './Styles';
import SidebarChoice from './SidebarChoice';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <img src="https://images.vexels.com/media/users/3/137413/isolated/preview/4acb8e52632aa9b7c874b878eaf02bc4-logotipo-del-icono-de-spotify-by-vexels.png" alt="logo"/>
            <SidebarChoice title="Home" Icon={HomeIcon}/>
            <SidebarChoice title="Search" Icon={SearchIcon}/>
            <SidebarChoice title="Your Library" Icon={LibraryMusicIcon}/>
            <PlayList>PlayList</PlayList>
            <hr/>
            <SidebarChoice title=":)"/>
            <SidebarChoice title="Tareas"/>
        </SidebarContainer>
    )
}

export default Sidebar
