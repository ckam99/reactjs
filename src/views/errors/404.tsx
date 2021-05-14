import React from "react";
import BlankLayout from "../../components/layouts/Blank";

export interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
    return <BlankLayout>
        <BlankLayout.Head>
            <title>error 404</title>
        </BlankLayout.Head>
        <BlankLayout.Container>
            <h1>PAGE NOT FOUND</h1>
        </BlankLayout.Container>
    </BlankLayout>
}

export default NotFound;