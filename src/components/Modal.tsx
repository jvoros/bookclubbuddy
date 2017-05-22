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
            { props.children }
        </div>
        <style jsx>{`
        .fade {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            min-height: 100%;
            background-color: rgba(0,0,0,.8);
        }

        .modal {
            width: 90%;
            margin: 20px auto;
            padding: ${ spacing.padding };
            background-color: white;
        }

        input {
            display: block;
        }
    `}</style>
</div>
);
