const sockMerchant = (ar) => {
    let pairs = 0;
    const socks = {};
    ar.forEach(sock => {
        if (socks[sock]&&socks[sock]===true) {
            pairs++;
            socks[sock] = false;
        } else {
            socks[sock] = true;
        }
    });
    return pairs;
}