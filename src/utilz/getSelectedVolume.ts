import { data } from "../config/data";

export const getSelectedVolume = (
    key: string, 
    type: string
): string => {
    let volume = '';
    const dataset = data?.data_set.find((item)=> item?.type === type);
    if(dataset) {
        const row = dataset?.data.find((row_item)=> row_item?.key === key);
        if(
            row && 
            row?.row && 
            Array.isArray(row.row)
        ) {
            const volume_set = row?.row.find((element)=> element?.mapping_key === 'search_volume');
            if(volume_set && volume_set?.value) {
                volume = volume_set?.value;
            }
        }
    }
    return volume;
}