function NotFound() {
    return (
        <div className="h-[80vh] content-center">
            <div className="text-center text-lg flex justify-center gap-5 items-center">
                <h1 className="">404</h1>
                <p>|</p>
                <p className="">Nothing found</p>
            </div>
            <p className="text-center p-4 text-muted-foreground">This page can not be reached</p>
        </div>

    );
}

export default NotFound;