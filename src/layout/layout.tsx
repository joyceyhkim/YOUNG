import React, { FC } from 'react';
import {Link, Outlet} from "react-router-dom";

interface layoutProps {}

const Layout: FC<layoutProps> = () => (
 <layoutWrapper>
     <>


         <Outlet/>
     </>
 </layoutWrapper>
);

export default Layout;
