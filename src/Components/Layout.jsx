const Layout = ({ children }) => {
    return (
        <div className='flex flex-col mx-auto max-w-3xl items-center mt-20'>
            {children}
        </div>
    )
}

export default Layout