'use client';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {usePathname} from "next/navigation";
import Link from "next/link";

function AppBreadCrumb() {

    const path = usePathname().split('/');
    const bcChildren = [
        <BreadcrumbItem key="home">
            <BreadcrumbLink asChild>
                <Link href='/'>
                    Home
                </Link>
            </BreadcrumbLink>
        </BreadcrumbItem>,
        <BreadcrumbSeparator key="initsep"/>
    ];

    function capitalize(str: string) {
        return String(str).charAt(0).toUpperCase() + str.slice(1);
    }

    if (path.length > 2) {
        for (let i = 1; i < path.length - 1; i++) {
            console.log(path[i]);
            const current = path[i];
            bcChildren.push(
                <BreadcrumbItem key={`element${i}`}>
                    <BreadcrumbLink asChild>
                        <Link href={`/${current}`}>
                            {capitalize(current)}
                        </Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>

            );
            bcChildren.push(<BreadcrumbSeparator key={`separator${i}`}/>);
        }
    }

    bcChildren.push(
        <BreadcrumbItem key="page">
            <BreadcrumbPage>{capitalize(path[path.length - 1])}</BreadcrumbPage>
        </BreadcrumbItem>
    );

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    bcChildren
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default AppBreadCrumb;