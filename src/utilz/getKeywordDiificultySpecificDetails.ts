import { data } from "../config/data";

export const getKeywordDifficultySpecificDetails = (
    key: string,
    type: string,
    request: string
): string => {
    let result = '';
    let value = '';
    // Estimating value from key and type
    const selected_node = data?.data_set.find((item)=> item?.type === type);
    if(selected_node) {
        const selected_row = selected_node?.data.find((row)=> row?.key === key);
        if(
            selected_row && 
            selected_row?.row && 
            Array.isArray(selected_row.row)
        ) {
            const value_set = selected_row?.row.find((element)=> element?.mapping_key === 'keyword_difficulty');
            if(value_set && value_set?.value) {
                value = value_set?.value;
            }
        }
    }
    // Running Conditions
    if(typeof Number(value) === 'number') {
        if(Number(value) > 85) {
            if(request === 'rating') {
                result = 'Very Hard';
            }
            if(request === 'text') {
                result = 'The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.';
            }
            if(request === 'color') {
                result = '#D1002F';
            }
        }
        if(Number(value) >= 70 && Number(value)<=85) {
            if(request === 'rating') {
                result = 'Hard';
            }
            if(request === 'text') {
                result = 'Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.';
            }
            if(request === 'color') {
                result = '#FF4953';
            }
        }
        if(Number(value) >= 50 && Number(value)<70) {
            if(request === 'rating') {
                result = 'Difficult';
            }
            if(request === 'text') {
                result = 'You ll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.';
            }
            if(request === 'color') {
                result = '#FF8C43';
            }
        }
        if(Number(value) >= 30 && Number(value)<50) {
            if(request === 'rating') {
                result = 'Possible';
            }
            if(request === 'text') {
                result = 'Slightly more competition. You ll need well-structured and unique content appropriately optimized for your keywords.';
            }
            if(request === 'color') {
                result = '#FDC23C';
            }
        }
        if(Number(value) >= 15 && Number(value)<30) {
            if(request === 'rating') {
                result = 'Easy';
            }
            if(request === 'text') {
                result = 'These keywords have some competition but are still possible to rank for when you re starting out. To be able to rank for these, you ll need quality content focused on the keywords intent.';
            }
            if(request === 'color') {
                result = '#59DDAA';
            }
        }
        if(Number(value) < 15) {
            if(request === 'rating') {
                result = 'Very Easy';
            }
            if(request === 'text') {
                result = 'These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.';
            }
            if(request === 'color') {
                result = '#009F81';
            }
        }
    }
    if(request === 'value') {
        result = value;
    }
    return result;
}