import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Card, CardContent } from '@mui/material';

function App() {
  return (
    <div>

      {/* Experiment 4: Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1 ms-3">My App</span>
      </nav>

      <div className="container mt-4">

        {/* Experiment 1: Bootstrap Form */}
        <h2 className="text-center">Bootstrap UI Demo</h2>
        <div className="card p-3 mt-3">
          <input className="form-control" placeholder="Enter name" />
          <button className="btn btn-primary mt-3">Submit</button>
        </div>
        {/* Experiment 2: Card Layout */}
        <h3 className="text-center mt-5">Card Layout</h3>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card p-3 text-center">Card 1</div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center">Card 2</div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 text-center">Card 3</div>
          </div>
        </div>

        {/* Experiment 3: Material UI */}
        <h3 className="text-center mt-5">Material UI Form</h3>
        <Card style={{ width: 300, margin: '20px auto' }}>
          <CardContent>
            <TextField label="Name" fullWidth margin="normal" />
            <Button variant="contained" fullWidth>
              Submit
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

export default App;
