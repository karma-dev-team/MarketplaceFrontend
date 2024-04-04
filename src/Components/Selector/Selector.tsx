import { Dispatch, ReactNode } from "react"

type Option = { title: string; value: string };

type props = { 
    selected: Option | null;
    options: Option[];
    placeholder?: string;
    mode?: 'rows' | 'cells';
    status?: 'default' | 'invalid';
    onChange?: (selected: Option['value']) => void;
    onClose?: () => void;
}

const SelectorComponent: React.FC<props> = (props: props) => { 
    return ( 
        <div className="root-selector">
            <div>
            </div>
        </div>
    )
}

export default SelectorComponent; 