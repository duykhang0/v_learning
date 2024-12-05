import HeaderAdmin from "@/components/HeaderAdmin";
import NavAdmin from "@/components/NavAdmin";
import "@/css/admin.css";
import Providers from "@/redux/Provider";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  
  return (
    <Providers >
    <html lang="en">
      <body className=" ">
       <div className="flex justify-between ">
        <NavAdmin/>
        <div className="content flex-1"> 
            <HeaderAdmin/>
            <div className="box" >
            {children}
            </div>
        </div>
       </div>
      </body>
    </html>
    </Providers>
  );
}
