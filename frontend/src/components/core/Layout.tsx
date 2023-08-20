import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Box from "@mui/material/Box";

type LayoutProps = {
   children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
   return (
      <Box>
         <Navbar></Navbar>
         <Box p={2}>{children}</Box>
         <Footer></Footer>
      </Box>
   );
};

export default Layout;
