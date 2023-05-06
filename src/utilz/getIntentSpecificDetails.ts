import { data } from "../config/data";

export const getIntentSpecificDetails = (
    key: string,
    type: string,
    request: string
): string => {
    let result = '';
    let value = '';
    // Estimating Intent Value;
    const selected_node = data?.data_set.find((item)=> item?.type === type);
    if(selected_node) {
        const selected_row = selected_node?.data.find((row)=> row?.key === key);
        if(
            selected_row && 
            selected_row?.row && 
            Array.isArray(selected_row.row)
        ) {
            const value_set = selected_row?.row.find((element)=> element?.mapping_key === 'intent');
            if(value_set && value_set?.value) {
                value = value_set?.value;
            }
        }
    }

    // Running Conditions
    if(typeof Number(value) === 'number') {
        if(Number(value) === 0) {
            if(request === 'value') {
                result = value;
            }
            if(request === 'color') {
                result = "#A75800";
            }
            if(request === 'hover_color') {
                result = "#ffca6e";
            }
            if(request === 'bg_color') {
                result = "#FCE081";
            }
        }
        if(Number(value) === 1) {
            if(request === 'value') {
                result = value;
            }
            if(request === 'color') {
                result = "#006DCA";
            }
            if(request === 'hover_color') {
                result = "#61c6ff";
            }
            if(request === 'bg_color') {
                result = "#C4E5FE";
            }
        }
        if(Number(value) === 2) {
            if(request === 'value') {
                result = value;
            }
            if(request === 'color') {
                result = "#8649E1";
            }
            if(request === 'hover_color') {
                result = "#c59dfa";
            }
            if(request === 'bg_color') {
                result = "#EDD9FF";
            }
        }
        if(Number(value) === 3) {
            if(request === 'value') {
                result = value;
            }
            if(request === 'color') {
                result = "#007C65";
            }
            if(request === 'hover_color') {
                result = "#11d6a6";
            }
            if(request === 'bg_color') {
                result = "#9EF2C9";
            }
        }
    }
    
    return result;
}