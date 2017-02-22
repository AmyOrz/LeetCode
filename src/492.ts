let constructRectangle = (area:number):number[]=>{
    if(area < 0)return;
    let w:number = Math.sqrt(area);
    while (area%w!=0) w--;
    return [area/w, w];
};