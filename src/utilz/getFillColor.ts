export const getFillColor = (value: number)=> {
    if(value> 85) {
        return "#D1002F";
    }
    if(value>= 70 && value<=85) {
        return "#FF4953";
    }
    if(value>= 50 && value<70) {
        return "#FF8C43";
    }
    if(value>= 30 && value<50) {
        return "#FDC23C";
    }
    if(value>= 15 && value<30) {
        return "#59DDAA";
    }
    if(value< 15) {
        return "#009F81";
    }
}