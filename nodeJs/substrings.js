function substringFinder(fullText, searchText, allowedOverlap = true) {
    const lengthOfSubString = searchText.length;
    const lengthOfMainString = fullText.length;
    let i = 0;
    let j = lengthOfSubString;
    let count = 0;
    while (i < lengthOfMainString) {
        let copyOfFullText = fullText.slice(i, j);
        if (copyOfFullText === searchText) {
            count+=1;
            allowedOverlap ? i+=1 : i = i + lengthOfSubString;
        } else {
            i = i + 1;
        }
        j = i + lengthOfSubString;
    }
}

substringFinder('aaa', 'aa', false);