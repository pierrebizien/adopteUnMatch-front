

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
    try {
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
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export async function getMyMatches(): Promise<any> {
    try {
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
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export async function getPastMatches(): Promise<any> {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACK_PATH}/api/globaldata/getpastmatches`, {
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

  export async function getUpcomingMatches(): Promise<any> {
    try {
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
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  