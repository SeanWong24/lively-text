/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TextSegment } from "./utils/text-segment";
export namespace Components {
    interface AwesomeLivelyText {
        "text": string;
        "textSegmentMatchRegExp": RegExp;
    }
}
export interface AwesomeLivelyTextCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAwesomeLivelyTextElement;
}
declare global {
    interface HTMLAwesomeLivelyTextElement extends Components.AwesomeLivelyText, HTMLStencilElement {
    }
    var HTMLAwesomeLivelyTextElement: {
        prototype: HTMLAwesomeLivelyTextElement;
        new (): HTMLAwesomeLivelyTextElement;
    };
    interface HTMLElementTagNameMap {
        "awesome-lively-text": HTMLAwesomeLivelyTextElement;
    }
}
declare namespace LocalJSX {
    interface AwesomeLivelyText {
        "onTextSegmentsGenerated"?: (event: AwesomeLivelyTextCustomEvent<TextSegment[]>) => void;
        "text"?: string;
        "textSegmentMatchRegExp"?: RegExp;
    }
    interface IntrinsicElements {
        "awesome-lively-text": AwesomeLivelyText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "awesome-lively-text": LocalJSX.AwesomeLivelyText & JSXBase.HTMLAttributes<HTMLAwesomeLivelyTextElement>;
        }
    }
}
