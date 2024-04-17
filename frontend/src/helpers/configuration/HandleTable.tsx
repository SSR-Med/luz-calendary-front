
export default function HandleTable(requestData:Record<string,any>[],
    valueForm:string,
    valueText:string|number,
    typeDataDictFormValues:Record<string,Set<string>>){
    if(valueForm==="" || valueText===""){
        return requestData
    }
    if(typeDataDictFormValues["number"].has(valueForm)){
        return requestData.filter(
            (row) => row[valueForm]===Number(valueText)
        )
    }
    return requestData.filter(
        (row) => row[valueForm].toLowerCase().includes(String(valueText).toLowerCase())
    )
 
}