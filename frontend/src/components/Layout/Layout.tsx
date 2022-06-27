import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

function Layout(props: { menu: ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal; content: ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal; }) {
    return (
        <div>
            <div>{props.menu}</div>
            <div>{props.content}</div>
        </div>
    );
}

export default Layout;