const AuthLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full flex items-center justify-center mt-14">
            {children}
        </div>
     );
}
 
export default AuthLayout;