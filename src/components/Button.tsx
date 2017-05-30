import * as React from "react";

import { colors, spacing } from "./Theme";

interface IProps {
    children?: any;
    options?: string[];
    onClick?(): any;
}

export default (props: IProps) => (
       <button
            onClick={props.onClick}
            className={props.options ? props.options.join(" ") : null}
       >{props.children}
        <style jsx>{`
            button {
                border: 0px solid ${ colors.primary };
                background: ${ colors.primary_light };
                padding: 10px 20px;
                border-radius: 2px;
                font-weight: bold;
                cursor: pointer;
                color: ${ colors.primary };
                margin: 0 ${ spacing.margins };
            }

            button:hover {
                background: ${ colors.primary };
                color: ${ colors.primary_light };
            }
            .large {
                padding: 100px;
            }

            .small {
                font-weight: lighter;
                padding: 5px 10px;
                margin: 0 5px;
            }

            .alert {
                border-color: black;
                background-color: red;
                color: black;
            }

            .alert:hover {
                background-color: black;
                color: red;
            }
    `}</style>
</button>
);
