import * as React from "react";

import { colors, spacing } from "./Theme";

interface IProps {
    title: string;
    subtitle?: string;
    children?: any;
}

export default (props: IProps) => (
   <div className="fade">
        <div className="modal">
            <div className="header">
                <h1>{ props.title }</h1>
                <h2>{ props.subtitle }</h2>
            </div>
            { props.children }
        </div>
        <style jsx>{`
        .fade {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100%;
            background-color: rgba(0,0,0,.8);
        }

        .modal {
            max-width: 700px;
            margin: 40px auto;
            padding: ${ spacing.padding };
            background-color: white;
        }

        .header {
            border-bottom: 1px solid ${ colors.borders };
        }
    `}</style>
</div>
);
