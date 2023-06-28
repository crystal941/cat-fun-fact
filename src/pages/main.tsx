import { useQuery } from '@tanstack/react-query';
import { CircularProgress, Button, Card, CardActions, CardContent } from '@mui/material';
import Axios from 'axios';



export const Main = () => {
    
    
    const { data: catFact, refetch } = useQuery(["cat"], () => {
    return  Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const { data: catPic, isLoading, isError, refetch: refetchPic } = useQuery(["pic"], () => {
    return Axios.get("https://api.sefinek.net/api/v2/random/animal/cat").then((res) => res.data);});


  if (isLoading) return <CircularProgress />;
  if (isError) return <p>Oops, Something went wrong!</p>;


    

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <img alt="A random cat photo" src={catPic?.message} />
      <p>{catFact?.fact}</p>



      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      Home Page
      
      <button
        onClick={() => {
          refetch();
          refetchPic();
        }}
      >
        Thumb down
      </button>
 
    </div>
  );
};
