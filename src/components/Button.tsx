import { Button_SC } from "../styles/components/TaskStyles";

interface Button_Props {
    value: string
}

const Button = ( { value } : Button_Props)=>{
    return (
        <Button_SC>{ value }</Button_SC>
    );
};

export default Button;