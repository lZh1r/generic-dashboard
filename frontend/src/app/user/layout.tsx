import AppBreadCrumb from "@/components/AppBreadCrumb";

function SubLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div>
                <AppBreadCrumb/>
            </div>
            {children}
        </>
    );
}

export default SubLayout;