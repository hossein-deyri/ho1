// custom
import { ToastRenderFuncProps } from '@/types/model/etc/toast-final.model';
import ToastComponent from './ToastComponent';
import {Toaster} from './Toaster';


export const ErrorToast = (props : ToastRenderFuncProps) =>{
    return  Toaster.error(
        <ToastComponent
            title={props.title}
            description={props.description}
        />,
        { toastId: props.id , ...props.options });
}


export const SuccessToast = (props : ToastRenderFuncProps) =>{
  return  Toaster.success(
        <ToastComponent
            title={props.title}
            description={props.description}
        />,
        { toastId: props.id , ...props.options });
}


export const WarningToast = (props : ToastRenderFuncProps) => {
  return  Toaster.warning(
        <ToastComponent
            title={props.title}
            description={props.description}
        />,
        { toastId: props.id , ...props.options });
}


export const InfoToast = (props : ToastRenderFuncProps) => {
  return  Toaster.info(
        <ToastComponent
            title={props.title}
            description={props.description}
        />,
        { toastId: props.id , ...props.options });
}