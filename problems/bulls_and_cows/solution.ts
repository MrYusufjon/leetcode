function getHint(secret: string, guess: string): string {
    const secretMap = {};
    for(const s of secret) {
        if(!secretMap[s]) secretMap[s] = 0;
        ++ secretMap[s];
    }
    let x=0,y=0;
    const usedIndex = {};
    for(let i=0;i<secret.length;i++) {
        if(secret[i] == guess[i]) {
            usedIndex[i] = true;
            -- secretMap[secret[i]];
            ++ x;
        }
    }
  
    for(let i=0;i<guess.length;i++) {
        if(secretMap[guess[i]] && !usedIndex[i]) {
            -- secretMap[guess[i]];
            ++ y;
        }
    }
    
    return `${x}A${y}B`;
};