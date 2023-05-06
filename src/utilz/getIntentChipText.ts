export const getIntentChipText = (value: number): string=> {
    let result = '';
    if(value=== 0) {
        result =  "Commercial";
    }
    if(value=== 1) {
        result =  "Informational";
    }
    if(value=== 2) {
        result =  "Navigational";
    }
    if(value=== 3) {
        result =  "Transactional";
    }
    return result;
}