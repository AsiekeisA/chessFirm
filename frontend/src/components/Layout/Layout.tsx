import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function Layout(props: { menu: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <div>
            <div>{props.menu}</div>
            <div>{props.content}</div>
        </div>
    );
}

export default Layout;