

export async function getTeamName(): Promise<any> {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getname`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: null
      });
  
      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export async function getMatches(): Promise<any> {
    
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getallmatches`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: null
      });
      return response.json();
    } 

  export async function getMyMatches(): Promise<any> {

      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getmymatches`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: null
      });
      return response.json();
  
  }

  export async function getFreeMatches(): Promise<any> {
   
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getfreematches`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: null
      });
      return response.json();
  }

  export async function getUpcomingMatches(): Promise<any> {
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getupcomingmatches`, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: null
      });
      return response.json();
  }

  export async function joinTeamToMatch(id : number): Promise<any> {
    const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/jointeamtomatch`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body:  JSON.stringify({
        matchId : id
      })
    });
    return response.json();
}
  