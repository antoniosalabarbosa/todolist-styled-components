import { 
    PropsWithChildren,
    Dispatch,
    DispatchWithoutAction,
    SetStateAction,
    MutableRefObject
} from "react";

export type Children = PropsWithChildren;
export type MutableRef<T> = MutableRefObject<T>;

export interface ResponseTasks {
    _id: string,
    task: string,
    updateTasksReducer?: DispatchWithoutAction
}

export interface ModalTasks<T> {
    setModalView: Dispatch<SetStateAction<T>>,
    updateTasksReducer: DispatchWithoutAction
}