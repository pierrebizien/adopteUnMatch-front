

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



  export async function getMatches({queryKey}: any): Promise<any> {
    console.log('PAGE', queryKey[2]);
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getallmatches`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          page : queryKey[2]
        })
      });
      return response.json();
    } 

  export async function getMyMatches({queryKey}: any): Promise<any> {

      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getmymatches`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          page : queryKey[2]
        })
      });
      return response.json();
  
  }

  export async function getFreeMatches({queryKey}: any): Promise<any> {
   
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getfreematches`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          page : queryKey[2]
        })
      });
      return response.json();
  }

  export async function getUpcomingMatches({queryKey}: any): Promise<any> {
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getupcomingmatches`, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          page : queryKey[2]
        })
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

export async function getMyTeam(): Promise<any> {
  const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getmyteam`, {
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

export async function getMyLastFive(): Promise<any> {

  const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getmylastfive`, {
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