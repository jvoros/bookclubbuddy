import * as React from "react";

import "../assets/images/logo.svg";
import { colors, spacing } from "./Theme";


interface IProps {
    title: string;
    subtitle?: string;
}

export default (props: IProps) => (
    <div>
        <img src="/assets/images/logo.svg" alt={props.title} />
        <style jsx>{`
            div {
                padding: ${ spacing.padding };
                text-align: center;
            }

            h1 {
                margin: 20px auto;
                text-align: center;
                font-family: "Shadows Into Light Two", serif;
                font-weight: normal;
                font-size: 48px;
                // color: ${ colors.primary };
            }

            .subtitle {
                color: ${ colors.primary_light };
            }

            img {
                width: 50%;
            }
        `}</style>
    </div>
);
