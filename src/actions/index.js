export const goingToGetData = () => (
    {type: 'Going to Get Data'})

export const receivedData = (data) => (
    {
        type:'Received Data',
        apidata: data  
    })