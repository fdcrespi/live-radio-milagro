

export const addPrayer = async (m)=>{  
    try {  
        const API='https://app-tab-back.herokuapp.com/sendPrayer/'+m.nom+'/'+m.mess
        const res = await fetch(API,{
        method: 'GET',
        headers: {Accept: "application/json" , "Content-Type": "application/json"},        
        });
    }
    catch{
        console.log(e);
    }
   
  };

  