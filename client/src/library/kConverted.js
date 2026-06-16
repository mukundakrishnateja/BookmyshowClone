export const kConverted = (k) => {
    if(k >= 1000 && k < 1000000){
        return (k/1000).toFixed(1) + 'K'
    }
    else if(k >= 1000000 && k < 1000000000){
        return (k/1000000).toFixed(1) + 'M'
    }
}