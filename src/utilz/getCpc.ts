import { data } from "../config/data";

export const getCpc = (
    key: string,
    type: string,
): string => {
    let result = '';
    // Estimating Value for results by key and node feature
    const selected_node = data?.data_set.find((item)=> item?.type === type);
    if(selected_node) {
        const selected_row = selected_node?.data.find((row)=> row?.key === key);
        if(
            selected_row && 
            selected_row?.row && 
            Array.isArray(selected_row.row)
        ) {
            const value_set = selected_row?.row.find((element)=> element?.mapping_key === 'cpc');
            if(value_set && value_set?.value) {
                result = value_set?.value;
            }
        }
    }

    return result;
}