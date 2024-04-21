
export default function HandleTable(requestData:Record<string,any>[],
    valueForm:string,
    valueText:string|number){
    if(valueForm==="" || valueText===""){
        return requestData
    }
    return requestData.filter(
        (row) => row[valueForm].toLowerCase().includes(String(valueText).toLowerCase())
    )
 
}