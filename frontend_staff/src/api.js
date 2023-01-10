const [newData, setData] = useState("");
    const getData = () =>{
      // add url here
      axios.get('http://192.168.137.1:8000') 
      .then(res => {
          console.log('Data fetcted from backend!')
          setData(res.data)
          console.log(res.data)
      }).catch(err => {
          console.log(err)
      })
  }

