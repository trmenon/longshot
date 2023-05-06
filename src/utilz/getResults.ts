import { data } from "../config/data";

export const getResults = (
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
            const value_set = selected_row?.row.find((element)=> element?.mapping_key === 'number_of_results');
            if(value_set && value_set?.value) {
                result = `${Number(value_set?.value)/1000000}M`;
            }
        }
    }

    return result;
}