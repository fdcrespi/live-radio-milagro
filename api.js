

export const addPrayer = async (m)=>{    
    const API='http://192.168.0.6:3001/sendPrayer/'+m.nom+'/'+m.mess
    console.log(API)
    const res = await fetch(API,{
       method: 'GET',
       headers: {Accept: "application/json" , "Content-Type": "application/json"},
       
   });
   
   return await res.json();
  };

  