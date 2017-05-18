import * as React from "react";

import { colors } from "./Theme";

interface IProps {
    title: string;
    subtitle?: string;
}

export default (props: IProps) => (
    <div>
        <h1>{ props.title }</h1>
        <span className="subtitle">{ props.subtitle }</span>
        <style jsx>{`
            div {
                padding: 5px;
                background-color: ${ colors.primary };
                color: ${ colors.primary_text };
            }

            h1 {
                margin: 0;
            }

            .subtitle {
                color: ${ colors.primary_light };
            }
        `}</style>
    </div>
);

