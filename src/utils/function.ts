/**
 * 
 * @param {string}txt input text
 * @param {number} [max=50] maximum length
 * @returns the sliced text
 */

export function txtSlicer(txt:string,max:number=50){
     if(txt.length>=max)return`${txt.slice(0,max)}...`;
     return txt;
}