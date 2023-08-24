export const changeRoot = async(name:string,property:string) =>{
    const body = document.body;
    body.style.setProperty('--' + name, property);
    
}