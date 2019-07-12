function sleep(m){
    return new Promise(r => setTimeout(r, m))
}

export { sleep };