import * as S from './SideBar.js'
import { Link } from 'react-router-dom';

import { IoHomeOutline, IoTimerOutline, IoServerOutline } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";
import { GoTasklist } from "react-icons/go";

const SideBar = () => {
  return (
    <S.SidebarContainer>
        <S.Icons>

          <Link to={'/'}>
            <S.Icon>
              <i><IoHomeOutline /></i>
            </S.Icon>
          </Link>
              
            <Link to={"/projects"}>
              <S.Icon> 
                <i><IoServerOutline /></i>
              </S.Icon>
            </Link>
              
            <Link to={"/"}>
              <S.Icon>
                 <i><IoTimerOutline /></i>
              </S.Icon>
            </Link>

            <Link to={"/"}>
              <S.Icon>
                <i><VscProject/></i>
              </S.Icon>
            </Link>

            <Link to={"/"}>
              <S.Icon>
                <i><GoTasklist/></i>
              </S.Icon>
            </Link>
        </S.Icons>
    </S.SidebarContainer>
  )
}

export default SideBar
