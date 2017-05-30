import * as React from "react";

import { colors, spacing } from "./Theme";

interface IProps {
    title: string;
    subtitle?: string;
    children?: any;
    close(): void;
}

export default (props: IProps) => (
   <div className="fade">
        <div className="modal">
            <div className="header">
                <button onClick={props.close}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
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
            height: 100%;
            overflow-y: auto;
            background-color: rgba(0,0,0,.8);
        }

        .modal {
            max-width: 500px;
            margin: 40px auto;
            padding: ${ spacing.padding };
            background-color: white;
        }

        .header {
            border-bottom: 1px solid ${ colors.borders };
            margin-bottom: 10px;
        }

        button {
            float: right;
        }
    `}</style>
</div>
);
