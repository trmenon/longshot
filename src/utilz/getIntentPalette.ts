export const getIntentPalette = (value: number, type: string): string=> {
    let result = '';
    if(type === 'background') {
        if(value=== 0) {
            result =  "#FCE081";
        }
        if(value=== 1) {
            result =  "#C4E5FE";
        }
        if(value=== 2) {
            result =  "#EDD9FF";
        }
        if(value=== 3) {
            result =  "#9EF2C9";
        }
    }
    if(type === 'color') {
        if(value=== 0) {
            result =  "#A75800";
        }
        if(value=== 1) {
            result =  "#006DCA";
        }
        if(value=== 2) {
            result =  "#8649E1";
        }
        if(value=== 3) {
            result =  "#007C65";
        }
    }
    if(type === 'hover') {
        if(value=== 0) {
            result =  "#ffca6e";
        }
        if(value=== 1) {
            result =  "#61c6ff";
        }
        if(value=== 2) {
            result =  "#c59dfa";
        }
        if(value=== 3) {
            result =  "#11d6a6";
        }
    }
    
    return result;
}