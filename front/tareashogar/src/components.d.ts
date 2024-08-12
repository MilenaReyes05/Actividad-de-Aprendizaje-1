/* eslint-disable */
/* tslint:disable */
/**
 * Este es un archivo autogenerado creado por el compilador de Stencil.
 * Contiene información de tipado para todos los componentes que existen en este proyecto.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * El primer nombre
         */
        "first": string;
        /**
          * El apellido
         */
        "last": string;
        /**
          * El segundo nombre
         */
        "middle": string;
    }
    interface TaskForm {
        "taskId"?: number;
    }
    interface TaskList {
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTaskFormElement extends Components.TaskForm, HTMLStencilElement {
    }
    var HTMLTaskFormElement: {
        prototype: HTMLTaskFormElement;
        new (): HTMLTaskFormElement;
    };
    interface HTMLTaskListElement extends Components.TaskList, HTMLStencilElement {
    }
    var HTMLTaskListElement: {
        prototype: HTMLTaskListElement;
        new (): HTMLTaskListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "task-form": HTMLTaskFormElement;
        "task-list": HTMLTaskListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * El primer nombre
         */
        "first"?: string;
        /**
          * El apellido
         */
        "last"?: string;
        /**
          * El segundo nombre
         */
        "middle"?: string;
    }
    interface TaskForm {
        "taskId"?: number;
    }
    interface TaskList {
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "task-form": TaskForm;
        "task-list": TaskList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "task-form": LocalJSX.TaskForm & JSXBase.HTMLAttributes<HTMLTaskFormElement>;
            "task-list": LocalJSX.TaskList & JSXBase.HTMLAttributes<HTMLTaskListElement>;
        }
    }
}
