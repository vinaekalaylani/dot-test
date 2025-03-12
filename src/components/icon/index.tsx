import { FontAwesomeIcon as Component } from "@fortawesome/react-fontawesome";
import * as FaIcons from "@fortawesome/free-solid-svg-icons";
import * as AntdIcons from "@ant-design/icons";

interface IconProps {
    type: "fa" | "antd";
    name: string;
    [key: string]: any;
}

export default function Icon(props: IconProps) {
    const { type, name, ...rest } = props;

    /* Store Data */
    /* ----- */

    /* Hooks */
    /* ----- */

    /* Constant */
    const AntdIcon = (AntdIcons as any)[name] || null;
    const FaIcon = (FaIcons as any)[name] || null;

    /* State */
    /* ----- */

    /* Function */
    /* ----- */

    /* componentDidMount and componentDidUpdate */
    /* ----- */

    /* Render Icon berdasarkan type */
    if (type === "fa") {
        return FaIcon ? <Component icon={FaIcon} {...rest} /> : null;
    } else {
        return AntdIcon ? <AntdIcon {...rest} /> : null;
    }
}
