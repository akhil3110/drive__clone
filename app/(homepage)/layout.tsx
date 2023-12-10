import Navbar from "@/components/navbar";

const AuthLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <div>
              <Navbar/>
            </div> 
            <div className='mx-5'>
              {children}
            </div>
          </div>
     );
}
 
export default AuthLayout;