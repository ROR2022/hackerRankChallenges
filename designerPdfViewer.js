const designerPdfViewer=(h, word)=>{
    let max=0;
    for(let i=0; i<word.length; i++){
        if(h[word.charCodeAt(i)-97]>max){
            max=h[word.charCodeAt(i)-97];
        }
    }
    return max*word.length;
}

const designerPdfViewer2=(h, word)=>{
    return word.length*Math.max(...word.split('').map(c=>h[c.charCodeAt(0)-97]));
}

const designerPdfViewer3=(h, word)=>{
    const letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const wordArr=word.split('');
    const heights=wordArr.map(l=>h[letters.indexOf(l)]);
    const maxHeight=Math.max(...heights);
    const area=word.length*maxHeight;
    return area;
}